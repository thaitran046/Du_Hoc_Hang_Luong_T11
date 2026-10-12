import React from 'react';
import { ArrowRight, Sparkles, Compass, Award, PiggyBank, Gift } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    num: '01',
    title: 'Tư vấn cá nhân hóa 1-1',
    description: 'Trao đổi trực tiếp mọi băn khoăn về năng lực, sở thích và điều kiện gia đình để tìm ra lộ trình du học thực tế nhất.',
  },
  {
    icon: Compass,
    num: '02',
    title: 'Định hướng nghề nghiệp & chọn ngành',
    description: 'Phân tích xu hướng thị trường lao động toàn cầu, chọn ngành học có cơ hội việc làm tốt, không lo thất nghiệp.',
  },
  {
    icon: Award,
    num: '03',
    title: 'Đánh giá hồ sơ & Xét học bổng tại chỗ',
    description: 'Mang theo học bạ (GPA từ 6.5+) để được chuyên gia xét duyệt học bổng từ 20% đến 100%, kể cả khi chưa có chứng chỉ IELTS.',
  },
  {
    icon: PiggyBank,
    num: '04',
    title: 'Xây dựng lộ trình học tập tối ưu chi phí',
    description: 'Tham khảo lựa chọn quốc gia (Úc, Mỹ, Canada, Singapore, Malaysia...) và trường học vừa vặn ngân sách, thủ tục visa trọn gói.',
  },
  {
    icon: Gift,
    num: '05',
    title: 'Quà tặng & Vé mời độc quyền khi tham dự',
    description: 'Check-in nhận ngay combo quà tặng (balo/sổ tay du học), cẩm nang du học 2026 độc quyền và ưu đãi dịch vụ trực tiếp tại sự kiện.',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-50/70 py-16 md:py-24 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">
            Along the way · What you can explore
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Mỗi cuộc trò chuyện mở ra một hướng đi.
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
            Quyền lợi độc quyền dành cho học sinh, sinh viên và phụ huynh khi tham gia ngày hội Education Fair 2026.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-red hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-brand-red font-bold text-sm">
                      {benefit.num}
                    </span>
                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-brand-red transition-colors" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-700 font-medium text-center sm:text-left">
            🎯 <span className="font-bold">Lưu ý:</span> Số lượng suất tư vấn 1-1 có hạn tại mỗi thành phố. Đăng ký giữ chỗ sớm để được xếp lịch ưu tiên.
          </p>
          <a
            href="#registration-form"
            className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand-red px-6 py-3 text-xs font-bold text-white transition-all hover:bg-red-700 hover:shadow-md"
          >
            ĐĂNG KÝ GẶP CHUYÊN GIA
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
