"use client";
import { useId, useMemo, useState } from "react";

// Deterministic generator so server and client render the same points.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function gauss(r: () => number) {
  return Math.sqrt(-2 * Math.log(1 - r())) * Math.cos(2 * Math.PI * r());
}

type Pt = { x: number; y: number; fraud: boolean; score: number };

function makePoints(): Pt[] {
  const r = mulberry32(7);
  const pts: Pt[] = [];
  const add = (n: number, mean: number, sd: number, fraud: boolean) => {
    for (let i = 0; i < n; i++) {
      const score = Math.min(0.99, Math.max(0.01, mean + gauss(r) * sd));
      pts.push({
        score: Math.round(score * 1000) / 1000,
        x: Math.round(score * 1000) / 10,
        y: Math.round((8 + r() * 84) * 10) / 10,
        fraud,
      });
    }
  };
  add(64, 0.32, 0.13, false);
  add(14, 0.7, 0.14, true);
  return pts;
}

export function ThresholdPlot() {
  const id = useId();
  const points = useMemo(makePoints, []);
  const [threshold, setThreshold] = useState(55);

  const t = threshold / 100;
  const flagged = points.filter((p) => p.score >= t);
  const tp = flagged.filter((p) => p.fraud).length;
  const totalFraud = points.filter((p) => p.fraud).length;
  const precision = flagged.length ? tp / flagged.length : 1;
  const recall = tp / totalFraud;
  const falseAlarms = flagged.length - tp;

  return (
    <figure className="w-full">
      <div className="relative border border-border bg-card">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          role="img"
          aria-label={`Scatter plot of ${points.length} transactions. With the threshold at ${threshold} percent, ${flagged.length} are flagged, ${tp} of ${totalFraud} fraudulent ones are caught, and ${falseAlarms} are false alarms.`}
          className="block w-full h-[16.25rem] sm:h-[20rem]"
        >
          <rect
            x={threshold}
            y="0"
            width={100 - threshold}
            height="100"
            fill="hsl(var(--flag))"
            opacity="0.08"
          />
          <line
            x1={threshold}
            x2={threshold}
            y1="0"
            y2="100"
            stroke="hsl(var(--flag))"
            strokeWidth="0.6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {/* Points are drawn as HTML so they stay round at any width. */}
        <div className="absolute inset-0" aria-hidden="true">
          {points.map((p, i) => {
            const isFlagged = p.score >= t;
            return (
              <span
                key={i}
                className="point-in absolute block w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  animationDelay: `${i * 14}ms`,
                  background: p.fraud
                    ? "hsl(var(--flag))"
                    : "hsl(var(--primary))",
                  boxShadow: isFlagged
                    ? "0 0 0 2px hsl(var(--background)), 0 0 0 3.5px hsl(var(--foreground))"
                    : "none",
                  opacity: isFlagged || !p.fraud ? 1 : 0.9,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={id} className="flex justify-between text-sm mb-2">
          <span className="font-medium">Flag transactions scoring above</span>
          <span className="tabular-nums">{t.toFixed(2)}</span>
        </label>
        <input
          id={id}
          type="range"
          min={5}
          max={95}
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          className="w-full accent-[hsl(var(--primary))]"
        />
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-4 text-sm">
        <div>
          <dt className="text-muted-foreground">Precision</dt>
          <dd className="text-2xl font-semibold tabular-nums">
            {Math.round(precision * 100)}%
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Recall</dt>
          <dd className="text-2xl font-semibold tabular-nums">
            {Math.round(recall * 100)}%
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">False alarms</dt>
          <dd className="text-2xl font-semibold tabular-nums">{falseAlarms}</dd>
        </div>
      </dl>

      <figcaption className="mt-5 text-sm text-muted-foreground flex flex-wrap gap-x-5 gap-y-1">
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Legitimate
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-flag" /> Fraud
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full border-2 border-foreground" />{" "}
          Flagged by the model
        </span>
      </figcaption>
    </figure>
  );
}
