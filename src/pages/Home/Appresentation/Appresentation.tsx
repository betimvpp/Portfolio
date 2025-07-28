import ProfileCard from "@/blocks/Components/ProfileCard/ProfileCard"
import CurvedLoop from "@/blocks/TextAnimations/CurvedLoop/CurvedLoop"
import DecryptedText from "@/blocks/TextAnimations/DecryptedText/DecryptedText"
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export const Appresentation = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row pt-10 items-center gap-8 lg:gap-12"
            >
                <div className="flex-1 flex flex-col h-full justify-center text-center lg:text-left px-4 sm:px-6 lg:px-0">
                    <span className="text-4xl sm:text-6xl lg:text-8xl text-white p-0 font-bold leading-tight">
                        <DecryptedText
                            text="Front-End"
                            speed={50}
                            maxIterations={10}
                            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?"
                            className="revealed p-0 border-white"
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                            animateOn="view"
                            revealDirection="start"
                        />
                    </span>
                    <span className="text-3xl sm:text-5xl lg:text-7xl ml-0 lg:ml-4 p-0 font-bold -mt-2 lg:-mt-7 leading-tight">
                        <DecryptedText
                            text="Software Engineer" speed={50}
                            maxIterations={10}
                            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?"
                            className="revealed p-0 text-purple-300"
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                            animateOn="view"
                            revealDirection="start"
                        />
                    </span>
                    <p className="max-w-full lg:max-w-2xl mt-4 lg:mt-5 text-sm sm:text-base lg:text-lg px-4 lg:px-0">
                        Hi! I'm Roberto Junior. A creative Frontend Engineer with {new Date().getFullYear() - 2023}+ years of experience in building high-performance, scalable, and responsive web solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-5 px-4 lg:px-0">
                        <Button
                            size="lg"
                            className="w-full sm:w-60 font-bold cursor-pointer text-white text-sm sm:text-base"
                            onClick={() => window.location.href = "/profile"}
                        >
                            <ShinyText text="See my profile!" disabled={false} speed={3} className='custom-class text-white' />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-40 font-bold cursor-pointer text-white text-sm sm:text-base"
                            onClick={() => window.location.href = "/projects"}
                        >
                            <ShinyText text="See my projects!" disabled={false} speed={3} className='custom-class text-white' />
                        </Button>
                    </div>
                </div>
                <div className="w-full max-w-sm lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-end">
                    <ProfileCard
                        className="cursor-pointer scale-75 sm:scale-90 lg:scale-100"
                        avatarUrl="/src/assets/profileImage.png"
                        name="Roberto Junior"
                        title="Front-End Software Engineer"
                        handle="Roberto-Junior-Dev"
                        iconUrl="/src/assets/miniatureImage.png"
                        behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#7e22ce 0%,#00000000 100%),radial-gradient(100% 100% at 50% 50%,#1e1b4b 1%,#00000000 76%),conic-gradient(from 124deg at 50% 50%,#1e1b4b 0%,#7e22ce 40%,#7e22ce 60%,#1e1b4b 100%)"
                        innerGradient="linear-gradient(145deg,#1e1b4b8c 0%,#7e22ce44 100%)"
                        showBehindGradient={true}
                        enableTilt={true}
                        onContactClick={() => window.open('https://www.linkedin.com/in/roberto-junior-dev/', '_blank')}
                    />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-10 lg:mt-20 px-4 sm:px-6 lg:px-0"
            >
                <CurvedLoop
                    marqueeText="HTML CSS JavaScript Typescript React Next Tailwind ShadCn ThreeJs Framer Motion Material-UI Figma React-Bits Java Node Nest SpringBoot Docker Kubernetes"
                    speed={1}
                    curveAmount={300}
                    interactive={false}
                    className="mt-10"
                />
            </motion.div>
        </>
    )
}