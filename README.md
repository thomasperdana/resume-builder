# Integrated SaaS Mono Repository

> A comprehensive business platform combining SaaS Starter, HeroUI, Motion, and ERPNext in one unified repository.

## 🚀 Overview

This integrated mono repository brings together four powerful technologies to create a complete business solution:

- **SaaS Starter** - Modern SaaS foundation with authentication, payments, and user management
- **HeroUI** - Beautiful, accessible React component library
- **Motion** - Smooth animations powered by Framer Motion and Motion One
- **ERPNext** - Full ERP functionality for business management

## 📋 Features

### 🔐 SaaS Foundation
- Authentication (Sign up, Sign in, Password reset)
- Subscription management with Stripe integration
- Database setup with Drizzle ORM
- User management and roles
- Middleware for route protection

### 🎨 UI Components (HeroUI)
- 50+ React components with consistent design
- Dark/Light theme support
- Accessibility features built-in
- Customizable design system
- TypeScript support throughout

### ✨ Animations (Motion)
- Framer Motion integration
- Motion One utilities
- Pre-built animation presets
- Performance-optimized animations
- Gesture recognition

### 💼 ERP Functionality (ERPNext)
- Accounting and financial management
- Inventory and stock management
- Human resources
- Project management
- Manufacturing workflows
- Customer relationship management
- Supplier management

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, HeroUI Components
- **Animation**: Framer Motion, Motion One
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Custom JWT implementation
- **Payments**: Stripe
- **Package Manager**: pnpm
- **Build System**: Turbo (monorepo)
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint, Prettier

## 📁 Project Structure

```
├── app/                          # Next.js app directory
│   ├── (dashboard)/              # Dashboard routes
│   │   ├── page.tsx             # Enhanced homepage
│   │   ├── dashboard/           # User dashboard
│   │   └── pricing/             # Subscription management
│   └── (login)/                 # Authentication routes
├── components/                   # Base UI components
│   └── ui/                      # Reusable UI components
├── lib/                         # Utilities and configurations
│   ├── integrations/            # 🆕 Integration layer
│   │   ├── index.ts            # Main exports
│   │   ├── heroui.ts           # HeroUI integration
│   │   ├── motion.ts           # Motion integration
│   │   ├── erpnext.ts          # ERPNext integration
│   │   ├── enhanced-button.tsx  # Enhanced button component
│   │   ├── animated-card.tsx    # Animated card component
│   │   └── motion-modal.tsx     # Motion modal component
│   ├── db/                     # Database utilities
│   ├── auth/                   # Authentication utilities
│   └── stripe/                 # Stripe integration
├── packages/                    # 🆕 Integrated packages
│   ├── heroui/                 # HeroUI components
│   │   ├── components/         # All HeroUI components
│   │   └── core/              # Core utilities
│   ├── motion/                 # Motion packages
│   │   ├── motion/            # Motion One
│   │   └── framer-motion/     # Framer Motion
│   └── erpnext/               # ERPNext modules
│       ├── accounts/          # Accounting module
│       ├── stock/            # Inventory management
│       ├── hr/               # Human resources
│       └── projects/         # Project management
├── apps/                       # 🆕 Additional applications
│   └── heroui/                # HeroUI storybook and docs
└── docs/                      # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 22+
- pnpm 10+
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thomasperdana/starter.git
   cd starter
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your configuration:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/database"
   
   # Authentication
   JWT_SECRET="your-jwt-secret"
   
   # Stripe
   STRIPE_SECRET_KEY="your-stripe-secret"
   STRIPE_PUBLISHABLE_KEY="your-stripe-publishable"
   
   # ERPNext (optional)
   ERPNEXT_URL="http://localhost:8000"
   ERPNEXT_API_KEY="your-erpnext-api-key"
   ```

4. **Database setup**
   ```bash
   pnpm db:setup
   pnpm db:migrate
   pnpm db:seed
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`

## 📖 Usage Examples

### Enhanced Components

```tsx
import { EnhancedButton, AnimatedCard, MotionModal } from '@/lib/integrations';

// Enhanced button with motion
<EnhancedButton 
  motionPreset="scaleIn" 
  enableHover={true}
  onClick={handleClick}
>
  Click me!
</EnhancedButton>

// Animated card
<AnimatedCard 
  motionPreset="slideUp" 
  enableHover={true}
>
  <p>This card animates on entry and hover</p>
</AnimatedCard>

// Motion modal
<MotionModal 
  isOpen={isOpen} 
  animationPreset="scale"
  backdropBlur={true}
>
  Modal content here
</MotionModal>
```

### ERP Integration

```tsx
import { erpUtils, ERPNextClient } from '@/lib/integrations';

// Create ERP client
const erpClient = new ERPNextClient(
  process.env.ERPNEXT_URL!, 
  process.env.ERPNEXT_API_KEY!
);

// Use ERP utilities
const customers = await erpUtils.selling.getCustomers();
const balance = await erpUtils.accounts.getAccountBalance('ACC-001');
```

### Motion Utilities

```tsx
import { motionPresets, motionUtils } from '@/lib/integrations';

// Use motion presets
<motion.div {...motionPresets.fadeIn}>
  Content here
</motion.div>

// Create staggered animations
<motion.div {...motionUtils.createStagger(0.2)}>
  {items.map(item => (
    <motion.div key={item.id} {...motionPresets.slideUp}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## 🛠 Available Scripts

### Development
- `pnpm dev` - Start development server
- `pnpm dev:heroui` - Start HeroUI Storybook
- `pnpm dev:motion` - Start Motion development

### Building
- `pnpm build` - Build all packages and application
- `pnpm build:heroui` - Build HeroUI components
- `pnpm build:motion` - Build Motion packages

### Database
- `pnpm db:setup` - Setup database
- `pnpm db:generate` - Generate database schema
- `pnpm db:migrate` - Run migrations
- `pnpm db:seed` - Seed database
- `pnpm db:studio` - Open Drizzle Studio

### Testing & Quality
- `pnpm test` - Run tests
- `pnpm test:motion` - Run Motion tests
- `pnpm lint` - Run linting
- `pnpm lint:fix` - Fix linting issues
- `pnpm typecheck` - Type checking
- `pnpm format:check` - Check formatting
- `pnpm format:write` - Format code

### Maintenance
- `pnpm clean` - Clean build artifacts
- `pnpm clean:node-modules` - Clean all node_modules

## 🎨 Customization

### Theme Customization

The integrated theme system allows you to customize all components:

```tsx
import { integrationUtils } from '@/lib/integrations';

const customTheme = integrationUtils.createIntegratedTheme(
  heroUITheme,
  motionSettings
);
```

### Adding Custom Components

Create new integrated components by combining the libraries:

```tsx
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';

export const CustomButton = integrationUtils.createAnimatedComponent(
  Button,
  motionPresets.slideIn
);
```

## 🔧 Configuration

### Turbo Configuration

The monorepo uses Turbo for build orchestration. See `turbo.json` for pipeline configuration.

### TypeScript Configuration

Path mapping is configured for easy imports:
- `@/*` - Root directory
- `@heroui/*` - HeroUI packages
- `motion/*` - Motion packages
- `erpnext/*` - ERPNext modules

## 📚 Documentation

- [SaaS Starter Guide](./docs/saas-starter.md)
- [HeroUI Components](./docs/heroui.md)
- [Motion Integration](./docs/motion.md)
- [ERPNext Setup](./docs/erpnext.md)
- [API Reference](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [SaaS Starter](https://github.com/thomasperdana/saas-starter) - Foundation SaaS template
- [HeroUI](https://github.com/thomasperdana/heroui) - Beautiful React components
- [Motion](https://github.com/thomasperdana/motion) - Animation libraries
- [ERPNext](https://github.com/thomasperdana/erpnext) - ERP functionality

## 📞 Support

For support, email Umbrella@app.cashinblue.com or open an issue on GitHub.

---

**Built with ❤️ by Thomas Rudito Perdana**