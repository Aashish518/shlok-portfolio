import React, { useState } from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/shlokahir2002@email.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: "New Portfolio Message!"
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <Section id="contact" className="bg-white">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-12 lg:mb-16 space-y-4">
                    <h2 className="font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-slate-900 mx-auto"></div>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                        Have a project in mind? Let's discuss.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Contact Info */}
                    <div className="space-y-8 order-1 lg:order-1">
                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900 text-xl sm:text-2xl">
                                Contact Information
                            </h3>
                            <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                                Feel free to reach out for collaborations, job opportunities, or just a friendly chat.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: <Mail size={24} />, label: "Email", value: "shlokahir2002@email.com", href: "mailto:shlokahir2002@email.com" },
                                { icon: <Phone size={24} />, label: "Phone", value: "+91 6355616642", href: "tel:+916355616642" },
                                // { icon: <MapPin size={24} />, label: "Location", value: "Shashtrinagar, Ahmedabad, Gujarat, India", href: null }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 lg:gap-6 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-400 transition-all">
                                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                                        {item.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-medium text-slate-500 text-xs sm:text-sm">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="font-semibold text-slate-800 hover:text-slate-500 transition-colors block break-all sm:break-normal
                                                           text-sm sm:text-base md:text-lg"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="font-semibold text-slate-800 wrap-break-word
                                                          text-sm sm:text-base md:text-lg">
                                                {item.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-6 md:p-8 border-slate-200 bg-white shadow-lg order-2 lg:order-2">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-fade-in-up">
                                <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4 ring-4 ring-green-100">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="font-bold text-slate-900 text-xl sm:text-2xl">
                                    Message Sent!
                                </h3>
                                <p className="text-slate-600 text-sm sm:text-base">
                                    Thank you. I'll get back to you soon.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-lg transition-colors text-sm sm:text-base"
                                >
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="font-medium text-slate-700 text-xs sm:text-sm">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 outline-none transition-all bg-slate-50 focus:bg-white disabled:opacity-50
                                                   text-sm sm:text-base"
                                        placeholder="Your Name"
                                        disabled={status === 'submitting'}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="font-medium text-slate-700 text-xs sm:text-sm">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 outline-none transition-all bg-slate-50 focus:bg-white disabled:opacity-50
                                                   text-sm sm:text-base"
                                        placeholder="abc@example.com"
                                        disabled={status === 'submitting'}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="font-medium text-slate-700 text-xs sm:text-sm">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 outline-none transition-all resize-none bg-slate-50 focus:bg-white disabled:opacity-50
                                                   text-sm sm:text-base"
                                        placeholder="How can I help you?"
                                        disabled={status === 'submitting'}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-4 px-6 rounded-lg bg-slate-900 text-white font-semibold shadow-md hover:bg-slate-800 hover:shadow-lg transition-all
                                               flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed
                                               text-sm sm:text-base md:text-lg"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </Card>

                </div>
            </div>
        </Section>
    );
};

export default Contact;
