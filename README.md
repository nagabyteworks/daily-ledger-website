# Daily Ledger Website

This repository contains the static website for Daily Ledger, hosted on GitHub Pages. 

## Purpose
The primary purpose of this website is to provide:
1. Daily Ledger product information
2. Privacy Policy (required by Google Play)
3. Terms of Service
4. Account Deletion mechanisms
5. Support/contact information

## Technology
This is a lightweight static website built with:
- HTML5
- CSS3 (Vanilla, CSS Variables)
- Vanilla JavaScript (for mobile nav and dynamic year)
- No build step, no backend, no dependencies

## Repository Structure
```
/
├── index.html                  # Homepage
├── privacy/index.html          # Privacy Policy
├── terms/index.html            # Terms of Service
├── delete-account/index.html   # Account Deletion Instructions
├── support/index.html          # Support and Contact Info
├── assets/
│   ├── css/style.css           # Global Stylesheet
│   └── js/main.js              # Minimal JS interactions
├── docs/
│   ├── CONTENT_CHECKLIST.md    # List of placeholders to fill before launch
│   └── PRIVACY_DATA_CHECKLIST.md # List of privacy claims to verify against the app
├── CNAME                       # Custom domain config for GitHub Pages
└── README.md                   # This file
```

## Local Preview Instructions
Since this is a static site with relative paths, you should run a local HTTP server to test it.

If you have Python installed:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

## Important Placeholders Requiring Replacement
Before publishing this site, you **must** replace all legal and technical placeholders.
Please review `docs/CONTENT_CHECKLIST.md` for a comprehensive list.

## Deployment Process & GitHub Pages Setup
1. Push this repository to a new GitHub repository on the `main` branch.
2. Go to your repository settings on GitHub -> Pages.
3. Select "Deploy from a branch" and choose the `main` branch, `/ (root)` folder.
4. Save the configuration. GitHub Actions will automatically build and deploy the static site.

## Custom Domain Setup
1. The `CNAME` file in the root directory already contains `dailyledger.nagabyte.com`.
2. In your DNS provider (e.g., Cloudflare, Namecheap, Route53), create a `CNAME` record pointing `dailyledger.nagabyte.com` to `<your-github-username>.github.io`.
3. GitHub will automatically provision an SSL certificate for HTTPS.

## Privacy Policy & Terms Update Process
When you update the Privacy Policy or Terms of Service:
1. Edit the HTML files in `privacy/index.html` or `terms/index.html`.
2. Update the `[LAST UPDATED DATE]` at the top of the file.
3. Commit and push the changes to the `main` branch. GitHub Pages will deploy the update automatically within a few minutes.
