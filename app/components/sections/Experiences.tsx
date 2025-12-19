import { experienceData } from "@/public/content/content"

export const colors = [
    "bg-gradient-to-r from-pink-100 to-purple-100",
    "bg-gradient-to-r from-blue-100 to-indigo-100",
    "bg-gradient-to-r from-green-100 to-emerald-100",
    "bg-gradient-to-r from-yellow-100 to-orange-100",
    "bg-gradient-to-r from-purple-100 to-pink-100",
    "bg-gradient-to-r from-teal-100 to-cyan-100",
    "bg-gradient-to-r from-red-100 to-orange-100",
    "bg-gradient-to-r from-indigo-100 to-blue-100",
    "bg-gradient-to-r from-rose-100 to-pink-100",
];
const Experiences = () => {


    return (
        <section id='experience' className=' min-h-screen bg-blue-50 py-20 '>
            <div className="flex items-center gap-4   flex-col">
                <h3 className="text-3xl md:text-4xl font-bold">{experienceData.title}</h3>
                <p className="text-center">I have Experiences of hand of experiences </p>
                {/* experiences */}
                <div className="space-y-4 p-2 relative">
                    {
                        experienceData.experiences.map((exp, i) => {
                            const randomColor = colors[Math.floor(Math.random() * colors.length)];
                            return (
                                <div
                                    key={i}
                                    className={`flex exp flex-col sticky top-40 border-2 border-white space-y-2 justify-start p-4 md:p-10 rounded-2xl  ${randomColor}`}
                                >
                                    <p className=" text-xl md:text-2xl  font-semibold">{exp.company} </p>
                                    <p className="text-black/70">{exp.role}</p>
                                    <p className="max-w-4xl">{exp.description}</p>
                                    <p className="absolute right-10  top-1 md:top-5 text-sm ">{exp.duration}</p>
                                </div>
                            );
                        })
                    }


                </div>

            </div>


        </section>
    )
}

export default Experiences