# Personbal Portfolio Web

Static website featuring my profile, tech stack, and projects, available in both Spanish and English.
Built with HTML, CSS, and vanilla JavaScript — no frameworks or dependencies.

## Live Demo
[Visit the website](https://ernestocm-portfolio.netlify.app/)

---

## Structure

```
portfolio/
├── index.html            # Landing page: redirects to -es or -en based on browser language
├── index-es.html         # Spanish website
├── index-en.html         # English website
├── css/main.css          # Single stylesheet
├── js/
│   ├── main.js           # Scrollspy and dropdown menus
│   └── lang-redirect.js  # Language-based redirection from index.html
├── assets/
│   ├── favicon.svg
│   ├── cv-ernesto-cuapantecatl-es.pdf
│   ├── cv-ernesto-cuapantecatl-en.pdf
│   └── img/
├── _redirects            # "/" redirection based on Accept-Language (Netlify)
└── netlify.toml          # Publish directory and HTTP headers
```

## Running localy

No installation required. Any static server will do:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/index.html>.

Opening the files directly via `file://` also works, but the redirection from `index.html` and relative paths behave more reliably over HTTP.

## Deploy

Netlify automatically deploys the `main` branch. `netlify.toml` defines the publish directory (`.`) and security headers, keeping the configuration in the repository rather than in the web dashboard.

### Content Security Policy

The site loads **no** external resources: licons are inline SVGs, and there is no font CDN or third-party scripts. That's why the CSP in `netlify.toml` uses a strict `'self'` policy, without `'unsafe-inline'`.

For the same reason, CSS and JavaScript are always kept in separate files: inline `<style>` and `<script>` elements, as well as `style=""` and `onclick=""` attributes, are not allowed.

### Redirects

The language-based redirections for `/` is defines in `_redirects`.
