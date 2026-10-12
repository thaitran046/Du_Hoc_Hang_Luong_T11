import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NOVEMBER_EVENTS } from '../lib/fair-events';

export default function Hero() {
  return (
    <section className="fair-cover overflow-hidden bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8 lg:py-16">
        <div className="min-w-0">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-red-300 sm:text-sm">
            Hằng Lương giới thiệu
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] md:text-5xl">
            EDUCATION FAIR <span className="text-red-300">2026</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm font-bold uppercase leading-relaxed text-white sm:text-base">
            Hướng nghiệp <span className="text-red-300">/</span> Du học <span className="text-red-300">/</span> Việc làm quốc tế
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            Một hành trình gặp gỡ, khám phá lựa chọn học tập và nghề nghiệp cho học sinh, sinh viên và phụ huynh. Tặng ngay Cẩm nang Săn học bổng Du học 2026 (PDF) khi đăng ký giữ chỗ.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/20 pt-4 text-xs font-semibold text-slate-200 sm:text-sm">
            <span>Tư vấn cá nhân hóa 1-1</span>
            <span>Định hướng nghề nghiệp</span>
            <span>Xét học bổng tại chỗ (GPA 6.5+)</span>
            <span>Quà tặng check-in độc quyền</span>
          </div>

          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="#registration-form"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-brand-red px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              ĐĂNG KÝ GIỮ SUẤT MIỄN PHÍ
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#journey" className="inline-flex min-h-11 items-center text-sm font-bold text-white underline decoration-red-300 underline-offset-4 hover:text-red-200">
              XEM HÀNH TRÌNH
            </a>
          </div>
        </div>

        <div className="fair-cover__route min-w-0 border-y border-white/25 py-4" aria-label="Ba thành phố, ba ngày trong tháng 11 năm 2026">
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-red-300">Điểm dừng tháng 11</p>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-300">Nov 2026</p>
          </div>
          <ol className="fair-cover__stops">
            {NOVEMBER_EVENTS.map((event) => (
              <li key={event.id} className="fair-cover__stop">
                <a href="#events" className="fair-cover__stop-link">
                  <span className="fair-cover__date">{event.day}<span>{event.id === 'online' ? '' : '.11'}</span></span>
                  <span className="fair-cover__city">{event.location}</span>
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs leading-5 text-slate-300">
            📍 Địa chỉ trung tâm & vé mời chính thức sẽ gửi riêng qua Zalo/SMS sau khi đăng ký.
          </p>
        </div>
      </div>
    </section>
  );
}