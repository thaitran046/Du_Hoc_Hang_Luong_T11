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
        url: '/events/gia-nghia/01-dien-gia-khai-mac-hoi-truong.jpg',
        title: 'Khai mạc hội thảo & Toàn cảnh hội trường',
        caption: 'Học sinh và phụ huynh ngồi kín hội trường Robin Hotel nghe diễn giả phát biểu khai mạc',
      },
      {
        url: '/events/gia-nghia/02-dien-gia-chia-se-chuyen-sau.jpg',
        title: 'Diễn giả chia sẻ định hướng du học 2026',
        caption: 'Chuyên gia Hằng Lương phân tích xu hướng ngành học và chiến lược săn học bổng quốc tế',
      },
      {
        url: '/events/gia-nghia/03-ban-tu-van-truc-tiep-1-1.jpg',
        title: 'Bàn tư vấn trực tiếp 1-1 các nước',
        caption: 'Đại diện tuyển sinh và chuyên viên tư vấn trực tiếp lộ trình cho học sinh',
      },
      {
        url: '/events/gia-nghia/04-ban-huong-dan-ho-so-du-hoc.jpg',
        title: 'Bàn hướng dẫn hồ sơ & học bổng Châu Âu',
        caption: 'Phụ huynh trao đổi chi tiết về thủ tục visa, học phí và điều kiện chứng minh tài chính',
      },
      {
        url: '/events/gia-nghia/05-tu-van-lo-trinh-phu-huynh-hoc-sinh.jpg',
        title: 'Đánh giá học bạ & tư vấn chuyên sâu',
        caption: 'Xét tuyển hồ sơ trực tiếp, giúp phụ huynh và học sinh chọn trường phù hợp năng lực',
      },
      {
        url: '/events/gia-nghia/06-dai-dien-truong-quoc-te-giai-dap.jpg',
        title: 'Đại diện các trường quốc tế giải đáp thắc mắc',
        caption: 'Học sinh tiếp cận thông tin chính thống từ các trường đại học hàng đầu',
      },
      {
        url: '/events/gia-nghia/07-khong-khi-ban-tu-van-soi-noi.jpg',
        title: 'Không khí bàn tư vấn sôi nổi suốt chương trình',
        caption: 'Học sinh hào hứng tìm hiểu cơ hội thực tập, việc làm và chính sách định cư',
      },
      {
        url: '/events/gia-nghia/08-chup-anh-luu-niem-gia-nghia.jpg',
        title: 'Lưu niệm hoàn thành rực rỡ chặng Gia Nghĩa',
        caption: 'Khởi đầu chuỗi sự kiện Education Fair tháng 9 với sự tin yêu của quý phụ huynh và học sinh',
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
        url: '/events/bao-loc/01-checkin-don-tiep-bao-loc.jpg',
        title: 'Đón tiếp và check-in sự kiện Bảo Lộc',
        caption: 'Không gian mở thoáng đãng, thân thiện tại Pham Garden Coffee chào đón học sinh',
      },
      {
        url: '/events/bao-loc/02-toan-canh-dong-duc-hoc-sinh.jpg',
        title: 'Toàn cảnh sảnh tư vấn đông đúc học sinh',
        caption: 'Đông đảo học sinh các trường THPT tại Bảo Lộc xếp hàng và kín bàn tư vấn',
      },
      {
        url: '/events/bao-loc/03-tu-van-khoanh-vung-nghe-nghiep.jpg',
        title: 'Tư vấn Chặng 2: Khoanh vùng nghề nghiệp phù hợp',
        caption: 'Học sinh thực hiện bài trắc nghiệm và cùng chuyên gia xác định nghề nghiệp tương lai',
      },
      {
        url: '/events/bao-loc/04-dai-dien-truong-tu-van-1-1.jpg',
        title: 'Đại diện trường quốc tế tư vấn 1-1',
        caption: 'Giải đáp cặn kẽ về chỉ tiêu tuyển sinh, học bổng và điều kiện tiếng Anh',
      },
      {
        url: '/events/bao-loc/05-xet-hoc-ba-san-hoc-bong.jpg',
        title: 'Phân tích học bạ & chiến lược săn học bổng',
        caption: 'Tư vấn xây dựng bài luận, hoàn thiện hồ sơ đạt các mức học bổng cao',
      },
      {
        url: '/events/bao-loc/06-phu-huynh-trao-doi-lo-trinh.jpg',
        title: 'Phụ huynh cùng trao đổi giải pháp tài chính',
        caption: 'Chuyên viên Hằng Lương hỗ trợ kế hoạch chi phí và thủ tục visa minh bạch',
      },
      {
        url: '/events/bao-loc/07-khong-khi-soi-noi-tai-ban.jpg',
        title: 'Bàn tư vấn luôn kín chỗ suốt sự kiện',
        caption: 'Không khí trao đổi cởi mở, giải tỏa mọi băn khoăn của phụ huynh và học sinh',
      },
      {
        url: '/events/bao-loc/08-be-mac-luu-niem-bao-loc.jpg',
        title: 'Lưu niệm bế mạc sự kiện Bảo Lộc',
        caption: 'Nụ cười rạng rỡ của học sinh và đại diện trường khép lại ngày hội thành công',
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
        url: '/events/da-lat/01-dien-gia-thuyet-trinh-san-khau.jpg',
        title: 'Diễn giả thuyết trình trên sân khấu hội trường',
        caption: 'Diễn giả Hằng Lương chia sẻ bức tranh toàn cảnh về du học và việc làm toàn cầu',
      },
      {
        url: '/events/da-lat/02-toan-canh-hoi-truong-nesta-valley.jpg',
        title: 'Toàn cảnh hội trường Nesta Valley Hotel đông kín',
        caption: 'Khán phòng chật kín chỗ với sự tham gia của đại diện trường, phụ huynh và học sinh',
      },
      {
        url: '/events/da-lat/03-khong-gian-don-tiep-hoc-sinh.jpg',
        title: 'Bàn thông tin & đón tiếp chu đáo',
        caption: 'Không gian tổ chức sang trọng, chuyên nghiệp tại trung tâm TP. Đà Lạt',
      },
      {
        url: '/events/da-lat/04-dai-dien-truong-quoc-te-tu-van.jpg',
        title: 'Gặp gỡ trực tiếp đại diện trường quốc tế',
        caption: 'Trao đổi 1-1 với đại diện trường Excelsia và các trường đại học Úc, Singapore, Mỹ',
      },
      {
        url: '/events/da-lat/05-tu-van-chuyen-sau-hoc-bong-visa.jpg',
        title: 'Tư vấn chuyên sâu hồ sơ học bổng & visa',
        caption: 'Định hướng lộ trình du học cá nhân hóa theo học lực và điều kiện gia đình',
      },
      {
        url: '/events/da-lat/06-phu-huynh-tim-hieu-dinh-huong.jpg',
        title: 'Phụ huynh tìm hiểu cơ hội định cư & việc làm',
        caption: 'Cùng chuyên gia tháo gỡ băn khoăn về chính sách ở lại làm việc sau tốt nghiệp',
      },
      {
        url: '/events/da-lat/07-hoc-sinh-trao-doi-truc-tiep.jpg',
        title: 'Học sinh hào hứng nhận tài liệu & quà tặng',
        caption: 'Không khí tương tác sôi nổi giữa học sinh và đội ngũ tư vấn viên Hằng Lương',
      },
      {
        url: '/events/da-lat/08-chup-anh-luu-niem-da-lat.jpg',
        title: 'Kỷ niệm khép lại trọn vẹn Education Fair T9',
        caption: 'Ban tổ chức, đại diện các trường quốc tế và phụ huynh, học sinh chụp ảnh lưu niệm',
      },
    ],
  },
];