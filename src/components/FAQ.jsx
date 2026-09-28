import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Đăng ký Education Fair có mất phí không?',
    a: 'Đăng ký tham dự Education Fair 2026 là miễn phí.',
  },
  {
    q: 'Ai có thể tham dự chương trình?',
    a: 'Chương trình hướng đến học sinh THPT, sinh viên đại học và phụ huynh quan tâm đến định hướng nghề nghiệp, du học và cơ hội quốc tế.',
  },
  {
    q: 'Địa điểm tổ chức đã được xác nhận chưa?',
    a: 'Venue và địa chỉ hiện hiển thị “Đang cập nhật”; thông tin này chưa được xác nhận.',
  },
  {
    q: 'Tôi chọn thành phố tham dự ở đâu?',
    a: 'Chọn Vũng Tàu, TP.HCM hoặc Cần Thơ trong form đăng ký trước khi gửi thông tin.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-xl md:mb-10">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-red">Thông tin cần biết</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
            Education Fair · FAQ
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-300">
          {faqs.map((item, index) => (
            <div key={item.q}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-slate-900">{item.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-blue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="pb-5 pr-10 text-sm leading-6 text-slate-600 md:text-base">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
