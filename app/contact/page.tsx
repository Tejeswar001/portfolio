"use client";
import type React from "react";
import { useState } from "react";

const links = [
  { label: "Email", value: "tejeswarnaidu9@gmail.com", href: "mailto:tejeswarnaidu9@gmail.com" },
  { label: "GitHub", value: "Tejeswar001", href: "https://github.com/Tejeswar001" },
  { label: "LinkedIn", value: "tejeswar-", href: "https://www.linkedin.com/in/tejeswar-" },
  { label: "Instagram", value: "tej_6002", href: "https://www.instagram.com/tej_6002/" },
];

const field =
  "w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-lg placeholder:text-muted-foreground/70";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xeokjeog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="pt-14">
      <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.015em]">
        Contact
      </h1>
      <p className="mt-4 font-serif text-xl text-muted-foreground max-w-[36rem] leading-[1.6]">
        For roles, projects or questions about my work. I'm based in Andhra
        Pradesh, India.
      </p>

      <div className="mt-14 grid md:grid-cols-[1fr_1.4fr] gap-14">
        <dl className="divide-y divide-border border-y border-border self-start">
          {links.map((l) => (
            <div key={l.label} className="py-4 flex justify-between gap-6">
              <dt className="text-muted-foreground">{l.label}</dt>
              <dd>
                <a href={l.href} className="underline underline-offset-4 hover:text-primary break-all">
                  {l.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        <form onSubmit={handleSubmit} className="space-y-7 max-w-[34rem]">
          <div className="grid sm:grid-cols-2 gap-7">
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground">Name</label>
              <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={field} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground">Email</label>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={field} autoComplete="email" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="text-sm text-muted-foreground">Subject</label>
            <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} className={field} />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
            <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className={`${field} resize-y`} />
          </div>
          <div className="flex items-center gap-6">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-primary text-primary-foreground px-6 py-3 font-medium rounded-sm hover:opacity-90 disabled:opacity-50"
            >
              {status === "sending" ? "Sending" : "Send message"}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status === "sent" && "Message sent. I'll reply by email."}
              {status === "error" &&
                "The message didn't send. Check your connection and try again, or email me directly."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
