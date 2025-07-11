---
title: "Hướng dẫn dùng git"
date: "2025-07-11"
summary: "Những câu lệnh git thường dùng trong học tập và công việc"
---
# Các Câu Lệnh Git Cơ Bản Bạn Cần Biết

Git là một hệ thống quản lý phiên bản phân tán (distributed version control system) phổ biến nhất hiện nay. Dưới đây là danh sách các câu lệnh Git cơ bản, kèm theo ví dụ và giải thích ngắn gọn.

## 1. Cài Đặt và Khởi Tạo
### Khởi tạo Git trong thư mục hiện tại
```bash
git init
```
### Sao chép một repository từ remote (ví dụ GitHub)
```bash
git clone <url>
```
## 2. Cấu Hình Git
### Cấu hình tên và email
```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"

```
## 3. Theo Dõi Thay Đổi File
### Kiểm tra trạng thái làm việc
```bash
git status
```
### Thêm file vào staged area
```bash
git add <file>
git add .         # Thêm tất cả các file thay đổi
```
### Xóa file khỏi staged area
```bash
Xóa file khỏi staged area
```
## 4. Commit Thay Đổi
### Ghi lại các thay đổi
```bash
git commit -m "Thông điệp commit"
```
### Sửa commit cuối cùng
```bash
git commit --amend
```
##  5. Làm Việc với Remote Repository
### Kiểm tra remote đang liên kết
```bash
git remote -v
```
### Thêm remote mới
```bash
git remote add origin <url>
```
### Đẩy code lên remote lần đầu
```bash
git push -u origin main
```
### Đẩy các thay đổi
```bash
git push
```
### Kéo về thay đổi mới nhất
```bash
git pull
```
## 6. Quản Lý Nhánh (Branch)
### Tạo nhánh mới
```bash
git branch <ten-nhanh>
```
### Chuyển sang nhánh khác
```bash
git checkout <ten-nhanh>
```
### Tạo và chuyển nhánh
```bash
git checkout -b <ten-nhanh>
```
### Xem danh sách nhánh
```bash
git branch
```
### Gộp nhánh (merge)
```bash
git merge <ten-nhanh>
```
##  7. Dọn Dẹp và Khôi Phục
### Bỏ thay đổi chưa commit
```bash
git checkout -- <file>
```
### Khôi phục file bị xóa
```bash
git restore <file>
```
### Xóa file đã bị xóa khỏi thư mục nhưng còn trong Git
```bash
git rm <file>
```
##  8. Lịch Sử Thay Đổi
### Xem lịch sử commit
```bash
git log
```
### Xem ngắn gọn
```bash
git log --oneline
```
### Xem sự thay đổi của một file
```bash
git diff <file>
```