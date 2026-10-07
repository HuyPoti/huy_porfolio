import Link from "next/link";
import * as React from "react";
import { Wrench, BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18">
        {/* Logo / Tên Portfolio */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg py-1"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-sm group-hover:bg-blue-700 transition-colors">
            EP
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-blue-900 tracking-tight leading-tight group-hover:text-blue-700 transition-colors">
              Kho Công Cụ Học Tập
            </span>
            <span className="text-xs font-medium text-slate-500 tracking-wide">
              EdPortfolio
            </span>
          </div>
        </Link>

        {/* Menu điều hướng & nút CTA */}
        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/#gioi-thieu"
              className="px-3.5 py-2.5 min-h-[44px] flex items-center gap-1.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>Giới thiệu</span>
            </Link>
            <Link
              href="/#cong-cu"
              className="px-3.5 py-2.5 min-h-[44px] flex items-center gap-1.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Wrench className="w-4 h-4 text-slate-500" />
              <span>Công cụ</span>
            </Link>
          </nav>

          <Link
            href="/#cong-cu"
            className="inline-flex items-center justify-center min-h-[44px] px-4 sm:px-5 py-2 bg-blue-600 text-white font-medium text-sm rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
          >
            Xem công cụ
          </Link>
        </div>
      </div>
    </header>
  );
}
