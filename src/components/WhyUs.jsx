import React from 'react';
import { ArrowRight } from 'lucide-react';

const benefits = [
  {
    title: 'Tư vấn cá nhân hóa 1-1',
    description: 'Trao đổi trực tiếp mọi băn khoăn về năng lực, sở thích và điều kiện gia đình để tìm ra lộ trình du học thực tế nhất.',
  },
  {
    title: 'Định hướng nghề nghiệp & chọn ngành',
    description: 'Phân tích xu hướng thị trường lao động toàn cầu, chọn ngành học có cơ hội việc làm tốt, không lo thất nghiệp.',
  },
  {
    title: 'Đánh giá hồ sơ & Xét học bổng tại chỗ',
    description: 'Mang theo học bạ (GPA từ 6.5+) để được chuyên gia xét duyệt học bổng từ 20% đến 100%, kể cả khi chưa có chứng chỉ IELTS.',
  },
  {
    title: 'Xây dựng lộ trình học tập tối ưu chi phí',
    description: 'Tham khảo lựa chọn quốc gia (Úc, Mỹ, Canada, Singapore, Malaysia...) và trường học vừa vặn ngân sách, thủ tục visa trọn gói.',
  },
  {
    title: 'Quà tặng & Vé mời độc quyền khi tham dự',
    description: 'Check-in nhận ngay combo quà tặng (balo/sổ tay du học), cẩm nang du học 2026 độc quyền và ưu đãi dịch vụ trực tiếp tại sự kiện.',
  },
];

export default function WhyUs() {
  return (
    <section className="journey-discovery-section bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 max-w-2xl md:mb-12">
          <p className="journey-kicker">Along the way · What you can explore</p>
          <h2 className="mt-3 text-[clamp(2rem,8vw,2.75rem)] font-extrabold leading-tight text-slate-900 md:text-4xl">
            Mỗi cuộc trò chuyện mở ra một hướng đi.
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
            Quyền lợi độc quyền dành cho học sinh, sinh viên và phụ huynh khi tham gia ngày hội Education Fair 2026.
          </p>
        </div>

        <ol className="journey-discoveries">
          {benefits.map((benefit, index) => (
            <li key={benefit.title} className="journey-discovery">
              <span className="journey-discovery__number">0{index + 1}</span>
              <div className="min-w-0">
                <h3 className="text-xl font-bold leading-snug text-slate-900 md:text-2xl">{benefit.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 font-medium text-center sm:text-left">
            🎯 Số lượng suất tư vấn 1-1 có hạn tại mỗi thành phố. Giữ chỗ sớm để được xếp lịch ưu tiên.
          </p>
          <a
            href="#registration-form"
            className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-3 bg-brand-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700"
          >
            ĐĂNG KÝ GẶP CHUYÊN GIA & XÉT HỌC BỔNG
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
