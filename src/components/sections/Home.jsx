import { RevealOnScroll } from "../RevealOnScroll";
import { Code2, Smartphone, Database, Cloud } from "lucide-react";

export const Home = () => {
  const highlights = [
    { icon: <Smartphone className="w-5 h-5" />, text: "Mobile Dev" },
    { icon: <Cloud className="w-5 h-5" />, text: "Cloud & Backend" },
    { icon: <Code2 className="w-5 h-5" />, text: "Web Dev" },
    { icon: <Database className="w-5 h-5" />, text: "Data Analysis" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 animate-pulse" />

      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          {/* Greeting Badge */}
          <div className="inline-block mb-6">
            <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block text-gray-200 mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Dwi Nurhidayat
            </span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
            Full-Stack Developer & Data Enthusiast
          </p>

          {/* Highlight Cards */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-blue-400">{item.icon}</span>
                <span className="text-gray-300 text-sm font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Short Description */}
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable mobile apps, cloud-native
            backends, and data-driven solutions. Experienced in{" "}
            <span className="text-blue-400 font-medium">Kotlin</span>,{" "}
            <span className="text-blue-400 font-medium">Node.js</span>,{" "}
            <span className="text-blue-400 font-medium">React</span>, and{" "}
            <span className="text-blue-400 font-medium">GCP</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="group bg-blue-500 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#contact"
              className="border-2 border-blue-500/50 text-blue-400 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-500/10 hover:border-blue-500"
            >
              Let's Connect
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-gray-500 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
