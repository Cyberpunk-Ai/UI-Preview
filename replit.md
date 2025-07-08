# Vehicle Marketplace Platform (Otulia)

## Overview

This is a full-stack web application for a vehicle marketplace platform called "Otulia". The application is built with a modern tech stack featuring a React frontend with TypeScript, an Express.js backend, and PostgreSQL database with Drizzle ORM. The platform is designed to connect vehicle dealers with customers, providing comprehensive tools for inventory management, vehicle browsing, and a premium rewards system.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and brand colors
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Build Tool**: esbuild for production builds
- **Development**: tsx for TypeScript execution in development

### Database Architecture
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Connection**: Neon Database serverless driver
- **Schema**: Type-safe database schema with Zod validation

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Location**: `shared/schema.ts` with type inference
- **Validation**: Zod schemas for runtime validation

### Frontend Components
- **Design System**: Complete UI component library in `client/src/components/ui/`
- **Business Components**: 
  - Navigation with brand identity
  - Hero section with call-to-action
  - Features grid showcasing platform capabilities
  - Statistics section with key metrics
  - Footer with links and social media

### Storage Layer
- **Interface**: `IStorage` interface for CRUD operations
- **Implementation**: In-memory storage for development (`MemStorage`)
- **Production Ready**: Structured for easy PostgreSQL integration

### API Layer
- **Structure**: RESTful API with `/api` prefix
- **Error Handling**: Centralized error middleware
- **Logging**: Request/response logging for API endpoints

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Processing**: Express.js routes handle requests via storage interface
3. **Data Storage**: Storage layer abstracts database operations
4. **Response**: JSON responses with proper error handling
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **drizzle-orm**: Type-safe ORM with excellent TypeScript support
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing for React applications

### UI Dependencies
- **@radix-ui/***: Comprehensive accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development
- **Frontend**: Vite development server with HMR
- **Backend**: tsx with auto-restart on file changes
- **Database**: Environment variable configuration

### Production Build
- **Frontend**: Vite build to `dist/public` directory
- **Backend**: esbuild bundle to `dist/index.js`
- **Database**: Drizzle migrations with `db:push` command

### Environment Configuration
- **Database URL**: Required environment variable
- **Static Assets**: Served from `dist/public` in production
- **API Routes**: Express server handles both API and static file serving

## Changelog
- July 08, 2025. Initial setup
- July 08, 2025. Enhanced hero section with advanced animations and improved feature cards with real Otulia screenshots

## User Preferences

Preferred communication style: Simple, everyday language.