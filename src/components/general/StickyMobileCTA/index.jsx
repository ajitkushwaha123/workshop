"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <motion.div
      initial={{ y: 120 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="border-t border-green-100 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto max-w-lg px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
          <div className="flex items-center gap-3">
            {/* Price Section */}
            <div className="flex min-w-fit flex-col">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-green-600">₹9</span>

                <span className="rounded-full bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-600">
                  LIMITED
                </span>
              </div>

              <div className="flex items-center gap-1 text-xs text-zinc-500">
                <Users className="h-3 w-3" />
                <span>Only few seats left</span>
              </div>
            </div>

            {/* CTA */}
            <button className="group flex-1 rounded-2xl bg-green-600 px-5 py-4 font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 active:scale-[0.98]">
              <div className="flex items-center justify-center gap-2">
                <span>Reserve Seat</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
