import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Guide - MCR Educational",
  description: "Design tokens and component showcase for MCR Educational",
};

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen p-8 space-y-12 bg-neutral-light">
      <div>
        <h1 className="text-4xl font-bold mb-2 text-primary">MCR Educational Style Guide</h1>
        <p className="text-lg text-neutral-dark/70">Design tokens, typography, and component showcase</p>
      </div>

      {/* Brand Colors */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-primary">Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-20 bg-primary"></div>
            <div className="p-3 bg-white">
              <p className="font-medium text-sm">Primary</p>
              <p className="text-xs text-gray-500">Deep Navy · #1E3A5F</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-20 bg-secondary"></div>
            <div className="p-3 bg-white">
              <p className="font-medium text-sm">Secondary</p>
              <p className="text-xs text-gray-500">Coral Pink · #E85D75</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-20 bg-accent"></div>
            <div className="p-3 bg-white">
              <p className="font-medium text-sm">Accent</p>
              <p className="text-xs text-gray-500">Teal Green · #2ECDA7</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-20 bg-neutral-dark"></div>
            <div className="p-3 bg-white">
              <p className="font-medium text-sm">Neutral Dark</p>
              <p className="text-xs text-gray-500">Near Black · #1A1A2E</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-20 bg-neutral-light border"></div>
            <div className="p-3 bg-white">
              <p className="font-medium text-sm">Neutral Light</p>
              <p className="text-xs text-gray-500">Off White · #F7F8FC</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm">
            <div className="h-20 bg-white border"></div>
            <div className="p-3 bg-white">
              <p className="font-medium text-sm">White</p>
              <p className="text-xs text-gray-500">#FFFFFF</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-primary">Typography</h2>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div>
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Plus Jakarta Sans — Heading Font</p>
              <h1 className="text-4xl font-bold text-primary">Heading 1 — Empowering Youth</h1>
              <h2 className="text-3xl font-semibold text-primary">Heading 2 — Dance & Education</h2>
              <h3 className="text-2xl font-semibold text-primary">Heading 3 — Greater Manchester</h3>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Inter — Body Font</p>
              <p className="text-base">Body text — MCR Educational provides alternative education provision for young people in Greater Manchester who may be excluded or at risk of exclusion from mainstream education.</p>
              <p className="text-sm text-gray-600 mt-2">Small text — Supporting copy and descriptions for all sections.</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Space Grotesk — Stats Font</p>
              <p className="text-4xl font-bold text-accent" style={{ fontFamily: "var(--font-stats)" }}>150+</p>
              <p className="text-sm text-gray-600">Students Supported</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-primary">Buttons</h2>
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
        <h2 className="text-2xl font-semibold mb-6 text-primary">Badges</h2>
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
        <h2 className="text-2xl font-semibold mb-6 text-primary">Inputs</h2>
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
        <h2 className="text-2xl font-semibold mb-6 text-primary">Cards</h2>
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

      {/* Design Tokens */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-primary">Design Tokens</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-mono">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Color Tokens</p>
                <ul className="space-y-1">
                  <li><span className="text-primary font-semibold">--color-primary</span>: #1E3A5F</li>
                  <li><span className="text-secondary font-semibold">--color-secondary</span>: #E85D75</li>
                  <li><span className="text-accent font-semibold">--color-accent</span>: #2ECDA7</li>
                  <li><span className="text-neutral-dark font-semibold">--color-neutral-dark</span>: #1A1A2E</li>
                  <li>--color-neutral-light: #F7F8FC</li>
                </ul>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Font Tokens</p>
                <ul className="space-y-1">
                  <li>--font-heading: Plus Jakarta Sans</li>
                  <li>--font-body: Inter</li>
                  <li>--font-stats: Space Grotesk</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
