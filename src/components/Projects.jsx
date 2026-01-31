import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Pair a Dice',
            description: 'Pairadice Events is a unique entertainment festival designed especially for couples, bringing together games, fun challenges, live performances, food, and family-friendly activities in one grand experience. Known as Gujarat’s first large-scale couple gaming event, it creates a lively atmosphere where couples compete, connect, and celebrate together, with exciting prizes and entertainment for all age groups.',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://www.pairadiceevents.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAPqcaRleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAacxk3FlVrtZEvlvKOVj0v_L3HSC_QK8AaCwHg3BrmAAFMkEH8HwPI636Bmlrw_aem_6W8nQhMYrCh6jyUBfejMOA',
            github: '',
            thumbnail: '/findbook.png'
        },
        {
            title: 'Foram Hardware',
            description: 'This project is a static website showcasing a variety of hardware products, including door stoppers, locks, handles, hinges, and more. The site provides clear product details, specifications, and images to help users easily browse and understand each item. Built with simplicity and user-friendly design in mind, it serves as an online catalog for hardware solutions.',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://honeydew-monkey-280980.hostingersite.com',
            github: '',
            thumbnail: '/hms.png'
        },
        {
            title: 'Bumpies',
            description: 'This is an e-commerce website for selling baby products online. It showcases a variety of items like clothing, toys, and accessories with clear images and descriptions. The site features easy navigation, a shopping cart, and a secure checkout process. Designed with a simple and responsive layout, it ensures a smooth shopping experience for parents on both desktop and mobile devices.',
            technologies: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://hotpink-ibex-684248.hostingersite.com',
            github: '',
            thumbnail: '/map.png'
        }
    ];

    return (
        <Section id="projects" className="bg-slate-50">

            <div className="text-center mb-16 space-y-4">
                <h2 className="font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl">
                    Featured Projects
                </h2>
                <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                    Showcase of my latest work
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="flex flex-col h-full group overflow-hidden border border-slate-200 bg-white hover:border-slate-400 transition-all duration-300"
                    >

                        {/* Project Thumbnail */}
                        <div className="h-48 overflow-hidden border-b border-slate-100">
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="flex-1 flex flex-col px-2">

                            <h3 className="font-bold text-slate-900 mb-3 group-hover:underline decoration-slate-400 underline-offset-4 transition-all text-base sm:text-lg md:text-xl">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 mb-6 flex-1 leading-relaxed text-xs sm:text-sm md:text-base">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 font-medium rounded-md text-xs sm:text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                                <a
                                    href={project.link}
                                    className="flex items-center gap-2 font-semibold text-slate-600 hover:text-slate-900 transition-colors text-xs sm:text-sm"
                                >
                                    Live Demo <ExternalLink size={16} />
                                </a>
                                {/* <a
                                    href={project.github}
                                    className="flex items-center gap-2 font-semibold text-slate-600 hover:text-slate-900 transition-colors text-xs sm:text-sm"
                                >
                                    Code <Github size={16} />
                                </a> */}
                            </div>

                        </div>
                    </Card>
                ))}
            </div>

        </Section>
    );
};

export default Projects;
