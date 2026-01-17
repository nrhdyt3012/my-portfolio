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
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kolom Kiri - Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <div className="relative">
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  value={formData.name}
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition"
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
                  placeholder="your.email@gmail.com"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition"
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
                  rows={6}
                  required
                  value={formData.message}
                  placeholder="Your message..."
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition resize-none"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Kolom Kanan - Info */}
            <div className="p-6 rounded-xl border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  📧 Email
                </h3>
                <p className="text-gray-400">
                  <a
                    href="mailto:your.email@gmail.com"
                    className="hover:text-blue-400 transition"
                  >
                    your.email@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  🔗 Social Links
                </h3>
                <div className="space-y-2 text-gray-400">
                  <p>
                    <a href="#" className="hover:text-blue-400 transition">
                      GitHub
                    </a>
                  </p>
                  <p>
                    <a href="#" className="hover:text-blue-400 transition">
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    <a href="#" className="hover:text-blue-400 transition">
                      Twitter
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  💬 Response Time
                </h3>
                <p className="text-gray-400">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
