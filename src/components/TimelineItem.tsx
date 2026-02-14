"use client";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { useState } from "react";
import ImagePreview from "./ImagePreview";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  images: string[];
  note?: string;
  layout: "text-left" | "text-right";
  delay: number;
}

export default function TimelineItem({
  date,
  title,
  description,
  images,
  note,
  layout,
  delay,
}: TimelineItemProps) {
  const isTextLeft = layout === "text-left";
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<number>>(new Set());

  const handleImageClick = (index: number) => {
    setPreviewIndex(index);
  };

  const closePreview = () => {
    setPreviewIndex(null);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  const handleImageError = (index: number) => {
    setErrorImages((prev) => new Set([...prev, index]));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="grid grid-cols-[minmax(0,1fr)_30px_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] gap-2 md:gap-4 mb-16 items-start relative group"
      >
        {/* --- LEFT COLUMN --- */}
        <div
          className={`flex flex-col min-w-0 ${isTextLeft ? "items-end text-right" : "items-start text-left"}`}
        >
          {isTextLeft ? (
            <div className="bg-white/55 backdrop-blur-md border border-white/80 shadow-sm rounded-xl p-3 md:p-4 relative transition-transform hover:-translate-y-1 w-full md:w-auto">
              <div className="absolute top-[18px] -right-[6px] w-[10px] h-[10px] bg-white/55 border-t border-r border-white/80 rotate-45 z-10" />
              <h3 className="font-serif text-lg md:text-xl font-bold italic text-gray-800 break-words">
                {title}
              </h3>
              <p className="text-[10px] md:text-[11px] text-gray-600 mt-2 font-normal leading-relaxed">
                {description}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2 w-full min-w-0">
              <span className="inline-block px-3 py-1 bg-gold text-white font-serif italic rounded-full text-xs md:text-sm shadow-md self-end whitespace-nowrap">
                {date}
              </span>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 w-full">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-[60px] h-[60px] md:w-[70px] md:h-[70px] flex-shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-white shadow-sm hover:scale-105 transition-transform"
                    onClick={() => handleImageClick(i)}
                  >
                    {!errorImages.has(i) ? (
                      <>
                        <NextImage
                          src={img}
                          alt={`Timeline image ${i + 1}`}
                          fill
                          className={`object-cover transition-opacity duration-300 ${
                            loadedImages.has(i) ? "opacity-100" : "opacity-0"
                          }`}
                          sizes="(max-width: 768px) 60px, 70px"
                          quality={75}
                          loading="lazy"
                          onLoad={() => handleImageLoad(i)}
                          onError={() => handleImageError(i)}
                        />
                        {!loadedImages.has(i) && (
                          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                        ❌
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {note && (
                <span className="font-handwriting text-gray-400 text-sm md:text-lg self-end">
                  {note}
                </span>
              )}
            </div>
          )}
        </div>

        {/* --- CENTER COLUMN (AXIS) --- */}
        <div className="relative flex justify-center h-full">
          {/* 🔥 ลบเส้นตรงนี้ออกไปแล้วครับ เหลือไว้แค่จุด Diamond */}

          {/* จุด Diamond */}
          <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] bg-bg border-2 border-gold rotate-45 z-10 mt-5 transition-transform group-hover:bg-gold group-hover:rotate-[225deg] group-hover:scale-125" />
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div
          className={`flex flex-col min-w-0 ${isTextLeft ? "items-start text-left" : "items-end text-right"}`}
        >
          {!isTextLeft ? (
            <div className="bg-white/55 backdrop-blur-md border border-white/80 shadow-sm rounded-xl p-3 md:p-4 relative transition-transform hover:-translate-y-1 w-full md:w-auto">
              <div className="absolute top-[18px] -left-[6px] w-[10px] h-[10px] bg-white/55 border-t border-l border-white/80 -rotate-45 z-10" />
              <h3 className="font-serif text-lg md:text-xl font-bold italic text-gray-800 break-words">
                {title}
              </h3>
              <p className="text-[10px] font-sans md:text-[11px] text-gray-600 mt-2 font-normal leading-relaxed">
                {description}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2 w-full min-w-0">
              <span className="inline-block px-3 py-1 bg-gold text-white font-serif italic rounded-full text-xs md:text-sm shadow-md self-start whitespace-nowrap">
                {date}
              </span>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 w-full">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-[60px] h-[60px] md:w-[70px] md:h-[70px] flex-shrink-0 cursor-pointer overflow-hidden rounded-md border-2 border-white shadow-sm hover:scale-105 transition-transform"
                    onClick={() => handleImageClick(i)}
                  >
                    {!errorImages.has(i) ? (
                      <>
                        <NextImage
                          src={img}
                          alt={`Timeline image ${i + 1}`}
                          fill
                          className={`object-cover transition-opacity duration-300 ${
                            loadedImages.has(i) ? "opacity-100" : "opacity-0"
                          }`}
                          sizes="(max-width: 768px) 60px, 70px"
                          quality={75}
                          loading="lazy"
                          onLoad={() => handleImageLoad(i)}
                          onError={() => handleImageError(i)}
                        />
                        {!loadedImages.has(i) && (
                          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                        ❌
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {note && (
                <span className="font-handwriting text-gray-400 text-sm md:text-lg self-start">
                  {note}
                </span>
              )}
            </div>
          )}
        </div>
      </motion.div>

      <ImagePreview
        images={images}
        initialIndex={previewIndex ?? 0}
        isOpen={previewIndex !== null}
        onClose={closePreview}
      />
    </>
  );
}
