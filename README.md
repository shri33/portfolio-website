# Shri Srivastava — Portfolio

A modern, production-ready portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark Mode**: Automatic dark/light mode with user preference
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG AA compliant with focus management and screen reader support
- **SEO Optimized**: Meta tags, Open Graph, structured data, and sitemap
- **Performance**: Optimized images, code splitting, and minimal bundle size
- **Generative AI**: Interactive project case study generator (demo)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel/GitHub Pages

## 📁 Project Structure

```
portfolio-shri/
├── src/
│   ├── app/                    # Next.js app directory
│   ├── components/             # Reusable components
│   ├── data/                   # Static data (projects, skills, etc.)
│   ├── lib/                    # Utilities and configurations
│   ├── store/                  # State management
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
├── content/                    # MDX blog content (if enabled)
└── ...config files
```

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shri33/portfolio-shri.git
   cd portfolio-shri
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Copy the resume file (already included):
   ```bash
   # Resume should be in public/resume.pdf
   ```

4. Create environment variables (optional):
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   OPENAI_API_KEY=your_openai_key_optional
   NEXT_PUBLIC_GA_ID=your_google_analytics_id_optional
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Edit the following files to customize with your information:

- `src/data/socials.ts` - Contact info, social links, bio
- `src/data/projects.ts` - Project portfolio
- `src/data/skills.ts` - Technical skills
- `src/app/layout.tsx` - SEO metadata

### Content Updates

- **Projects**: Add/edit projects in `src/data/projects.ts`
- **Skills**: Modify skills in `src/data/skills.ts`  
- **Experience**: Update work experience in the main page component
- **Resume**: Replace `public/resume.pdf` with your resume

### Images

Add your images to `public/images/`:
- `profile.jpg` - Your profile photo
- `project-*.png` - Project screenshots
- Replace placeholder content in components

### Colors & Styling

The design system is configured in `tailwind.config.js`:
- Primary color: `#06b6d4` (teal)
- Accent color: `#7c3aed` (violet)
- Modify these and other design tokens as needed

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on each push

### GitHub Pages

1. Update `next.config.js` for static export:
   ```js
   output: 'export',
   trailingSlash: true,
   images: { unoptimized: true }
   ```

2. Build and export:
   ```bash
   npm run build
   ```

3. Deploy the `out/` directory to GitHub Pages

### Other Platforms

The built static files in `out/` can be deployed to any static hosting service (Netlify, Cloudflare Pages, etc.).

## 🔧 Development

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Type Check

```bash
npm run type-check
```

### Test

```bash
npm run test
```

## 🎯 Features in Detail

### Generative Project Assistant

The portfolio includes an interactive AI-powered project case study generator:

- Input GitHub repo URLs or project descriptions
- Generates professional project writeups
- Copy to clipboard functionality
- Currently uses mock data (requires OpenAI API key for production)

To enable real AI generation:
1. Get an OpenAI API key
2. Add `OPENAI_API_KEY` to your environment variables
3. The component will automatically use the real API

### Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast color schemes
- Focus management
- Skip to content links

### SEO

- Meta tags and Open Graph
- JSON-LD structured data
- Sitemap generation
- Robots.txt
- Fast Core Web Vitals

## 📝 TODO

- [ ] Add actual profile images
- [ ] Update project repository URLs
- [ ] Add Google Analytics tracking ID
- [ ] Add blog functionality (MDX support included)
- [ ] Add contact form backend integration
- [ ] Add more project case studies
- [ ] Add testimonials section
- [ ] Add resume download analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Contact

- **Email**: shrisrivastava2@gmail.com
- **LinkedIn**: [shri-srivastava](https://www.linkedin.com/in/shri-srivastava-ab04a5175/)
- **GitHub**: [shri33](https://github.com/shri33)
- **Portfolio**: [shri33.github.io](https://shri33.github.io)

---

Built with ❤️ by Shri Srivastava
