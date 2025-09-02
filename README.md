# Devin Han - Portfolio Website

A modern, responsive portfolio website showcasing full-stack development skills with cutting-edge web technologies. Built with Next.js 15, React 19, and TypeScript, featuring a sophisticated design system with dark/light theme switching, internationalization support, and interactive 3D elements.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Theme Switching**: Dark and light mode with system preference detection
- **Internationalization**: Full support for English and Chinese languages
- **Interactive 3D**: Three.js integration with React Three Fiber
- **Smooth Animations**: GSAP-powered animations and transitions
- **Frosted Glass UI**: Modern glassmorphism design with backdrop blur effects
- **Performance Optimized**: Built with performance and SEO in mind

## 🚀 Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework

### 3D & Animation

- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **GSAP** - Professional animation library

### Internationalization

- **next-intl** - Internationalization for Next.js

### Styling & UI

- **Custom CSS** - Tailwind utilities with custom components
- **Responsive Design** - Mobile-first responsive layout
- **Theme System** - Dark/light mode with next-themes

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/          # Internationalized routes
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components
│   │   └── ...           # Feature components
│   ├── constants/         # Static data and configurations
│   ├── hooks/            # Custom React hooks
│   └── i18n/             # Internationalization setup
├── components/            # Shared components
└── lib/                  # Utility functions
```

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/devin-portfolio.git
   cd devin-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp emailjs.config.example emailjs.config.js
   # Edit emailjs.config.js with your EmailJS credentials
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌍 Internationalization

The website supports multiple languages:

- **English** (`/en`) - Default language
- **Chinese** (`/zh`) - Chinese localization

Language switching is available in the header navigation.

## 🎨 Customization

### Adding New Projects

Edit `src/app/constants/projects.tsx` to add new portfolio projects:

```typescript
{
  id: 4,
  title: 'Your Project',
  description: 'Project description...',
  icon: <YourIcon />,
  technologies: [
    { name: 'React', icon: <ReactIcon />, color: 'bg-blue-500' }
  ],
  liveUrl: 'https://your-project.com',
  texture: '/textures/projects/your-project.mp4'
}
```

### Styling

- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom CSS variables for consistent theming

### 3D Models

- Place 3D models in `public/models/`
- Add textures in `public/textures/`
- Update `Demo.tsx` component for new 3D content

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS for consistent styling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Portfolio**: [devinhan.info](https://devinhan.info)
- **Email**: devinhworks@gmail.com
- **GitHub**: [@DevByDevin](https://github.com/DevByDevin)
- **LinkedIn**: [Devin Han](https://www.linkedin.com/in/devinh1109/)

---

Built with ❤️ by Devin Han
