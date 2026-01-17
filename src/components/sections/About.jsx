import { RevealOnScroll } from "../RevealOnScroll";
import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";

export const About = () => {
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

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "4", label: "Tech Stacks" },
    { number: "2+", label: "Years Experience" },
    { number: "100%", label: "Commitment" },
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
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
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-gray-100">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-semibold text-gray-200">
                    Information Systems
                  </h4>
                  <p className="text-blue-400 text-sm">
                    Surabaya State University
                  </p>
                  <p className="text-gray-400 text-sm">2022 - Present</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                      Data Structures
                    </span>
                    <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                      Web Dev
                    </span>
                    <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                      OOP
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-gray-100">Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-semibold text-gray-200">
                    Mobile Development Cohort
                  </h4>
                  <p className="text-blue-400 text-sm">Bangkit Academy</p>
                  <p className="text-gray-400 text-sm">Sep 2024 - Jan 2025</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Developed Android applications using Kotlin, Jetpack
                    Compose, and modern architecture patterns
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-gray-100">
                Certifications & Achievements
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-blue-400">✓</span>
                Bangkit Academy - Mobile Development
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-blue-400">✓</span>
                Dicoding - Android Expert
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-blue-400">✓</span>
                Google Cloud Platform Fundamentals
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-blue-400">✓</span>
                Data Analysis with Python & R
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
