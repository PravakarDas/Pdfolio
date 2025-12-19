"use client";
import { motion } from "framer-motion";
import { skillsData } from "@/public/content/content";
import { RiNextjsFill } from "react-icons/ri";

const Skills = () => {
    return (
        <section id="skills" className="py-20 min-h-screen px-4 md:px-10">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold">{skillsData.title}</h2>
                <p className="text-black/50 mt-1">Technologies I work with</p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
                {
                    skillsData.skills.map((skill, index) => (
                        <div key={skill.name} className={`${index % 2 == 0 ? 'bg-gray-200' : 'bg-white'} flex flex-col justify-center items-center p-2 py-6 space-y-2`}>

                            {/* ICON */}
                            {skill.icon && (
                                <skill.icon className="text-4xl  transition-all duration-300 group-hover:scale-110" />
                            )}

                            {/* TEXT (hidden before hover) */}
                            <div className=" text-center truncate overflow-auto">
                                <p className="font-semibold text-[14px]">{skill.name}</p>
                            </div>
                        </div>
                    ))
                }


            </div>
            <div className="mt-12">
                <ul className="flex flex-wrap gap-2">
                    <span className="text-black font-semibold">{`Programming languages :`}</span>
                    {skillsData.skills.filter(s => s.category === 'language').map(skill => (
                        <li className="rounded px-1 shadow  " key={skill.name}>{skill.name}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <ul className="flex flex-wrap gap-2">
                    <span className="text-black font-semibold">{`Frameworks :`}</span>
                    {skillsData.skills.filter(s => s.category === 'framework').map(skill => (
                        <li className="rounded px-1 shadow  " key={skill.name}>{skill.name}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <ul className="flex flex-wrap gap-2">
                    <span className="text-black font-semibold ">{`Library :`}</span>
                    {skillsData.skills.filter(s => s.category === 'library').map(skill => (
                        <li className="rounded px-1 shadow  " key={skill.name}>{skill.name}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <ul className="flex flex-wrap gap-2">
                    <span className="text-black font-semibold ">{`Databases :`}</span>
                    {skillsData.skills.filter(s => s.category === 'database').map(skill => (
                        <li className="rounded px-1 shadow  " key={skill.name}>{skill.name}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <ul className="flex flex-wrap gap-2">
                    <span className="text-black font-semibold ">{`DevOps :`}</span>
                    {skillsData.skills.filter(s => s.category === 'devops').map(skill => (
                        <li className="rounded px-1 shadow " key={skill.name}>{skill.name}</li>
                    ))}
                </ul>
            </div>
            {/* <div className="mt-4">
                <ul className="flex flex-wrap gap-2">
                    <span className="text-black font-semibold ">{`Version Control :`}</span>
                    {skillsData.skills.filter(s => s.category === 'version control').map(skill => (
                        <li className="rounded px-1 shadow " key={skill.name}>{skill.name}</li>
                    ))}
                </ul>
            </div> */}
            <div className="mt-4">
                <ul className="flex flex-wrap gap-2">
                    <span className="text-black font-semibold ">{`CS Fundamentals :`}</span>
                    {skillsData.skills.filter(s => s.category === 'CS Fundamentals').map(skill => (
                        <li className="rounded px-1 shadow " key={skill.name}>{skill.name}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <ul className="flex flex-wrap gap-2">
                    <span className="text-black font-semibold ">{`Runtime :`}</span>
                    {skillsData.skills.filter(s => s.category === 'runtime').map(skill => (
                        <li className="rounded px-1 shadow " key={skill.name}>{skill.name}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
