# Design Guidelines for The Waterman Website

## Brand Identity & Color System

**Primary Colors:**
- Primary Blue: `#0B3C88` - Use for primary buttons, main headers, navbar
- Accent Blue: `#1E73BE` - Use for secondary elements, hover states, accents
- Aqua Blue: `#009FC2` - Use for water-themed gradients, decorative elements
- Footer Blue: `#005F9E` - Exclusive use in footer section

**Neutral Colors:**
- Background White: `#FFFFFF` - Main backgrounds, cards
- Soft Gray: `#F8F8F8` - Subtle section backgrounds, alternating sections
- Text Gray: `#333333` - Primary text color

Maintain strict color consistency throughout all UI elements to reinforce brand identity.

## Design Style & Aesthetic

**Visual Language:**
- Modern, minimal, and professional aesthetic
- Clean typography with clear hierarchy
- Water-related visual elements: waves, ripples, droplets (subtle, not overwhelming)
- Smooth transitions between sections
- Soft shadows on cards and elevated elements
- Rounded corners on buttons and cards for approachable feel
- Light blue gradients used subtly in backgrounds

**Layout Principles:**
- Clean, spacious layouts with generous whitespace
- Focus on clarity and easy navigation
- Professional presentation that builds trust
- Elegant without being overly decorative

## Page Structure & Sections

### 1. Header (Sticky Navigation)
- Sticky/fixed positioning
- Logo: "The Waterman" on left
- Navigation menu: Home | Water Treatment | Location | Contact
- Contact information display: Phone (321) 951-1303 | Email thewaterman321@gmail.com
- Prominent CTA button: "Call Us Today!" using Primary Blue
- Maintain visibility and accessibility across all viewport sizes

### 2. Hero Section
**Visual Treatment:**
- Large hero image showing clean water or family with water glass
- Image should convey purity, trust, and quality
- Ensure text remains readable over image (use overlay if needed)

**Content:**
- Headline: "WATER SYSTEMS, PRODUCTS & TREATMENT IN PALM BAY, FL"
- Subtext: "Since 1987, The Waterman has provided the highest quality water treatment systems at the best prices."
- Dual CTAs: "Get Free Water Analysis" (primary) & "Call Now" (secondary)
- Buttons with blurred backgrounds when placed over images

### 3. About/Intro Section
- Title: "Why Pay More? Call Us Today for All Your Water Needs!"
- Content: Family-owned since 1987, serving Brevard, Indian County, Palm Bay, Melbourne, and nearby areas
- Supporting visuals: Icons or illustrations of water softeners, tanks, filters
- Build credibility and establish company heritage

### 4. Services Section
**Title:** "Our Water Treatment Services Include"

**Grid Layout** (6 Service Cards):
1. Water Softeners
2. Pressure Tanks
3. Air Induction Oxidizers
4. Reverse Osmosis Systems
5. Pool Supplies
6. Chlorine Refills

**Card Design:**
- Icon for each service
- Service name (clear, bold)
- Short description
- "Learn More" button on each card
- Soft shadows with rounded corners
- Hover states for interactivity

### 5. What We Remove Section
**Title:** "We Remove"

**Visual Grid** featuring icons/illustrations for:
- Chlorine
- Iron Rust
- Odor
- Stains
- Tannic Acid
- Deposits

Use clean, simple icons that clearly represent each contaminant type.

### 6. Contact Section
**Title:** "Contact Us"

**Business Information:**
- Address: 1155 Malabar Rd. NE, Suite 20, Palm Bay, FL 32907
- Hours of operation
- Map embed placeholder

**Contact Form Fields:**
- Name
- Phone
- Email
- Subject
- Comments/Message
- Submit button

Form should feel approachable with clear field labels and validation states.

### 7. Footer
- Quick Links: Home | Water Treatment | Location | Contact
- Copyright: © 2025 The Waterman Inc.
- Terms of Use | Privacy Policy
- Use Footer Blue (#005F9E) as background
- White text for contrast
- Optional social media icons

## Typography Hierarchy

Use clean, professional font family (recommend sans-serif like Inter, Open Sans, or Roboto):
- **Headings:** Bold weights, Primary Blue color
- **Subheadings:** Medium weights, slightly smaller
- **Body Text:** Regular weight, Text Gray (#333333)
- **CTA Text:** Medium/Semi-bold, high contrast

## Responsive Design Requirements

**Desktop:** Full grid layouts, multi-column service cards
**Tablet:** Adjusted grid (2-3 columns for services)
**Mobile:** Single column stacking, optimized touch targets, hamburger menu

Ensure smooth breakpoint transitions and maintain visual hierarchy across all devices.

## Images

**Hero Section:**
- Large, high-quality hero image required
- Subject: Clean water, happy family with water glass, or water treatment system in modern home
- Image should fill hero area and be professionally shot
- Conveys trust, purity, and quality

**Supporting Images:**
- Service section: Icons representing water treatment equipment
- About section: Water softeners, tanks, filters
- What We Remove section: Visual icons for contaminants

## UI Component Standards

**Buttons:**
- Rounded corners
- Primary style: Primary Blue background
- Secondary style: Accent Blue or outlined
- Soft shadows for depth
- When on images: blurred background treatment

**Cards:**
- Rounded corners (border-radius consistent throughout)
- Soft box shadows
- White backgrounds
- Hover states with subtle lift effect

**Forms:**
- Clear field borders
- Proper spacing between fields
- Validation states (error/success)
- Accessible labels

## Semantic HTML & SEO Considerations

Use proper HTML5 semantic tags:
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Proper heading hierarchy (h1, h2, h3)
- Alt text for images
- Meta descriptions and titles

This ensures SEO-friendliness and accessibility compliance.