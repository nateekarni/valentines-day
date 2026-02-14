"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const GAME_DATA = [
  {
    q: "เย็นนี้เราไปเติมพลังด้วยอะไรดี?",
    options: [
      {
        t: "KFC",
        i: "https://www.bitec.co.th/wp-content/uploads/2025/03/IMG_8403.jpg",
      },
      {
        t: "Tama",
        i: "https://asset.readme.me/files/45126/64462486bfc9360cede2592f.jpg",
      },
      {
        t: "ถนนคนเดิน",
        i: "https://f.ptcdn.info/893/046/000/ofsvk3orcUulFN3pA1d-o.jpg",
      },
      {
        t: "เธอช่างเก่งนะ",
        i: "https://img.wongnai.com/p/1920x0/2025/12/01/80c865efaa154453821279550b928b60.jpg",
      },
    ],
  },
  {
    q: "คืนนี้ดูหนังเรื่องอะไรดี?",
    options: [
      {
        t: "Romance",
        i: "https://s.abcnews.com/images/Entertainment/500-days-summer-ht-jef-180213_2_16x9_992.jpg?w=384",
      },
      {
        t: "Horror",
        i: "https://i.guim.co.uk/img/media/fd806ba9bf45eb5c0e87e3d4f9fa1582d62133c6/0_182_6000_3600/master/6000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=1cf9d2352fbb99989ee5d8af0f1e914e",
      },
      {
        t: "Action SCI-FI",
        i: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOZhRe6tMmSTnczHIkcOnt84GOcXvhVo2Dwacm8Ri3WOD4yt7CVL9pCSaXALjuSN2w1YGpUtmfhCtDY1dQHAI40BvKsDPrwzwv11zho_xddCDrVFdpq96iFJyxcSNfEneHh3tOEaVAlHRI/s1600/hb3linruc6cl024irwsm.jpg",
      },
      {
        t: "Fantasy",
        i: "https://images.filmibeat.com/img/popcorn/movie_lists/7-epic-hollywood-fantasy-movies-that-will-take-you-beyond-reality-20241217113256-1561.jpg",
      },
    ],
  },
  {
    q: "อยากกินขนมอะไรตอนดูหนัง?",
    options: [
      {
        t: "Popcorn",
        i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbbQcLkkLTbSnXcHeTWv_Xe5p3g_GJTkmnA&s",
      },
      {
        t: "Cake",
        i: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Mocha-Cake_EXPS_FT22_33916_ST_08_12_1.jpg",
      },
      {
        t: "Bingsu",
        i: "https://little-tokyo-guide.de/cdn/shop/articles/Bingsu_Duesseldorf_264d6ed2-b940-47ee-b61c-957d9b39f7b4.jpg?v=1748942007",
      },
      {
        t: "Snacks",
        i: "https://www.cktravels.com/wp-content/uploads/2023/06/thailand-7-eleven-55.jpg",
      },
    ],
  },
  {
    q: "พาลูกสาวไปเที่ยวที่ไหนดี?",
    options: [
      {
        t: "ดูบัว",
        i: "https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.6435-9/50480752_2368351306714256_6415429479379763200_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=R0ORS34WFlsQ7kNvwHp6dnJ&_nc_oc=AdmmHujGkcBWvrXJG_ftjBwBboPtfJsq8Yph_e9foHcRNKTUzCbQsAR2lPysMZud6Gvu1XMWlayf10golc6j6rCe&_nc_zt=23&_nc_ht=scontent.fbkk2-7.fna&_nc_gid=ZIF0q3rsRqvv8Y2KpUXk9A&oh=00_AftXxTOw-c3Hp-z-CJuMgMMjBymQIlJpCf1Iriwiv2aouA&oe=69B7CAB7",
      },
      {
        t: "Calin",
        i: "https://paikondieow.com/wp-content/uploads/2022/06/3-9.jpg",
      },
      {
        t: "หล่อเลี้ยงฟาร์ม คาเฟ่",
        i: "https://img.wongnai.com/p/400x0/2024/02/22/d73864e8d24441d9988235bff4d88d4e.jpg",
      },
      {
        t: "The Bunny's hut Cafe",
        i: "https://ak-d.tripcdn.com/images/1mi4x224x8tlxb6vl19E2_W_640_0_R5_Q80.jpg?proc=source/trip",
      },
    ],
  },
];

export default function DateNightSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const isFinished = step >= GAME_DATA.length;

  const handleSelect = (choice: string) => {
    setSelections([...selections, choice]);
    setStep(step + 1);
  };

  const resetGame = () => {
    setStep(0);
    setSelections([]);
  };

  return (
    <>
      <section className="py-16 bg-[#1A1A1A] text-white text-center">
        <h2 className="font-serif text-2xl italic mb-6 px-4">
          Ready for tonight?
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="px-8 py-3 border border-gold text-gold uppercase text-[10px] tracking-widest hover:bg-gold hover:text-white transition-all rounded-full"
        >
          Start Date Night
        </button>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg z-50 flex flex-col p-4 h-[100dvh] overflow-hidden"
          >
            <div className="max-w-md mx-auto w-full h-full flex flex-col relative z-10">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-0 right-0 p-2 text-2xl text-gold"
              >
                &times;
              </button>

              {!isFinished ? (
                <>
                  <div className="text-center py-6 flex-none">
                    <span className="text-gold uppercase text-[10px] font-bold tracking-widest">
                      Step {step + 1}/{GAME_DATA.length}
                    </span>
                    <h3 className="font-serif text-3xl mt-2 italic text-gray-800">
                      {GAME_DATA[step].q}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 flex-grow pb-8">
                    {GAME_DATA[step].options.map((opt, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => handleSelect(opt.t)}
                        className="relative rounded-lg overflow-hidden group cursor-pointer"
                      >
                        <img
                          src={opt.i}
                          alt={opt.t}
                          className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 flex items-center justify-center transition">
                          <span className="text-white font-serif italic text-lg">
                            {opt.t}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full pb-20">
                  <div className="bg-white/55 backdrop-blur-md border border-white/80 p-8 rounded-xl text-center w-full max-w-xs shadow-lg">
                    <h3 className="font-serif text-2xl italic mb-4 text-gray-800">
                      It's a Date!
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      {selections.join(" + ")}
                    </p>
                    <button
                      onClick={resetGame}
                      className="underline text-xs text-gold uppercase"
                    >
                      Replay
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
