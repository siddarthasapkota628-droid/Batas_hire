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
- [Project Structure](#-project-structure)
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
- 🎭 Beautiful UI components with Shadcn/ui

## ✨ Features

### 🌐 Public Website
- **About Us Page**: Company story, mission, vision, values, statistics
- **Board of Directors**: Dynamic team member profiles with photos
- **Leadership Team**: Executive team showcase
- **Company Timeline**: 22-year journey visualization
- **Regulatory Compliance**: Badges and certifications display

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
