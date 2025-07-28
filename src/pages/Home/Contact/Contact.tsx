import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-0"
        >
            <Button
                size="lg"
                className="w-full max-w-xs sm:max-w-sm lg:w-60 font-bold cursor-pointer h-12 sm:h-14 lg:h-16 text-lg sm:text-xl lg:text-2xl"
                onClick={() => window.location.href = '/contact'}
                variant="outline"
            >
                Contact me!
            </Button>
        </motion.div>
    )
}
