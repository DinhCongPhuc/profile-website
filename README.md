# Hồ sơ cá nhân — Next.js

Website portfolio cá nhân một trang, xây dựng bằng Next.js 14 (App Router) + Tailwind CSS.

## Chạy thử ở máy local

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Cấu trúc thư mục

```
app/
  layout.js          # font chữ (Fraunces, IBM Plex Sans/Mono) + metadata
  page.js             # toàn bộ nội dung trang (hero, giới thiệu, kỹ năng, quá trình, dự án, liên hệ)
  globals.css         # Tailwind + hiệu ứng hairline/stamp/reveal
  components/
    Nav.js             # thanh điều hướng, có menu mobile
    RevealSection.js   # component client làm hiệu ứng cuộn-hiện (fade in khi scroll)
```

## Việc cần chỉnh sửa (tùy chỉnh nội dung của bạn)

Mở `app/page.js` và thay các phần sau bằng thông tin thật của bạn:

- Tên, chức danh, email, GitHub trong phần `HERO`
- Mảng `SKILLS` — nhóm kỹ năng của bạn
- Mảng `TIMELINE` — quá trình học tập / kinh nghiệm làm việc
- Mảng `PROJECTS` — các dự án bạn đã làm
- Trong `app/layout.js`: đổi `title`/`description` trong `metadata`

## Build cho production

```bash
npm run build
npm run start
```

## Deploy miễn phí

Đẩy code lên GitHub rồi kết nối repo với [Vercel](https://vercel.com) — Vercel là đơn vị phát triển Next.js nên deploy chỉ mất vài cú click, không cần cấu hình gì thêm.
