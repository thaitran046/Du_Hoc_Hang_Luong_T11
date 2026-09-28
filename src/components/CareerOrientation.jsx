import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CareerOrientation() {
  return (
    <section id="career-orientation" className="bg-slate-900 py-12 text-white md:py-16">
      <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-[0.7fr_1.3fr] md:items-end md:gap-12 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-red-300">A conversation, not a pitch</p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
            Mang theo câu hỏi của bạn.
          </h2>
        </div>
        <div className="border-y border-white/25 py-5">
          <p className="max-w-2xl text-lg font-semibold leading-relaxed text-white md:text-xl">
            Ngành học, nghề nghiệp, học bổng hay lựa chọn học tập quốc tế — cuộc trò chuyện bắt đầu từ điều bạn muốn tìm hiểu.
          </p>
          <a
            href="#registration-form"
            className="mt-5 inline-flex min-h-12 items-center gap-3 border-b border-red-300 pb-2 font-bold text-white hover:text-red-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span>TƯ VẤN CÁ NHÂN HÓA 1-1</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}