# Papita Brewing - Craft Brewery Website

## Overview

This is a full-stack web application for Papita Brewing, a craft brewery website. The application is built using a modern React frontend with Express.js backend, featuring a PostgreSQL database through Drizzle ORM. The website showcases the brewery's story, beer selection, events, gallery, and contact information with a responsive design using Tailwind CSS and shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom brewery-themed color scheme
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Storage**: Currently using in-memory storage with interface for future PostgreSQL migration
- **Session Management**: Ready for PostgreSQL sessions with connect-pg-simple

### Database Architecture
- **Database**: PostgreSQL (configured but not yet implemented)
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Drizzle Kit for database migrations
- **Schema**: User authentication schema defined in shared directory

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling to sections
- **Hero Section**: Full-screen hero with brewery branding and call-to-action buttons
- **About Section**: Brewery story and philosophy presentation
- **Beer Menu**: Interactive beer showcase with details and pricing
- **Gallery**: Image gallery of brewery operations and atmosphere
- **Events**: Upcoming brewery events and activities
- **Contact**: Contact form and brewery information
- **Footer**: Links and social media integration

### Backend Components
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **API Routes**: RESTful API structure (currently placeholder)
- **Middleware**: Request logging and error handling
- **Development Server**: Vite integration for hot module replacement

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express.js routes handle requests and interact with storage layer
3. **Storage Layer**: Abstracted interface allows switching between memory and database storage
4. **Database**: PostgreSQL with Drizzle ORM for production data persistence
5. **Response**: JSON responses sent back to client with proper error handling

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI primitives, Lucide React icons, shadcn/ui components
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Forms**: React Hook Form with Zod validation
- **Utilities**: clsx, date-fns, class-variance-authority

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless for PostgreSQL
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Build Dependencies
- **Bundling**: Vite with React plugin
- **TypeScript**: Full TypeScript support with strict configuration
- **Development**: Replit-specific plugins for enhanced development experience

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both frontend and backend with hot reloading
- **Port Configuration**: Frontend served on port 5000 with API routes
- **Database**: PostgreSQL 16 module configured in Replit environment

### Production Build
- **Frontend Build**: Vite builds optimized static assets to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Replit autoscale deployment with proper port configuration
- **Environment**: Production environment uses compiled JavaScript with NODE_ENV=production

### Database Migration
- **Schema Management**: Drizzle Kit handles database schema migrations
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Migration Command**: `npm run db:push` applies schema changes to database

## Recent Changes

- June 25, 2025: Initial setup of Papita Brewing website
- June 25, 2025: Created complete brewery website with sloth mascot theme
  - Built hero section with brewery atmosphere background
  - Added about section explaining "slow brewing" philosophy
  - Created beer menu showcasing 6 craft beers with descriptions
  - Added gallery section with brewery photos
  - Built events section with upcoming brewery activities
  - Created contact form and brewery information section
  - Implemented consistent logo styling across all sections
  - Applied color scheme from logo (blue, red, yellow) throughout site
- June 27, 2025: Implemented functional contact form with email integration
  - Added SendGrid email service integration
  - Created email API endpoint (/api/contact) with form validation
  - Updated contact form to send messages to david.kocs@papitabrewing.com
  - Added loading states, success/error notifications, and form validation
  - Updated hero section button text from "Visit Us" to "Contact Us"
  - Repositioned Untappd icon next to brewery name in footer
- June 27, 2025: Removed contact form entirely for static hosting compatibility
  - Simplified contact section to display only contact information
  - Removed all form components and JavaScript state management
  - Centered contact info layout with improved styling
  - Website now fully static, ready for any hosting provider

## User Preferences

Preferred communication style: Simple, everyday language.