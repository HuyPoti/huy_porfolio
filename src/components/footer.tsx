import { Github, Facebook, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200/80 py-8 text-slate-600">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 gap-4 text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
          <span className="font-semibold text-slate-800">Kho Công Cụ Học Tập &amp; Giảng Dạy (EdPortfolio)</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>Phát triển bởi Nguyễn Gia Huy</span>
        </div>
        <div className="flex items-center gap-4 text-slate-500">
          <Link
            href="https://github.com/HuyPoti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub của Nguyễn Gia Huy"
            className="hover:text-blue-600 transition-colors p-1"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/huy-nguyen-gia-46bb6a35b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn của Nguyễn Gia Huy"
            className="hover:text-blue-600 transition-colors p-1"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.facebook.com/ghuy.nguyen.2024"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook của Nguyễn Gia Huy"
            className="hover:text-blue-600 transition-colors p-1"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:khoahocgiahuy@gmail.com"
            aria-label="Email liên hệ của Nguyễn Gia Huy"
            className="hover:text-blue-600 transition-colors p-1"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}