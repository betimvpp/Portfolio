import LiquidChrome from '@/blocks/Backgrounds/LiquidChrome/LiquidChrome'
import { Menu } from '@/components/menu'
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Code, Briefcase } from "lucide-react";
import { useState } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tech: string[];
    githubLink: string;
    category: "professional" | "academic" | "personal";
    featured: boolean;
    year: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "SaaS ProSaude",
        description: "System for managing professionals and patients",
        longDescription: "Modern SaaS platform for health cooperatives, developed with React and Supabase, including robust validation with Zod, advanced forms and elegant interface with Tailwind and Shadcn.",
        image: "/placeholder-project.jpg",
        tech: ["React", "Supabase", "Tailwind", "Shadcn", "Axios", "Zod", "React Hook Form"],
        githubLink: "https://github.com/betimvpp/SaasProSaude",
        category: "professional",
        featured: true,
        year: "2025"
    },
    {
        id: 2,
        title: "Saas Coopervida",
        description: "System for managing professionals and patients",
        longDescription: "Modern SaaS platform for health cooperatives, developed with React and Supabase, including robust validation with Zod, advanced forms and elegant interface with Tailwind and Shadcn.",
        image: "/placeholder-project.jpg",
        tech: ["React", "Supabase", "Tailwind", "Shadcn", "Axios", "Zod", "React Hook Form"],
        githubLink: "https://github.com/betimvpp/SaasCoopervida",
        category: "professional",
        featured: true,
        year: "2025"
    },
    {
        id: 3,
        title: "Ecommerce Otica Bom Preço",
        description: "Plataforma para geneciar produtos e pedidos de uma ótica",
        longDescription: "Complete e-commerce for optical stores with product, order and inventory management, developed with React frontend and Java Spring Boot backend, including Redux state management.",
        image: "/placeholder-project.jpg",
        tech: ["React", "Redux", "Java", "Spring Boot"],
        githubLink: "",
        category: "professional",
        featured: true,
        year: "2023"
    },
    {
        id: 4,
        title: "API Vacancy Management",
        description: "Backend for a job creation and management system",
        longDescription: "Complete job vacancy management system with RESTful API developed in Java with Spring Boot for creating, viewing and managing job vacancies.",
        image: "/placeholder-project.jpg",
        tech: ["Java", "Spring Boot", "PostgreeSQL",],
        githubLink: "https://github.com/betimvpp/gestaoVagas",
        category: "personal",
        featured: false,
        year: "2025"
    },
    {
        id: 5,
        title: "Dev Dashboard",
        description: "Restaurant management system",
        longDescription: "Interactive dashboard for restaurant management with modern design built with ShadCn and Tailwind CSS.",
        image: "/placeholder-project.jpg",
        tech: ["React", "ShadCn", "Tailwind CSS"],
        githubLink: "https://github.com/betimvpp/ignite-dashboard",
        category: "personal",
        featured: false,
        year: "2024"
    },
    {
        id: 6,
        title: "Dev SpaceTime",
        description: "System for posting and monitoring feeds on mobile devices",
        longDescription: "Mobile application for sharing memories and real-time feeds, developed with React Native and TypeScript.",
        image: "/placeholder-project.jpg",
        tech: ["React Native", "TypeScript"],
        githubLink: "https://github.com/betimvpp/NlwSpacetimeMobile",
        category: "personal",
        featured: false,
        year: "2024"
    }
];

const categories = [
    { key: "all", label: "All", icon: Code },
    { key: "professional", label: "Profissionals", icon: Briefcase },
    { key: "personal", label: "Personal", icon: Code }
];

export const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.filter(project =>
        selectedCategory === "all" || project.category === selectedCategory
    );

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <div className="min-h-screen py-10 sm:py-16 lg:py-20 pb-20 sm:pb-24 lg:pb-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 z-0 opacity-40">
                    <LiquidChrome
                        baseColor={[0.5, 0, 0.7]}
                        speed={1}
                        amplitude={0.6}
                        interactive={true}
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
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">My Projects</h1>
                        <p className="text-base sm:text-lg lg:text-xl text-white max-w-2xl mx-auto px-4">
                            A collection of my most significant work, from academic projects to complex professional solutions
                        </p>
                    </motion.div>

                    {/* Featured Projects */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 sm:mb-12 lg:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Featured Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {featuredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Card className="glass overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                        onClick={() => setSelectedProject(project)}>
                                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Code className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white/80" />
                                            </div>
                                        </div>

                                        <div className="p-4 sm:p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-lg sm:text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <Badge variant="secondary" className="text-xs sm:text-sm">{project.year}</Badge>
                                            </div>

                                            <p className="text-muted-foreground mb-4 line-clamp-2 text-sm sm:text-base">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {project.tech.slice(0, 3).map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="outline" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                                {project.tech.length > 3 && (
                                                    <Badge variant="outline" className="text-xs">
                                                        +{project.tech.length - 3}
                                                    </Badge>
                                                )}
                                            </div>

                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    className="flex-1 cursor-pointer text-xs sm:text-sm"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(project.githubLink, '_blank');
                                                    }}
                                                >
                                                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                                    Code
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-8 sm:mb-12"
                    >
                        <div className="glass rounded-full p-2 flex flex-wrap gap-2 justify-center">
                            {categories.map((category) => {
                                const Icon = category.icon;
                                return (
                                    <Button
                                        key={category.key}
                                        variant={selectedCategory === category.key ? "default" : "ghost"}
                                        className="rounded-full cursor-pointer text-xs sm:text-sm"
                                        onClick={() => setSelectedCategory(category.key)}
                                    >
                                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                        {category.label}
                                    </Button>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* All Projects */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                            {selectedCategory === "all" ? "All Projects" :
                                categories.find(c => c.key === selectedCategory)?.label}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    layout
                                >
                                    <Card className="glass overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer h-full"
                                        onClick={() => setSelectedProject(project)}>
                                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Code className="w-10 h-10 sm:w-12 sm:h-12 text-white/80" />
                                            </div>
                                            {project.featured && (
                                                <Badge className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-primary text-xs">
                                                    Featured
                                                </Badge>
                                            )}
                                        </div>

                                        <div className="p-4 sm:p-6 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-base sm:text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <Badge variant="secondary" className="text-xs">{project.year}</Badge>
                                            </div>

                                            <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow text-sm sm:text-base">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {project.tech.slice(0, 2).map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="outline" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                                {project.tech.length > 2 && (
                                                    <Badge variant="outline" className="text-xs">
                                                        +{project.tech.length - 2}
                                                    </Badge>
                                                )}
                                            </div>

                                            <div className="flex gap-2 mt-auto">
                                                <Button
                                                    size="sm"
                                                    className="flex-1 cursor-pointer text-xs"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(project.githubLink, '_blank');
                                                    }}
                                                >
                                                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Project Modal */}
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-4 sm:p-6 lg:p-8 bg-card">
                                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                                        <div>
                                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">
                                                {selectedProject.title}
                                            </h2>
                                            <Badge variant="secondary" className="text-xs sm:text-sm">{selectedProject.year}</Badge>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setSelectedProject(null)}
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            ✕
                                        </Button>
                                    </div>

                                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                                        <Code className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white/60" />
                                    </div>

                                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                                        {selectedProject.longDescription}
                                    </p>

                                    <div className="mb-4 sm:mb-6">
                                        <h3 className="text-lg sm:text-xl font-semibold mb-3">Used Technologies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((tech, index) => (
                                                <Badge key={index} variant="secondary" className="text-xs sm:text-sm">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <Button
                                            className="flex-1 text-sm sm:text-base"
                                            onClick={() => window.open(selectedProject.githubLink, '_blank')}
                                        >
                                            <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                            See Code
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </div>
            <Menu />
        </div>
    )
}

