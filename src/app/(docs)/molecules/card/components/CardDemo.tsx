import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/ui/molecules/Card";
import Button from "@/app/ui/atoms/Button";
import Avatar from "@/app/ui/atoms/Avatar";
import Badge from "@/app/ui/atoms/Badge";
import Preview from "@/app/components/Preview";

export default function CardDemo() {
  return (
    <Preview>
      <div className="space-y-8 w-full">
        {/* Basic Usage */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Basic Usage</h3>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
              <CardDescription>
                A modern web application built with React and TypeScript for scalable development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This project demonstrates advanced patterns in modern web development, 
                including server-side rendering, real-time updates, and responsive design principles.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">View Details</Button>
              <Button variant="outline" size="sm">Edit Project</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Different Variants */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card variant="default">
              <CardHeader>
                <CardTitle size="sm">Default</CardTitle>
                <CardDescription size="sm">Clean design with subtle shadows</CardDescription>
              </CardHeader>
              <CardContent size="sm">
                Perfect for general content and standard layouts with balanced visual weight.
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle size="sm">Elevated</CardTitle>
                <CardDescription size="sm">Enhanced depth and prominence</CardDescription>
              </CardHeader>
              <CardContent size="sm">
                Ideal for highlighting important content and creating visual hierarchy.
              </CardContent>
            </Card>

            <Card variant="modern">
              <CardHeader>
                <CardTitle size="sm">Modern</CardTitle>
                <CardDescription size="sm">Vercel-inspired sophisticated shadows</CardDescription>
              </CardHeader>
              <CardContent size="sm">
                Contemporary design with custom shadow values for premium feel.
              </CardContent>
            </Card>

            <Card variant="minimal">
              <CardHeader>
                <CardTitle size="sm">Minimal</CardTitle>
                <CardDescription size="sm">Clean design without borders</CardDescription>
              </CardHeader>
              <CardContent size="sm">
                Great for content-focused layouts and dashboard interfaces.
              </CardContent>
            </Card>

            <Card variant="outline">
              <CardHeader>
                <CardTitle size="sm">Outline</CardTitle>
                <CardDescription size="sm">Transparent with defined borders</CardDescription>
              </CardHeader>
              <CardContent size="sm">
                Excellent for overlays and transparent background layouts.
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardHeader>
                <CardTitle size="sm">Glass</CardTitle>
                <CardDescription size="sm">Backdrop blur with transparency</CardDescription>
              </CardHeader>
              <CardContent size="sm">
                Modern glass morphism effect with sophisticated backdrop blur.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive Cards */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Interactive Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card interactive variant="modern" className="cursor-pointer">
              <CardHeader alignment="center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle size="sm">Fast Performance</CardTitle>
                <CardDescription>Lightning fast load times and optimal rendering</CardDescription>
              </CardHeader>
            </Card>

            <Card interactive variant="modern" className="cursor-pointer">
              <CardHeader alignment="center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle size="sm">Secure by Design</CardTitle>
                <CardDescription>Enterprise-grade security and data protection</CardDescription>
              </CardHeader>
            </Card>

            <Card interactive variant="modern" className="cursor-pointer">
              <CardHeader alignment="center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <CardTitle size="sm">User Friendly</CardTitle>
                <CardDescription>Intuitive interface with accessibility focus</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Team Member Cards */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Team Member Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="elevated" interactive>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    fallback="John Doe"
                    size="lg"
                  />
                  <div className="flex-1">
                    <CardTitle size="md">John Doe</CardTitle>
                    <CardDescription>Lead Developer & Architecture Specialist</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Passionate about creating scalable web applications and mentoring junior developers. 
                  Expert in React ecosystem, Node.js, and cloud architecture patterns.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="info" size="sm">React</Badge>
                  <Badge variant="success" size="sm">Node.js</Badge>
                  <Badge variant="default" size="sm">TypeScript</Badge>
                </div>
              </CardContent>
              <CardFooter justify="end">
                <Button size="sm" variant="outline">View Profile</Button>
                <Button size="sm">Contact</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated" interactive>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b27c?w=100&h=100&fit=crop&crop=face"
                    fallback="Sarah Wilson"
                    size="lg"
                  />
                  <div className="flex-1">
                    <CardTitle size="md">Sarah Wilson</CardTitle>
                    <CardDescription>Senior UX Designer & Research Lead</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Specializes in user research, interaction design, and creating delightful user 
                  experiences for complex applications and design systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="warning" size="sm">Figma</Badge>
                  <Badge variant="info" size="sm">Research</Badge>
                  <Badge variant="default" size="sm">Prototyping</Badge>
                </div>
              </CardContent>
              <CardFooter justify="end">
                <Button size="sm" variant="outline">View Profile</Button>
                <Button size="sm">Contact</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Product Showcase Cards */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Product Showcase</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card variant="modern" interactive spacing="tight">
              <div className="aspect-video bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <CardHeader>
                <CardTitle size="md">UIpulse Pro</CardTitle>
                <CardDescription>Professional component library with advanced features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">$49</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-1">/month</span>
                  </div>
                  <Badge variant="info" size="sm">Popular</Badge>
                </div>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• 200+ Premium Components</li>
                  <li>• Advanced Customization</li>
                  <li>• Priority Support</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            <Card variant="modern" interactive spacing="tight">
              <div className="aspect-video bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <CardHeader>
                <CardTitle size="md">UIpulse Enterprise</CardTitle>
                <CardDescription>Complete design system solution for large teams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">$199</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-1">/month</span>
                  </div>
                  <Badge variant="success" size="sm">Enterprise</Badge>
                </div>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• Unlimited Components</li>
                  <li>• Custom Design Tokens</li>
                  <li>• Dedicated Support</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="w-full">Contact Sales</Button>
              </CardFooter>
            </Card>

            <Card variant="modern" interactive spacing="tight">
              <div className="aspect-video bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <CardHeader>
                <CardTitle size="md">UIpulse Custom</CardTitle>
                <CardDescription>Tailored solution designed specifically for your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">Custom</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-1">pricing</span>
                  </div>
                  <Badge variant="warning" size="sm">Custom</Badge>
                </div>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• Bespoke Components</li>
                  <li>• Full Source Code</li>
                  <li>• Implementation Support</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Different Sizes */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Sizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card size="sm" variant="modern">
              <CardHeader>
                <CardTitle size="sm">Small Card</CardTitle>
                <CardDescription size="sm">Compact padding perfect for tight layouts and sidebars</CardDescription>
              </CardHeader>
              <CardContent size="sm">
                <p>Ideal for dashboard widgets and condensed information displays.</p>
              </CardContent>
            </Card>

            <Card size="lg" variant="modern">
              <CardHeader>
                <CardTitle size="lg">Large Card</CardTitle>
                <CardDescription>Generous spacing for important content and feature highlights</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Perfect for highlighting key information, creating focal points in your layout, 
                  or showcasing important features with plenty of breathing room.
                </p>
              </CardContent>
              <CardFooter>
                <Button>Primary Action</Button>
                <Button variant="outline">Secondary</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Header Alignments */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Header Alignments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card variant="outline">
              <CardHeader alignment="left">
                <CardTitle size="sm">Left Aligned</CardTitle>
                <CardDescription size="sm">Default alignment for most content</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="outline">
              <CardHeader alignment="center">
                <CardTitle size="sm">Center Aligned</CardTitle>
                <CardDescription size="sm">Perfect for feature cards and CTAs</CardDescription>
              </CardHeader>
            </Card>

            <Card variant="outline">
              <CardHeader alignment="right">
                <CardTitle size="sm">Right Aligned</CardTitle>
                <CardDescription size="sm">Useful for statistics and numbers</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Footer Justification */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Footer Layouts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card variant="outline">
              <CardHeader>
                <CardTitle size="sm">Space Between</CardTitle>
                <CardDescription size="sm">Actions spread across full width</CardDescription>
              </CardHeader>
              <CardFooter justify="between">
                <span className="text-sm text-neutral-500 dark:text-neutral-400">Updated 2h ago</span>
                <Button size="sm" variant="outline">Edit</Button>
              </CardFooter>
            </Card>

            <Card variant="outline">
              <CardHeader>
                <CardTitle size="sm">End Aligned</CardTitle>
                <CardDescription size="sm">Actions grouped at the end</CardDescription>
              </CardHeader>
              <CardFooter justify="end" gap="sm">
                <Button size="sm" variant="outline">Cancel</Button>
                <Button size="sm">Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Preview>
  );
}