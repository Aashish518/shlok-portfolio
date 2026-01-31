import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: 'M.sc.IT',
            period: '2023 - 2025',
            institution: 'GUJARAT UNIVERSITY',
            location: 'Ahmedabad - 380009',
            grade: 'CGPA: 8.91',
        },
        {
            degree: 'B.C.A',
            period: '2020 - 2023',
            institution: 'Chimanbhai Patel Institute',
            location: 'Ahmedabad - 380015',
            grade: '7.84 CGPA',
        },
    ];

    return (
        <Section id="education" className="bg-white">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                        My academic journey and qualifications
                    </p>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-slate-200">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >

                            {/* Timeline Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <GraduationCap className="text-slate-700" size={20} />
                            </div>

                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
                                <Card className="p-6 border-l-4 border-l-slate-800">

                                    <div className="flex justify-between items-start mb-2 gap-2">
                                        <h3 className="font-bold text-slate-800 text-base sm:text-lg md:text-xl">
                                            {edu.degree}
                                        </h3>
                                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-slate-800 border border-slate-200 text-xs sm:text-sm">
                                            {edu.grade}
                                        </span>
                                    </div>

                                    <div className="text-slate-600 font-medium mb-3 text-sm sm:text-base">
                                        {edu.institution}
                                    </div>

                                    <div className="space-y-2 text-slate-500 text-xs sm:text-sm">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            <span>{edu.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>

                                </Card>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </Section>
    );
};

export default Education;
