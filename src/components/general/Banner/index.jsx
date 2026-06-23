import Link from "next/link";
import { motion } from "framer-motion";
import { BANNER_INFO } from "./helper/constants";

export const Banner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 px-4"
        >
            <div className="max-w-6xl mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 md:p-10 backdrop-blur-lg shadow-lg dark:shadow-black/20 bg-white/60 dark:bg-[#10101a]/70">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="md:w-2/3">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
                            {BANNER_INFO.TITLE}
                        </div>

                        <p className="text-neutral-700 dark:text-neutral-300 text-md md:text-lg leading-relaxed">
                            {BANNER_INFO.DESCRIPTION}
                        </p>
                    </div>

                    <Link
                        href={BANNER_INFO.BUTTON_LINK}
                        target="_blank"
                        className="flex justify-center w-full md:w-auto items-center px-8 py-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-all duration-200 shadow-md hover:scale-[1.02]"
                    >
                        {BANNER_INFO.BUTTON_TEXT}
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};