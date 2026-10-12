import React from 'react';
import {
  ArrowRight,
} from 'lucide-react';

import { track } from '../lib/tracking';
import {
  NOVEMBER_EVENTS,
  SEPTEMBER_PAST_EVENTS,
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

          event_location:
            event.location,

          event_venue:
            event.venue,

          event_date:
            event.date,

          event_time:
            event.time,
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
    <section id="journey" className="journey bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="journey-chapter journey-chapter--past">
          <div className="journey-chapter__heading">
            <p className="journey-kicker">Chapter 01 · September 2026 · Past</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight md:text-4xl">
              Education Fair tháng 9 đã đi qua
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              Gia Nghĩa <span className="text-brand-red">→</span> Bảo Lộc <span className="text-brand-red">→</span> Đà Lạt
            </p>
          </div>

          <ol className="journey-stops journey-stops--past" aria-label="Các điểm dừng Education Fair tháng 9 đã qua">
            {SEPTEMBER_PAST_EVENTS.map((event) => (
              <li key={event.id} className="journey-stop journey-stop--past">
                <span className="journey-stop__node" aria-hidden="true" />
                <span className="journey-stop__date">{event.date}</span>
                <span className="journey-stop__city">{event.location}</span>
                <span className="journey-stop__state">Đã đi qua</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-center">
              <div className="text-3xl font-extrabold text-brand-red">300+</div>
              <div className="mt-1 text-sm font-semibold text-slate-800">Học sinh & phụ huynh tham dự</div>
              <p className="mt-1 text-xs text-slate-500">Tại 3 trạm dừng Tây Nguyên</p>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-center">
              <div className="text-3xl font-extrabold text-brand-red">50+</div>
              <div className="mt-1 text-sm font-semibold text-slate-800">Hồ sơ học bổng được đánh giá</div>
              <p className="mt-1 text-xs text-slate-500">Tư vấn trực tiếp 1-1 tại bàn</p>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-center">
              <div className="text-3xl font-extrabold text-brand-red">100%</div>
              <div className="mt-1 text-sm font-semibold text-slate-800">Nhận cẩm nang & quà kỷ niệm</div>
              <p className="mt-1 text-xs text-slate-500">Check-in nhận quà liền tay</p>
            </div>
          </div>

          <div className="journey-archive mt-6" aria-label="Hình ảnh và điểm dừng Education Fair tháng 9 đã qua">
            {SEPTEMBER_PAST_EVENTS.map((event) => (
              <figure key={event.id} className="journey-archive__slot" data-event-photo-placeholder={event.id}>
                <div className="journey-archive__frame">
                  <span className="journey-archive__index">09 / 2026</span>
                  <span className="journey-archive__place">{event.location}</span>
                  <span className="journey-archive__note">Đã hoàn thành rực rỡ</span>
                </div>
                <figcaption>{event.location} · {event.date}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="journey-transition" aria-label="Hành trình tháng 11 tiếp nối">
          <span className="journey-transition__rule" aria-hidden="true" />
          <p>Hành trình tiếp nối cùng Education Fair Tháng 11</p>
          <span className="journey-transition__rule" aria-hidden="true" />
        </div>

        <div id="events" className="journey-chapter journey-chapter--next scroll-mt-24">
          <div className="journey-chapter__heading">
            <p className="journey-kicker">Chapter 02 · November 2026 · Next</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight md:text-4xl">
              Các điểm dừng tháng 11. Your next move.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              Chọn điểm dừng của bạn · Khung giờ 13:00–17:00 (hoặc chọn Tư vấn Online nếu ở xa).
            </p>
          </div>

          <ol className="journey-stops journey-stops--next" aria-label="Chọn thành phố Education Fair tháng 11">
            {NOVEMBER_EVENTS.map((event) => (
              <li key={event.id} className="journey-stop journey-stop--next">
                <span className="journey-stop__node" aria-hidden="true" />
                <span className="journey-stop__date">{event.date.includes('/') ? event.date.slice(0, 5).replace('/', '.') : event.day}</span>
                <span className="journey-stop__city">{event.location}</span>
                <span className="journey-stop__time">{event.time}</span>
                <span className="journey-stop__venue">{event.venue}</span>
                <span className="journey-stop__venue">{event.address}</span>
                <span className="journey-stop__notice font-bold text-emerald-600">Đang mở đăng ký giữ chỗ</span>
                <button
                  type="button"
                  onClick={() => selectEvent(event)}
                  className="journey-stop__action"
                >
                  Chọn điểm dừng này
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}