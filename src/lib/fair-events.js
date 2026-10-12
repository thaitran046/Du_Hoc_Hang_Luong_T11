export const NOVEMBER_EVENTS = [
  {
    id: 'vung-tau',
    location: 'Vũng Tàu',
    date: '07/11/2026',
    day: '07',
    month: 'THÁNG 11',
    time: '13:00–17:00',
    venue: 'Khách sạn trung tâm TP. Vũng Tàu',
    address: 'Địa chỉ chi tiết & vé mời gửi qua Zalo/SMS sau khi giữ chỗ',
    isTemporary: false,
  },
  {
    id: 'tp-hcm',
    location: 'TP.HCM',
    date: '08/11/2026',
    day: '08',
    month: 'THÁNG 11',
    time: '13:00–17:00',
    venue: 'Khách sạn trung tâm Quận 1 / Quận 3',
    address: 'Địa chỉ chi tiết & vé mời gửi qua Zalo/SMS sau khi giữ chỗ',
    isTemporary: false,
  },
  {
    id: 'can-tho',
    location: 'Cần Thơ',
    date: '09/11/2026',
    day: '09',
    month: 'THÁNG 11',
    time: '13:00–17:00',
    venue: 'Trung tâm hội nghị Q. Ninh Kiều, Cần Thơ',
    address: 'Địa chỉ chi tiết & vé mời gửi qua Zalo/SMS sau khi giữ chỗ',
    isTemporary: false,
  },
];

export const ONLINE_EVENT = {
  id: 'online',
  location: 'Tư vấn Online',
  date: 'Linh hoạt',
  day: 'Online',
  month: 'TOÀN QUỐC',
  time: 'Theo lịch hẹn',
  venue: 'Google Meet / Video Call Zalo (1-1)',
  address: 'Dành riêng cho học sinh & phụ huynh ở xa các điểm offline',
  isTemporary: false,
};

export const ALL_REGISTRATION_EVENTS = [
  ...NOVEMBER_EVENTS,
  ONLINE_EVENT,
];

export const SEPTEMBER_PAST_EVENTS = [
  {
    id: 'gia-nghia-september-2026',
    location: 'Gia Nghĩa',
    date: '24/09/2026',
    status: 'past',
    venue: 'Robin Hotel',
    summary: 'Hơn 100 học sinh & phụ huynh tại Robin Hotel Gia Nghĩa',
    photos: [
      {
        url: '/events/gia-nghia-1.jpg',
        title: 'Bàn tư vấn trực tiếp 1-1',
        caption: 'Chuyên gia Hằng Lương giải đáp lộ trình du học cho học sinh THPT',
      },
      {
        url: '/events/gia-nghia-2.jpg',
        title: 'Đánh giá học bạ & học bổng',
        caption: 'Xét duyệt hồ sơ học bổng trực tiếp cho phụ huynh và học sinh',
      },
      {
        url: '/events/gia-nghia-3.jpg',
        title: 'Check-in nhận cẩm nang du học',
        caption: 'Học sinh nhận bộ quà tặng và cẩm nang du học 2026',
      },
    ],
  },
  {
    id: 'bao-loc-september-2026',
    location: 'Bảo Lộc',
    date: '26/09/2026',
    status: 'past',
    venue: 'Pham Garden Coffee',
    summary: 'Không khí sôi nổi tại Pham Garden Coffee, TP. Bảo Lộc',
    photos: [
      {
        url: '/events/bao-loc-1.jpg',
        title: 'Không gian tư vấn mở',
        caption: 'Không khí trao đổi ấm cúng và sôi nổi tại Pham Garden Coffee',
      },
      {
        url: '/events/bao-loc-2.jpg',
        title: 'Tư vấn định hướng ngành học',
        caption: 'Học sinh tìm hiểu các nhóm ngành hot và cơ hội việc làm quốc tế',
      },
      {
        url: '/events/bao-loc-3.jpg',
        title: 'Giao lưu phụ huynh & tư vấn viên',
        caption: 'Tư vấn giải pháp tài chính và hồ sơ visa cho các gia đình',
      },
    ],
  },
  {
    id: 'da-lat-september-2026',
    location: 'Đà Lạt',
    date: '27/09/2026',
    status: 'past',
    venue: 'Nesta Valley Hotel',
    summary: 'Trạm dừng khép lại ấn tượng tại Nesta Valley Hotel, Đà Lạt',
    photos: [
      {
        url: '/events/da-lat-1.jpg',
        title: 'Hội trường Nesta Valley Hotel',
        caption: 'Hội trường đầy ắp phụ huynh và học sinh tham dự tại Đà Lạt',
      },
      {
        url: '/events/da-lat-2.jpg',
        title: 'Phỏng vấn học bổng tại chỗ',
        caption: 'Nhiều suất học bổng giá trị được tư vấn và hỗ trợ nộp sớm',
      },
      {
        url: '/events/da-lat-3.jpg',
        title: 'Lưu niệm cùng đội ngũ Hằng Lương',
        caption: 'Khép lại chặng đường tháng 9 với niềm tin từ khách hàng',
      },
    ],
  },
];