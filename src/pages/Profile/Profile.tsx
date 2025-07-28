import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Award, Download, Mail, MapPin, Calendar } from "lucide-react";
import developerPhoto from "@/assets/profileImage.png";
import { Menu } from "@/components/menu";
import Iridescence from "@/blocks/Backgrounds/Iridescence/Iridescence";

const education = [
    {
        institution: "Uniamerica",
        degree: "Systems Analysis and Development Technologist",
        period: "2022 - 2025",
        description: "The Systems Analysis and Development program trains professionals capable of designing, developing, and implementing computer information systems. The program covers topics such as programming, systems analysis, project management, and database management, preparing students for various areas of the information technology market.",
        highlights: ["Technologist", "Final Project: Academic Management System"]
    },
    {
        institution: "Uniamerica",
        degree: "Postgraduation in Software Engineering",
        period: "2025 - 2025",
        description: "The postgraduate program in Software Engineering prepares professionals capable of developing, managing, and maintaining high-quality software systems. The program deepens knowledge in areas such as agile methodologies, software architecture, testing, security, and project management, preparing students to work in various areas of the technology market.",
        highlights: ["Postgraduation", "Case study on the applicability of the concepts learned in the course."]
    },
];

const professionalExperience = [
    {
        title: "Web Designer",
        company: "Smart Support",
        period: "2025 - 2025",
        description: "I'm a Web Developer specializing in high-performance digital solutions that blend technology, design and marketing: I build and manage responsive WordPress/Elementor sites with striking, modern visuals; implement SEO strategies to boost organic visibility; integrate features like on‑site email triggers to enhance user engagement; and craft intuitive, user‑centric interfaces. By uniting professional design, effective SEO and seamless functionality, my work has driven consistent visitor growth, a surge in qualified leads and contract closures—especially among U.S.‑based Latino audiences—improved user communication through contact funnels and automated email campaigns, and strengthened brand credibility, proving the value of well‑structured digital solutions for small and medium‑sized businesses abroad."
    },
    {
        title: "Front-End Developer",
        company: "Digital Innovations",
        period: "2024 - Yet",
        description: "At CodesHere, a dynamic software startup, I lead end‑to‑end full‑stack development—designing secure, scalable back‑end systems with Supabase and crafting modern, responsive React front‑ends with advanced UX/UI principles. I manage state using Context API, handle API communication via Axios, version control with Git/GitHub, and deploy continuously through CI/CD pipelines. I also leverage Shadcn UI, React Date Picker, and React Router DOM for routing permissions, pagination, and enhanced usability. This role has sharpened my technical expertise and customer insight, enabling me to turn ideas into robust digital solutions that deliver real market value."
    },
    {
        title: "Frontend Developer",
        company: "WebStudio",
        period: "2023 - 2024",
        description: "I built all of Grupo ProSaude's websites—covering clinical, optical, funeral, dental, and occupational health services—using industry‑leading design, usability, and SEO practices to ensure a strong online presence and attract more clients. I also prototyped and developed the initial version of an innovative mobile app that lets users quickly schedule consultations, exams, surgeries, and other procedures, while providing prevention and wellness tips. Additionally, I migrated the Saúde em Foco employee social network from a no‑code platform to a custom, code‑based solution, improving efficiency and enabling better communication and knowledge sharing among healthcare professionals. To ensure maintainability, I adhere to design patterns, use meaningful names for variables and functions, document code as needed, and conduct rigorous testing and reviews."
    }
];

const skills = {
    frontend: ["React", "TypeScript", "Next.js", "React Native"],
    styling: ["Tailwind CSS", "Styled Components", "Shadcn Ui", "CSS Modules", "Framer Motion", "React Bits"],
    tools: ["Git", "Docker", "Kubernets"],
    testing: ["Jest", "React Testing Library", "Cypress",],
    backend: ["Node.js", "GraphQL", "REST APIs", "PostgreSQL", "Supabase", "MySQL", "Java", "Spring Boot"]
};

export const Profile = () => {
    return (
        <div className="min-h-screen py-10 sm:py-16 lg:py-20 pb-20 sm:pb-24 lg:pb-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 z-0 opacity-50">
                    <Iridescence
                        color={[0.5, 0, 0.7]}
                        mouseReact={true}
                        amplitude={0.1}
                        speed={1.0}
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
                        <div className="relative inline-block mb-6 sm:mb-8">
                            <div className="absolute inset-0 hero-gradient rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            <img
                                src={developerPhoto}
                                alt="Developer Profile"
                                className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover rounded-full mx-auto border-4 border-white/20 shadow-2xl"
                            />
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Roberto Junior</h1>
                        <p className="text-lg sm:text-xl text-white mb-4 sm:mb-6">
                            Frontend Software Engineer
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-white mb-6 sm:mb-8 px-4">
                            <div className="flex items-center justify-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm sm:text-base">São Paulo, Brasil</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span className="text-sm sm:text-base">betimvpp@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm sm:text-base">{new Date().getFullYear() - 2023}+ years of experience</span>
                            </div>
                        </div>

                        <Button
                            className="cursor-pointer text-sm sm:text-base"
                            variant="outline"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/src/assets/Roberto Junior Front-End (1).pdf';
                                link.download = 'Roberto Junior Front-End CV.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download CV
                        </Button>
                    </motion.div>

                    {/* About */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 sm:mb-12 lg:mb-16"
                    >
                        <Card className="glass p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                About Me
                            </h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground">
                                <p className="mb-4 text-sm sm:text-base leading-relaxed">
                                    Hello, my name is Roberto Junior, and I've been working as a software developer since 2023. <br className="hidden sm:block" />
                                    I began my educational journey at the end of the pandemic, initially studying as a hobby, and today I find myself passionate about the field. <br className="hidden sm:block" />
                                    During my professional journey, I've used a variety of technologies, with TypeScript, along with React, Next, React Native, and Node, being my main tools. <br className="hidden sm:block" />
                                    However, I'm always willing to learn new things and am 100% committed to learning the technologies used in your company.
                                </p>
                            </div>
                        </Card>
                    </motion.section>

                    {/* Professional Experience */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 sm:mb-12 lg:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                            </div>
                            Professional Experience
                        </h2>

                        <div className="space-y-4 sm:space-y-6">
                            {professionalExperience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                >
                                    <Card className="glass p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg sm:text-xl font-bold text-primary">{exp.title}</h3>
                                                <p className="text-base sm:text-lg font-semibold">{exp.company}</p>
                                            </div>
                                            <Badge variant="outline" className="w-fit text-xs sm:text-sm">
                                                {exp.period}
                                            </Badge>
                                        </div>

                                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{exp.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Education */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 sm:mb-12 lg:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                            </div>
                            Academic Background
                        </h2>

                        <div className="space-y-4 sm:space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                >
                                    <Card className="glass p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg sm:text-xl font-bold text-primary">{edu.institution}</h3>
                                                <p className="text-base sm:text-lg font-semibold">{edu.degree}</p>
                                            </div>
                                            <Badge variant="outline" className="w-fit text-xs sm:text-sm">
                                                {edu.period}
                                            </Badge>
                                        </div>

                                        <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{edu.description}</p>

                                        <div className="space-y-2">
                                            {edu.highlights.map((highlight, hIndex) => (
                                                <div key={hIndex} className="flex items-center gap-2">
                                                    <Award className="w-4 h-4 text-primary" />
                                                    <span className="text-xs sm:text-sm">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Skills */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 sm:mb-12 lg:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                            </div>
                            Hard Skills
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {Object.entries(skills).map(([category, skillList], index) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Card className="glass p-4 sm:p-6 h-full">
                                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 capitalize text-primary">
                                            {category.replace(/([A-Z])/g, ' $1').trim()}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skillList.map((skill, skillIndex) => (
                                                <Badge key={skillIndex} variant="secondary" className="text-xs">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>
            <Menu />
        </div>
    );
}