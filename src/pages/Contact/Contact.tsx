import Silk from '@/blocks/Backgrounds/Silk/Silk'
import { Menu } from '@/components/menu'
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "betimvpp@gmail.com",
        href: "mailto:betimvpp@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+55 (74) 98873-2336",
        href: "tel:+5574988732336"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "São Paulo, Brasil",
        href: "https://maps.google.com"
    }
];

const socialLinks = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/betimvpp?tab=repositories",
        color: "hover:text-primary"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/roberto-junior-dev/",
        color: "hover:text-primary"
    },
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simular envio do formulário
        toast.success("Mensagem enviada com sucesso! Retornarei em breve.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen py-10 sm:py-16 lg:py-20 pb-20 sm:pb-24 lg:pb-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 z-0 opacity-50">
                    <Silk
                        speed={5}
                        scale={1}
                        color="#9100b3"
                        noiseIntensity={0}
                        rotation={0}
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-5"></div>

                <div className="relative z-10 flex flex-col max-w-[1440px] w-full">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8 sm:mb-12 lg:mb-16"
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
                        <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
                            Have a project in mind? Let's talk about how <br className="hidden sm:block" /> i can help
                            turn your ideas into digital reality.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 sm:space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Let's talk!</h2>
                                <p className="text-base sm:text-lg mb-6 sm:mb-8">
                                    I'm always open to discussing new opportunities, interesting projects,
                                    or simply exchanging ideas about frontend development.
                                </p>
                            </div>

                            {/* Contact Methods */}
                            <div className="space-y-3 sm:space-y-4">
                                {contactInfo.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="block"
                                    >
                                        <Card className="glass p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                                            <div className="flex items-center gap-3 sm:gap-4">
                                                <div className="p-2 sm:p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-primary text-sm sm:text-base">{item.label}</h3>
                                                    <p className="text-sm sm:text-base">{item.value}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Follow me on social media</h3>
                                <div className="flex gap-3 sm:gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 sm:p-3 glass rounded-lg hover:shadow-lg transition-all duration-300 ${social.color}`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                            <span className="sr-only">{social.label}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="glass p-6 sm:p-8">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a message</h2>

                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                required
                                                className="glass border-white border-[1px] rounded-md p-2 sm:p-3 w-full text-sm sm:text-base"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="seu@email.com"
                                                required
                                                className="glass border-white border-[1px] rounded-md p-2 sm:p-3 w-full text-sm sm:text-base"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                            Subject
                                        </label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject of the message"
                                            required
                                            className="glass border-white border-[1px] rounded-md p-2 sm:p-3 w-full text-sm sm:text-base"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project or idea..."
                                            rows={6}
                                            required
                                            className="glass border-white border-[1px] rounded-md p-2 sm:p-3 resize-none w-full text-sm sm:text-base"
                                        />
                                    </div>

                                    <Button type="submit" className="w-full glow text-sm sm:text-base" size="lg">
                                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mt-12 sm:mt-16 lg:mt-20"
                    >
                        <Card className="glass p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to start?</h2>
                            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                                Whether for a freelance project, job opportunity, or collaboration,
                                I'm always interested in new challenges.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <Button size="lg" className="glow text-sm sm:text-base" asChild>
                                    <a href="mailto:betimvpp@gmail.com">
                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        Send Email
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" className="glass border-white/20 text-sm sm:text-base" asChild>
                                    <a href="/projects">
                                        See My Projects
                                    </a>
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
            <Menu />
        </div>
    )
}