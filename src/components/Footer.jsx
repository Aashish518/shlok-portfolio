import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Left: Branding */}
                    <div className="text-center md:text-left space-y-2">
                        <p className="text-slate-700 font-semibold text-lg">
                            Portfolio
                        </p>
                        <p className="text-slate-500 text-sm">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    {/* Right: Social & Contact */}
                    <div className="flex justify-center md:justify-end gap-5">
                        <a
                            href="mailto:shlokahir2002@email.com"
                            aria-label="Email"
                            className="text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            <Mail size={20} />
                        </a>

                        <a
                            href="tel:+916355616642"
                            aria-label="Phone"
                            className="text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            <Phone size={20} />
                        </a>

                        {/* <a
                            href="https://github.com/Aashish518"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            <Github size={20} />
                        </a>

                        <a
                            href="https://linkedin.com/in/jadavaashish"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            <Linkedin size={20} />
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
