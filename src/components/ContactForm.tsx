"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { FormData } from "@/types";
import axios from "axios";
import Alert from "./Alert";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertSuccess, setAlertSuccess] = useState<boolean>(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage(null);

    try {
      const res = await axios.post("/api/contact", formData);

      if (res.status === 200) {
        setAlertMessage("✅ Message sent! We'll get back to you soon.");
        setAlertSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setAlertMessage(null);
        }, 2000);
      } else {
        setAlertMessage("❌ Failed to send message. Try again later.");
        setAlertSuccess(false);
      }
    } catch (error) {
      console.error("Error sending form:", error);
      const message = error instanceof Error ? error.message : "Unknown error";
      setAlertMessage(`❌ Something went wrong: ${message}`);
      setAlertSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {alertMessage &&  <Alert message={alertMessage} success={alertSuccess} />}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
      ></textarea>
      <button
        onClick={handleSubmit}
        className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-white"
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}
