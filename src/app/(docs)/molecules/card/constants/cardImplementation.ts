export const cardImplementation = `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/ui/molecules/Card";
import Button from "@/app/ui/atoms/Button";
import Avatar from "@/app/ui/atoms/Avatar";

export default function CardExample() {
  return (
    <div className="space-y-6">
      {/* Basic Card */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Card</h3>
        <Card>
          <CardHeader>
            <CardTitle>Project Alpha</CardTitle>
            <CardDescription>
              A modern web application built with React and TypeScript.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This project demonstrates advanced patterns in modern web development,
              including server-side rendering, real-time updates, and responsive design.
            </p>
          </CardContent>
          <CardFooter>
            <Button size="sm">View Details</Button>
            <Button variant="outline" size="sm">Edit</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Different Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle size="sm">Elevated Card</CardTitle>
              <CardDescription>Enhanced shadows and depth</CardDescription>
            </CardHeader>
            <CardContent size="sm">
              Perfect for highlighting important content or featured items.
            </CardContent>
          </Card>

          <Card variant="modern">
            <CardHeader>
              <CardTitle size="sm">Modern Card</CardTitle>
              <CardDescription>Subtle shadows with contemporary feel</CardDescription>
            </CardHeader>
            <CardContent size="sm">
              Vercel-inspired design with custom shadow values.
            </CardContent>
          </Card>

          <Card variant="minimal">
            <CardHeader>
              <CardTitle size="sm">Minimal Card</CardTitle>
              <CardDescription>Clean design without borders</CardDescription>
            </CardHeader>
            <CardContent size="sm">
              Great for content-focused layouts and dashboards.
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardHeader>
              <CardTitle size="sm">Glass Card</CardTitle>
              <CardDescription>Backdrop blur with transparency</CardDescription>
            </CardHeader>
            <CardContent size="sm">
              Modern glass morphism effect with blur backdrop.
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive Cards */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interactive Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card interactive variant="modern">
            <CardHeader alignment="center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <CardTitle size="sm">Fast Performance</CardTitle>
              <CardDescription>Lightning fast load times</CardDescription>
            </CardHeader>
          </Card>

          <Card interactive variant="modern">
            <CardHeader alignment="center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle size="sm">Secure</CardTitle>
              <CardDescription>Enterprise-grade security</CardDescription>
            </CardHeader>
          </Card>

          <Card interactive variant="modern">
            <CardHeader alignment="center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <CardTitle size="sm">User Friendly</CardTitle>
              <CardDescription>Intuitive and accessible</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Team Member Cards */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Team Member Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="elevated" interactive>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  fallback="John Doe"
                  size="lg"
                />
                <div>
                  <CardTitle size="sm">John Doe</CardTitle>
                  <CardDescription>Lead Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Passionate about creating scalable web applications and mentoring 
                junior developers. Expert in React, Node.js, and cloud architecture.
              </p>
            </CardContent>
            <CardFooter justify="between">
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded text-xs">Node.js</span>
              </div>
              <Button size="sm" variant="outline">Contact</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated" interactive>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar 
                  fallback="Sarah Wilson"
                  size="lg"
                />
                <div>
                  <CardTitle size="sm">Sarah Wilson</CardTitle>
                  <CardDescription>UX Designer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Specializes in user research, interaction design, and creating 
                delightful user experiences for complex applications.
              </p>
            </CardContent>
            <CardFooter justify="between">
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 rounded text-xs">Figma</span>
                <span className="px-2 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400 rounded text-xs">Research</span>
              </div>
              <Button size="sm" variant="outline">Contact</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Product Cards */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Product Showcase</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card variant="modern" interactive spacing="tight">
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4"></div>
            <CardHeader>
              <CardTitle size="sm">UIpulse Pro</CardTitle>
              <CardDescription>Professional component library</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">$49</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">/month</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" className="w-full">Get Started</Button>
            </CardFooter>
          </Card>

          <Card variant="modern" interactive spacing="tight">
            <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4"></div>
            <CardHeader>
              <CardTitle size="sm">UIpulse Enterprise</CardTitle>
              <CardDescription>Complete design system solution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">$199</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">/month</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>

          <Card variant="modern" interactive spacing="tight">
            <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-4"></div>
            <CardHeader>
              <CardTitle size="sm">UIpulse Custom</CardTitle>
              <CardDescription>Tailored for your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Custom</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">pricing</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline" className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Sizes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card size="sm">
            <CardHeader>
              <CardTitle size="sm">Small Card</CardTitle>
              <CardDescription size="sm">Compact padding for tight layouts</CardDescription>
            </CardHeader>
          </Card>

          <Card size="lg">
            <CardHeader>
              <CardTitle size="lg">Large Card</CardTitle>
              <CardDescription>More spacious padding for important content</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Perfect for highlighting key information or creating focal points in your layout.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}`;
