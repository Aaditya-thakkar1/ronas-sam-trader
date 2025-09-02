# 🚀 Ronas Sam Trader

![Trading Tool](https://img.shields.io/badge/Trading-Tool-green?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

A **modern, animated trading tool website** built with React/Next.js featuring real-time market data visualization, advanced trading algorithms, and stunning animations inspired by professional trading platforms.

## ✨ Features

### 🎨 **Modern UI/UX Design**
- **Smooth scrolling animations** (sections, content sliders, fade-in effects)
- **Parallax scrolling** for immersive user experience
- **Custom mouse cursor** with interactive hover effects
- **Button hover animations** with color, scale, glow, and bounce effects
- **Responsive design** optimized for all devices
- **Dark/Light theme** toggle with smooth transitions

### 📊 **Trading Features**
- Real-time market data visualization
- Advanced charting with TradingView integration
- Multiple trading pairs support (XAUUSD, EURUSD, GBPUSD)
- Scalping and positional trading strategies
- Live profit/loss tracking
- Risk management tools

### 🤖 **EA (Expert Advisor) System**
- **Free 10-day demo** for all Expert Advisors
- **Request form** for EA .ex5 files
- Automated trading algorithms
- Backtesting capabilities
- Performance analytics

### 🎬 **Animations & Interactions**
- Framer Motion powered animations
- GSAP scroll-triggered animations
- Lottie animations for enhanced UX
- Page transitions and loading states
- Interactive data visualizations

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **GSAP** - High-performance animation library
- **Recharts** - Composable charting library

### **Backend & APIs**
- **Next.js API Routes** - Serverless functions
- **WebSocket** connections for real-time data
- **REST APIs** for data fetching
- **Firebase** (optional) - Real-time database

### **Deployment**
- **Vercel** - Optimized for Next.js deployment
- **GitHub Actions** - CI/CD pipeline
- **Domain management** with DNS configuration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/Aaditya-thakkar1/ronas-sam-trader.git

# Navigate to project directory
cd ronas-sam-trader

# Install dependencies
npm install
# or
yarn install

# Create environment variables file
cp .env.example .env.local

# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Keys
NEXT_PUBLIC_TRADING_API_KEY=your_trading_api_key
NEXT_PUBLIC_WEBSOCKET_URL=wss://your-websocket-url

# Database (if using)
DATABASE_URL=your_database_url

# Email Service (for EA requests)
EMAIL_SERVICE_API_KEY=your_email_api_key
```

## 📁 Project Structure

```
ronas-sam-trader/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable UI components
│   ├── lib/               # Utility functions & configs
│   ├── styles/            # Global styles
│   └── api/               # API routes
├── public/                # Static assets
│   ├── images/            # Image files
│   ├── animations/        # Lottie animations
│   └── icons/             # Icon files
├── types/                 # TypeScript type definitions
├── hooks/                 # Custom React hooks
├── utils/                 # Helper functions
└── config/                # Configuration files
```

## 🎯 Development Roadmap

### Phase 1: Foundation ✅
- [x] Next.js project setup
- [x] TypeScript configuration
- [x] Tailwind CSS setup
- [x] Basic project structure

### Phase 2: UI/UX Development 🚧
- [ ] Landing page design
- [ ] Navigation & header
- [ ] Animation components
- [ ] Responsive design
- [ ] Theme switcher

### Phase 3: Trading Features 📋
- [ ] Market data integration
- [ ] Trading dashboard
- [ ] Chart components
- [ ] EA request system
- [ ] User authentication

### Phase 4: Advanced Features 📋
- [ ] Real-time WebSocket connections
- [ ] Advanced animations
- [ ] Performance optimization
- [ ] SEO enhancements
- [ ] Analytics integration

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Coding Standards
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report

# Deployment
npm run deploy       # Deploy to Vercel
```

## 📊 Performance & SEO

- **Core Web Vitals** optimized
- **Image optimization** with Next.js Image component
- **Code splitting** for better performance
- **SEO meta tags** and structured data
- **Sitemap generation** for search engines

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/Aaditya-thakkar1/ronas-sam-trader/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Aaditya-thakkar1/ronas-sam-trader/discussions)
- **Email**: [your-email@example.com](mailto:your-email@example.com)

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TradingView](https://www.tradingview.com/) - Charting platform
- [Vercel](https://vercel.com/) - Deployment platform

---

**Made with ❤️ for the trading community**

![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)
![GitHub Stars](https://img.shields.io/github/stars/Aaditya-thakkar1/ronas-sam-trader?style=flat-square)
![GitHub Forks](https://img.shields.io/github/forks/Aaditya-thakkar1/ronas-sam-trader?style=flat-square)
![GitHub Issues](https://img.shields.io/github/issues/Aaditya-thakkar1/ronas-sam-trader?style=flat-square)
