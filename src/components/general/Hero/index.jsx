import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { WordRotate } from "@/components/ui/word-rotate";
import { Highlighter } from "@/components/ui/highlighter";
import { GridPattern } from "@/components/ui/grid-pattern";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export const Hero = () => {
    return (
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden flex flex-col items-center">
            <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "absolute inset-0 h-full w-full stroke-emerald-600/30 fill-emerald-600/30 dark:stroke-emerald-400/30 dark:fill-emerald-400/30 z-0",
                    "[mask-image:linear-gradient(to_bottom,white,transparent_90%)]"
                )}
            />
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-4xl w-full sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.4] md:leading-[1.15] text-gray-900 dark:text-white mx-auto pb-2"
            >
                Launch a Highly{" "}
                <span className="inline-block mt-2 md:mt-0">
                    <Highlighter action="highlight" color="#22c55e">
                        <span className="text-white relative z-10 px-2 py-1">Profitable</span>
                    </Highlighter>
                </span>
                <br />
                <span className="mt-3 md:mt-4 flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
                    <WordRotate
                        className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 font-black drop-shadow-sm pb-1"
                        words={["Food Business", "Cloud Kitchen", "Cafe", "Restaurant"]}
                    />
                    <span>Online</span>
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 mt-6 text-sm md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-3xl font-normal leading-relaxed mx-auto px-2"
            >
                Join our exclusive LIVE webinar. Discover the exact roadmap used by successful cloud kitchens & home chefs to dominate <span className="text-red-500 font-semibold">Zomato</span> & <span className="text-orange-500 font-semibold">Swiggy</span>.
            </motion.p>

            <div className="mt-6">
                <HeroVideoDialog
                    className="block w-full"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/wP5GhASVhJc"
                    thumbnailSrc="/thumbnail.png"
                    thumbnailAlt="Hero Video"
                />
            </div>
        </div >
    )
}