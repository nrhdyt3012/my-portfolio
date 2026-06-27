import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

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
    className="min-h-screen flex items-center justify-center py-5"
  >
    <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4 w-full">

        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get in Touch
        </h2>

        <div className="space-y-6">

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >

            <input
              type="text"
              name="from_name"
              required
              value={formData.name}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              disabled={isSubmitting}
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="your.email@gmail.com"
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              disabled={isSubmitting}
            />

            <textarea
              name="message"
              rows={6}
              required
              value={formData.message}
              placeholder="Your message..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition resize-none"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              disabled={isSubmitting}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded font-medium transition-all duration-200 disabled:opacity-50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

          </form>

          {/* Social Media */}
          <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

            <h3 className="text-xl font-bold text-blue-400 text-center mb-8">
              Connect With Me
            </h3>

            <div className="flex justify-center items-center gap-8">

              <a
                href="https://github.com/nrhdyt3012"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <FaGithub
                  size={34}
                  className="text-gray-300 group-hover:text-white transition duration-300"
                />
                <span className="mt-2 text-sm text-gray-400 group-hover:text-blue-400 transition">
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/dwi-nurhidayat-731221254"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <FaLinkedin
                  size={34}
                  className="text-[#0A66C2] group-hover:scale-110 transition duration-300"
                />
                <span className="mt-2 text-sm text-gray-400 group-hover:text-blue-400 transition">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://www.instagram.com/atdaythirty"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <FaInstagram
                  size={34}
                  className="text-pink-500 group-hover:scale-110 transition duration-300"
                />
                <span className="mt-2 text-sm text-gray-400 group-hover:text-blue-400 transition">
                  Instagram
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </RevealOnScroll>
  </section>
);
};
