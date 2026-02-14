"use client";
import confetti from "canvas-confetti";
import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || isFinished) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const init = () => {
      const rect = container.getBoundingClientRect();
      // จัดการ Scale สำหรับจอ Retina/มือถือ
      canvas.width = rect.width;
      canvas.height = rect.height;

      // ถมสีทอง
      ctx.fillStyle = "#C5A059";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ข้อความบนแผ่นขูด
      ctx.fillStyle = "#FFF";
      ctx.font = "italic 24px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Scratch Me", canvas.width / 2, canvas.height / 2);

      // โหมดลบ
      ctx.globalCompositeOperation = "destination-out";
    };

    init();

    // ฟังค์ชั่นขูด
    const scratch = (x: number, y: number) => {
      if (isFinished) return;
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();
      checkProgress();
    };

    const checkProgress = () => {
      if (isFinished) return;
      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height,
      ).data;
      let clear = 0;
      // เช็คพิกเซลทุกๆ 100 จุดเพื่อประสิทธิภาพ
      for (let i = 0; i < imageData.length; i += 100) {
        if (imageData[i + 3] === 0) clear++;
      }
      if (clear / (imageData.length / 100) > 0.5) {
        setIsFinished(true);
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.7 } });
      }
    };

    // Event Handlers
    const handleMove = (e: MouseEvent | TouchEvent) => {
      e.preventDefault(); // ป้องกันจอเลื่อนตอนขูดบนมือถือ
      const rect = canvas.getBoundingClientRect();
      let clientX, clientY;
      if ("touches" in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }
      scratch(clientX - rect.left, clientY - rect.top);
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("touchmove", handleMove, { passive: false });

    return () => {
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("touchmove", handleMove);
    };
  }, [isFinished]);

  return (
    <section className="py-16 text-center px-6">
      <h2 className="font-serif text-2xl italic mb-6 text-gray-800">
        Secret Message
      </h2>
      <div
        ref={containerRef}
        className="relative w-full max-w-[300px] aspect-square mx-auto rounded-xl overflow-hidden shadow-xl bg-white border-4 border-white"
      >
        <NextImage
          src="/images/Family (1).JPG"
          alt="Hidden"
          fill
          className="object-cover"
          quality={85}
          priority
        />
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full z-10 touch-none transition-opacity duration-1000 ${isFinished ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        />
      </div>
      <p
        className={`text-[10px] text-gold mt-4 tracking-widest uppercase animate-pulse transition-opacity ${isFinished ? "opacity-0" : "opacity-100"}`}
      >
        ถูเพื่อเปิดความลับ
      </p>
      {isFinished && (
        <p className="text-xl font-serif italic text-gold mt-2 animate-fade-up">
          I Love You Both! ❤️
        </p>
      )}
    </section>
  );
}
