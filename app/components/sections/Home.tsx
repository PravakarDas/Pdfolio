import { homeData } from "@/public/content/content";
import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
    return (
        <section id="home" className=" relative min-h-screen items-center flex flex-col justify-center py-16 px-4  md:px-8 lg:px-16 max-w-[1280px] mx-auto">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2  items-center gap-10">

                {/* LEFT CONTENT */}
                <div className="text-center md:text-left space-y-2 ">
                    <h3 className="text-3xl md:text-5xl font-bold">{homeData.name}</h3>
                    <p className="font-semibold">{homeData.title}</p>
                    <p className="text-gray-600 text-base md:text-sm ">{homeData.description}</p>
                    <div className="flex flex-wrap gap-2">
                        <Link className="rounded w-[50%] md:w-[20%] flex justify-center bg-gray-950 p-2 text-nowrap text-white" target="_blank" href={'https://wa.me/+8801515675655?text=hello I want to talk to you'}>Hire Me</Link>
                        <Link className="bg-black/90 w-[20%] md:w-10 text-white p-2 rounded" href={homeData.socialLinks.github}><Github /></Link>
                        <Link className="bg-black/90 w-[20%] md:w-10 text-white p-2 rounded" href={homeData.socialLinks.linkedin}><Linkedin /></Link>
                        <Link className="bg-black/90 w-[20%] md:w-10 text-white p-2 rounded " href={homeData.socialLinks.facebook}><Facebook /></Link>
                        <Link className="bg-gray-950 w-[50%] md:w-[20%] justify-center text-white p-2 rounded  h-10" href={homeData.resume}>Resume</Link>
                        <Link className="bg-gray-950 w-[50%] md:w-[20%] justify-center text-white p-2 rounded  h-10" href={homeData.cv}>CV</Link>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full flex z-2 justify-center md:justify-end">
                    <div className=" profile">
                        <Image
                            alt="profile photo"
                            width={300}
                            height={300}
                            src={homeData.profileImage}
                            className=" "
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HomeSection;
