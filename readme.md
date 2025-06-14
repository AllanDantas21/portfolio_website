# Portfolio Website

Allan Dantas' modern portfolio website built with Next.js, TypeScript, and Chakra UI.

## 🏗️ Project Architecture

This project follows a modern Next.js architecture with clear separation of concerns:

```
├── public/                      # Static assets
├── src/
│   ├── components/              # Reusable components
│   │   ├── ui/                  # Basic UI components
│   │   │   ├── paragraph/       # Paragraph component
│   │   │   ├── section/         # Section component
│   │   │   ├── bio/             # Bio components
│   │   │   ├── grid-item/       # Grid item components
│   │   │   ├── theme-toggle-button/ # Theme toggle
│   │   │   ├── projects/        # Project-related components
│   │   │   ├── logo/            # Logo component
│   │   │   ├── fonts/           # Font loader
│   │   │   └── icons/           # Custom icons
│   │   ├── layout/              # Layout components
│   │   │   ├── article/         # Article layout
│   │   │   ├── main/            # Main layout
│   │   │   └── navbar/          # Navigation bar
│   │   ├── sections/            # Specific page sections
│   │   │   ├── ProjectsSection/ # Projects section
│   │   │   └── AwardsSection/   # Awards section
│   │   └── index.ts             # Barrel exports
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utilities and configurations
│   │   ├── theme.ts             # Chakra UI theme
│   │   ├── constants.ts         # App constants
│   │   ├── utils.ts             # Utility functions
│   │   └── index.ts             # Barrel exports
│   ├── data/                    # Data and configurations
│   │   ├── projects/            # Project-related data
│   │   │   ├── projects.ts      # Main projects list
│   │   │   ├── fdf.ts           # FDF project data
│   │   │   ├── push-swap.ts     # Push swap project data
│   │   │   └── index.ts         # Barrel exports
│   │   ├── awards/              # Awards data
│   │   │   ├── awards.ts        # Awards list
│   │   │   └── index.ts         # Barrel exports
│   │   ├── navigation/          # Navigation data
│   │   │   ├── navbar-data.tsx  # Menu items
│   │   │   └── index.ts         # Barrel exports
│   │   └── index.ts             # Main data exports
│   ├── types/                   # TypeScript type definitions
│   │   ├── projects.ts          # Project types
│   │   ├── awards.ts            # Award types
│   │   ├── components.ts        # Component types
│   │   ├── navigation.ts        # Navigation types
│   │   ├── theme.ts             # Theme types
│   │   ├── common.ts            # Common types
│   │   ├── api.ts               # API types
│   │   └── index.ts             # Barrel exports
│   ├── styles/                  # Global styles
│   ├── utils/                   # Utility functions
│   │   └── index.ts             # Utility exports
│   └── pages/                   # Next.js pages
│       ├── api/                 # API routes
│       ├── projects/            # Project detail pages
│       └── _app.tsx             # App wrapper
├── locales/                     # i18n translations
│   ├── en/                      # English translations
│   └── pt/                      # Portuguese translations
├── docs/                        # Documentation
├── next.config.js               # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🚀 Features

- **Modern Architecture**: Clean separation of components, layouts, and data
- **TypeScript**: Full type safety throughout the application
- **Internationalization**: Support for Portuguese and English
- **Responsive Design**: Mobile-first approach using Chakra UI
- **Performance**: Static generation with Next.js
- **Animation**: Smooth animations with Framer Motion
- **Theme Support**: Dark/light mode toggle

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Chakra UI
- **Animation**: Framer Motion
- **Internationalization**: next-i18next
- **Analytics**: Vercel Analytics

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/AllanDantas21/Portfolio-Website.git

# Navigate to the project directory
cd Portfolio-Website

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting (when ESLint is installed)
npm run lint
```

## 🌐 Deployment

The application is optimized for deployment on Vercel but can be deployed to any platform that supports Next.js.

## 📁 Component Structure

### UI Components (`src/components/ui/`)
- **Paragraph**: Styled paragraph component
- **Section**: Animated section wrapper
- **Bio**: Biography-related components
- **GridItem**: Reusable grid item components
- **ThemeToggleButton**: Dark/light mode toggle
- **Projects**: Project-related UI components
- **Logo**: Application logo
- **Fonts**: Font loading component

### Layout Components (`src/components/layout/`)
- **ArticleLayout**: Page wrapper with animations
- **MainLayout**: Main application layout
- **Navbar**: Navigation component

### Data Structure (`src/data/`)
- **projects/**: Project information and metadata
- **awards/**: Award and achievement data
- **navigation/**: Menu and navigation data

## 🎨 Styling

The project uses Chakra UI with a custom theme that supports:
- Dark/light mode
- Custom color palette
- Responsive breakpoints
- Custom component variants

## 🌍 Internationalization

Supports Portuguese (default) and English with:
- Page-level translations
- Dynamic language switching
- Proper locale routing

## 📱 Responsive Design

Mobile-first approach with responsive:
- Navigation (hamburger menu on mobile)
- Grid layouts
- Typography scaling
- Image optimization

## 🔍 SEO Optimization

- Meta tags for each page
- Open Graph support
- Twitter Card support
- Structured data

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Allan Dantas**
- GitHub: [@AllanDantas21](https://github.com/AllanDantas21)
- LinkedIn: [Allan Dantas](https://www.linkedin.com/in/adn21/)
- 42 Profile: [aldantas](https://profile.intra.42.fr/users/aldantas)

---

Built with ❤️ using Next.js and TypeScript
