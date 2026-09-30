# Mulbex Website

Modern, lightweight, and fully responsive landing page for **Mulbex** (independent software development and technical consulting based in the Netherlands).

Built with semantic HTML5 and vanilla CSS. Zero frameworks, zero build step, lightning-fast load times, and ready to host directly on **Cloudflare Pages**.

---

## 🚀 Quick Local Preview

You can preview the website locally using any standard HTTP server.

### Option 1: Using Python (Recommended — already pre-installed on macOS)
```bash
python3 -m http.server 8080
```
Then open your browser at **[http://localhost:8080](http://localhost:8080)**.

### Option 2: Using Node.js / npx
```bash
npx serve .
```

---

## ✏️ How to Customize Your Details

Open `index.html` in your editor. The file includes clear `<!-- CUSTOMIZE -->` comments at each placeholder location:

1. **Name**: Search for `Alex Mulberry` and replace with your preferred display name if desired (lines ~103 and ~291).
2. **KvK Number**: Search for `KvK: [number]` and replace `[number]` with your 8-digit Dutch Chamber of Commerce registration number (line ~368 and footer line ~414).
3. **LinkedIn URL**: Replace `https://www.linkedin.com` with your public LinkedIn profile link (line ~300).
4. **Email Address**: Replace `alex@mulbex.com` with your preferred business contact email (line ~316).

---

## 🌐 How to Deploy to Cloudflare Pages

Cloudflare Pages hosts static HTML websites globally on their edge network with free SSL, DDoS protection, and instant CDN caching.

### Option A: Via GitHub / GitLab (Recommended for automated deploys)

1. **Initialize git and push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial Mulbex website"
   git branch -M main
   # Add your remote repo:
   # git remote add origin git@github.com:YOUR_USERNAME/mulbex-website.git
   # git push -u origin main
   ```
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
3. In the sidebar, navigate to **Workers & Pages** &rarr; **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
4. Select your repository.
5. In the build settings:
   - **Framework preset**: None
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` *(or leave blank)*
6. Click **Save and Deploy**. Your site will be live instantly on a `*.pages.dev` domain, and you can attach your custom domain (`mulbex.com` or `mulbex.nl`) in the Custom Domains tab.

---

### Option B: Direct Deploy via Wrangler CLI (Zero Git required)

If you have Node.js installed, you can deploy directly from your terminal in seconds:

1. Log in to Cloudflare from your terminal:
   ```bash
   npx wrangler login
   ```
2. Deploy the current directory to Cloudflare Pages:
   ```bash
   npx wrangler pages deploy . --project-name=mulbex
   ```
3. Follow the one-time prompt to confirm your project name. Wrangler will upload the static assets and print your live production URL.

---

## 📁 Project Structure

```
my-website/
├── index.html       # Semantic HTML5 layout with dark/light theme support & SEO meta
├── styles.css       # Clean CSS design system, typography, glassmorphism, responsive queries
├── script.js        # Dark/light theme switcher, card cursor spotlight, live Amsterdam clock, KvK copy button
├── favicon.svg      # Geometric glowing monogram logo
├── _headers         # Cloudflare Pages security headers (HSTS, CSP, X-Frame-Options) and caching
├── robots.txt       # Search engine crawler permissions
└── README.md        # Instructions for previewing and deploying
```

---

## ✨ Features Included

- **Dark & Light Mode**: Automatic system preference detection with manual toggle button and `localStorage` persistence.
- **Micro-Interactions**: Ambient radial glow, dynamic card cursor-spotlight effect, and pulsing availability indicator.
- **Copy-to-Clipboard**: One-click copy for the KvK registration number with toast feedback.
- **Live Local Time**: Dynamic Europe/Amsterdam timezone clock display for European/Dutch context.
- **Cloudflare Ready**: Includes `_headers` with strict security headers (A+ rating) and cache optimization.
- **Fully Responsive**: Fluid typography (`clamp`), accessible focus indicators, and custom breakpoints for mobile, tablet, and widescreen.
