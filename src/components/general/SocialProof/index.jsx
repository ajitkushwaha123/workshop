import { Marquee } from "@/components/ui/marquee";
import { Star, Store, ChefHat } from "lucide-react";

export const SocialProof = () => {
    const logos = [
        <div key="z" className="flex items-center font-black text-2xl tracking-tighter text-[#E23744] italic">zomato</div>,
        <div key="s" className="flex items-center font-black text-2xl tracking-tighter text-[#FC8019]">SWIGGY</div>,
        <div key="c" className="flex items-center gap-2 font-bold text-gray-700 dark:text-gray-300 text-lg"><Store className="w-5 h-5 text-green-500" /> Cloud Kitchen</div>,
        <div key="h" className="flex items-center gap-2 font-bold text-gray-700 dark:text-gray-300 text-lg"><ChefHat className="w-5 h-5 text-emerald-500" /> Home Kitchen</div>,
    ];

    return (
        <div className="w-full border-y border-green-100 dark:border-green-900/30 bg-green-50/50 dark:bg-black/20 backdrop-blur-md py-6 md:py-8 mt-12 md:mt-0 relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">

                <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-6 md:gap-10 shrink-0">
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-950 bg-gray-200 dark:bg-gray-800 overflow-hidden flex items-center justify-center shadow-sm">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 12}`} alt="Entrepreneur" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-xl text-gray-900 dark:text-white leading-tight">5,000+</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">Entrepreneurs Reached</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex gap-1 mb-1.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300 font-semibold tracking-wide">Rated By Participants</span>
                    </div>
                </div>

                <div className="w-full relative flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] pt-2 md:pt-0">
                    <Marquee className="[--duration:20s] flex items-center">
                        {logos.map((logo, i) => (
                            <div key={i} className="mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-default">
                                {logo}
                            </div>
                        ))}
                    </Marquee>
                </div>

            </div>
        </div>
    )
}
