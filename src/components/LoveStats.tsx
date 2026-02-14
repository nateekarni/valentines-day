"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoveStats() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    // ตั้งค่าวันครบรอบที่นี่ (YYYY-MM-DD)
    const startDate = new Date("2022-06-11").getTime();
    const today = new Date().getTime();
    const diff = Math.ceil(Math.abs(today - startDate) / (1000 * 60 * 60 * 24));
    setDays(diff);
  }, []);

  const stats = [
    { label: "Days Together", value: days },
    { label: "Photos Taken", value: "∞" },
    { label: "Trips Together", value: "Many" },
    { label: "Love Level", value: "∞" },
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase block mb-2">
          By the Numbers
        </span>
        <h2 className="font-serif text-4xl italic text-gray-800">
          Our Statistics
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/45 backdrop-blur-md border border-white/60 rounded-2xl p-6 text-center shadow-sm hover:-translate-y-1 hover:border-gold hover:shadow-md transition-all duration-300"
          >
            <div className="text-4xl md:text-5xl font-serif text-gold mb-2 font-bold">
              {stat.value}
            </div>
            <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
