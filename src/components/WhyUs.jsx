import React from 'react';

const benefits = [
  {
    title: 'Tư vấn cá nhân hóa 1-1',
    description: 'Trao đổi về mục tiêu, mối quan tâm và lộ trình phù hợp với từng người.',
  },
  {
    title: 'Định hướng nghề nghiệp',
    description: 'Cùng chuyên gia nhìn lại năng lực, sở thích và lựa chọn ngành học.',
  },
  {
    title: 'Đánh giá hồ sơ học bổng',
    description: 'Tìm hiểu những điểm cần chuẩn bị cho hồ sơ và cơ hội học bổng phù hợp.',
  },
  {
    title: 'Xây dựng lộ trình học tập / du học',
    description: 'Tham khảo lựa chọn quốc gia, trường và ngành theo mục tiêu, học lực và tài chính.',
  },
  {
    title: 'Cơ hội học tập và việc làm quốc tế',
    description: 'Tìm hiểu các hướng học tập và công việc quốc tế phù hợp với kế hoạch cá nhân.',
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
      </div>
    </section>
  );
}
