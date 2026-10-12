import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
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
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  // Khóa cuộn trang khi mở album modal
  useEffect(() => {
    if (activeAlbum) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveAlbum(null);
        if (e.key === 'ArrowLeft') prevPhoto();
        if (e.key === 'ArrowRight') nextPhoto();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeAlbum, currentPhotoIdx]);

  const openAlbum = (event, e) => {
    if (e) e.stopPropagation();
    setActiveAlbum(event);
    setCurrentPhotoIdx(0);
    track('view_event_album', {
      event_id: event.id,
      event_location: event.location,
    });
  };

  const nextPhoto = () => {
    if (!activeAlbum?.photos?.length) return;
    setCurrentPhotoIdx((prev) => (prev + 1) % activeAlbum.photos.length);
  };

  const prevPhoto = () => {
    if (!activeAlbum?.photos?.length) return;
    setCurrentPhotoIdx((prev) =>
      prev === 0 ? activeAlbum.photos.length - 1 : prev - 1
    );
  };

  const selectEvent = (event) => {
    try {
      localStorage.setItem('selectedFairEvent', JSON.stringify(event));
      window.dispatchEvent(
        new CustomEvent('fair-event-selected', { detail: event })
      );

      track('select_event_location', {
        event_id: event.id,
        event_location: event.location,
        event_venue: event.venue,
        event_date: event.date,
        event_time: event.time,
      });

      window.setTimeout(() => {
        document
          .getElementById('registration-form')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } catch (error) {
      console.error('Không thể chọn sự kiện:', error);
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
                Chapter 01 · September 2026 · Đã kết thúc
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                Hành trình Tây Nguyên đã đi qua
              </h2>
              <p className="mt-2 text-sm md:text-base font-semibold text-slate-700 leading-relaxed">
                Gia Nghĩa <span className="text-brand-red font-bold">→</span> Bảo Lộc <span className="text-brand-red font-bold">→</span> Đà Lạt
              </p>
              <p className="mt-3 text-xs md:text-sm text-slate-500 leading-relaxed">
                Chuỗi ngày hội mở đầu tại 3 tỉnh Tây Nguyên đã kết thúc thành công rực rỡ, kết nối trực tiếp hàng trăm học sinh và phụ huynh với các lộ trình du học chất lượng.
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

            {/* PAST STOPS CARDS WITH ALBUMS */}
            <div className="grid gap-4 sm:grid-cols-3">
              {SEPTEMBER_PAST_EVENTS.map((event) => {
                const photoCount = event.photos?.length || 0;
                return (
                  <div
                    key={event.id}
                    onClick={(e) => openAlbum(event, e)}
                    className="group cursor-pointer rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-all hover:bg-white hover:border-brand-red/50 hover:shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <span>09 / 2026</span>
                        <span className="text-slate-700 font-bold bg-slate-200/80 border border-slate-300/80 px-2.5 py-0.5 rounded-full text-[10px]">
                          Đã kết thúc
                        </span>
                      </div>

                      <div className="mt-4 text-xl font-extrabold text-slate-900 group-hover:text-brand-red transition-colors">
                        {event.location}
                      </div>
                      <div className="mt-1 text-xs text-slate-500 font-medium">
                        {event.date} {event.venue ? `· ${event.venue}` : ''}
                      </div>

                      <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>Hoàn thành rực rỡ</span>
                      </div>
                    </div>

                    {/* ALBUM BUTTON / SOCIAL PROOF LINK */}
                    <div className="mt-5 pt-3 border-t border-slate-200/70">
                      <button
                        type="button"
                        onClick={(e) => openAlbum(event, e)}
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-white border border-slate-200 px-3 py-2 text-xs font-bold text-slate-800 transition-colors group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red shadow-sm"
                      >
                        <Camera className="h-3.5 w-3.5 shrink-0" />
                        <span>Xem album ({photoCount} ảnh)</span>
                      </button>
                    </div>
                  </div>
                );
              })}
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

      {/* ==================================================== */}
      {/* SOCIAL PROOF ALBUM LIGHTBOX MODAL */}
      {/* ==================================================== */}
      {activeAlbum && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setActiveAlbum(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl bg-slate-900 text-white shadow-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-red-300">
                  Album hình ảnh thực tế · {activeAlbum.date}
                </p>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Education Fair tại {activeAlbum.location}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveAlbum(null)}
                className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Đóng album"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* MODAL IMAGE DISPLAY */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black/60 flex items-center justify-center overflow-hidden">
              {activeAlbum.photos && activeAlbum.photos[currentPhotoIdx] ? (
                <img
                  src={activeAlbum.photos[currentPhotoIdx].url}
                  alt={activeAlbum.photos[currentPhotoIdx].title || `Ảnh ${activeAlbum.location}`}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // Fallback visually if image file isn't uploaded yet
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              ) : null}

              {/* FALLBACK PLACEHOLDER (Trường hợp chưa upload file ảnh thật) */}
              <div
                style={{ display: 'none' }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 to-slate-800"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-950/60 border border-red-500/30 text-brand-red mb-3">
                  <ImageIcon className="h-8 w-8" />
                </div>
                <h4 className="text-base font-bold text-white">
                  {activeAlbum.photos?.[currentPhotoIdx]?.title || `Khoảnh khắc tại ${activeAlbum.location}`}
                </h4>
                <p className="mt-1 text-xs text-slate-400 max-w-md">
                  {activeAlbum.photos?.[currentPhotoIdx]?.caption || 'Ảnh chụp không khí bàn tư vấn và hoạt động check-in của học sinh, phụ huynh.'}
                </p>
                <span className="mt-3 text-[11px] text-slate-500 border border-white/10 px-3 py-1 rounded-full">
                  Đang đồng bộ ảnh chất lượng cao
                </span>
              </div>

              {/* NAVIGATION BUTTONS */}
              {activeAlbum.photos?.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/90 transition-colors"
                    aria-label="Ảnh trước"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={nextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/90 transition-colors"
                    aria-label="Ảnh kế tiếp"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* COUNTER BADGE */}
              <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white border border-white/15">
                {currentPhotoIdx + 1} / {activeAlbum.photos?.length || 1}
              </div>
            </div>

            {/* CAPTION & THUMBNAILS */}
            <div className="border-t border-white/10 bg-slate-950 p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {activeAlbum.photos?.[currentPhotoIdx]?.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {activeAlbum.photos?.[currentPhotoIdx]?.caption}
                  </p>
                </div>

                {/* THUMBNAIL ROW */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                  {activeAlbum.photos?.map((photo, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentPhotoIdx(idx)}
                      className={`h-11 w-11 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        idx === currentPhotoIdx
                          ? 'border-brand-red scale-105'
                          : 'border-white/20 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <div className="h-full w-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                        {idx + 1}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}