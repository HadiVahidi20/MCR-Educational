import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Style Guide - MCR Educational",
  description: "Design tokens and component showcase for MCR Educational",
};

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen p-8 space-y-12" style={{ backgroundColor: '#F7F8FC' }}>
      <div>
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#1E3A5F' }}>MCR Educational Style Guide</h1>
        <p className="text-lg" style={{ color: '#1A1A2E', opacity: 0.7 }}>Design tokens, typography, and component showcase</p>
      </div>

      {/* Brand Colors */}
      <section>
        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#1E3A5F' }}>Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-20" style={{ backgroundColor: '#1E3A5F' }}></div>
            <div className="p-3 bg-white">
              <p className="font-medium text-sm">Primary</p>
              <p className="text-xs text-gray-500">#1E3A5F</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-20" style={{ backgroundColor: '#E85D75' }}></div>
            <div className="p-3 bg-white">
              <p className="font-medium text-sm">Secondary</p>
              <p className="text-xs text-gray-500">#E85D75</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-20" style={{ backgroundColor: '#2ECDA7' }}></div>
            <div className="p-3 bg-white">
              <p className="font-medium text-sm">Accent</p>
              <p className="text-xs text-gray-500">#2ECDA7</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-20" style={{ backgroundColor: '#1A1A2E' }}></div>
            <div className="p-3 bg-white">
              <p className="font-medium text-sm">Neutral Dark</p>
              <p className="text-xs text-gray-500">#1A1A2E</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#1E3A5F' }}>Typography</h2>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Plus Jakarta Sans — Heading Font</p>
              <h1 className="text-4xl font-bold" style={{ color: '#1E3A5F' }}>Heading 1 - Empowering Youth</h1>
              <h2 className="text-3xl font-semibold" style={{ color: '#1E3A5F' }}>Heading 2 - Dance & Education</h2>
              <h3 className="text-2xl font-semibold" style={{ color: '#1E3A5F' }}>Heading 3 - Greater Manchester</h3>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Inter — Body Font</p>
              <p className="text-base">Body text — MCR Educational provides alternative education provision for young people in Greater Manchester who may be excluded or at risk of exclusion from mainstream education.</p>
              <p className="text-sm text-gray-600">Small text — Supporting copy and descriptions</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#1E3A5F' }}>Buttons</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive</Button>
              <Button disabled>Disabled</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#1E3A5F' }}>Badges</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Inputs */}
      <section>
        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#1E3A5F' }}>Inputs</h2>
        <Card>
          <CardContent className="pt-6 space-y-4 max-w-md">
            <Input placeholder="Enter your name" />
            <Input type="email" placeholder="Enter your email" />
            <Input disabled placeholder="Disabled input" />
          </CardContent>
        </Card>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-semibold mb-6" style={{ color: '#1E3A5F' }}>Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Dance Programme</CardTitle>
              <CardDescription>Creative expression through movement</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Our dance programme helps young people build confidence, teamwork, and creative skills.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Education Support</CardTitle>
              <CardDescription>Alternative education provision</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">We provide tailored educational support for young people who need an alternative to mainstream education.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community Impact</CardTitle>
              <CardDescription>Making a difference in Greater Manchester</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Building stronger communities by investing in the potential of young people across Greater Manchester.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
