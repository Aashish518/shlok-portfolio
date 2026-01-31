import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        
        {
            title: 'Full-stack developer',
            company: 'Antinoob Solutions',
            location: 'Ahmedabad - 380054',
            period: 'Feb 2025 – Present',
            responsibilities: [
                'Developed scalable and efficient web applications using PHP and Laravel, with a strong focus on backend logic and performance.',
                'Built responsive, user-friendly interfaces with Bootstrap, Tailwind CSS, and custom CSS to enhance user experience.',
                'Collaborated with cross-functional teams including design and product to implement and refine features. Diagnosed and resolved complex issues, contributing to high-quality, maintainable code in a fast-paced environment.',
            ]
        },
        {
            title: 'backend developer Intern - ( 4 Months )',
            company: 'Epicalyx solutions',
            location: 'Ahmedabad - 380050',
            period: 'Oct 2024 – Jan 2025',
            responsibilities: [
                'Gained foundational experience in PHP development and understood real-world web application structures',
                'Worked with the MVC architecture to build dynamic web pages connected to MySQL databases',
                'Collaborated with the development team to improve code quality and follow best practices for clean, maintainable code',
                'Applied theoretical knowledge in practical scenarios, laying the groundwork for future backend development work.'
            ]
        },
    ];

    return (
        <Section id="experience" className="bg-white">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                        My professional track record
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden border-l-4 border-l-slate-800"
                        >

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                                <div>
                                    <h3 className="font-bold text-slate-900 group-hover:underline transition-colors
                                                   decoration-slate-400 underline-offset-4
                                                   text-base sm:text-lg md:text-xl">
                                        {exp.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-slate-600 font-medium mt-1
                                                    text-sm sm:text-base">
                                        <Briefcase size={16} />
                                        <span>{exp.company}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 text-slate-500 md:text-right
                                                text-xs sm:text-sm">
                                    <div className="flex items-center md:justify-end gap-2">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center md:justify-end gap-2">
                                        <MapPin size={14} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <h4 className="font-semibold text-slate-800 uppercase tracking-wide mb-3
                                           text-xs sm:text-sm">
                                Key Responsibilities:
                            </h4>

                            <ul className="grid gap-2">
                                {exp.responsibilities.map((resp, rIdx) => (
                                    <li
                                        key={rIdx}
                                        className="flex items-start gap-3 text-slate-600
                                                   text-xs sm:text-sm"
                                    >
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                                        <span className="leading-relaxed">
                                            {resp}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </Card>
                    ))}
                </div>

            </div>
        </Section>
    );
};

export default Experience;
