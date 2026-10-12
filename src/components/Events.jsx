import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import { track } from '../lib/tracking';
import {
  NOVEMBER_EVENTS,
  SEPTEMBER_PAST_EVENTS,
  ONLINE_EVENT,
} from '../lib/fair-events';

// ======================================
// EVENTS COMPONENT
// ======================================

export default function Events() {
  const selectEvent = (event) => {
    try {
      // Lưu sự kiện khách chọn
      localStorage.setItem(
        'selectedFairEvent',
        JSON.stringify(event)
      );

      // Báo cho LeadForm biết
      window.dispatchEvent(
        new CustomEvent(
          'fair-event-selected',
          {
            detail: event,
          }
        )
      );

      // Tracking
      track(
        'select_event_location',
        {
          event_id: event.id,
          event_location: event.location,
          event_venue: event.venue,
          event_date: event.date,
          event_time: event.time,
        }
      );

      // Cuộn xuống form đăng ký
      window.setTimeout(() => {
        document
          .getElementById(
            'registration-form'
          )
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
      }, 50);
    } catch (error) {
      console.error(
        'Không thể chọn sự kiện:',
        error
      );
    }
  };

  return (
    <section id="journey" className="bg-slate-50/60 py-16 md:py-24 text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* CHAPTER 01: PAST EVENTS & SOCIAL PROOF */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Chapter 01 · September 2026 · Hoàn thành
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                Hành trình Tây Nguyên đã đi qua
              </h2>
              <p className="mt-2 text-sm md:text-base font-semibold text-slate-700 leading-relaxed">
                Gia Nghĩa <span className="text-brand-red font-bold">→</span> Bảo Lộc <span className="text-brand-red font-bold">→</span> Đà Lạt
              </p>
              <p className="mt-3 text-xs md:text-sm text-slate-500 leading-relaxed">
                Chuỗi ngày hội mở đầu tại 3 tỉnh Tây Nguyên đã diễn ra thành công rực rỡ, kết nối trực tiếp hàng trăm học sinh và phụ huynh với các lộ trình du học chất lượng.
              </p>

              {/* STATS */}
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-red">300+</div>
                  <div className="text-[11px] md:text-xs font-semibold text-slate-700 mt-0.5">Khách tham dự</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-red">50+</div>
                  <div className="text-[11px] md:text-xs font-semibold text-slate-700 mt-0.5">Hồ sơ học bổng</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-brand-red">100%</div>
                  <div className="text-[11px] md:text-xs font-semibold text-slate-700 mt-0.5">Nhận quà du học</div>
                </div>
              </div>
            </div>

            {/* PAST STOPS CARDS */}
            <div className="grid gap-4 sm:grid-cols-3">
              {SEPTEMBER_PAST_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span>09 / 2026</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full text-[10px]">Đã diễn ra</span>
                  </div>
                  <div className="mt-4 text-xl font-extrabold text-slate-900">
                    {event.location}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 font-medium">
                    {event.date}
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] text-slate-600 flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>Hoàn thành rực rỡ</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TRANSITION DIVIDER */}
        <div className="my-10 md:my-14 flex items-center justify-center gap-4 text-center">
          <div className="h-px w-16 bg-slate-300" />
          <p className="text-xs md:text-sm font-extrabold tracking-widest uppercase text-brand-red">
            Tiếp nối hành trình Education Fair tháng 11
          </p>
          <div className="h-px w-16 bg-slate-300" />
        </div>

        {/* CHAPTER 02: NOVEMBER NEXT STOPS */}
        <div id="events" className="scroll-mt-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red" />
              </span>
              Chapter 02 · November 2026 · Đang mở đăng ký
            </div>
            <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              3 thành phố tiếp theo. Your next move.
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              Chọn điểm dừng của bạn trong khung giờ 13:00 – 17:00 để giữ suất gặp trực tiếp đại diện trường và chuyên gia tư vấn.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {NOVEMBER_EVENTS.map((event) => (
              <div
                key={event.id}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-brand-red hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-slate-100 pb-3">
                    <span className="text-3xl font-extrabold tabular-nums text-brand-red">
                      {event.day}<span className="text-sm font-bold text-slate-400">.11</span>
                    </span>
                    <span className="rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                      Đang mở giữ chỗ
                    </span>
                  </div>
                  
                  <h3 className="mt-4 text-2xl font-extrabold text-slate-900 group-hover:text-brand-red transition-colors">
                    {event.location}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    ⏰ {event.time}
                  </p>
                  
                  <div className="mt-4 space-y-1 text-xs text-slate-600">
                    <p className="font-medium text-slate-800">📍 {event.venue}</p>
                    <p className="text-slate-500">✉️ {event.address}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => selectEvent(event)}
                    className="w-full inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition-colors group-hover:bg-brand-red"
                  >
                    CHỌN ĐIỂM DỪNG NÀY
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ONLINE BANNER OPTION */}
          <div className="mt-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-red-300 tracking-wider">
                💻 Bạn ở tỉnh thành khác ngoài 3 địa điểm trên?
              </div>
              <p className="mt-1 text-sm md:text-base font-semibold text-slate-200">
                Đăng ký nhận lịch Tư vấn Online 1-1 qua Google Meet/Zalo hoàn toàn miễn phí.
              </p>
            </div>
            <button
              type="button"
              onClick={() => selectEvent(ONLINE_EVENT)}
              className="shrink-0 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-slate-100"
            >
              CHỌN TƯ VẤN ONLINE
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}