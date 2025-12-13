# 🚗 Car Rental System – Persian RTL Frontend

A **frontend-only Car Rental System** built with **React** and **Tailwind CSS**, focused on **Persian (Farsi) localization** and **RTL (Right‑to‑Left) layout adaptation**.

This project is based on an **original English car rental concept** and reworked into a **Persian-first UI** suitable for Iranian users. All data is handled via a mock API using **JSON Server**. The repository is designed to be **portfolio-ready**, clean, scalable, and professional.

---

## 🎯 Project Goals

* Convert an English car rental UI into **fully Persian (fa-IR)**
* Implement **RTL layout** correctly and consistently
* Build a **modern frontend architecture** with React
* Simulate backend behavior using **JSON Server**
* Maintain a **clean Git history** with meaningful commits
* Produce a **strong showcase project** for frontend roles

---

## ✨ Features

* 🇮🇷 Full Persian localization (texts, labels, UI language)
* 🔄 RTL layout support (`dir="rtl"`)
* ⚛️ Component‑based architecture with React
* 🎨 Utility‑first styling using Tailwind CSS
* 📦 Mock REST API using JSON Server
* 📱 Responsive design (mobile‑first)
* 🧩 Reusable and scalable UI components
* 🧠 Clean separation of concerns (UI / logic / data)
* 🔍 Ready for extensions (filters, auth, payments, dashboard)

---

## 🛠️ Tech Stack

| Category          | Technology   |
| ----------------- | ------------ |
| Library           | React        |
| Styling Framework | Tailwind CSS |
| Mock Backend      | JSON Server  |
| Language          | JavaScript   |
| Package Manager   | npm          |
| Version Control   | Git & GitHub |

##

---

## 🌍 Localization & RTL Strategy

* All UI content translated to **Persian (fa‑IR)**
* Application direction set to `RTL`
* Tailwind spacing, alignment, and typography adjusted for RTL
* Icons and layouts adapted to Persian UX standards
* Prepared for future i18n support if needed

---

## 📊 Data Handling with JSON Server

This project uses **JSON Server** to simulate backend APIs.

### Example Resources

* Cars list
* Car details
* Pricing & availability

### Run JSON Server

```bash
npm install -g json-server
json-server --watch db.json --port 3001
```

### API Examples

```text
GET /cars
GET /cars/:id
```

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone git@github.com:abolfazlmohseni/car-rent-rtl.git
cd car-rent-rtl
```

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

Run JSON Server (in another terminal):

```bash
json-server --watch db.json --port 3001
```

---

## 🧠 Commit Strategy

This repository follows a **structured and readable commit workflow**.

### Commit Types

* `init:` project setup & configuration
* `feat:` new features and UI sections
* `style:` styling & Tailwind adjustments
* `refactor:` code improvements & cleanup
* `fix:` bug fixes
* `docs:` documentation updates

---

## 🧪 Project Status

🟡 In Progress – actively developed as a portfolio project

---

## 📌 Notes

* This project is **frontend-only** by design
* No real authentication or payment logic included
* Focus is on **UI quality, structure, and localization**

---

## 👤 Author

**Abolfazl Mohseni**
Frontend Developer

---

If you are reviewing this repository, feel free to explore the commit history to see the project evolution step by step.
