import { educationData } from "@/public/content/content";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Education as EducationType } from "@/public/types/Interfaces";

const Education = () => {
    return (
        <section id='education' className='min-h-screen bg-green-50 py-20 px-4 md:px-10'>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    {educationData.title}
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    My academic journey and educational background
                </p>

                <div className="space-y-6">
                    {educationData.education.map((edu: EducationType, index: number) => (
                        <div
                            key={edu.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-200"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                {/* Left Section */}
                                <div className="flex-1">
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="bg-green-100 p-2 rounded-lg mt-1">
                                            <GraduationCap className="text-green-700" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-lg font-semibold text-gray-700">
                                                {edu.institution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 ml-14">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <MapPin size={16} />
                                            <span className="text-sm">{edu.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar size={16} />
                                            <span className="text-sm">{edu.duration}</span>
                                        </div>

                                        {edu.result && (
                                            <div className="mt-2">
                                                <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                                                    {edu.result}
                                                </span>
                                            </div>
                                        )}

                                        {edu.focus && edu.focus.length > 0 && (
                                            <div className="mt-3">
                                                <p className="text-sm font-semibold text-gray-700 mb-2">
                                                    Focus Areas:
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.focus.map((area: string, idx: number) => (
                                                        <span
                                                            key={idx}
                                                            className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                                                        >
                                                            {area}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right Section - Timeline Indicator */}
                                <div className="hidden md:block">
                                    <div className="bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">
                                        #{index + 1}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
