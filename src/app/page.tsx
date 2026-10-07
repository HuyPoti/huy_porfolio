import Information from "@/components/information";
import Technology from "@/components/technology";
import TimelineStudy from "@/components/timeline";
import Image from "next/image";
import {
  FaPython,
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiCplusplus,
  SiPhp,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiTypescript,
  SiNestjs,
  SiDotnet, 
  SiPostgresql,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import ToolsSection from "@/components/tools-section";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center gap-20 py-10 w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* Section Giới thiệu */}
      <section
        id="gioi-thieu"
        className="w-full max-w-6xl flex flex-col gap-8 scroll-mt-24"
      >
        {/* Banner chào & mục tiêu */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="flex flex-col gap-4 max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold w-fit border border-blue-200/60">
              🎓 Sinh viên ĐH Sư Phạm TP.HCM
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Kho Công Cụ &amp; Tiện Ích Giáo Dục
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Chào bạn! Mình là <strong className="text-slate-900">Nguyễn Gia Huy</strong>, sinh viên năm 3 trường Đại học Sư phạm TP.HCM. Không gian này được tạo ra nhằm chia sẻ các phần mềm, công cụ hỗ trợ giáo viên soạn giảng và giúp học sinh học tập thuận tiện, hoàn toàn miễn phí.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/#cong-cu"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 bg-blue-600 text-white font-medium text-sm sm:text-base rounded-xl shadow-xs hover:bg-blue-700 active:bg-blue-800 transition-colors"
              >
                Khám phá công cụ ngay
              </Link>
            </div>
          </div>

          <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-2xl overflow-hidden border-4 border-white shadow-md ring-1 ring-slate-200">
            <Image
              src="/avatar.png"
              alt="Ảnh chân dung Nguyễn Gia Huy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Thông tin cá nhân, Học vấn & Kỹ năng */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {/* Cột trái: Thông tin & Học vấn */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Thẻ thông tin cá nhân */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col gap-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                Thông tin cơ bản
              </h2>
              <div className="flex flex-col gap-3">
                <Information title="Họ và tên" content="Nguyễn Gia Huy" />
                <Information title="Chuyên môn định hướng" content="Phát triển phần mềm ứng dụng & công cụ giáo dục" />
                <Information
                  title="Địa chỉ"
                  content="Ấp Phước Hưng 1, Xã Mỹ Lộc, Tỉnh Tây Ninh"
                />
              </div>
            </div>

            {/* Thẻ Education Timeline */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col gap-3">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                Quá trình học tập
              </h2>
              <TimelineStudy
                items={[
                  {
                    year: "2020 - 2023",
                    school: "THPT Cần Giuộc",
                    graduate: true,
                  },
                  {
                    year: "2023 - Hiện tại",
                    school: "Đại học Sư phạm TP.HCM",
                    graduate: false,
                  },
                ]}
              />
            </div>
          </div>

          {/* Cột phải: Kỹ năng dạng tags */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col gap-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                Kỹ năng &amp; Công nghệ phát triển
              </h2>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Ngôn ngữ lập trình
                </span>
                <Technology
                  items={[
                    { icon: <FaPython className="text-[#3776AB]" />, name: "Python" },
                    { icon: <TbBrandCSharp className="text-[#953cad]" />, name: "C#" },
                    { icon: <SiCplusplus className="text-[#00599C]" />, name: "C++" },
                    { icon: <IoLogoJavascript className="text-[#F7DF1E]" />, name: "Javascript" },
                    { icon: <SiTypescript className="text-[#3178C6]" />, name: "Typescript" },
                    { icon: <SiPhp className="text-[#777BB4]" />, name: "Php" },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Framework &amp; Nền tảng
                </span>
                <Technology
                  items={[
                    { icon: <FaReact className="text-[#61DAFB]" />, name: "ReactJs" },
                    { icon: <RiNextjsFill className="text-slate-900" />, name: "NextJs" },
                    { icon: <FaLaravel className="text-[#FF2D20]" />, name: "Laravel" },
                    { icon: <RiTailwindCssFill className="text-[#06B6D4]" />, name: "Tailwind" },
                    { icon: <FaNodeJs className="text-[#5FA04E]" />, name: "NodeJs" },
                    { icon: <SiExpress className="text-slate-800" />, name: "ExpressJs" },
                    { icon: <SiNestjs className="text-[#E0234E]" />, name: "NestJs" },
                    { icon: <SiDotnet className="text-[#512BD4]" />, name: ".Net" },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Cơ sở dữ liệu &amp; Công cụ
                </span>
                <Technology
                  items={[
                    { icon: <SiMysql className="text-[#4479A1]" />, name: "MySql" },
                    { icon: <SiMongodb className="text-[#47A248]" />, name: "Mongodb" },
                    { icon: <SiPostgresql className="text-[#336791]" />, name: "PostgreSQL" },
                    { icon: <FaGithub className="text-slate-900" />, name: "Github" },
                    { icon: <VscVscode className="text-[#007ACC]" />, name: "VsCode" },
                    { icon: <SiPostman className="text-[#FF6C37]" />, name: "Postman" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <ToolsSection />
    </div>
  );
}
