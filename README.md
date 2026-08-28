# EFU Goods Traders Website

Production-ready Astro website for EFU Goods Traders, designed for deployment on Vercel.

## Requirements

- Node.js 20 or newer
- npm

## Local setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Production verification

```bash
npm run build
npm run preview
```

## Vercel deployment

1. Upload this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel detects Astro automatically.
4. Add the values from `.env.example` in Project Settings → Environment Variables.
5. Deploy.
6. Connect `www.efutraders.com` after review.

## Content updates

Core business information is stored in `src/data/site.ts`. Update phone numbers, WhatsApp numbers, email, services, product categories, trading categories, industries and FAQs there.

Replace `public/efu-logo.jpg` with a clean transparent SVG or high-resolution PNG when the client provides one, then update both logo references in `src/layouts/BaseLayout.astro`.

## Form configuration

The quotation form submits to the included Vercel Function at `api/quote.js`, which delivers country-aware emails through Resend. Add every server-side variable from `.env.example` in Vercel. Verify the sending domain in Resend and set `CONTACT_FROM_EMAIL` to an address on that domain. Complete a real form-submission test before connecting the client domain.

## Client confirmation required

- Correct UAE phone and WhatsApp numbers
- Confirmed Kuwait, UAE and India office addresses or legitimate service areas
- Business registration/legal name
- Operating hours
- Site survey pricing policy
- Real project photographs and descriptions
- Approved brand list and partnership status
- Certifications
- Warranty and support terms
- Final privacy and legal review
- Arabic copy for Kuwait and UAE

No statistics, reviews, certifications or projects have been fabricated.

## SEO launch checklist

- Update the `site` URL in `astro.config.mjs` if the final domain changes.
- Confirm redirects from the old website.
- Submit `/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.
- Create or update legitimate Google Business Profiles.
- Add verified address and LocalBusiness schema only after confirmation.
- Add Arabic locale pages and `hreflang` once approved Arabic content is available.
- Verify titles, descriptions, canonical URLs and internal links.
- Test Core Web Vitals after deployment.
