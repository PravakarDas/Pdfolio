'use client'
import { portfolioData } from "@/public/content/content"
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import Modal from "../modal/Modal";
import { useState } from "react";
import { Project } from "@/public/types/Interfaces";
import { colors } from "./Experiences";

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [ActiveIndex, setActiveIndex] = useState(0);
    const [projects, setProjects] = useState(portfolioData.projects);




    const handleTab = (ind: number) => {
        setActiveIndex(ind);

        if (ind === 0) setProjects(portfolioData.projects);
        else if (ind === 1) setProjects(portfolioData.projects.filter(pro => pro.category.includes('fullstack')));
        else if (ind === 2) setProjects(portfolioData.projects.filter(pro => pro.category.includes('backend')));
        else if (ind === 4) setProjects(portfolioData.projects.filter(pro => pro.category.includes('frontend')));
    };

    const openDetails = (project: any) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    return (
        <section id='projects' className='min-h-screen py-20 px-4'>
            <div className="flex items-center gap-4 flex-col max-w-[1200px] mx-auto">
                <h3 className="text-3xl md:text-4xl font-semibold">{portfolioData.title}</h3>
                <p className="text-center text-black/50">I gain lot of experience to do My projects</p>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2">
                    <button onClick={() => handleTab(0)} className={`${ActiveIndex === 0 ? 'bg-black/90 text-white' : ''} px-2 rounded`}>All</button>
                    <button onClick={() => handleTab(1)} className={`${ActiveIndex === 1 ? 'bg-black/90 text-white' : ''} px-2 rounded`}>Full stack</button>
                    <button onClick={() => handleTab(2)} className={`${ActiveIndex === 2 ? 'bg-black/90 text-white' : ''} px-2 rounded`}>Backend</button>
                    <button onClick={() => handleTab(4)} className={`${ActiveIndex === 4 ? 'bg-black/90 text-white' : ''} px-2 rounded`}>Frontend</button>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1280px] mx-auto">
                    {projects.map((pro, i) => {
                        // const randomColor = colors[Math.floor(Math.random() * colors.length)];
                        return (
                            <div
                                key={i}
                                onClick={() => openDetails(pro)}
                                className={`cursor-pointer flex flex-col shadow rounded-xl overflow-hidden hover:shadow-xl border `}
                            >
                                <Image className="w-full h-52 object-cover" alt={pro.title} src={pro.image} width={300} height={200} />

                                <div className="p-3">
                                    <p className="text-xl font-semibold text-[16px] text-blue-700">{pro.title}</p>
                                    <p className="text-black/70 text-[12px] line-clamp-2">{pro.description}</p>

                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {pro.technologies.slice(0, 5).map((tech, i) => (
                                            <p key={i} className="border text-xs border-black/20 px-1 rounded">{tech}</p>
                                        ))}
                                        {pro.technologies.length > 5 && (
                                            <span className="text-xs px-1 bg-black/70 text-white rounded">
                                                +{pro.technologies.length - 5}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Details Modal */}
                {isOpen && selectedProject && (
                    <Modal setIsOpen={() => setIsOpen(false)}>
                        <div className="p-2 md:p-4 grid grid-cols-1 gap-4 md:grid-cols-2 overflow-auto max-h-screen ">
                            {/* primary */}
                            <div className="space-y-2">
                                <Image className="w-full h-60 rounded object-cover" src={selectedProject.image} alt={selectedProject.title} width={500} height={300} />
                                <p className="text-gray-600">code & preview</p>
                                <div className="flex justify-between ">
                                    {selectedProject.github?.frontend && (
                                        <Link target="_blank" className="flex gap-1 text-sm items-center text-blue-700 font-semibold" href={selectedProject.github.frontend}>
                                            Frontend Code <LuExternalLink />
                                        </Link>
                                    )}
                                    {selectedProject.github?.backend && (
                                        <Link target="_blank" className="flex gap-1 text-sm items-center text-blue-700 font-semibold" href={selectedProject.github.backend}>
                                            Backend Code <LuExternalLink />
                                        </Link>
                                    )}
                                    {selectedProject.liveDemo && (
                                        <Link target="_blank" className="flex gap-1 text-sm items-center text-green-700 font-semibold" href={selectedProject.liveDemo}>
                                            Live Demo <LuExternalLink />
                                        </Link>
                                    )}
                                </div>
                                <h2 className="text-2xl font-bold mt-3">{selectedProject.title}</h2>
                                <p className="text-black/70 mt-2 text-[14px]">{selectedProject.description}</p>
                            </div>
                            {/* additional */}
                            <div className=" border-l-2 pl-4">
                                {/* tech */}
                                <p className="text-black font-medium">{`technologies :`}</p>
                                <ul className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map(tech => (
                                        <li key={tech} className="rounded px-1 border text-[12px] border-white/90">{tech}</li>
                                    ))}
                                </ul>
                                <p className="text-black font-medium mt-4">{`Features :`}</p>
                                <ul className="flex flex-wrap gap-2">
                                    {selectedProject.feature.map(feature => {
                                        const fea_color = colors[Math.floor(Math.random() * colors.length)];
                                        console.log(fea_color);
                                        return <li key={feature} className={`px-2 rounded text-[13px] ${fea_color}`}>{`${feature}`}</li>
                                    })}
                                </ul >

                            </div>


                        </div>
                    </Modal>
                )}
            </div>
        </section>
    );
};

export default Projects;




