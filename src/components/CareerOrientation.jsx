import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export default function CareerOrientation() {
  return (
    <section id="career-orientation" className="bg-slate-900 py-12 text-white md:py-16">
      <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-red-950/60 border border-red-500/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-300">
            <Compass className="h-3.5 w-3.5" />
            Định hướng nghề nghiệp 2026
          </div>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
            Chưa biết mình hợp ngành gì để trao đổi tại Fair?
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Khám phá nhóm tính cách và ngành học phù hợp thông qua bài trắc nghiệm định hướng nghề nghiệp Holland độc quyền hoàn toàn miễn phí (chỉ mất 3 phút).
          </p>
        </div>
        <div className="border-t sm:border-t-0 sm:border-l border-white/20 pt-6 sm:pt-0 sm:pl-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="https://thaitran046.github.io/tracnghiem-holland/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
          >
            LÀM TEST HOLLAND MIỄN PHÍ
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#registration-form"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-brand-red px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            ĐĂNG KÝ GẶP CHUYÊN GIA
          </a>
        </div>
      </div>
    </section>
  );
}