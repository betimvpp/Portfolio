import DarkVeil from "@/blocks/Backgrounds/DarkVeil/DarkVeil"
import { Menu } from "@/components/menu"
import { Appresentation } from "./Appresentation/Appresentation"
import { Projects } from "./Projects/Projects"
import { Experience } from "./Expecience/Experience"
import { Contact } from "./Contact/Contact"


export const Home = () => {
    return (
        <div className="bg-black min-h-screen w-full max-w-full flex flex-col items-center justify-center text-white relative overflow-x-hidden">
            <div className="absolute inset-0 z-0 opacity-50">
                <DarkVeil hueShift={320} />
            </div>
            <div className="relative z-10 flex flex-col max-w-[1440px] w-full gap-6 sm:gap-8 lg:gap-10 pb-20 px-4 sm:px-6 lg:px-8">
                <Appresentation />

                <div className="min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] pt-20 sm:pt-32 lg:pt-40 mb-10 sm:mb-16 lg:mb-20 flex flex-col items-center">
                    <Projects />
                    <Experience />
                    <Contact />
                </div>
                <Menu />
            </div>
        </div>
    )
}