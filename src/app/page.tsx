"use client"
import Aura from '@/components/aura'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-warning-foreground">
      <Aura/>
      {/* Slogan */}
      <h1
        className="text-3xl italic font-[Parastoo] text-center mt-10"
      >
        "Chỉ cần có cố gắng bạn đã thành công phân nửa rồi!" - Nguyễn Gia Huy
      </h1>
      <h1
        className="text-2xl font-bold font-[Parastoo] text-center"
      >
        Mình là sinh viên năm 3 tại <span className='text-green-700'>HCM University of Eduction</span>, mục tiêu là <span className='text-cyan-700'>Software Development</span>.
      </h1>

      <h1
        className="text-3xl italic font-[Parastoo] text-center mt-10"
      >
        "Just try and you are half way there.!" - Nguyen Gia Huy
      </h1>
      <h1
        className="text-2xl font-bold font-[Parastoo] text-center"
      >
        I am a 3rd year student at <span className='text-green-700'>HCM University of Eduction</span>, my goal is <span className='text-cyan-700'>Software Development</span>.
      </h1>
    </div>
  );
}