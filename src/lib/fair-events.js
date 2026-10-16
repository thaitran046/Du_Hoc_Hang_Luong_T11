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
        url: '/events/gia-nghia/01-khong-khi-checkin.jpg',
        title: 'Check-in sự kiện tại Robin Hotel',
        caption: 'Học sinh và phụ huynh có mặt từ rất sớm nhận cẩm nang du học 2026',
      },
      {
        url: '/events/gia-nghia/02-ban-tu-van-1-1.jpg',
        title: 'Bàn tư vấn trực tiếp 1-1',
        caption: 'Chuyên gia Hằng Lương giải đáp lộ trình du học cá nhân hóa cho từng bạn',
      },
      {
        url: '/events/gia-nghia/03-dai-dien-truong-quoc-te.jpg',
        title: 'Đại diện trường quốc tế trao đổi với học sinh',
        caption: 'Tìm hiểu trực tiếp học phí, điều kiện nhập học và học bổng các trường',
      },
      {
        url: '/events/gia-nghia/04-phu-huynh-hoc-sinh.jpg',
        title: 'Tư vấn lộ trình học bổng & tài chính',
        caption: 'Hỗ trợ phụ huynh xây dựng kế hoạch tài chính và thủ tục chứng minh tài chính',
      },
      {
        url: '/events/gia-nghia/05-toan-canh-hoi-truong.jpg',
        title: 'Toàn cảnh không khí đông đúc tại hội trường',
        caption: 'Các bàn tư vấn luôn kín chỗ phụ huynh và học sinh chăm chú lắng nghe',
      },
      {
        url: '/events/gia-nghia/06-chup-hinh-luu-niem.jpg',
        title: 'Chụp ảnh lưu niệm cùng đội ngũ Hằng Lương',
        caption: 'Khởi đầu rực rỡ cho chuỗi sự kiện Education Fair khu vực Tây Nguyên',
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
        url: '/events/bao-loc/01-checkin-su-kien.jpg',
        title: 'Không khí đón tiếp tại Pham Garden Coffee',
        caption: 'Không gian mở thân thiện, phụ huynh và học sinh check-in tham dự',
      },
      {
        url: '/events/bao-loc/02-dai-dien-truong-tu-van.jpg',
        title: 'Đại diện các trường hướng dẫn chọn ngành',
        caption: 'Khám phá các nhóm ngành STEM, Kinh doanh, Y sinh và cơ hội việc làm quốc tế',
      },
      {
        url: '/events/bao-loc/03-phu-huynh-trao-doi.jpg',
        title: 'Phụ huynh cùng học sinh lắng nghe tư vấn',
        caption: 'Cùng chuyên gia tháo gỡ băn khoăn về học lực, ngoại ngữ và visa du học',
      },
      {
        url: '/events/bao-loc/04-tu-van-hoc-bong-1-1.jpg',
        title: 'Phân tích hồ sơ săn học bổng',
        caption: 'Đánh giá học bạ tại chỗ và tư vấn các mức học bổng từ 30% đến 100%',
      },
      {
        url: '/events/bao-loc/05-khong-khi-dong-duc.jpg',
        title: 'Bàn tư vấn luôn kín chỗ suốt sự kiện',
        caption: 'Đông đảo học sinh các trường THPT tại TP. Bảo Lộc hào hứng tham gia',
      },
      {
        url: '/events/bao-loc/06-be-mac-su-kien.jpg',
        title: 'Lưu niệm hoàn thành rực rỡ chặng Bảo Lộc',
        caption: 'Những nụ cười rạng rỡ của học sinh và đại diện trường quốc tế',
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
        url: '/events/da-lat/01-don-tiep-hoc-sinh.jpg',
        title: 'Đón tiếp học sinh & phụ huynh tại Nesta Valley Hotel',
        caption: 'Hội trường Nesta Valley Hotel chật kín chỗ từ những phút đầu tiên',
      },
      {
        url: '/events/da-lat/02-ban-tu-van-cac-truong.jpg',
        title: 'Gặp gỡ trực tiếp đại diện trường quốc tế',
        caption: 'Đại diện các trường đại học hàng đầu tư vấn trực tiếp chính sách tuyển sinh',
      },
      {
        url: '/events/da-lat/03-tu-van-chuyen-sau-1-1.jpg',
        title: 'Tư vấn chuyên sâu 1-1 ngành học & visa',
        caption: 'Định hướng lộ trình du học phù hợp theo năng lực cá nhân và mục tiêu nghề nghiệp',
      },
      {
        url: '/events/da-lat/04-phu-huynh-tim-hieu-ho-so.jpg',
        title: 'Phụ huynh tìm hiểu cơ hội việc làm & định cư',
        caption: 'Trao đổi kỹ lưỡng về thủ tục visa và các chính sách ở lại làm việc sau tốt nghiệp',
      },
      {
        url: '/events/da-lat/05-soi-noi-ban-tu-van.jpg',
        title: 'Không khí sôi nổi, hào hứng xuyên suốt chương trình',
        caption: 'Các bàn tư vấn trao đổi liên tục không ngừng nghỉ đến tận cuối giờ',
      },
      {
        url: '/events/da-lat/06-chup-anh-luu-niem.jpg',
        title: 'Chụp ảnh kỷ niệm khép lại chuỗi Education Fair T9',
        caption: 'Khép lại thành công trọn vẹn, mở ra hành trình bước tiếp sang tháng 11',
      },
    ],
  },
];