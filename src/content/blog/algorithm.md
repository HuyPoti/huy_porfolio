---
title: "Thuật toán, phương pháp giải bài toán trên Leetcode"
date: "2025-07-11"
summary: "Những thuật toán, phương pháp hữu ích để ứng dụng vào cuộc sống"
---
# 🧠 Tổng hợp Thuật Toán & Phương Pháp Giải Bài Toán Trên LeetCode

## I. MẢNG & CHUỖI

### 1. Two Pointers (Hai con trỏ)
- Áp dụng cho: mảng đã sắp xếp, bài toán tìm cặp số, xóa phần tử thỏa điều kiện, đảo ngược chuỗi,...
- Ví dụ:
  - 167. Two Sum II - Input array is sorted
  - 344. Reverse String
  - 26. Remove Duplicates from Sorted Array

### 2. Sliding Window (Cửa sổ trượt)
- Áp dụng: tìm chuỗi con có tổng lớn nhất / thỏa điều kiện, độ dài tối đa/tối thiểu,...
- Ví dụ:
  - 3. Longest Substring Without Repeating Characters
  - 76. Minimum Window Substring
  - 209. Minimum Size Subarray Sum

### 3. Prefix Sum
- Tính tổng đoạn con nhanh chóng.
- Ví dụ:
  - 560. Subarray Sum Equals K
  - 303. Range Sum Query - Immutable

---

## II. HASH MAP / SET

### 1. Duyệt & lưu kết quả trung gian
- Áp dụng: đếm số lần xuất hiện, phát hiện phần tử trùng, lưu chỉ số,...
- Ví dụ:
  - 1. Two Sum
  - 217. Contains Duplicate
  - 347. Top K Frequent Elements

---

## III. SẮP XẾP & TÌM KIẾM

### 1. Sort
- Áp dụng: bài toán liên quan tới so sánh, nhóm, tìm điểm chung,...
- Ví dụ:
  - 56. Merge Intervals
  - 88. Merge Sorted Array

### 2. Binary Search (Tìm kiếm nhị phân)
- Áp dụng: mảng đã sắp xếp, tìm ngưỡng, tối ưu hoá min/max,...
- Ví dụ:
  - 704. Binary Search
  - 34. Find First and Last Position of Element in Sorted Array
  - 153. Find Minimum in Rotated Sorted Array

---

## IV. ĐỆ QUY & QUY HOẠCH ĐỘNG (DP)

### 1. Recursion (Đệ quy)
- Dùng cho: sinh tổ hợp, cây, quay lui,...
- Ví dụ:
  - 46. Permutations
  - 17. Letter Combinations of a Phone Number

### 2. Dynamic Programming (DP)
- Dùng cho: bài toán có cấu trúc con lặp lại, tối ưu chi phí.
- Ví dụ:
  - 70. Climbing Stairs
  - 198. House Robber
  - 322. Coin Change

| Kỹ thuật phụ | Mô tả |
|-------------|-------|
| Memoization | Ghi nhớ kết quả đã tính |
| Tabulation  | Xây bảng từ dưới lên |
| State compression | Giảm không gian bằng cách dùng ít biến hơn |

---

## V. CÂY & ĐỒ THỊ

### 1. DFS / BFS
- DFS (tìm sâu) và BFS (tìm rộng).
- Ví dụ:
  - 104. Maximum Depth of Binary Tree (DFS)
  - 102. Binary Tree Level Order Traversal (BFS)
  - 133. Clone Graph (BFS/DFS)

### 2. Union-Find (Disjoint Set)
- Dùng để xác định nhóm liên thông.
- Ví dụ:
  - 547. Number of Provinces
  - 684. Redundant Connection

### 3. Topological Sort
- Dùng cho đồ thị có hướng, không chu trình (DAG).
- Ví dụ:
  - 207. Course Schedule
  - 210. Course Schedule II

---

## VI. BACKTRACKING (QUAY LUI)

- Áp dụng: sinh tổ hợp, hoán vị, sudoku,...
- Ví dụ:
  - 39. Combination Sum
  - 51. N-Queens
  - 37. Sudoku Solver

---

## VII. STACK, QUEUE, HEAP

### 1. Stack
- Dùng để xử lý biểu thức, ngoặc, duyệt cây,...
- Ví dụ:
  - 20. Valid Parentheses
  - 155. Min Stack
  - 394. Decode String

### 2. Queue & Deque
- Dùng trong BFS, sliding window,...
- Ví dụ:
  - 239. Sliding Window Maximum
  - 200. Number of Islands (BFS)

### 3. Heap / Priority Queue
- Dùng để tìm phần tử lớn nhất/nhỏ nhất nhanh.
- Ví dụ:
  - 215. Kth Largest Element in an Array
  - 23. Merge k Sorted Lists

---

## VIII. TOÁN HỌC & BIT MANIPULATION

### 1. Số học
- GCD, LCM, xử lý số nguyên,...
- Ví dụ:
  - 172. Factorial Trailing Zeroes
  - 204. Count Primes

### 2. Bit Manipulation
- Dùng phép toán nhị phân để tối ưu tốc độ.
- Ví dụ:
  - 136. Single Number
  - 191. Number of 1 Bits

---

## IX. DESIGN & KỸ THUẬT KHÓC LIỆT

- LRU Cache: 146. LRU Cache
- O(1) operations: 380. Insert Delete GetRandom O(1)
- Trie: 208. Implement Trie

---

## 🎯 MẸO LUYỆN THI

- Luyện theo **tag**: Array, DP, Graph,...
- Làm từ **Easy → Medium → Hard**
- Ghi chú lại các **template quen thuộc**: DFS, DP dạng 1 chiều/2 chiều, binary search on answer,...

---


