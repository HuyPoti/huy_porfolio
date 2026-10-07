"use client";
import * as React from "react";
import { GraduationCap, BookOpen, CheckCircle2, Clock } from "lucide-react";

interface TimelineItemData {
  year: string;
  school: string;
  graduate: boolean;
}

interface TimelineProps {
  items: TimelineItemData[];
}

export default function TimelineStudy({ items }: TimelineProps) {
  return (
    <div className="relative border-l-2 border-blue-200 ml-3.5 pl-6 space-y-6 my-2">
      {items.map((item, idx) => (
        <div key={idx} className="relative group">
          {/* Dot Icon */}
          <div className={`absolute -left-[35px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
            item.graduate 
              ? "bg-emerald-50 border-emerald-500 text-emerald-600" 
              : "bg-blue-50 border-blue-500 text-blue-600"
          }`}>
            {item.graduate ? (
              <GraduationCap className="w-4 h-4" />
            ) : (
              <BookOpen className="w-4 h-4" />
            )}
          </div>

          {/* Content */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {item.year}
              </span>
              {item.graduate ? (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <CheckCircle2 className="w-3 h-3" /> Đã tốt nghiệp
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                  <Clock className="w-3 h-3" /> Đang theo học
                </span>
              )}
            </div>
            <div className="text-base font-semibold text-slate-800">
              {item.school}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
