export interface EducationalTool {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  category: "Ngoại ngữ" | "Học tập";
  audience: string;
  tags: string[];
  version: string;
  size: string;
  operatingSystem: string;
  image?: string;
  exeUrl?: string;
  zipUrl?: string;
  youtubeUrl?: string;
  features: string[];
  requirements: string[];
  installSteps: string[];
}

export const educationalTools: EducationalTool[] = [
  {
    id: "bo-thu-kanji",
    name: "Kanji Radicals - 214 Bộ Thủ Tiếng Nhật",
    shortDescription: "Tra cứu 214 bộ thủ Khang Hy, Flashcard lật thẻ và luyện trắc nghiệm phản xạ 8 giây.",
    description: "Ứng dụng hỗ trợ học sinh, sinh viên và người tự học tiếng Nhật nắm vững 214 bộ thủ Kanji cơ bản. Tích hợp bộ lọc nét linh hoạt, chế độ luyện phản xạ 8 giây và phân tích cấu tạo Kanji chuẩn xác.",
    category: "Ngoại ngữ",
    audience: "Học sinh, sinh viên, người học tiếng Nhật mọi cấp độ",
    tags: ["Tiếng Nhật", "Kanji", "214 Bộ thủ", "Flashcard", "Trắc nghiệm"],
    version: "1.0.0",
    size: "196 KB",
    operatingSystem: "Mọi hệ điều hành (chạy qua trình duyệt web)",
    image: "https://th.bing.com/th/id/OIP.DrDgoYMeFJD3Lj5ZOdqAiAHaEq?w=273&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    youtubeUrl: "https://www.youtube.com/embed/kRyfjVV7u7g",
    zipUrl: "/downloads/bo-thu-kanji.zip",
    features: [
      "Tra cứu đầy đủ 214 bộ thủ Khang Hy kèm âm Hán Việt, Romaji và nghĩa",
      "Bộ lọc số nét thông minh từ 1 đến 17 nét",
      "Chế độ Trắc nghiệm phản xạ giới hạn 8 giây",
      "Flashcard lật thẻ tự động giúp ghi nhớ sâu",
      "Giải thích cấu tạo 6 phép tạo chữ Kanji (Lục thư)"
    ],
    requirements: [
      "Trình duyệt web hiện đại (Google Chrome, Microsoft Edge, Firefox, Cốc Cốc, Safari)",
      "Không cần cài đặt thêm phần mềm bổ trợ"
    ],
    installSteps: [
      "Tải file ZIP về máy tính",
      "Giải nén thư mục ZIP vừa tải",
      "Nhấp đúp vào file index.html để bắt đầu học ngay"
    ]
  },
  {
    id: "collocation-english",
    name: "Collocation Master - Tiếng Anh Giao Tiếp",
    shortDescription: "Học cụm từ tiếng Anh giao tiếp thông dụng theo chủ đề kèm phát âm và mini-quiz 10 giây.",
    description: "Công cụ trực quan giúp học sinh và giáo viên mở rộng vốn Collocations tự nhiên trong tiếng Anh. Hỗ trợ lọc theo chủ đề đời sống, phát âm chuẩn qua Web Audio API và luyện tập phản xạ 10 giây.",
    category: "Ngoại ngữ",
    audience: "Giáo viên, học sinh, người luyện thi và giao tiếp tiếng Anh",
    tags: ["Tiếng Anh", "Collocation", "Giao tiếp", "Quiz 10s", "Phát âm"],
    version: "1.0.0",
    size: "103 KB",
    operatingSystem: "Mọi hệ điều hành (chạy qua trình duyệt web)",
    image: "https://th.bing.com/th/id/OIP.DrDgoYMeFJD3Lj5ZOdqAiAHaEq?w=273&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    youtubeUrl: "https://www.youtube.com/embed/kRyfjVV7u7g",
    zipUrl: "/downloads/collocation-english.zip",
    features: [
      "Kho cụm từ Collocations phong phú phân loại theo ngữ cảnh đời sống",
      "Phát âm chuẩn xác tích hợp trực tiếp trên trình duyệt",
      "Ví dụ câu mẫu song ngữ Anh - Việt thực tế",
      "Trắc nghiệm phản xạ 10 giây kiểm tra tức thì",
      "Giao diện trực quan, tìm kiếm nhanh theo từ khóa"
    ],
    requirements: [
      "Trình duyệt web hiện đại có hỗ trợ Web Audio API",
      "Loa hoặc tai nghe để nghe phát âm"
    ],
    installSteps: [
      "Tải file ZIP về máy tính",
      "Giải nén file ZIP",
      "Mở file index.html để sử dụng"
    ]
  },
  {
    id: "tu-vung-toeic",
    name: "TOEIC Master 2026 - Luyện Từ Vựng Thông Minh",
    shortDescription: "Học 1.405 từ vựng TOEIC kèm câu ví dụ, theo dõi tiến độ, Flashcard và theme bảo vệ mắt.",
    description: "Bộ công cụ toàn diện hỗ trợ ôn thi chứng chỉ TOEIC với kho 1.405 từ vựng chọn lọc. Tích hợp thanh tiến độ học tập, chế độ thẻ ghi nhớ Flashcard, trắc nghiệm và giao diện dịu mắt dành cho học sinh, sinh viên ôn thi dài giờ.",
    category: "Ngoại ngữ",
    audience: "Học sinh THPT, sinh viên đại học, người luyện thi TOEIC",
    tags: ["TOEIC", "Từ vựng", "Flashcard", "Tiến độ học", "Bảo vệ mắt"],
    version: "1.0.0",
    size: "1.4 MB",
    operatingSystem: "Mọi hệ điều hành (chạy qua trình duyệt web)",
    image: "https://th.bing.com/th/id/OIP.DrDgoYMeFJD3Lj5ZOdqAiAHaEq?w=273&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    youtubeUrl: "https://www.youtube.com/embed/kRyfjVV7u7g",
    zipUrl: "/downloads/tu-vung-toeic.zip",
    features: [
      "Kho 1.405 từ vựng TOEIC trọng tâm kèm phiên âm, từ loại và nghĩa chi tiết",
      "Ví dụ minh họa thực tế cho từng từ vựng",
      "Lưu trữ tiến độ đã học và chưa học tự động",
      "Chế độ học Flashcard lật mặt trước/sau linh hoạt",
      "Chế độ hiển thị sáng / tối dịu mắt hỗ trợ học lâu không mỏi"
    ],
    requirements: [
      "Trình duyệt web bất kỳ",
      "Hỗ trợ lưu trữ cục bộ LocalStorage để ghi nhớ tiến độ học"
    ],
    installSteps: [
      "Tải file ZIP về máy",
      "Giải nén thư mục",
      "Mở file index.html để bắt đầu bài học"
    ]
  }
];
