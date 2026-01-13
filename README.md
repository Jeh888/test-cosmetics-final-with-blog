# Cosmetic Treatments London - Lead Generation Website

A Next.js 14 lead generation website connecting London residents with verified cosmetic treatment providers.

## Features

- **100+ Location Pages**: Coverage across all London boroughs and neighborhoods
- **11 Treatment Categories**: Teeth whitening, Invisalign, Botox, dermal fillers, veneers, and more
- **1,100+ Dynamic Pages**: Location × Service combination pages
- **Lead Capture Forms**: Integrated forms on every page
- **SEO Optimized**: Meta tags, structured data, 700+ word city pages
- **Mobile Responsive**: Tailwind CSS styling
- **Static Generation**: Fast performance with `generateStaticParams`

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- React 18

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

Required variables:
- `GOOGLE_SHEETS_PRIVATE_KEY` - For form submissions
- `GOOGLE_SHEETS_CLIENT_EMAIL` - Service account email
- `GOOGLE_SHEETS_SPREADSHEET_ID` - Target spreadsheet
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics
- `NEXT_PUBLIC_SITE_URL` - Your domain

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── page.js                    # Homepage
│   ├── layout.js                  # Root layout
│   ├── globals.css                # Global styles
│   ├── about/page.js              # About page
│   ├── contact/page.js            # Contact page
│   ├── free-quote/page.js         # Quote request page
│   ├── reviews/page.js            # Reviews page
│   ├── faq/page.js                # FAQ page
│   ├── [service]/page.js          # Individual treatment pages
│   ├── locations/
│   │   ├── page.js                # Locations index
│   │   └── [city]/
│   │       ├── page.js            # City pages
│   │       └── [service]/page.js  # City + Service combo pages
│   └── api/
│       └── submit-lead/route.js   # Lead submission API
├── components/
│   ├── Header.js                  # Navigation header
│   ├── Footer.js                  # Site footer
│   ├── LeadForm.js                # Lead capture form
│   ├── ServiceCard.js             # Treatment card
│   ├── ReviewCard.js              # Review card
│   ├── StatsBar.js                # Statistics bar
│   └── FAQAccordion.js            # FAQ accordion
├── data/
│   ├── services.js                # Treatment data
│   ├── locations.js               # London locations
│   ├── reviews.js                 # Customer reviews
│   └── faqs.js                    # FAQ content
└── lib/
    └── googleSheets.js            # Google Sheets integration
```

## Page Count

- **Static Pages**: 6 (home, about, contact, free-quote, reviews, faq)
- **Treatment Pages**: 11
- **Location Index**: 1
- **City Pages**: 110
- **City × Service Pages**: 1,210 (110 locations × 11 services)

**Total: 1,338 pages**

## Locations Covered

### Boroughs (10)
Croydon, Barnet, Newham, Bromley, Brent, Hillingdon, Lambeth, Lewisham, Tower Hamlets, Wandsworth

### Neighborhoods (100+)
Each borough includes 10-11 neighborhoods for comprehensive local coverage.

## Treatments

1. Teeth Whitening
2. Invisalign
3. Botox
4. Dermal Fillers
5. Veneers
6. Dental Bonding
7. Smile Makeover
8. Treatment Costs
9. Lip Fillers
10. Dental Crowns
11. Dental Marketing

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The site is standard Next.js and can be deployed to any platform supporting Node.js.

## Customization

### Adding Locations

Edit `src/data/locations.js` to add new areas.

### Adding Treatments

Edit `src/data/services.js` to add new treatment types.

### Updating Content

- FAQs: `src/data/faqs.js`
- Reviews: `src/data/reviews.js`
- Site copy: Individual page files

## Lead Generation Notes

This is a **lead generation** site, not a service provider. All copy uses:
- "Find providers..."
- "Compare quotes..."
- "Get connected with verified practitioners..."

Never "we provide" or "our services" language.

## License

Proprietary - All rights reserved
