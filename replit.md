# The Waterman - Water Treatment Website

## Project Overview
Premium dark-themed website for The Waterman, a Florida-based water treatment company established in 1987. The website showcases their services, expertise, and provides easy contact options for customers in the Brevard County area.

## Technology Stack
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with custom premium dark theme
- **UI Components**: Shadcn UI component library
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Backend**: Express.js (serves the frontend in production)

## Design System

### Premium Dark Theme
The website uses a sophisticated dark theme inspired by modern premium web designs while maintaining The Waterman's brand identity:

**Color Palette:**
- Background: Dark navy (#0a0e1a) for main sections
- Card Background: Elevated dark (#121722) for cards and elevated elements
- Accent Color: Aqua Blue (#009FC2) for highlights, borders, and CTAs
- Primary CTA: Accent Blue (#1E73BE) for buttons and interactive elements
- Text: White (#FFFFFF) for headings, light gray for body text
- Borders: Subtle borders with accent color highlights on premium cards

**Design Features:**
- Large, bold typography with striking contrast
- Premium card layouts with accent color borders
- Hover effects with subtle glow and elevation
- Generous spacing for premium feel
- Statistics section showcasing company credibility (37+ years, 500+ customers)
- Responsive design for all device sizes

### Brand Colors (Maintained)
- Primary Blue: #0B3C88
- Accent Blue: #1E73BE  
- Aqua Blue: #009FC2
- Footer Blue: #005F9E

These colors are used strategically throughout the dark theme to maintain brand consistency.

## Page Structure

### Sections
1. **Header** - Sticky navigation with logo, menu, contact info, and CTA button
2. **Hero Section** - Full-width hero with large headline, company tagline, and dual CTAs
3. **Stats Section** (NEW) - Showcases key company metrics for credibility
4. **Services Section** - 6 service cards with icons, descriptions, and learn more buttons
5. **What We Remove Section** - Grid of contaminants the systems eliminate
6. **About Section** - Company history and value propositions
7. **Contact Section** - Contact form, business hours, location, and contact information
8. **Footer** - Quick links, contact details, hours, and legal links

### Services Offered
1. Water Softeners
2. Pressure Tanks
3. Air Induction Oxidizers
4. Reverse Osmosis Systems
5. Pool Supplies
6. Chlorine Refills

### Contact Information
- **Address**: 1155 Malabar Rd. NE, Suite 20, Palm Bay, FL 32907
- **Phone**: (321) 951-1303
- **Email**: thewaterman321@gmail.com
- **Hours**: 
  - Monday - Friday: 8:00 AM - 5:00 PM
  - Saturday: 9:00 AM - 2:00 PM
  - Sunday: Closed

## Development

### Running Locally
```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5000`

### Building for Production
```bash
npm run build
```

## Deployment

### Vercel Deployment
The website is configured for deployment on Vercel:

1. **Automatic Setup**: Connect your GitHub repository to Vercel
2. **Build Configuration**: 
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Configuration File**: `vercel.json` is included for SPA routing and headers

The `vercel.json` file includes:
- SPA routing configuration (all routes redirect to index.html)
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- Asset caching for optimal performance

### Manual Deployment Steps
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the prompts to deploy

## Project Structure
```
client/
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhatWeRemoveSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   └── Home.tsx
│   ├── lib/             # Utilities
│   ├── hooks/           # Custom React hooks
│   └── index.css        # Global styles & Tailwind
├── attached_assets/     # Generated hero image
└── public/             # Static assets

server/
└── index.ts            # Express server

design_guidelines.md    # Comprehensive design documentation
vercel.json            # Vercel deployment configuration
```

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: xs, sm, md, lg, xl, 2xl
- Touch-optimized for mobile devices
- Progressive text sizing across breakpoints
- Adaptive layouts for all screen sizes

### Premium UI Elements
- **Accent Borders**: Aqua blue left borders on premium cards
- **Glow Effects**: Subtle hover glows on cards and buttons
- **Typography Scale**: Large, bold headings (up to 8xl on hero)
- **Icon System**: Lucide React icons with accent colors
- **Card Elevations**: Shadow system for depth and hierarchy

### Accessibility
- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- High contrast text for readability

## Recent Changes

### Premium Dark Design Implementation
- Migrated from light theme to premium dark theme
- Updated all components with new color system
- Added StatsSection component for credibility
- Enhanced typography with larger, bolder headings
- Implemented accent color system for highlights
- Added glow and elevation effects
- Created Vercel deployment configuration

### Component Updates
All components redesigned to match premium dark aesthetic:
- Updated color schemes to use dark backgrounds
- Added accent color highlights and borders
- Enhanced hover states with glow effects
- Improved spacing and typography
- Mobile responsiveness improvements

## Future Enhancements (Potential)
- Add real testimonials section
- Integrate Google Maps for location
- Add before/after photo gallery
- Implement blog for water treatment tips
- Add FAQ section
- Contact form backend integration
