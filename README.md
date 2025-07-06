# Sushant Sonbarse - DevOps Engineer Portfolio

A modern, professional portfolio website built with Astro, Tailwind CSS, and Alpine.js.

## 🚀 Features

- **Modern Tech Stack**: Astro + Tailwind CSS + Alpine.js
- **Fully Static**: No backend dependencies
- **Dark/Light Mode**: Toggle with persistent preference
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Scroll-triggered animations
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Loading**: Optimized images and minimal JavaScript
- **Accessible**: ARIA labels and semantic markup

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v4.16+ - Static Site Generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4+ - Utility-first CSS
- **Interactivity**: [Alpine.js](https://alpinejs.dev/) v3.14+ - Minimal JavaScript framework
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) - Modern sans-serif
- **Icons**: Official SVG icons for tools + Emoji

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sonbarse17/sushant-portfolio.git
   cd sushant-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

### GitHub Pages
1. Update `astro.config.mjs` with your repository name
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to "GitHub Actions"

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Framework preset: Astro
3. Deploy

## 📁 Project Structure

```
/
├── public/
│   ├── images/
│   ├── icons/
│   │   ├── aws.svg
│   │   ├── docker.svg
│   │   ├── kubernetes.svg
│   │   └── ... (other tool icons)
│   └── sushant_sonbarse_resume.pdf
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Customization

### Colors
Update colors in `tailwind.config.mjs`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### Content
- **Personal Info**: Update in respective component files
- **Skills**: Modify `src/components/Skills.astro`
- **Projects**: Update `src/components/Projects.astro`
- **Resume**: Replace `public/sushant_sonbarse_resume.pdf`
- **Tool Icons**: Official SVG icons in `public/icons/` directory

### Dark Mode
Dark mode is implemented using:
- Tailwind's `dark:` classes
- Alpine.js for toggle functionality
- localStorage for persistence

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance

- **Lighthouse Score**: 95+ on all metrics
- **Image Optimization**: Responsive images with proper loading
- **CSS**: Purged and minified with Tailwind
- **JavaScript**: Minimal Alpine.js for interactivity

## 🔧 Configuration

### SEO
Update meta tags in `src/layouts/Layout.astro`:
```astro
<title>{title}</title>
<meta name="description" content={description} />
<meta name="keywords" content="DevOps, AWS, Kubernetes..." />
```

### Analytics (Optional)
Add Google Analytics to `src/layouts/Layout.astro`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Sushant Sonbarse**
- Email: sushantsonbarse07@gmail.com
- LinkedIn: [sushant-sonbarse](https://www.linkedin.com/in/sushant-sonbarse/)
- GitHub: [sonbarse17](https://github.com/sonbarse17)

---

⭐ Star this repository if you found it helpful!