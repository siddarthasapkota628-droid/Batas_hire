# 🏦 Batas CMS

> Modern, secure, and dynamic content management for Batas Hire and Purchase.

[![PayloadCMS](https://img.shields.io/badge/PayloadCMS-3.x-blue)](https://payloadcms.com/)
[![pnpm](https://img.shields.io/badge/pnpm-Workspaces-orange)](https://pnpm.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-336791)](https://www.postgresql.org/)

## 🚀 Quick Setup

This project uses **pnpm workspaces**. You can manage everything from the root directory.

### 1. Installation
```bash
git clone https://github.com/Rujan0833/Batas_CMS.git
cd Batas_CMS
pnpm install
pnpm approve-builds
```

### 2. Environment Setup
Configure your database and secrets in the `.env` files:
- **CMS**: `cms/.env` (`DATABASE_URI`, `PAYLOAD_SECRET`)
- **Frontend**: `frontend/.env.local` (`VITE_API_URL`)

### 3. Development
```bash
# Run CMS and Frontend together
pnpm run dev

# Run individually
pnpm run dev:cms
pnpm run dev:frontend
```

---

## ✨ Core Features

### 🔏 Granular RBAC (Advanced Security)
We've implemented a robust Role-Based Access Control system. Unlike standard CMS roles, you can:
- **Protect Globals**: Restrict Header, Footer, and Site Settings.
- **Secure Forms**: Manage permissions for the Form Builder and all user submissions (Career, Services, etc.).
- **Centralized Logic**: All security is handled via a unified `checkRole` system in `rbac.ts`.

### 📦 pnpm Monorepo
- **Efficiency**: Shared dependencies between CMS and Frontend.
- **Speed**: Lightning-fast installation and development builds.
- **Simplicity**: No more `cd`ing into multiple folders to run the project.

---

## 🔌 API Summary

| Resource | Endpoint | Access |
| :--- | :--- | :--- |
| **Pages** | `/api/pages` | Public Read / RBAC Edit |
| **Globals** | `/api/globals/header` | Public Read / RBAC Edit |
| **Submissions** | `/api/form-submissions` | Private (RBAC) |
| **Media** | `/api/media` | Public Read / RBAC Upload |

---

## 🛠️ Tech Stack

- **Backend**: PayloadCMS 3.x (Next.js 15), PostgreSQL.
- **Frontend**: React 18, Vite, Tailwind CSS, Shadcn/ui.
- **Management**: pnpm Workspaces.

## 👥 Authors
- **Rujan Shrestha** - [@Rujan0833](https://github.com/Rujan0833)

---
<div align="center">
<b>Built for Batas Hire and Purchase</b>
</div>
