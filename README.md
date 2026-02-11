# project-nexus-ecommerce
# Project Nexus – Mobile E-Commerce Product Catalog

## 📱 Overview

This project is a mobile-based e-commerce product catalog built using **React Native (Expo)** as part of **Project Nexus**.  
It demonstrates the ability to design and implement a real-world, production-style application with a strong focus on **scalability, performance, maintainability, and user experience**.

The application allows users to browse products, apply filters, sort results, and view product details while efficiently handling large datasets using pagination and infinite scrolling.

This project serves as a **portfolio-ready application** showcasing professional frontend engineering practices suitable for real-world mobile applications.

---

## 🎯 Project Objectives

- Build a scalable mobile application using modern frontend tools
- Integrate and manage remote API data effectively
- Implement advanced UI patterns such as filtering, sorting, and infinite scrolling
- Demonstrate clean architecture, state management, and professional workflows
- Deliver a polished project suitable for evaluation by mentors and employers

---

## 🚀 Features

- 📦 **Dynamic Product Fetching** from a public API  
- 🗂 **Category-Based Filtering**
- 💰 **Price Sorting** (Low → High, High → Low)
- 🔄 **Infinite Scrolling with Pagination**
- 📄 **Product Detail Screen** using dynamic routing
- ⏳ **Loading States & Error Handling**
- 📱 **Responsive Mobile UI**
- ♿ **Accessible and user-friendly interactions**

---

## 🛠 Tech Stack

- **React Native** (Expo)
- **TypeScript**
- **Redux Toolkit**
- **RTK Query** (API data fetching & caching)
- **Expo Router** (file-based navigation)
- **NativeWind** (Tailwind CSS for React Native)

---

## 📂 Project Structure

```text
app/
├── _layout.tsx          # Navigation stack layout
├── index.tsx            # Product catalog screen
└── product/
    └── [id].tsx         # Product detail screen

src/
├── store/
│   └── store.ts         # Redux store configuration
├── features/
│   └── products/
│       ├── productsApi.ts
│       ├── productsSlice.ts
│       ├── ProductCard.tsx
│       └── ProductList.tsx
├── components/
│   ├── Loader.tsx
│   ├── ErrorState.tsx
│   └── FilterBar.tsx
├── hooks/
├── types/
└── utils/
