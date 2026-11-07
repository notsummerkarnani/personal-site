# samarkarnani.com

Personal site. Vite + React + TypeScript, built as a static site.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs static files to dist/
```

All content (experience, case studies, projects, skills, links) is in `src/data.ts`.
Project screenshots are in `public/projects/`, and the resume PDF is `public/Samar-Karnani-Resume.pdf`.

## Deploy (GitHub Pages + GoDaddy domain)

1. Push this folder to a GitHub repo and enable **Settings → Pages → Source: GitHub Actions**.
   `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
2. `public/CNAME` already contains `samarkarnani.com`.
3. In GoDaddy DNS for samarkarnani.com:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<your-github-username>.github.io`
   - Remove any GoDaddy "Parked" / forwarding `A` record for `@`.
4. Back in GitHub Pages settings, set the custom domain and tick **Enforce HTTPS** once the certificate is issued.
