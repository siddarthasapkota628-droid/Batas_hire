# 🏦 Batas CMS

> A modern, dynamic content management system for Batas Hire and Purchase - Built with PayloadCMS and React

[![PayloadCMS](https://img.shields.io/badge/PayloadCMS-3.x-blue)](https://payloadcms.com/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-336791)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the Project](#-running-the-project)
- [API Documentation](#-api-documentation)
- [User Roles](#-user-roles)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

Batas CMS is a headless content management system that enables non-technical users to manage website content through an intuitive admin panel. Built with modern technologies, it provides a seamless experience for both content editors and end users.

**Key Highlights:**
- 🎨 Dynamic content management without touching code
- 🔐 Role-based access control (Admin, Editor, Viewer)
- 📱 Responsive design with Tailwind CSS
- 🚀 Fast performance with React + Vite
- 💾 Robust PostgreSQL database

## ✨ Features

### 🎛️ Admin Panel
- **Intuitive Content Editor**: Rich text editing with drag-and-drop
- **Media Management**: Upload and organize images
- **User Management**: Role-based access control
- **Template System**: Pre-configured page templates (About, Services, Home)
- **SEO Optimization**: Meta tags, descriptions, and preview management
- **Live Preview**: See changes before publishing

### 🔒 Security & Access Control
- **Three User Roles**:
  - 👑 **Admin**: Full system access
  - ✏️ **Editor**: Content creation and editing
  - 👁️ **Viewer**: Read-only access
- **Field-level permissions**: Granular control over data access
- **Authentication**: Secure JWT-based authentication

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/-React-61dafb?logo=react&logoColor=white&style=flat)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat)

- **React 18.3** - UI library
- **Vite 5.4** - Build tool and dev server
- **TypeScript 5.8** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS
- **Shadcn/ui** - Component library
- **React Query** - Data fetching and caching
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat)
![PayloadCMS](https://img.shields.io/badge/-PayloadCMS-000000?logo=payloadcms&logoColor=white&style=flat)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?logo=postgresql&logoColor=white&style=flat)

- **PayloadCMS 3.x** - Headless CMS
- **Next.js 15.4** - React framework (used by Payload)
- **PostgreSQL** - Relational database
- **Node.js** - JavaScript runtime

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v12 or higher) - [Download](https://www.postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/)
- **npm** or **yarn** - Comes with Node.js

Check your installations:
```bash
node --version    # Should be v18+
npm --version     # Should be 9+
psql --version    # Should be 12+
```

## 🚀 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Rujan0833/Batas_CMS.git
cd Batas_CMS
```

### 2️⃣ Install Dependencies

Install all dependencies for the monorepo:
```bash
npm install
```

This installs dependencies for:
- Root workspace
- Frontend (`frontend/`)
- CMS Backend (`cms/`)

### 3️⃣ Set Up PostgreSQL Database

**Option A: Using PostgreSQL Command Line**
```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE batas_cms;

# Verify
\l

# Exit
\q
```

**Option B: Using pgAdmin**

1. Open pgAdmin
2. Right-click "Databases" → Create → Database
3. Name: `batas_cms`
4. Save

### 4️⃣ Configure Environment Variables

#### Backend Configuration

Create `cms/.env`:
```bash
cd cms
touch .env  # On Windows: New-Item -Path .env -ItemType File
```

Add the following content (replace placeholders):
```env
# Database connection
DATABASE_URI=postgresql://postgres:YOUR_PASSWORD@localhost:5432/batas_cms

# PayloadCMS secret (generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
PAYLOAD_SECRET=your_generated_secret_key_here

# Server URLs
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
PORT=3000
```

**Generate a secure secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the output and replace `your_generated_secret_key_here`.

#### Frontend Configuration

Create `frontend/.env`:
```bash
cd ../frontend
touch .env  # On Windows: New-Item -Path .env -ItemType File
```

Add:
```env
VITE_API_URL=http://localhost:3000/api
```

### 5️⃣ Database Schema Setup

When you first run the CMS, PayloadCMS will automatically:
- Create all necessary database tables
- Set up relationships
- Initialize the schema

**Accept the schema push when prompted:**
```
Accept warnings and push schema to database? ... yes
```

## 🏃 Running the Project

### Development Mode

#### Option 1: Run Both Servers Together (Recommended)
```bash
# From root directory (Batas_CMS/)
npm run dev
```

This starts:
- ✅ **PayloadCMS Backend**: http://localhost:3000
- ✅ **React Frontend**: http://localhost:8080 (or 5173)

#### Option 2: Run Servers Separately

**Terminal 1 - Backend:**
```bash
npm run dev:cms
```

**Terminal 2 - Frontend:**
```bash
npm run dev:frontend
```

### 🎉 Access the Applications

| Application | URL | Description |
|------------|-----|-------------|
| 🖥️ **Frontend (Public Site)** | http://localhost:8080 | Public-facing website |
| 🎛️ **Admin Panel** | http://localhost:3000/admin | Content management dashboard |
| 🔌 **API Endpoints** | http://localhost:3000/api | REST API |

### 6️⃣ Create Your First Admin User

1. Go to http://localhost:3000/admin
2. Fill in the "Create First User" form:
   - **Email**: your@email.com
   - **Password**: (secure password)
   - **Name**: Your Name
3. Click **"Create"**
4. Your user will automatically have **Admin** role

## 🔌 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Collections

#### Pages
```bash
# Get all pages
GET /api/pages

# Get specific page by slug
GET /api/pages?where[slug][equals]=about&depth=2

# Get page by ID
GET /api/pages/:id

# Create page (Admin only)
POST /api/pages

# Update page (Admin only)
PATCH /api/pages/:id

# Delete page (Admin only)
DELETE /api/pages/:id
```

#### Media
```bash
# Get all media
GET /api/media

# Upload media (Admin/Editor)
POST /api/media
```

#### Users
```bash
# Get current user
GET /api/users/me

# Get all users (Admin only)
GET /api/users
```

### Query Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `where` | Filter results | `where[slug][equals]=about` |
| `depth` | Populate relationships | `depth=2` |
| `limit` | Pagination limit | `limit=10` |
| `page` | Page number | `page=1` |
| `sort` | Sort results | `sort=-createdAt` |

### Example API Calls
```javascript
// Frontend API client example (from api.ts)
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Get About page
const getAboutPage = async () => {
  const response = await api.get('/pages?where[slug][equals]=about&depth=2');
  return response.data;
};

// Get Header navigation
const getHeader = async () => {
  const response = await api.get('/globals/header');
  return response.data;
};
```

## 👥 User Roles

### 👑 Admin
**Full system access**
- ✅ Create, read, update, delete all content
- ✅ Manage users and assign roles
- ✅ Access all collections
- ✅ Modify system settings

### ✏️ Editor
**Content management**
- ✅ Create and edit pages, posts, media
- ✅ View their own profile
- ❌ Cannot manage users
- ❌ Cannot delete content
- ❌ Cannot change roles

### 👁️ Viewer
**Read-only access**
- ✅ View published content
- ✅ View their own profile
- ❌ Cannot create or edit
- ❌ Cannot delete
- ❌ Cannot access admin features

## 🐛 Troubleshooting

### Common Issues

#### 1. **Port Already in Use**
```bash
Error: Port 3000 is already in use
```

**Solution:**
```bash
# Find process using port
netstat -ano | findstr :3000

# Kill the process (replace PID)
taskkill /PID <PID> /F

# Or change port in cms/.env
PORT=3001
```

#### 2. **Database Connection Error**
```bash
Error: connect ECONNREFUSED
```

**Solutions:**
- ✅ Check PostgreSQL is running: `Get-Service postgresql*`
- ✅ Verify DATABASE_URI in `cms/.env`
- ✅ Ensure database `batas_cms` exists: `psql -U postgres -l`
- ✅ Check username/password are correct

#### 3. **Module Not Found Errors**
```bash
Error: Cannot find module 'payload/types'
```

**Solution:**
```bash
# Delete all node_modules
rm -rf node_modules cms/node_modules frontend/node_modules

# Reinstall
npm install
```

#### 4. **TypeScript Errors**
```typescript
Cannot find module 'payload/types'
```

**Solution:**
Change imports from:
```typescript
import type { CollectionConfig } from 'payload/types'
```

To:
```typescript
import type { CollectionConfig } from 'payload'
```

#### 5. **Unauthorized Error When Creating Pages**

**Check user role:**
```sql
-- Connect to database
psql -U postgres batas_cms

-- Check roles
SELECT id, email, roles FROM users;

-- Update if needed
UPDATE users 
SET roles = '["admin"]'::jsonb 
WHERE email = 'your@email.com';
```

#### 6. **CORS Errors**

**Verify `cms/src/payload.config.ts` has correct CORS:**
```typescript
cors: [
  'http://localhost:8080',
  'http://localhost:5173',
  'http://localhost:3000',
],
```

### Getting Help

If you encounter issues:

1. **Check the terminal output** for error messages
2. **Check browser console** (F12) for frontend errors
3. **Verify environment variables** are set correctly
4. **Ensure all services are running** (PostgreSQL, PayloadCMS, Frontend)
5. **Check PostgreSQL logs** for database issues
6. **Create an issue** on GitHub with:
   - Error message
   - Steps to reproduce
   - Environment details (OS, Node version, etc.)

## 🔧 Development Workflow

### Adding a New Page

1. **Create collection/tab in PayloadCMS**
```typescript
   // cms/src/collections/Pages/NewPage.ts
   export const NewPageTab = {
     label: 'New Page',
     fields: [
       // Define fields
     ],
   }
```

2. **Add to Pages collection**
```typescript
   // cms/src/collections/Pages/index.ts
   import { NewPageTab } from './NewPage'
   
   tabs: [
     // ...
     NewPageTab,
   ]
```

3. **Create React component**
```typescript
   // frontend/src/pages/NewPage.tsx
   import { useQuery } from '@tanstack/react-query'
   import { getPages } from '@/lib/api'
   
   const NewPage = () => {
     const { data } = useQuery({
       queryKey: ['new-page'],
       queryFn: getPages,
     });
     
     // Render component
   }
```

4. **Add route**
```typescript
   // frontend/src/App.tsx
   <Route path="/new-page" element={<NewPage />} />
```

### Making Fields Editable

1. **Add field to PayloadCMS collection**
2. **Content editors update in admin panel**
3. **Frontend automatically displays updated content**

No code changes needed for content updates! 🎉

## 🚀 Deployment

### Recommended Hosting

#### Backend (PayloadCMS + PostgreSQL)
- **Railway** - $10-15/month (Recommended for beginners)
- **DigitalOcean App Platform** - $27/month
- **DigitalOcean Droplet** - $12/month (cheapest, requires DevOps)

#### Frontend (React)
- **Vercel** - Free tier available
- **Netlify** - Free tier available
- **Same server as backend** - Cost-effective

### Deployment Guide

*(To be added - Railway and DigitalOcean deployment steps)*

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
```bash
   git checkout -b feature/amazing-feature
```
3. **Commit your changes**
```bash
   git commit -m 'Add some amazing feature'
```
4. **Push to the branch**
```bash
   git push origin feature/amazing-feature
```
5. **Open a Pull Request**

### Coding Standards

- ✅ Use TypeScript for type safety
- ✅ Follow existing code structure
- ✅ Write meaningful commit messages
- ✅ Test your changes locally
- ✅ Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rujan Shrestha**
- GitHub: [@Rujan0833](https://github.com/Rujan0833)
- Project: [Batas CMS](https://github.com/Rujan0833/Batas_CMS)

## 🙏 Acknowledgments

- [PayloadCMS](https://payloadcms.com/) - Headless CMS framework
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) - Component library
- [Vite](https://vitejs.dev/) - Build tool

---

<div align="center">

**Made with ❤️ for Batas Hire and Purchase**

[⬆ Back to Top](#-batas-cms)

</div>
