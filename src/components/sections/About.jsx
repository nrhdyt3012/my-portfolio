import { RevealOnScroll } from "../RevealOnScroll";
<<<<<<< HEAD
import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const About = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    stacks: 0,
    years: 0,
    commitment: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { key: "projects", number: 15, suffix: "+", label: "Projects Completed" },
    { key: "stacks", number: 4, suffix: "", label: "Tech Stacks" },
    { key: "years", number: 2, suffix: "+", label: "Years Experience" },
    { key: "commitment", number: 100, suffix: "%", label: "Commitment" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate each counter
          stats.forEach((stat) => {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = stat.number / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                current = stat.number;
                clearInterval(timer);
              }

              setCounts((prev) => ({
                ...prev,
                [stat.key]: Math.floor(current),
              }));
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "Kotlin", level: 90 },
        { name: "Android Jetpack", level: 85 },
        { name: "Flutter/Dart", level: 75 },
        { name: "Jetpack Compose", level: 80 },
      ],
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { name: "React/Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "PHP/Laravel", level: 75 },
      ],
    },
    {
      title: "Backend & Cloud",
      icon: "☁️",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Google Cloud Platform", level: 80 },
        { name: "PostgreSQL/MongoDB", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      title: "Data & Tools",
      icon: "📊",
      skills: [
        { name: "Python/R", level: 75 },
        { name: "SQL", level: 85 },
        { name: "Tableau/Power BI", level: 80 },
        { name: "Git/GitHub", level: 90 },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-transparent to-blue-500/5"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A dedicated developer focused on creating impactful digital
              solutions
            </p>
          </div>

          {/* Stats Grid */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {counts[stat.key]}
                  {stat.suffix}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Introduction */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8 hover:bg-white/[0.07] transition-all">
            <div className="flex items-start gap-3 mb-4">
              <Code2 className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-100">
                  Who I Am
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a versatile full-stack developer with expertise spanning{" "}
                  <span className="text-blue-400 font-semibold">
                    Mobile Development
                  </span>
                  ,{" "}
                  <span className="text-blue-400 font-semibold">
                    Backend Engineering
                  </span>
                  ,{" "}
                  <span className="text-blue-400 font-semibold">
                    Web Development
                  </span>
                  , and{" "}
                  <span className="text-blue-400 font-semibold">
                    Data Analysis
                  </span>
                  .
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  From building native Android apps with Kotlin to architecting
                  cloud-native backends on GCP, I bring a holistic approach to
                  software development. My data skills enable me to build
                  intelligent, data-driven solutions that deliver real business
                  value.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-100">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h4 className="text-lg font-bold text-gray-100">
                      {category.title}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 text-sm">
                            {skill.name}
                          </span>
                          <span className="text-blue-400 text-sm font-medium">
                            {skill.level}%
                          </span>
=======
export const About = () => {

    const frontendSkills = ["React", "TypeScript", "TailwindCSS", "Svelte"];
    const backendSkills = ["NodeJS","Python", "MongoDB", "PostgreeSQL", "Svelte"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
                    <RevealOnScroll>
            
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {""}
                    About Me
                    </h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 text-lg mb-6">
                        💡 I have a strong interest in Mobile Development, Backend, Data Analysis, and Frontend Development.
                        I have studied Android application development using Kotlin.
                        In the data field, I am experienced in data exploration, visualization, and processing using Python, R, and Excel.
                        For frontend development, I am proficient in HTML, CSS, and JavaScript, as well as frameworks like ReactJS and Vue.js. I also have experience with PHP and Laravel in building responsive and dynamic user interfaces.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
                            <div className="flex flex-wrap gap-2 ">
                                {frontendSkills.map((tech, key) => (
                                    <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
>>>>>>> parent of 2834c6a (optimize my home)
                        </div>
                         <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
                            <div className="flex flex-wrap gap-2 ">
                                {backendSkills.map((tech, key) => (
                                    <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold  mb-4 ">🧑‍🎓Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Information System - Surabaya State of University (2022- Now)</strong>
                        </li>
                        <li>
                            <strong>Relevant Coursework :Data Structure and Algorithm ,Web Development ,Object Oriented Programming</strong>
                        </li>
                    </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold  mb-4 ">👨‍💼 Work Experience</h3>
                    <div className="space-y-4 text-gray-100">
                           <div>
                            <h4 className="font-semibold">Mobile Development Cohort on Bangkit Academy (Sep 2024 - Jan 2025)</h4>
                            <p> Developed application in kotlin language</p>
                            </div>
                           
                    </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    
                </div>
            </div>
                                </RevealOnScroll>

        </section>
    )
}