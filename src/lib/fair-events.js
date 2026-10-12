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
  },
  {
    id: 'bao-loc-september-2026',
    location: 'Bảo Lộc',
    date: '26/09/2026',
    status: 'past',
  },
  {
    id: 'da-lat-september-2026',
    location: 'Đà Lạt',
    date: '27/09/2026',
    status: 'past',
  },
];