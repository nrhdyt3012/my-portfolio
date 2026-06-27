import { RevealOnScroll } from "../RevealOnScroll";
import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-5 bg-gradient-to-b from-transparent to-blue-500/5"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
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

{/* Skills Grid - ganti bagian ini */}
<div className="mb-8">
  <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
    Technical Skills
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Card 1 - Mobile & Frontend */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300">
      <h4 className="text-base font-semibold text-gray-400 mb-5">📱 Mobile & Frontend</h4>
      <div className="flex flex-wrap gap-4">
        {[
          { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
          { name: "Jetpack Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg" },
          { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
          { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
          { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
          { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        ].map((skill) => (
          <div key={skill.name} className="relative group flex items-center justify-center">
            <img src={skill.icon} alt={skill.name} className="w-9 h-9 transition-transform duration-150 group-hover:scale-125" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10">
              {skill.name}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Card 2 - Backend, Data & Tools */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300">
      <h4 className="text-base font-semibold text-gray-400 mb-5">⚙️ Backend, Data & Tools</h4>
      <div className="flex flex-wrap gap-4">
        {[
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
          { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
          { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
          { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
          { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" },
          { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
          { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
          { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
          { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
          { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-line.svg" },
          { name: "Zustand", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" },

        
        ].map((skill) => (
          <div key={skill.name} className="relative group flex items-center justify-center">
            <img src={skill.icon} alt={skill.name} className="w-9 h-9 transition-transform duration-150 group-hover:scale-125" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10">
              {skill.name}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
            </span>
          </div>
        ))}
      </div>
    </div>

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
        Bachelor of Information Systems
      </h4>
      <p className="text-blue-400 text-sm">State University of Surabaya</p>
      <p className="text-gray-400 text-sm">2022 - 2026</p>

      {/* GPA Badge */}
      <div className="mt-2 mb-3 inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
        <span className="text-blue-400 text-xs font-semibold">GPA 3.74</span>
        <span className="text-gray-400 text-xs">· Cum Laude</span>
      </div>

      {/* Relevant Courses */}
      <div className="mt-1 flex flex-wrap gap-2">
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
          Object-Oriented Programming
        </span>
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
          Data Structure
        </span>
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
          Web Programming
        </span>
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
          Database Management
        </span>
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
          Software Engineering
        </span>
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
          Human-Computer Interaction
        </span>
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
          IS Security
        </span>
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
          Probability & Statistics
        </span>
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
          Enterprise Resource Planning
        </span>
        <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
          IT Governance
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
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-semibold text-gray-200">
          Mobile Development Cohort
        </h4>
        {/* Badge Full Graduate */}
        <span className="shrink-0 text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">
          Full Graduate
        </span>
      </div>
      <p className="text-blue-400 text-sm">Bangkit Academy by Google, GoTo & Traveloka</p>
      <p className="text-gray-400 text-sm">Sep 2024 - Jan 2025</p>

      {/* Deskripsi singkat */}
      <p className="text-gray-300 text-sm mt-2 leading-relaxed">
        Intensive Google-led program specializing in Android development with Machine Learning integration. 
        Completed a capstone project with a score of 91.4/100.
      </p>

      {/* Highlight kursus dengan skor */}
      <div className="mt-3 space-y-1.5">
        {[
          { name: "Basic Kotlin", score: 93 },
          { name: "Beginner & Intermediate Android", score: 91 },
          { name: "Android Fundamental", score: 91 },
          { name: "Applied ML for Android", score: 93 },
          { name: "Capstone / Final Project", score: 91.4 },
          { name: "Soft Skill & Career Development", score: 94.5 },
        ].map((course) => (
          <div key={course.name} className="flex items-center justify-between">
            <span className="text-gray-400 text-xs">{course.name}</span>
            <span className="text-blue-400 text-xs font-medium">{course.score}/100</span>
          </div>
        ))}
      </div>

      {/* Tech stack yang dipelajari */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Kotlin", "Jetpack Compose", "Android Jetpack", "Firebase", "REST API", "Machine Learning", "TensorFlow Lite"].map((tech) => (
          <span key={tech} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
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
