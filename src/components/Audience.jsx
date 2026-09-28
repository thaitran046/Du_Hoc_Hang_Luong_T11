import React from 'react';

const audiences = [
  {
    title: 'Học sinh THPT',
    description: 'Định hướng ngành nghề và tìm hiểu lộ trình học tập sau phổ thông.',
  },
  {
    title: 'Sinh viên đại học',
    description: 'Khám phá lựa chọn học tiếp, chuyển tiếp và cơ hội học bổng.',
  },
  {
    title: 'Phụ huynh',
    description: 'Cùng trao đổi về lựa chọn phù hợp với mục tiêu và điều kiện của gia đình.',
  },
];

export default function Audience() {
  return (
    <section className="bg-white pb-8 pt-12 md:pb-10 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-7 border-y border-slate-300 py-6 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-10 md:py-8">
          <div>
            <p className="journey-kicker">Who comes along</p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl">
              Một hành trình, nhiều điểm nhìn.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
            {audiences.map((audience) => (
              <article key={audience.title} className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900">{audience.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{audience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
