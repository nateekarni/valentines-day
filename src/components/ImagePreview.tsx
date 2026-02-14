"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import NextImage from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ImagePreviewProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImagePreview({
  images,
  initialIndex,
  isOpen,
  onClose,
}: ImagePreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsImageLoaded(false);
    setHasError(false);
  }, [initialIndex]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsImageLoaded(false);
    setHasError(false);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsImageLoaded(false);
    setHasError(false);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextImage, prevImage, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white transition-colors bg-black/20 rounded-full"
          >
            <X size={24} />
          </button>

          <div
            className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                {!hasError ? (
                  <>
                    <NextImage
                      src={images[currentIndex]}
                      alt={`Preview ${currentIndex + 1}`}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        isImageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="100vw"
                      quality={85}
                      priority
                      onLoad={() => setIsImageLoaded(true)}
                      onError={() => setHasError(true)}
                    />
                    {!isImageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70">
                    <div className="text-6xl mb-4">⚠️</div>
                    <p className="text-lg">ไม่สามารถโหลดรูปได้</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Navigation Controls - Hidden if only 1 image */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 md:left-4 p-2 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 md:right-4 p-2 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium px-3 py-1 bg-black/30 rounded-full backdrop-blur-md">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
