import React from 'react';
import Section from './ui/Section';
import { Code, Server, Database, Globe } from 'lucide-react';

const About = () => {
    return (
        <Section id="about" className="bg-slate-50">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                        Passionate developer with a focus on building scalable web applications and intuitive user interfaces.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg">
                        <p>
  Hi! I'm a <span className="font-semibold text-slate-900">PHP Developer</span> with 1 year of combined hands-on experience, including a 1-year professional role and a 4-month internship. My journey started with a strong interest in building dynamic web applications, which led me to develop a solid foundation in Core PHP.
</p>

<p>
  I enjoy solving real-world problems and building scalable, maintainable solutions. I have experience working with RESTful APIs and relational databases like MySQL and PostgreSQL. On the frontend, I focus on creating responsive, user-friendly interfaces using Bootstrap, Tailwind CSS, and custom CSS—always aiming for clean code and a smooth user experience.
</p>


                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-white rounded-lg border border-slate-200">
                                <h4 className="font-bold text-slate-800 mb-1 text-2xl sm:text-3xl">
                                    01+
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                                    year Experience
                                </p>
                            </div>
                            <div className="p-4 bg-white rounded-lg border border-slate-200">
                                <h4 className="font-bold text-slate-800 mb-1 text-2xl sm:text-3xl">
                                    20+
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                                    Projects Built
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: <Code className="w-8 h-8 text-slate-700" />, title: "Frontend", desc: "Custom CSS, Tailwind CSS, Bootstrap" },
                            { icon: <Server className="w-8 h-8 text-slate-700" />, title: "Backend", desc: "PHP, Laravel" },
                            { icon: <Database className="w-8 h-8 text-slate-700" />, title: "Database", desc: "MySQL, PostgreSQL, Mongodb" },
                            { icon: <Globe className="w-8 h-8 text-slate-700" />, title: "Deployment", desc: "Hostinger, Render, Vercel" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center p-6 bg-white hover:border-slate-400 transition-all duration-300 rounded-xl border border-slate-200 group"
                            >
                                <div className="mb-4 bg-slate-50 w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-slate-800 mb-1 text-sm sm:text-base md:text-lg">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-xs sm:text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Section>
    );
};

export default About;
