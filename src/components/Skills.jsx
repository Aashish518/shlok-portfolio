import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Frontend',
            skills: ['Custom CSS', 'Tailwind CSS', 'Bootstrap']
        },
        {
            title: 'Backend',
            skills: ['PHP', 'Laravel']
        },
        {
            title: 'Database',
            skills: ['MySQL', 'PostgreSQL']
        },
        // {
        //     title: 'Auth & Security',
        //     skills: ['JWT Auth', 'bcrypt']
        // },
        {
            title: 'Tools',
            skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma']
        }
    ];

    return (
        <Section id="skills" className="bg-slate-50">

            <div className="text-center mb-16 space-y-4">
                <h2 className="font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl">
                    Skills & Tech Stack
                </h2>
                <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                    Technologies I use to build performant applications
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillGroups.map((group, idx) => (
                    <Card key={idx} className="h-full hover:border-slate-400">

                        <h3 className="font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100
                                       text-base sm:text-lg md:text-xl">
                            {group.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {group.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-3 py-1.5 bg-white text-slate-700 rounded-md
                                               font-medium border border-slate-200 hover:bg-slate-50
                                               hover:border-slate-400 transition-all cursor-default
                                               text-xs sm:text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </Card>
                ))}
            </div>

        </Section>
    );
};

export default Skills;
