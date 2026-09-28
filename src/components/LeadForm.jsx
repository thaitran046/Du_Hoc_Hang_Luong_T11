import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  motion,
  AnimatePresence,
} from 'framer-motion';
import {
  ChevronRight,
  GraduationCap,
  Briefcase,
  Users,
  Send,
  MapPin,
  Calendar,
  Clock3,
  CheckCircle2,
} from 'lucide-react';
import {
  cn,
  useUtm,
} from '../lib/utils';
import {
  getAttribution,
  track,
} from '../lib/tracking';
import { NOVEMBER_EVENTS } from '../lib/fair-events';

// ======================================================
// ĐỐI TƯỢNG
// ======================================================
const roles = [
  {
    id: 'high-school',
    label: 'Học sinh THPT',
    icon: GraduationCap,
  },
  {
    id: 'university',
    label: 'Sinh viên Đại học',
    icon: GraduationCap,
  },
  {
    id: 'professional',
    label: 'Người đi làm',
    icon: Briefcase,
  },
  {
    id: 'parent',
    label: 'Phụ huynh',
    icon: Users,
  },
];

// ======================================================
// CHƯƠNG TRÌNH
// ======================================================
const programs = [
  'Du học Trung học',
  'Dự bị đại học',
  'Cao Đẳng',
  'Đại học',
  'Sau đại học',
  'Khoá ngắn hạn',
  'Du học nghề',
  'Chưa quyết định',
];

// ======================================================
// QUỐC GIA
// ======================================================
const countries = [
  'Australia',
  'UK',
  'USA',
  'Canada',
  'New Zealand',
  'Singapore',
  'Euro',
  'Khác',
  'Chưa quyết định',
];

// ======================================================
// THỜI GIAN
// ======================================================
const timeframes = [
  'Trong 3 tháng tới',
  '3 - 6 tháng',
  '6 - 12 tháng',
  '1 - 2 năm',
  'Chưa quyết định',
];

// ======================================================
// NHU CẦU HỖ TRỢ
// ======================================================
const assistance = [
  'Chọn ngành',
  'Chọn trường',
  'Học bổng',
  'Hồ sơ du học',
  'Visa',
  'Chi phí',
  'Hướng nghiệp',
  'Lộ trình du học',
];

// ======================================================
// GỬI LEAD API
// ======================================================
async function sendLead(data) {
  const response = await fetch(
    '/api/lead',
    {
      method: 'POST',
      headers: {
        'Content-Type':
          'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  const rawText =
    await response.text();
  let result = {};
  try {
    result = rawText
      ? JSON.parse(rawText)
      : {};
  } catch {
    throw new Error(
      `API không trả về JSON. Status ${response.status}: ${rawText.substring(
        0,
        300
      )}`
    );
  }
  if (
    !response.ok ||
    !result.success
  ) {
    throw new Error(
      result.message ||
        `Lead API returned ${response.status}`
    );
  }
  return result;
}

// ======================================================
// COMPONENT
// ======================================================
export default function LeadForm({
  className,
}) {
  const [
    step,
    setStep,
  ] = useState(1);
  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

  // Event đang chọn
  const [
    selectedEvent,
    setSelectedEvent,
  ] = useState(null);

  // Form Data
  const [
    formData,
    setFormData,
  ] = useState({
    role: '',
    program: '',
    fullName: '',
    phone: '',
    email: '',
    country: '',
    timeframe: '',
    location: '',
    needs: [],
  });

  const utm = useUtm();
  const formRef = useRef(null);
  const hasViewedForm = useRef(false);
  const hasStartedForm = useRef(false);

  useEffect(() => {
    const element = formRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (
          entry.isIntersecting &&
          !hasViewedForm.current
        ) {
          hasViewedForm.current = true;

          track('view_form', {
            form_name:
              'education_fair_registration',
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  
  const handleFormStart = () => {
    if (hasStartedForm.current) {
      return;
    }

    hasStartedForm.current = true;

    track('start_form', {
      form_name:
        'education_fair_registration',
      step,
    });
  };




  // Tìm event theo ID
  const findEvent = (eventId) => {
    return NOVEMBER_EVENTS.find(
      (event) =>
        event.id === eventId
    );
  };

  // Xử lý khi chọn địa điểm ngay trong form (hoặc từ bên dưới đồng bộ lên)
  const handleLocationChange = (
    eventId
  ) => {
    const event =
      findEvent(eventId);
    setSelectedEvent(
      event || null
    );
    setFormData((prev) => ({
      ...prev,
      location:
        event?.location || '',
    }));

    if (event) {
      localStorage.setItem(
        'selectedFairEvent',
        JSON.stringify(event)
      );
      window.dispatchEvent(
        new CustomEvent(
          'fair-event-selected',
          {
            detail: event,
          }
        )
      );
    } else {
      localStorage.removeItem(
        'selectedFairEvent'
      );
    }
  };

  // Đồng bộ 2 chiều: Lắng nghe sự kiện từ section bên dưới hoặc localStorage
  useEffect(() => {
    const savedEvent =
      localStorage.getItem(
        'selectedFairEvent'
      );
    if (savedEvent) {
      try {
        const parsedEvent =
          JSON.parse(savedEvent);
        const matchedEvent =
          findEvent(
            parsedEvent?.id
          );
        if (matchedEvent) {
          setSelectedEvent(matchedEvent);
          setFormData((prev) => ({
            ...prev,
            location: matchedEvent.location,
          }));
          localStorage.setItem(
            'selectedFairEvent',
            JSON.stringify(matchedEvent)
          );
        } else {
          localStorage.removeItem(
            'selectedFairEvent'
          );
        }
      } catch (error) {
        console.error(
          'Không đọc được selectedFairEvent:',
          error
        );
        localStorage.removeItem(
          'selectedFairEvent'
        );
      }
    }

    const handleEventSelected = (
      event
    ) => {
      const incomingEvent =
        event.detail;
      if (!incomingEvent) {
        return;
      }
      const matchedEvent =
        findEvent(
          incomingEvent?.id
        );
      if (!matchedEvent) {
        localStorage.removeItem(
          'selectedFairEvent'
        );
        setSelectedEvent(null);
        setFormData((prev) => ({
          ...prev,
          location: '',
        }));
        return;
      }
      setSelectedEvent(
        matchedEvent
      );
      setFormData((prev) => ({
        ...prev,
        location: matchedEvent.location,
      }));
      localStorage.setItem(
        'selectedFairEvent',
        JSON.stringify(matchedEvent)
      );
    };

    window.addEventListener(
      'fair-event-selected',
      handleEventSelected
    );
    return () => {
      window.removeEventListener(
        'fair-event-selected',
        handleEventSelected
      );
    };
  }, []);

  // Chuyển bước
  const handleNext = () => {
    track(
      'form_step_1',
      {
        role:
          formData.role,
        program:
          formData.program,
        event_id:
          selectedEvent?.id ||
          '',
        event_location:
          selectedEvent?.location ||
          '',
      }
    );
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  // Chọn nhu cầu
  const toggleNeed = (need) => {
    setFormData((prev) => ({
      ...prev,
      needs:
        prev.needs.includes(
          need
        )
          ? prev.needs.filter(
              (item) =>
                item !== need
            )
          : [
              ...prev.needs,
              need,
            ],
    }));
  };

  // Submit form
  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    if (
      !formData.fullName.trim()
    ) {
      alert(
        'Vui lòng nhập họ và tên.'
      );
      return;
    }
    if (
      !formData.phone.trim()
    ) {
      alert(
        'Vui lòng nhập số điện thoại.'
      );
      return;
    }
    if (
      !formData.email.trim()
    ) {
      alert(
        'Vui lòng nhập email để nhận xác nhận tham gia sự kiện.'
      );
      return;
    }
    if (!selectedEvent) {
      alert(
        'Vui lòng chọn địa điểm tham gia Education Fair.'
      );
      return;
    }

    // TRACK: Hoàn thành bước 2
    track('form_step_2', {
      form_name: 'education_fair_registration',
      country: formData.country,
      timeframe: formData.timeframe,
      event_id: selectedEvent?.id || '',
      event_location: selectedEvent?.location || '',
      needs_count: formData.needs.length,
    });

    setIsSubmitting(true);
    try {
      const finalData = {
        ...formData,
        ...utm,
        ...getAttribution(),
        leadType: 'education_fair',
        eventId:
          selectedEvent?.id ||
          '',
        eventLocation:
          selectedEvent?.location ||
          '',
        eventVenue:
          selectedEvent?.venue ||
          '',
        eventAddress:
          selectedEvent?.address ||
          '',
        eventDate:
          selectedEvent?.date ||
          '',
        eventTime:
          selectedEvent?.time ||
          '',
        page_url:
          window.location.href,
        date_created:
          new Date().toISOString(),
      };

      track(
        'submit_form',
        {
          form_name:
            'education_fair_registration',
          country:
            formData.country,
          program:
            formData.program,
          event_id:
            selectedEvent?.id ||
            '',
          event_location:
            selectedEvent?.location ||
            '',
          event_venue:
            selectedEvent?.venue ||
            '',
        }
      );

      const result =
        await sendLead(
          finalData
        );

      track(
        'generate_lead',
        {
          form_name:
            'education_fair_registration',
          country:
            formData.country,
          program:
            formData.program,
          event_id:
            selectedEvent?.id ||
            '',
          event_location:
            selectedEvent?.location ||
            '',
        }
      );

      sessionStorage.setItem(
        'hl_lead_submitted',
        '1'
      );
      sessionStorage.setItem(
        'hl_customer_name',
        formData.fullName
      );
      sessionStorage.setItem(
        'hl_customer_email',
        formData.email
      );
      sessionStorage.setItem(
        'hl_fair_event',
        JSON.stringify(
          selectedEvent
        )
      );
      localStorage.setItem(
        'selectedFairEvent',
        JSON.stringify(
          selectedEvent
        )
      );

      window.location.href =
        '/cam-on';
    } catch (error) {
      console.error(
        'Lead submission failed:',
        error
      );
      track(
        'form_error',
        {
          form_name:
            'education_fair_registration',
          error:
            error?.message ||
            'Unknown error',
        }
      );
      setIsSubmitting(
        false
      );
      alert(
        error?.message ||
          'Có lỗi khi gửi thông tin. Vui lòng thử lại hoặc liên hệ hotline.'
      );
    }
  };

  return (
    <div
      id="registration-form"
      className={cn(
        'scroll-mt-24 overflow-hidden border border-slate-200 bg-white shadow-sm',
        className
      )}
    >
      {/* HEADER */}
      <div className="bg-slate-900 px-5 py-5 text-white sm:px-7">
        <p className="text-xs font-bold uppercase tracking-wide text-red-200">
          Education Fair 2026 · đăng ký miễn phí
        </p>
        <h3 className="mt-2 text-xl font-bold leading-tight md:text-2xl">
          Giữ suất tham dự
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-200">
          Chọn thành phố và chia sẻ nhu cầu để nhận tư vấn cá nhân hóa 1-1.
        </p>
        <div className="mt-5" aria-label={`Bước ${step} trên 2`}>
          <p className="mb-2 text-xs font-semibold text-slate-300">BƯỚC {step} / 2</p>
          <div className="grid grid-cols-2 gap-3">
            <div className={cn('border-t-2 pt-2 text-xs font-semibold sm:text-sm', step >= 1 ? 'border-red-400 text-white' : 'border-white/30 text-slate-400')}>
              1 · Nhu cầu tư vấn
            </div>
            <div className={cn('border-t-2 pt-2 text-xs font-semibold sm:text-sm', step >= 2 ? 'border-red-400 text-white' : 'border-white/30 text-slate-400')}>
              2 · Thông tin liên hệ
            </div>
          </div>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        onFocusCapture={handleFormStart}
        onClickCapture={handleFormStart}
        className="space-y-5 p-5 sm:p-7"
      >
        <AnimatePresence
          mode="wait"
        >
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -20,
              }}
              className="space-y-6"
            >
              {/* ROLE */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-800">
                  Bạn là ai? <span className="text-brand-red">Bắt buộc</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {roles.map(
                    (role) => {
                      const Icon =
                        role.icon;
                      return (
                        <button
                          key={
                            role.id
                          }
                          type="button"
                          onClick={() =>
                            setFormData(
                              (prev) => ({
                                ...prev,
                                role:
                                  role.label,
                              })
                            )
                          }
                          className={cn(
                            'flex min-h-16 flex-col items-center justify-center rounded-lg border px-2 py-3 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red',
                            formData.role ===
                              role.label
                              ? 'border-brand-red bg-red-50 text-brand-red'
                              : 'border-slate-100 text-slate-600 hover:border-slate-200'
                          )}
                        >
                          <Icon className="w-6 h-6 mb-2" />
                          {role.label}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* PROGRAM */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-800">
                  Bạn quan tâm chương trình nào? <span className="text-brand-red">Bắt buộc</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {programs.map(
                    (program) => (
                      <button
                        key={
                          program
                        }
                        type="button"
                        onClick={() =>
                          setFormData(
                            (prev) => ({
                              ...prev,
                              program,
                            })
                          )
                        }
                        className={cn(
                          'min-h-11 px-3 py-2 rounded-lg border text-sm font-medium text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red',
                          formData.program ===
                            program
                            ? 'border-brand-red bg-red-50 text-brand-red'
                            : 'border-slate-100 text-slate-600 hover:border-slate-200'
                        )}
                      >
                        {program}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* NEXT BUTTON */}
              <button
                type="button"
                onClick={handleNext}
                disabled={
                  !formData.role ||
                  !formData.program
                }
                className="flex min-h-12 w-full items-center justify-center gap-2 bg-brand-red py-3 font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red disabled:opacity-50"
              >
                TIẾP TỤC
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -20,
              }}
              className="space-y-5"
            >
              {/* NAME + PHONE */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-bold text-slate-700">
                    Họ và tên <span className="text-brand-red">· Bắt buộc</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={
                      formData.fullName
                    }
                    onChange={(e) =>
                      setFormData(
                        (prev) => ({
                          ...prev,
                          fullName:
                            e.target.value,
                        })
                      )
                    }
                    className="min-h-12 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-brand-red focus:ring-2 focus:ring-red-100"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-bold text-slate-700">
                    Số điện thoại <span className="text-brand-red">· Bắt buộc</span>
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="09xx xxx xxx"
                    value={
                      formData.phone
                    }
                    onChange={(e) =>
                      setFormData(
                        (prev) => ({
                          ...prev,
                          phone:
                            e.target.value,
                        })
                      )
                    }
                    className="min-h-12 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-brand-red focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-1 block text-sm font-bold text-slate-700">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="example@gmail.com"
                  value={
                    formData.email
                  }
                  onChange={(e) =>
                    setFormData(
                      (prev) => ({
                        ...prev,
                        email:
                          e.target.value,
                      })
                    )
                  }
                  className="min-h-12 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-brand-red focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* COUNTRY + TIMEFRAME */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-bold text-slate-700">
                    Nước quan tâm <span className="font-normal text-slate-500">· Không bắt buộc</span>
                  </label>
                  <select
                    value={
                      formData.country
                    }
                    onChange={(e) =>
                      setFormData(
                        (prev) => ({
                          ...prev,
                          country:
                            e.target.value,
                        })
                      )
                    }
                    className="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-red-100"
                  >
                    <option value="">
                      Chọn quốc gia
                    </option>
                    {countries.map(
                      (country) => (
                        <option
                          key={
                            country
                          }
                          value={
                            country
                          }
                        >
                          {country}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-bold text-slate-700">
                    Thời gian dự kiến <span className="font-normal text-slate-500">· Không bắt buộc</span>
                  </label>
                  <select
                    value={
                      formData.timeframe
                    }
                    onChange={(e) =>
                      setFormData(
                        (prev) => ({
                          ...prev,
                          timeframe:
                            e.target.value,
                        })
                      )
                    }
                    className="min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-red-100"
                  >
                    <option value="">
                      Chọn thời gian
                    </option>
                    {timeframes.map(
                      (time) => (
                        <option
                          key={time}
                          value={time}
                        >
                          {time}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              {/* ĐỊA ĐIỂM THAM GIA (TÍCH HỢP TRỰC TIẾP TRÊN FORM) */}
              <div>
                <label className="mb-1 block text-sm font-bold text-slate-700">
                  Thành phố tham dự <span className="text-brand-red">· Bắt buộc</span>
                </label>
                <select
                  required
                  value={
                    selectedEvent?.id ||
                    ''
                  }
                  onChange={(e) =>
                    handleLocationChange(
                      e.target.value
                    )
                  }
                  className={cn(
                    'min-h-12 w-full rounded-lg border bg-white px-4 py-3 outline-none transition-colors focus:ring-2 focus:ring-red-100',
                    selectedEvent
                      ? 'border-brand-red ring-1 ring-red-100'
                      : 'border-slate-200 focus:border-brand-red'
                  )}
                >
                  <option value="">
                    Chọn địa điểm tham gia
                  </option>
                  {NOVEMBER_EVENTS.map(
                    (event) => (
                      <option
                        key={
                          event.id
                        }
                        value={
                          event.id
                        }
                      >
                        {event.location}
                        {' – '}
                        {event.date} (venue đang cập nhật)
                      </option>
                    )
                  )}
                </select>

                {/* Hiển thị chi tiết địa điểm khi đã chọn */}
                {selectedEvent && (
                  <div className="mt-4 border-y border-slate-300 py-4">
                    <div className="flex flex-wrap items-end justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-brand-red">
                          Điểm dừng đã chọn
                        </p>
                        <p className="mt-1 text-xl font-extrabold text-slate-900">
                          {selectedEvent.location}
                        </p>
                      </div>
                      <p className="font-bold tabular-nums text-slate-800">
                        {selectedEvent.date} · {selectedEvent.time}
                      </p>
                    </div>
                    <div className="mt-4 grid gap-2 text-xs leading-5 text-slate-600 sm:grid-cols-2">
                      <p>Venue chưa xác nhận: {selectedEvent.venue}</p>
                      <p>Địa chỉ chưa xác nhận: {selectedEvent.address}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* NEEDS */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Bạn cần hỗ trợ điều gì? <span className="font-normal text-slate-500">· Không bắt buộc, có thể chọn nhiều</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {assistance.map(
                    (need) => (
                      <button
                        key={
                          need
                        }
                        type="button"
                        onClick={() =>
                          toggleNeed(
                            need
                          )
                        }
                        className={cn(
                          'min-h-11 px-3 py-2 rounded-md border text-xs font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red',
                          formData.needs.includes(
                            need
                          )
                            ? 'border-brand-red bg-red-50 text-brand-red'
                            : 'border-slate-100 text-slate-600 hover:border-slate-200'
                        )}
                      >
                        {need}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={
                    handleBack
                  }
                  disabled={
                    isSubmitting
                  }
                  className="min-h-12 px-5 py-3 font-bold text-slate-700 underline underline-offset-4 disabled:opacity-50"
                >
                  QUAY LẠI
                </button>
                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !selectedEvent
                  }
                  className="flex min-h-12 flex-1 items-center justify-center bg-brand-red px-3 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Send className="w-5 h-5 mr-2 animate-pulse" />
                      ĐANG GỬI...
                    </>
                  ) : (
                    <>
                      <span className="sm:hidden">GIỮ SUẤT MIỄN PHÍ</span>
                      <span className="hidden sm:inline">ĐĂNG KÝ GIỮ SUẤT MIỄN PHÍ</span>
                    </>
                  )}
                </button>
              </div>

              {/* PRIVACY */}
              <p className="text-xs leading-5 text-slate-500">
                Thông tin của bạn được bảo mật và chỉ sử dụng cho mục đích tư vấn và xác nhận tham gia sự kiện.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}