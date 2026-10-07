"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { educationalTools, EducationalTool } from "@/data/tools";
import {
  Search,
  Download,
  FolderArchive,
  CheckCircle2,
  TvMinimalPlay,
  Monitor,
  ExternalLink,
  Sparkles,
  GraduationCap,
  Users,
  Eye,
} from "lucide-react";

export default function ToolsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  // Tool được chọn để hiển thị chi tiết (giống màn hình Showcase & Guide trong Stitch)
  const [selectedDetailTool, setSelectedDetailTool] = useState<EducationalTool>(
    educationalTools[0]
  );

  const filters = [
    { id: "all", label: "Tất cả (3)" },
    { id: "teacher", label: "Dành cho giáo viên" },
    { id: "student", label: "Dành cho học sinh" },
  ];

  const filteredTools = useMemo(() => {
    return educationalTools.filter((tool) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        tool.name.toLowerCase().includes(query) ||
        tool.shortDescription.toLowerCase().includes(query) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(query));

      if (!matchesSearch) return false;

      if (selectedFilter === "all") return true;
      if (selectedFilter === "teacher") {
        return (
          tool.audience.toLowerCase().includes("giáo viên") ||
          tool.name.includes("Kanji")
        );
      }
      if (selectedFilter === "student") {
        return (
          tool.audience.toLowerCase().includes("học sinh") ||
          tool.audience.toLowerCase().includes("sinh viên")
        );
      }
      if (selectedFilter === "windows") {
        return true; // Cả 3 ứng dụng web đều chạy hoàn hảo trên Windows 10/11
      }

      return true;
    });
  }, [searchQuery, selectedFilter]);

  const scrollToDetail = (tool: EducationalTool) => {
    setSelectedDetailTool(tool);
    const element = document.getElementById("project-detail-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cong-cu" className="w-full flex flex-col gap-12 scroll-mt-20">
      {/* 1. TOP BANNER & SEARCH SECTION (Chuẩn Stitch) */}
      <div className="w-full bg-[#f2f4fc] rounded-3xl p-6 sm:p-10 border border-slate-200/80">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/70 text-blue-900 rounded-full w-fit text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                <span>Cộng đồng học thuật mở</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Công cụ miễn phí
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Tải về và sử dụng cho học tập, giảng dạy và công việc mà không mất bất kỳ chi phí nào.
              </p>
            </div>
          </div>

          {/* Search Input & Filter Pills */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-2">
            <div className="relative flex-1 max-w-xl">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm công cụ..."
                className="w-full min-h-[48px] pl-10 pr-4 bg-white text-slate-900 placeholder:text-slate-400 rounded-xl text-sm border border-slate-200 shadow-2xs focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-1 py-0.5 rounded cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((btn) => (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setSelectedFilter(btn.id)}
                  className={`min-h-[44px] px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    selectedFilter === btn.id
                      ? "bg-blue-700 text-white shadow-xs"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. TOOLS GRID AREA (3 CARDS CHUẨN STITCH) */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-900">
            Danh sách tiện ích sẵn sàng
          </h3>
          <span className="text-sm font-medium text-slate-500">
            Hiển thị {filteredTools.length} ứng dụng chuẩn giáo dục
          </span>
        </div>

        {filteredTools.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center flex flex-col items-center justify-center gap-3">
            <Search className="w-10 h-10 text-slate-300" />
            <p className="text-base font-semibold text-slate-700">
              Không tìm thấy công cụ phù hợp với từ khóa &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFilter("all");
              }}
              className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col justify-between bg-white rounded-2xl p-6 shadow-xs hover:shadow-md border border-slate-200/90 transition-all text-left"
              >
                <div className="flex flex-col gap-4">
                  {/* Header Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase rounded-full border border-emerald-200/60">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Miễn phí
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200/60">
                        <GraduationCap className="w-3.5 h-3.5" />
                        {tool.audience.includes("giáo viên")
                          ? "Dành cho giáo viên"
                          : "Dành cho học sinh"}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      v{tool.version}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-lg font-bold text-slate-900 leading-snug">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {tool.shortDescription}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Specs Grid (Chuẩn Stitch) */}
                  <div className="grid grid-cols-3 gap-1 p-3 bg-slate-50 border border-slate-100 rounded-xl text-center text-xs">
                    <div className="flex flex-col">
                      <span className="text-slate-400">Phiên bản</span>
                      <span className="font-bold text-slate-800">
                        v{tool.version}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-400">Dung lượng</span>
                      <span className="font-bold text-slate-800">
                        {tool.size}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-400">HĐH</span>
                      <span className="font-bold text-slate-800">
                        Win 10/11 &amp; Web
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions (Chuẩn Stitch: Nút to Tải bản dùng ngay + Nút ZIP/Chi tiết) */}
                <div className="flex flex-col gap-2.5 pt-6 mt-auto">
                  <a
                    href={tool.zipUrl}
                    download
                    className="group flex flex-col items-center justify-center min-h-[50px] px-4 py-2 bg-blue-700 text-white rounded-xl font-semibold text-sm shadow-xs hover:bg-blue-800 transition-all text-center"
                  >
                    <span className="flex items-center gap-1.5 font-bold">
                      <Download className="w-4 h-4" />
                      Tải bản dùng ngay (.ZIP)
                    </span>
                    <span className="text-2xs text-blue-100 font-normal opacity-90">
                      Chạy trực tiếp (Không cần cài đặt)
                    </span>
                  </a>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => scrollToDetail(tool)}
                      className="flex-1 flex items-center justify-center min-h-[40px] px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 mr-1" />
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. SHOWCASE & GUIDE DETAIL SECTION (Bố cục 16:9 + Video + Guide chuẩn Stitch) */}
      {selectedDetailTool && (
        <div
          id="project-detail-section"
          className="w-full bg-[#f2f4fc] rounded-3xl p-6 sm:p-10 border border-slate-200/80 scroll-mt-24"
        >
          <div className="max-w-6xl mx-auto flex flex-col gap-8 text-left">
            {/* Section Header */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-700"></span>
                <span className="text-xs uppercase tracking-wider text-blue-700 font-bold">
                  Hồ sơ ứng dụng &amp; Hướng dẫn
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Chi tiết: {selectedDetailTool.name}
              </h3>
              <p className="text-base text-slate-600 max-w-3xl">
                {selectedDetailTool.description}
              </p>
            </div>

            {/* Main Detail Grid (Cột trái: Preview + Video | Cột phải: Info + Steps) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column (7 cols): Screenshot Card + Feature List + YouTube Player */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {/* 16:9 UI Screenshot Card với mockup dot control */}
                <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-4 flex flex-col gap-3 overflow-hidden">
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      <span className="text-xs font-medium text-slate-500 pl-2">
                        Giao diện làm việc v{selectedDetailTool.version}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Tối ưu máy tính trường học
                    </span>
                  </div>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <Image
                      src={selectedDetailTool.image || "https://th.bing.com/th/id/OIP.DrDgoYMeFJD3Lj5ZOdqAiAHaEq?w=273&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"}
                      alt={`Giao diện ${selectedDetailTool.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Tính năng trọng tâm */}
                <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 flex flex-col gap-4">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-700" />
                    Tính năng trọng tâm
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {selectedDetailTool.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 leading-relaxed">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Video Hướng Dẫn YouTube (Iframe theo link người dùng cung cấp) */}
                <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TvMinimalPlay className="w-5 h-5 text-red-600" />
                      <h4 className="text-base font-bold text-slate-900">
                        Video hướng dẫn sử dụng
                      </h4>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=kRyfjVV7u7g"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-700 hover:underline font-semibold"
                    >
                      Mở trên YouTube
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-slate-200 shadow-inner">
                    <iframe
                      src="https://www.youtube.com/embed/kRyfjVV7u7g"
                      title={`Video hướng dẫn ${selectedDetailTool.name}`}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Audience, Requirements & 3-Step Guide */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Đối tượng & Yêu cầu */}
                <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 flex flex-col gap-4">
                  <h4 className="text-base font-bold text-slate-900">
                    Đối tượng &amp; Yêu cầu
                  </h4>
                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                    <Users className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">
                        Phù hợp với ai?
                      </span>
                      <span className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {selectedDetailTool.audience}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                    <Monitor className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">
                        Yêu cầu sử dụng
                      </span>
                      <span className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {selectedDetailTool.requirements.join(". ")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3-Step Quick Guide (Chuẩn Stitch) */}
                <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 flex flex-col gap-4">
                  <h4 className="text-base font-bold text-slate-900">
                    Hướng dẫn cài đặt nhanh 3 bước
                  </h4>
                  <div className="flex flex-col gap-4">
                    {selectedDetailTool.installSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                          {idx + 1}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-semibold text-slate-900">
                            Bước {idx + 1}
                          </span>
                          <span className="text-xs text-slate-600 mt-0.5">
                            {step}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Nút tải trực tiếp dưới phần hướng dẫn */}
                  <div className="pt-2 border-t border-slate-100">
                    <a
                      href={selectedDetailTool.zipUrl}
                      download
                      className="w-full flex items-center justify-center gap-2 min-h-[46px] px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-sm font-bold shadow-xs transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Tải ngay bản ZIP ({selectedDetailTool.size})
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
