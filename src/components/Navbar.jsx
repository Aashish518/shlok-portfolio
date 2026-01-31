import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Home', 'About', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'];

    return (
        <nav
            className={`
        fixed top-0 w-full z-50 transition-all duration-300 border-b
        ${scrolled || isOpen
                    ? 'bg-white/95 backdrop-blur-md border-slate-200 py-3'
                    : 'bg-white/95 backdrop-blur-md border-transparent py-5'}
      `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <a href="#home" className="text-2xl font-bold font-heading text-slate-900 tracking-tight">
                        Portfolio<span className="text-slate-400">.</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                        {/* <div className="hidden md:flex items-center space-x-4 pl-4 border-l border-slate-200">
                            <a href="https://github.com/Aashish518" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/jadavaashish" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div> */}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors z-50 relative"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`
                        md:hidden fixed inset-0 top-15 bg-white z-40
                        transition-all duration-500 ease-in-out origin-top overflow-y-auto
                        ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}
                    `}
                    style={{ height: 'calc(100vh - 60px)' }}
                >
                    <div className="flex flex-col min-h-full p-6">
                        <div className="space-y-1 mb-8">
                            {navItems.map((item, idx) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`
                                        block text-xl sm:text-2xl font-bold text-slate-800 py-3 border-b border-slate-100
                                        transition-all duration-500 delay-[${idx * 50}ms]
                                        ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
                                    `}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <div className="mt-auto pb-8 flex justify-center gap-8">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                                <Github size={28} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                                <Linkedin size={28} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
