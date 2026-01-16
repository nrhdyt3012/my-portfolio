import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ PERBAIKAN: Gunakan VITE_ prefix
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    // Validasi environment variables
    if (!serviceId || !templateId || !publicKey) {
      alert("Configuration error. Please contact the administrator.");
      console.error("Missing EmailJS configuration");
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("Message not sent, please try again later");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="from_name"
                id="name"
                required
                value={formData.name}
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                disabled={isSubmitting}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                placeholder="unknown@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                disabled={isSubmitting}
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                value={formData.message}
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
