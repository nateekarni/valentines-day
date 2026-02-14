// src/components/BackgroundBlobs.tsx
export default function BackgroundBlobs() {
  return (
    <>
      <div className="fixed w-[300px] h-[300px] bg-[#ffe4bc] rounded-full blur-[80px] -z-10 opacity-60 top-[10%] -left-[10%] animate-float-blob" />
      <div className="fixed w-[400px] h-[400px] bg-[#e0f2fe] rounded-full blur-[80px] -z-10 opacity-60 bottom-[10%] -right-[10%] animate-float-blob [animation-delay:-5s]" />
    </>
  );
}
