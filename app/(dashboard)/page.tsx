import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CreditCard, Database, Zap, Users, BarChart, Settings } from 'lucide-react';
import { Terminal } from './terminal';

// Import integrated components
import { EnhancedButton } from '../../lib/integrations/enhanced-button';
import { AnimatedCard } from '../../lib/integrations/animated-card';

export default function HomePage() {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "SaaS Starter Foundation",
      description: "Complete authentication, database setup, Stripe integration, and user management"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "HeroUI Components",
      description: "Beautiful, accessible React components with built-in theming and customization"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Motion Animations",
      description: "Smooth, performant animations powered by Framer Motion and Motion One"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "ERPNext Integration",
      description: "Full ERP capabilities including accounting, inventory, HR, and project management"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Mono Repo Architecture",
      description: "Organized codebase with TypeScript, Turbo, and modern development tools"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Ready for Production",
      description: "Fully integrated system ready for deployment with comprehensive documentation"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Integrated SaaS
                <span className="block text-orange-500">Mono Repository</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Complete business solution combining SaaS Starter, HeroUI components, 
                Motion animations, and ERPNext functionality in one unified platform.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
                <EnhancedButton
                  motionPreset="scaleIn"
                  enableHover={true}
                  size="lg"
                  className="text-lg rounded-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </EnhancedButton>
                <EnhancedButton
                  motionPreset="slideUp"
                  enableHover={true}
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full"
                >
                  View Documentation
                </EnhancedButton>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need in One Repository
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four powerful technologies seamlessly integrated to create the ultimate business platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard
                key={index}
                motionPreset="slideUp"
                enableHover={true}
                className="p-6 h-full border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                customMotion={{
                  initial: { y: 50, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { duration: 0.6, delay: index * 0.1 }
                }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-600">
              See how all components work together harmoniously
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Technology Stack
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-lg">SaaS Starter - Authentication & Payments</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-lg">HeroUI - Beautiful Components</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-lg">Motion - Smooth Animations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-lg">ERPNext - Business Logic</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-4">Live Demo Components</h4>
              <div className="space-y-4">
                <EnhancedButton
                  motionPreset="fadeIn"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Enhanced Button with Motion
                </EnhancedButton>
                <AnimatedCard className="p-4 border border-gray-200">
                  <p className="text-gray-600">This card animates on entry and hover</p>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Next Big Thing?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Start with our integrated mono repository and ship faster than ever
          </p>
          <EnhancedButton
            motionPreset="scaleIn"
            size="lg"
            className="text-lg rounded-full bg-white text-orange-500 hover:bg-gray-50"
          >
            Deploy Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </EnhancedButton>
        </div>
      </section>
    </main>
  );
}