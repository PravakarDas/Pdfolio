"use client";

import { aboutData } from "@/public/content/content";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 md:px-10  min-h-screen">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                About Me
            </h2>

            <div className="max-w-6xl   mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-between">



                {/* JSON STYLE ABOUT CARD */}
                <div className=" p-4 rounded-xl shadow box">
                    <p className="text-blue-600">{`{`}</p>

                    <div className="pl-6 space-y-2">
                        <p>
                            <span className="text-red-700 font-semibold">"fullName"</span>: "{aboutData.fullName}",
                        </p>

                        <p>
                            <span className="text-red-700 font-semibold">"bio"</span>:
                            <span className="text-blue-600">
                                {" \"" + aboutData.bio + "\", "}
                            </span>
                        </p>

                        <p>
                            <span className="text-red-700 font-semibold">"email"</span>: "{aboutData.email}",

                        </p>
                        <Link href={'https://wa.me/+8801860131470'} >
                            <span className="text-red-700 font-semibold">"WhatsApp"</span>: "{aboutData.whatsapp}",
                        </Link>

                        <p>
                            <span className="text-red-700 font-semibold">"location"</span>: "{aboutData.location}",
                        </p>

                        <p>
                            <span className="text-red-700 font-semibold">"interests"</span>: [
                        </p>

                        <ul className="pl-10 border-l ">
                            {aboutData.interests.map((item, i) => (
                                <li key={i}>
                                    "{item}"
                                    {i !== aboutData.interests.length - 1 && ","}
                                </li>
                            ))}
                        </ul>

                        <p className="pl-6">{`],`}</p>
                    </div>

                    <p className="text-blue-600">{`}`}</p>
                </div>

                {/* PROFILE IMAGE */}
                <div className="flex justify-center items-center">
                    <Image
                        src={aboutData.profileImage}
                        alt="Profile"
                        width={300}
                        height={300}
                        className="w-96"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
