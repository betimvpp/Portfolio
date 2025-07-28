import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from 'framer-motion'
import Carousel, { type CarouselItem } from "@/blocks/Components/Carousel/Carousel"
import SaasCoopervida from "@/assets/projects/SaasCoopervida.png"
import SaasProsaude from "@/assets/projects/SaasProsaude.png"
import DevCoffee from "@/assets/projects/DevCoffee.png"
import DevFinance from "@/assets/projects/DevFinance.png"
import DevDashboard from "@/assets/projects/DevDashboard.png"

gsap.registerPlugin(ScrollTrigger)

const ProjectItems: CarouselItem[] = [
  {
    title: "Saas Coopervida",
    description: "A robust software for managing professionals at CooperVida.",
    id: 1,
    image: SaasCoopervida,
  },
  {
    title: "Saas Prosaude",
    description: "A robust software for managing professionals at CooperVida.",
    id: 2,
    image: SaasProsaude,
  },
  {
    title: "DevCoffee",
    description: "A software designed for managing orders in a cafeteria.",
    id: 3,
    image: DevCoffee,
  },
  {
    title: "DevFinance",
    description: "A software designed for managing the entry and exit of funds.",
    id: 4,
    image: DevFinance,
  },
  {
    title: "DevDashboard",
    description: "Software designed for managing restaurant professionals.",
    id: 5,
    image: DevDashboard,
  },
];

export const Projects = () => {

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">See my projects!</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex justify-center"
      >
        <div className="flex flex-col items-center gap-4 w-full max-w-6xl">
          <Carousel items={ProjectItems} />
        </div>
      </motion.div>
    </div>
  )
}