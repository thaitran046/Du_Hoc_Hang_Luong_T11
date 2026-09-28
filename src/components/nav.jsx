import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Nav() {
  return (
    <header className="relative z-50 w-full bg-slate-900 text-white">
      <nav className="border-b border-white/15">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="flex min-w-0 shrink-0 items-center"
            aria-label="Du học Hằng Lương"
          >
            <img
              src="/hang-luong-logo.png"
              alt="Du học Hằng Lương"
              className="h-9 w-auto max-w-[8.5rem] object-contain sm:h-10 sm:max-w-none"
            />
          </a>

          <div className="flex shrink-0 items-center gap-3">
            <a href="#journey" className="hidden min-h-11 items-center text-sm font-semibold text-slate-200 hover:text-white sm:inline-flex">
              HÀNH TRÌNH
            </a>
            <a
              href="#registration-form"
              className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap bg-brand-red px-3 py-2.5 text-xs font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4 sm:text-sm"
            >
              <span className="sm:hidden">ĐĂNG KÝ</span>
              <span className="hidden sm:inline">GIỮ SUẤT MIỄN PHÍ</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}