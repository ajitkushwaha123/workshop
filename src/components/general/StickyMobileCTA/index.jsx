"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { useState } from "react";
import ReserveSeatDialog from "../CustomerInfoForm";
import PayButton from "../Payment/PayButton";

export default function StickyMobileCTA() {
  return (
    <>
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
              <div className="min-w-fit">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black tracking-tight text-green-600">
                    ₹9
                  </span>

                  <span className="rounded-full bg-red-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-red-600">
                    Limited
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                  <Users className="h-3 w-3" />
                  <span>Only a few seats left</span>
                </div>
              </div>

              <PayButton />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
