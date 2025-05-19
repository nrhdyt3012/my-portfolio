import { RevealOnScroll } from "../RevealOnScroll";
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