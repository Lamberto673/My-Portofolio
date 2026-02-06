"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/donny-zaki-huda-150b6b380/",
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    href: "https://www.instagram.com/donnys_123/",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/Lamberto673",
    color: "#ffffff",
  },
  {
    name: "Email",
    icon: faEnvelope,
    href: "mailto:donnyhuda2007@gmail.com",
    color: "#ffffff",
  },
];

const Social: Record<string, string> = {
  LinkedIn: "hover:text-[#0A66C2]",
  Instagram: "hover:text-[#833AB4]",
  GitHub: "hover:text-[#ffffff]",
  Email: "hover:text-[#ffffff]",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left - Social Links */}
      <div>
        <h3 className="text-lg font-medium text-white mb-6">Connect</h3>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[#16161c] border border-white/5 rounded-lg hover:border-white/10 transition-colors"
            >
              <FontAwesomeIcon
                icon={social.icon}
                className={`text-4xl text-zinc-400 ${Social[social.name]} transition duration-200 ease-in-out`}
              />
              <span className="text-zinc-300 text-2xl">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Right - Contact Form */}
      <div className="bg-[#16161c] border border-white/5 rounded-lg p-6">
        <h3 className="text-lg font-medium text-white mb-6">Send a message</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-400 text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-2.5 bg-[#0a0a0f] border border-white/10 rounded-lg text-white placeholder-zinc-600 text-sm focus:border-[rgb(255,255,255)] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-zinc-400 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2.5 bg-[#0a0a0f] border border-white/10 rounded-lg text-white placeholder-zinc-600 text-sm focus:border-[rgb(255,255,255)] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
              className="w-full px-4 py-2.5 bg-[#0a0a0f] border border-white/10 rounded-lg text-white placeholder-zinc-600 text-sm focus:border-[rgb(255,255,255)] focus:outline-[rgb(255,255,255)]  transition-colors"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your message..."
              required
              className="w-full px-4 py-2.5 bg-[#0a0a0f] border border-white/10 rounded-lg text-white placeholder-zinc-600 text-sm focus:border-[rgb(255,255,255)] focus:outline-[rgb(255,255,255)] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2.5 bg-[rgb(210,210,210)] hover:border-[rgb(255,255,255)] text-black cursor-pointer text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
