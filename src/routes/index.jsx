import React from 'react';
import Nav from '../components/nav.jsx';
import Hero from '../components/hero.jsx';
import LeadForm from '../components/LeadForm.jsx';
import WhyUs from '../components/WhyUs.jsx';
import Audience from '../components/Audience.jsx';
import CareerOrientation from '../components/CareerOrientation.jsx';
import Events from '../components/Events.jsx';
import FAQ from '../components/FAQ.jsx';
import BottomCTA from '../components/BottomCTA.jsx';
import Footer from '../components/footer.jsx';
import FloatingCTA from '../components/FloatingCTA.jsx';
export const route = {
  path: '/',
  title: 'Education Fair 2026 | Hằng Lương',
  description: 'Đăng ký Education Fair 2026 cùng Hằng Lương: hướng nghiệp, du học và việc làm quốc tế tại Vũng Tàu, TP.HCM và Cần Thơ.',
  hydration: 'load',
};

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-white pb-[calc(6rem+env(safe-area-inset-bottom))] text-slate-900 antialiased selection:bg-brand-red selection:text-white md:pb-0">
      <Nav />
      
      <main>
        <Hero />
        <Events />
        <WhyUs />
        <Audience />
        <CareerOrientation />

        <section className="journey-registration scroll-mt-20 bg-slate-900 pb-14 pt-8 text-white md:pb-20 md:pt-10" aria-labelledby="registration-title">
          <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16 lg:px-8">
            <div className="journey-registration__intro">
              <p className="journey-kicker">The next move</p>
              <h2 id="registration-title" className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                Điểm dừng tiếp theo có thể là bạn.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-slate-300">
                Đăng ký miễn phí Education Fair 2026. Chọn thành phố để giữ suất và chia sẻ điều bạn muốn tìm hiểu.
              </p>
              <p className="mt-7 border-t border-white/25 pt-4 text-sm font-semibold text-red-200">
                Vũng Tàu <span className="px-1 text-white/50">→</span> TP.HCM <span className="px-1 text-white/50">→</span> Cần Thơ
              </p>
            </div>
            <LeadForm className="journey-registration__form scroll-mt-24" />
          </div>
        </section>
        
        <section className="bg-white py-14 md:py-20" aria-labelledby="student-stories-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-4 border-b border-slate-300 pb-6 md:grid-cols-[0.7fr_1.3fr] md:items-end md:gap-10">
              <p className="journey-kicker">Real student journeys</p>
              <div>
                <h2 id="student-stories-title" className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                  Hành trình học tập, qua lời người trong cuộc.
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Những câu chuyện học viên đã chia sẻ cùng Hằng Lương. Đây là hành trình cá nhân, không phải hình ảnh của Education Fair tháng 9.
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-300">
              <a
                href="https://www.duhochangluong.edu.vn/khach-hang-cua-chung-toi/chuc-mung-ban-p-n-h-ngan-dat-visa-du-hoc-malaysia-w4585.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group grid min-w-0 gap-5 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-center md:grid-cols-[9rem_minmax(0,1fr)_auto] md:gap-8 md:py-7"
              >
                <img src="/student-ngan-malaysia.png" alt="P.N.H.Ngân, học viên du học Malaysia" loading="lazy" className="aspect-[4/3] w-full object-cover sm:aspect-square" />
                <div>
                  <p className="text-xs font-bold uppercase text-brand-red">Visa du học Malaysia</p>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-900 group-hover:text-brand-red">P.N.H.Ngân</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">“Em cảm thấy mọi người ở Hằng Lương thân thiện với nhiệt tình lắm luôn, mọi người quan tâm cảm nhận của em hơn là lợi ích.”</p>
                </div>
                <span className="font-bold text-slate-800 underline decoration-red-300 underline-offset-4">Đọc câu chuyện →</span>
              </a>

              <a
                href="https://www.duhochangluong.edu.vn/khach-hang-cua-chung-toi/cam-on-nhung-tinh-cam-chan-thanh-tu-hoc-sinh-cua-du-hoc-hang-luong-w4586.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group grid min-w-0 gap-5 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-center md:grid-cols-[9rem_minmax(0,1fr)_auto] md:gap-8 md:py-7"
              >
                <img src="/student-yen-nhi-australia.png" alt="Lê Trần Yến Nhi, học viên du học Úc" loading="lazy" className="aspect-[4/3] w-full object-cover sm:aspect-square" />
                <div>
                  <p className="text-xs font-bold uppercase text-brand-red">Hành trình du học Úc</p>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-900 group-hover:text-brand-red">Lê Trần Yến Nhi</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">“Cảm ơn các anh chị tại Hằng Lương rất nhiều vì không chỉ hỗ trợ em một lần mà tận lần 2, lần 3 và rất nhiều lần...”</p>
                </div>
                <span className="font-bold text-slate-800 underline decoration-red-300 underline-offset-4">Đọc câu chuyện →</span>
              </a>

              <a
                href="https://www.duhochangluong.edu.vn/khach-hang-cua-chung-toi/lam-ho-so-du-hoc-online-trai-nghiem-dich-vu-mien-ban-va-hanh-trinh-nhan-visa-malaysia-cua-gia-bao-w4527.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group grid min-w-0 gap-5 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-center md:grid-cols-[9rem_minmax(0,1fr)_auto] md:gap-8 md:py-7"
              >
                <img src="/student-gia-bao-malaysia.png" alt="Phạm Nguyễn Gia Bảo, học viên du học Malaysia" loading="lazy" className="aspect-[4/3] w-full object-cover sm:aspect-square" />
                <div>
                  <p className="text-xs font-bold uppercase text-brand-red">Visa du học Malaysia</p>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-900 group-hover:text-brand-red">Phạm Nguyễn Gia Bảo</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">“Công ty gửi hồ sơ tận nhà cho em nên em rất yên tâm,” Bảo chia sẻ về trải nghiệm làm hồ sơ.</p>
                </div>
                <span className="font-bold text-slate-800 underline decoration-red-300 underline-offset-4">Đọc câu chuyện →</span>
              </a>
            </div>
          </div>
        </section>

        <FAQ />
        <BottomCTA />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
