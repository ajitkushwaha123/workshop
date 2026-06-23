"use client";
import clsx from "clsx";
import Title from "../Title";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Highlighter } from "@/components/ui/highlighter";

const painPoints = [
    {
        title: "1. No Orders",
        description:
            "Your restaurant is live, but customers simply can't find you.",
        image: "/assets/pain-points/no-orders.png",
    },
    {
        title: "2. No Marketing Plan",
        description:
            "Running discounts blindly and wasting money without results.",
        image: "/assets/pain-points/no-marketing.png",
    },
    {
        title: "3. Bad Food Photos",
        description:
            "Great food, poor presentation. Customers scroll past your menu.",
        image: "/assets/pain-points/bad-photos.png",
    },
    {
        title: "4. High Commissions",
        description:
            "A huge chunk of every order goes straight to aggregators.",
        image: "/assets/pain-points/high-commission.png",
    },
    {
        title: "5. Low Profits",
        description:
            "Orders are coming in, but your earnings barely grow.",
        image: "/assets/pain-points/low-payout.png",
    },
    {
        title: "6. Weak Menu Design",
        description:
            "Customers visit your menu but leave without ordering.",
        image: "/assets/pain-points/poor-menu.png",
    },
];

function PainCard({ title, description, image }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className={clsx(
                "group relative overflow-hidden rounded-[12px] h-full flex flex-col",
                "border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-black",
                "shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
                "transition-all duration-300"
            )}
        >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-lg bg-red-500/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-lg bg-orange-500/10 blur-3xl" />
            </div>

            <div className={clsx(
                "absolute top-6 right-6 z-20 inline-flex items-center rounded-lg border px-3 py-1 text-[11px] font-bold tracking-wider shadow-sm",
                "bg-red-500 text-white border-red-600 dark:border-red-500 shadow-red-500/20"
            )}>
                Failure Point
            </div>

            <div className="relative z-10 px-4 pb-4 pt-4 shrink-0">
                <div
                    className="
                        overflow-hidden
                        rounded-[12px]
                        border border-zinc-200 dark:border-zinc-800
                        bg-zinc-100 dark:bg-zinc-900/50
                        aspect-video
                        flex
                        items-center
                        justify-center
                    "
                >
                    {image ? (
                        <motion.img
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.4 }}
                            src={image}
                            alt={title}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="h-full w-full flex flex-col items-center justify-center text-zinc-400">
                            <span className="text-sm">Image Placeholder</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="relative z-10 p-7 pt-2 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 flex-grow">
                    <div className="w-full">
                        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-red-500 transition-colors">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function PainSection() {
    return (
        <section className="relative overflow-hidden py-12 bg-zinc-50 dark:bg-[#0A0A0A]">
            <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "absolute inset-0 h-full w-full stroke-emerald-600/30 fill-emerald-600/30 dark:stroke-emerald-400/30 dark:fill-emerald-400/30 z-0",
                    "[mask-image:linear-gradient(to_bottom,white,transparent_40%)]"
                )}
            />

            <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-12 max-w-3xl text-center"
                >
                    <Title title={<span className="text-3xl md:text-6xl">Why Do Most <br /> <Highlighter action="highlight" color="#22c55e">
                        <span className="text-white relative z-10 px-2 py-1">Food Business</span>
                    </Highlighter> Fail .</span>} description="Do any of these sound like exactly your problem? You are not alone." />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <PainCard {...point} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
