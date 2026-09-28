import React from 'react';
import { track } from '../lib/tracking';

export default function BottomCTA() {
  return (
    <section className="bg-slate-900 py-12 text-white md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-7 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-red-300">Education Fair 2026 · tháng 11</p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
            Hẹn bạn tại Vũng Tàu, TP.HCM hoặc Cần Thơ
          </h2>
          <p className="mt-3 leading-7 text-slate-200">
            Hướng nghiệp · Du học · Việc làm quốc tế
          </p>
        </div>
        <a
            href="#registration-form" onClick={() => track('click_cta', { location: 'bottom_cta', cta: 'free_consultation' })}
            className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap bg-brand-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-auto"
          >
            ĐĂNG KÝ GIỮ SUẤT MIỄN PHÍ
        </a>
      </div>
    </section>
  );
}
