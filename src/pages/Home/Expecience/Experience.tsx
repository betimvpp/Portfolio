import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
    {
        company: "Smart Support",
        position: "Web Designer",
        period: "2025 - Now",
        description: "Creating WordPress pages for service providers.",
        technologies: ["WordPress", "Elementor", "Rocket"]
    },
    {
        company: "CodesHere",
        position: "Front-End Developer",
        period: "2024 - Now",
        description: "Creation of on-demand software for companies targeting various market niches.",
        technologies: ["React", "Tailwind", "Shadcn", "Supabase"]
    },
    {
        company: "Grupo ProSaude",
        position: "Front-End Developer",
        period: "2023 - 2024",
        description: "Development of software and institutional pages to increase the group's digital presence.",
        technologies: ["React", "ReactNative", "Node", "Typescript"]
    }
];

export const Experience = () => {


    return (
        <section className="pb-10 sm:pb-16 lg:pb-20 pt-20 sm:pt-32 lg:pt-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Professional Experience</h2>
                    <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                        My journey in frontend development
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-primary/30 hidden md:block"></div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="relative mb-8 sm:mb-12 md:ml-16"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-16 sm:-left-20 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-background hidden md:block"></div>

                                <Card className="glass p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg sm:text-xl font-bold text-primary">{exp.company}</h3>
                                            <p className="text-base sm:text-lg font-semibold">{exp.position}</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm sm:text-base">{exp.period}</span>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary" className="text-xs sm:text-sm">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}