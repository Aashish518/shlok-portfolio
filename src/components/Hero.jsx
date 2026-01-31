import React from 'react';
import Section from './ui/Section';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <Section id="home" className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-20 bg-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                {/* Text Content */}
                <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left order-2 lg:order-1">
                    <h1 className="leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Full Stack <br />
                        <span className="text-slate-500">Developer</span>
                    </h1>

                    <p className="text-slate-600 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
                        I build accessible, accurate, and fast websites using PHP, Laravel, HTML, CSS, and JavaScript.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                        >
                            Contact Me
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>

                        <a
                            href="/Aashish Resume.pdf"
                            download
                            className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-slate-900 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 shadow-sm"
                        >
                            Download Resume
                            <Download className="ml-2 h-5 w-5" />
                        </a>
                    </div>

                    <div className="pt-6 sm:pt-8 flex items-center justify-center lg:justify-start gap-6 text-slate-400">
                        {/* <a href="https://github.com/Aashish518" className="hover:text-slate-900 transition-colors">
                            <Github size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/jadavaashish" className="hover:text-slate-900 transition-colors">
                            <Linkedin size={22} />
                        </a> */}
                        <a href="mailto:shlokahir2002@email.com" className="hover:text-slate-900 transition-colors">
                            <Mail size={22} />
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up delay-200">
                    <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
                        <div className="absolute inset-0 bg-slate-100 rounded-full scale-110 -z-10"></div>

                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
                            <img
                                src="/Aashish Photo.jpeg"
                                alt="Profile"
                                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Hero;
