import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com" 
import { useState } from "react"

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

   
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(import.meta.env.SERVICE_ID,import.meta.env.TEMPLATE_ID,e.target, import.meta.env.PUBLIC_KEY).then((result) => {
            alert("Message sent successfully")
            setFormData({
                name: "",
                email: "",
                message: "",
            })
        }).catch(() => 
            alert("Message not sent, please try again later")
)
    }
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
<div className="px-4 w-full max-w-lg mx-auto">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {""}
                    Get in Touch
                    </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
  <div className="relative">
    <input
      type="text"
      name="from_name" // penting!
      id="name"
      required
      value={formData.name}
      placeholder="Name"
      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
  </div>
  <div>
    <input
      type="email"
      name="email" // penting!
      id="email"
      required
      value={formData.email}
      placeholder="unknown@gmail.com"
      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
  </div>
  <div>
    <textarea
      name="message" // penting!
      id="message"
      rows={5}
      required
      value={formData.message}
      placeholder="Your message..."
      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
    ></textarea>
  </div>
  <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded">
    Send Message
  </button>
</form>

            </div>
        </RevealOnScroll>
    </section>
}