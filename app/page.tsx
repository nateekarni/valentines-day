import BackgroundBlobs from "@/components/BackgroundBlobs";
import DateNightSelector from "@/components/DateNightSelector";
import LoveStats from "@/components/LoveStats";
import ScratchCard from "@/components/ScratchCard";
import TimelineItem from "@/components/TimelineItem";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* เพิ่ม overflow-hidden ที่ main เพื่อตัดส่วนเกินทั้งหมด */}

      <BackgroundBlobs />

      {/* 1. แก้ Hero Section ให้เต็มจอ (min-h-dvh) */}
      <section className="min-h-dvh flex flex-col justify-center items-center text-center px-6 animate-fade-up relative">
        <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase block mb-3">
          A Journey of Us
        </span>
        <h1 className="font-serif text-5xl md:text-7xl italic text-gray-800 leading-tight">
          Our Memories
        </h1>
        <p className="text-xs text-gray-500 mt-4 font-normal tracking-wide">
          เลื่อนลงเพื่อย้อนดูเรื่องราวของเรา
        </p>

        {/* ลูกศรชี้ลง */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold animate-bounce-slow text-2xl">
          ↓
        </div>
      </section>

      {/* Timeline Header */}
      <section className="py-16 text-center">
        <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase block mb-2">
          Our Story
        </span>
        <h1 className="font-serif text-5xl italic text-gray-800">Timeline</h1>
      </section>

      {/* Timeline Grid */}
      <div className="max-w-[900px] mx-auto px-4 pb-20 relative">
        {" "}
        {/* ✅ ต้องมี relative ที่ container นี้ */}
        {/* 🔥 เพิ่มเส้นกลางตรงนี้ (Continuous Line with Fade) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #C5A059 15%, #C5A059 85%, transparent)",
          }}
        />
        {/* Item 1 */}
        <TimelineItem
          date="Jun 2022"
          title="The Beginning"
          description="ครั้งแรกที่เราได้เจอกัน และได้อยู่ด้วยกันเดือนแรก"
          images={[
            "/images/2206 (1).jpg",
            "/images/2206 (2).jpg",
            "/images/2206 (3).jpg",
            "/images/2206 (4).jpg",
          ]}
          note="First Month 💖"
          layout="text-left"
          delay={0.1}
        />
        <TimelineItem
          date="Jul 2022"
          title="Our Dates"
          description="อยู่ด้วยกัน ไปไหนมาไหนด้วยกันทุกที่"
          images={[
            "/images/2207 (1).jpg",
            "/images/2207 (2).jpg",
            "/images/2207 (3).jpg",
          ]}
          note=""
          layout="text-right"
          delay={0.1}
        />
        <TimelineItem
          date="Aug, 2022"
          title="Life Together"
          description="ใช้ชีวิตด้วยกัน ไปเที่ยวด้วยกัน"
          images={[
            "/images/2208 (1).jpg",
            "/images/2208 (2).jpg",
            "/images/2208 (3).jpg",
            "/images/2208 (4).jpg",
          ]}
          note=""
          layout="text-left"
          delay={0.2}
        />
        <TimelineItem
          date="Sep, 2022"
          title="First Consert"
          description="ไปดูคอนเสิร์ตด้วยกันครั้งแรก"
          images={[
            "/images/2209 (1).jpg",
            "/images/2209 (2).jpg",
            "/images/2209 (3).jpg",
          ]}
          layout="text-right"
          delay={0.3}
        />
        <TimelineItem
          date="Sep, 2022"
          title="Consert Again"
          description="ไปดูคอนเสิร์ตด้วยกันครั้งที่สอง"
          images={[
            "/images/2210 (1).jpg",
            "/images/2210 (2).jpg",
            "/images/2210 (3).jpg",
          ]}
          layout="text-left"
          delay={0.3}
        />
        <TimelineItem
          date="Dec, 2023"
          title="First Dog Cafe"
          description="ไปเจอน้องหมาที่คาเฟ่สัตว์เลี้ยงด้วยกันครั้งแรก"
          images={[
            "/images/2312 (1).jpg",
            "/images/2312 (2).jpg",
            "/images/2312 (3).jpg",
          ]}
          layout="text-right"
          delay={0.3}
        />
        <TimelineItem
          date="Dec, 2023"
          title="First New Year"
          description="ฉลองปีใหม่ด้วยกันครั้งแรก"
          images={[
            "/images/2312 NY (1).jpg",
            "/images/2312 NY (2).jpg",
            "/images/2312 NY (3).jpg",
          ]}
          layout="text-left"
          delay={0.3}
        />
        <TimelineItem
          date="Jan, 2024"
          title="First Bang Saen"
          description="ไปเที่ยวที่ชลบุรีครั้งแรก"
          images={["/images/2401 (1).jpg", "/images/2401 (2).jpg"]}
          layout="text-right"
          delay={0.3}
        />
        <TimelineItem
          date="Apr, 2024"
          title="Cat Cafe"
          description="คาเฟ่แมวร้านโปรด"
          images={[
            "/images/2404 (1).jpg",
            "/images/2404 (2).jpg",
            "/images/2404 (3).jpg",
          ]}
          layout="text-left"
          delay={0.3}
        />
        <TimelineItem
          date="Jun, 2024"
          title="Baby Sitter"
          description="เลี้ยงชิโน่ด้วยกัน"
          images={[
            "/images/2406 (1).jpg",
            "/images/2406 (2).jpg",
            "/images/2406 (3).jpg",
            "/images/2406 (4).jpg",
            "/images/2406 (5).jpg",
          ]}
          layout="text-right"
          delay={0.3}
        />
        <TimelineItem
          date="Jun, 2024"
          title="Our Murphy"
          description="รับเลี้ยงเมอร์ฟแต่ไม่รอด"
          images={[
            "/images/2406 (6).jpg",
            "/images/2406 (7).jpg",
            "/images/2406 (8).jpg",
          ]}
          layout="text-left"
          delay={0.3}
        />
        <TimelineItem
          date="Jul, 2024"
          title="Our Baby 💖"
          description="แมรี่ลูกสาวของเรา"
          images={[
            "/images/2407 (1).jpg",
            "/images/2407 (2).jpg",
            "/images/2407 (3).jpg",
          ]}
          note="Welcome Mary 🐶"
          layout="text-right"
          delay={0.3}
        />
        <TimelineItem
          date="Present"
          title="Lovely Family"
          description="ครอบครัวที่น่ารักของเรา 3 คน"
          images={[
            "/images/Family (1).jpg",
            "/images/Family (2).jpg",
            "/images/Family (3).jpg",
            "/images/Family (4).jpg",
          ]}
          layout="text-left"
          delay={0.3}
        />
      </div>

      <LoveStats />
      <ScratchCard />

      {/* DateNightSelector จะอยู่ล่างสุด */}
      <div>
        <DateNightSelector />
      </div>
    </main>
  );
}
