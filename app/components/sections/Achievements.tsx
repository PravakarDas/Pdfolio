"use client";

import { achivementData } from "@/public/content/content";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const Achievements = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = direction === 'left' ? -400 : 400;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(
            container.scrollLeft < container.scrollWidth - container.clientWidth - 10
        );
    };

    return (
        <section id='achievements' className='min-h-screen bg-purple-50 py-20 px-4 md:px-10'>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Achievements & Certifications
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    Milestones and certifications earned through continuous learning
                </p>

                {/* Carousel Container */}
                <div className="relative group">
                    {/* Left Arrow */}
                    {showLeftArrow && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} className="text-gray-700" />
                        </button>
                    )}

                    {/* Right Arrow */}
                    {showRightArrow && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} className="text-gray-700" />
                        </button>
                    )}

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {achivementData.map((achievement) => (
                            <div
                                key={achievement.id}
                                className="flex-shrink-0 w-[320px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:scale-105"
                            >
                                {/* Image Section */}
                                {achievement.image && achievement.image.length > 0 && (
                                    <div className="relative h-40 bg-gray-100">
                                        <Image
                                            src={achievement.image[0]}
                                            alt={achievement.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}

                                {/* Content Section */}
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-base font-semibold text-gray-900 line-clamp-2 pr-2">
                                            {achievement.title}
                                        </h3>
                                        {achievement.link && (
                                            <Link
                                                href={achievement.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 shrink-0"
                                            >
                                                <ExternalLink size={18} />
                                            </Link>
                                        )}
                                    </div>

                                    <p className="text-xs text-gray-500 mb-2">{achievement.date}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                                        {achievement.description}
                                    </p>

                                    {achievement.link && (
                                        <Link
                                            href={achievement.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mt-3 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                        >
                                            View Certificate
                                            <ExternalLink size={14} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {achivementData.map((_, index) => (
                        <div
                            key={index}
                            className="h-2 w-2 rounded-full bg-purple-300"
                        />
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Achievements;
