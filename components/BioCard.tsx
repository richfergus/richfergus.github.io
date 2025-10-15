"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone, MapPin, Code, BadgeQuestionMark } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function BioCard() {
  return (
    <Card className="w-full">
      <CardHeader className="text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <Image
              src="/placeholder-profile.svg"
              alt="Richard D. Ferguson"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 space-y-2">
            <CardTitle className="text-3xl font-bold">Richard D. Ferguson</CardTitle>
            <CardDescription className="text-lg">
              Chief Technological Officer
            </CardDescription>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start pt-2">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/richfergus" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-4 w-4 mr-2" />
                  richfergus
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:rich@luli.us" aria-label="Email Contact">
                  <Mail className="h-4 w-4 mr-2" />
                  rich@luli.us
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+17752234416" aria-label="Phone Number">
                  <Phone className="h-4 w-4 mr-2" />
                  (775) 223-4416
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <span>
                  <MapPin className="h-4 w-4 mr-2" />
                  Reno, NV
                </span>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="destructive" size="sm">
                    <BadgeQuestionMark className="h-4 w-4 mr-2" />
                    How I Built This
                  </Button>
                </SheetTrigger>
                <SheetContent className="sm:max-w-2xl overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>How I Built This Resume</SheetTitle>
                    <SheetDescription>
                      Technical details and architecture of this resume application
                    </SheetDescription>
                  </SheetHeader>

                  <div className="mt-6 space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong className="text-foreground">Framework:</strong> Next.js 15.5.5 with App Router & TypeScript 5</li>
                        <li><strong className="text-foreground">Styling:</strong> Tailwind CSS v4 with custom OKLCH color theme</li>
                        <li><strong className="text-foreground">UI Components:</strong> shadcn/ui (Radix UI primitives)</li>
                        <li><strong className="text-foreground">Icons:</strong> Lucide React (v0.545.0)</li>
                        <li><strong className="text-foreground">Deployment:</strong> GitHub Pages (static export)</li>
                        <li><strong className="text-foreground">Build Tool:</strong> Turbopack for fast development builds</li>
                      </ul>
                    </div>

                    <Separator />

                    {/* Theme & Design */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Theme & Design</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong className="text-foreground">Color System:</strong> OKLCH color space for perceptually uniform colors</li>
                        <li><strong className="text-foreground">Palette:</strong> Warm-toned olive/green aesthetic with earthy accents</li>
                        <li>
                          <strong className="text-foreground">Primary Color:</strong>{" "}
                          <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">
                            oklch(0.6180 0.0778 65.5444)
                          </code>
                        </li>
                        <li><strong className="text-foreground">Typography:</strong> ABeeZee (sans), Lora (serif), IBM Plex Mono (monospace)</li>
                        <li><strong className="text-foreground">Chart Colors:</strong> 5-level green progression for contribution heatmap</li>
                        <li><strong className="text-foreground">Shadows:</strong> Custom shadow system with warm hues for depth</li>
                        <li><strong className="text-foreground">Border Radius:</strong> 0.25rem for subtle, refined corners</li>
                      </ul>
                    </div>

                    <Separator />

                    {/* API Integrations */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">API Integrations</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong className="text-foreground">GitHub GraphQL API:</strong> Fetches contribution calendar data</li>
                        <li><strong className="text-foreground">Package:</strong> @octokit/graphql (v9.0.2) for type-safe queries</li>
                        <li><strong className="text-foreground">Authentication:</strong> Personal access token via environment variables</li>
                        <li><strong className="text-foreground">Data Loading:</strong> Client-side with loading/error states</li>
                      </ul>
                    </div>

                    <Separator />

                    {/* Key Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong className="text-foreground">Role Filtering:</strong> Filter experience by CTO, CISO, or Helicopter Pilot roles</li>
                        <li><strong className="text-foreground">Interactive Timeline:</strong> shadcn-ui timeline-01 block with Sheet overlays</li>
                        <li><strong className="text-foreground">GitHub Heatmap:</strong> Contribution calendar matching GitHub&apos;s visual style</li>
                        <li><strong className="text-foreground">Navigation:</strong> Responsive sidebar with mini-map scroll spy</li>
                        <li><strong className="text-foreground">Skills Display:</strong> Tabbed categorization (Programming, Cloud, Security, AI, etc.)</li>
                        <li><strong className="text-foreground">Achievements:</strong> Major career milestones prominently displayed</li>
                      </ul>
                    </div>

                    <Separator />

                    {/* Build Process */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Build Process</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong className="text-foreground">Static Export:</strong> Configured for GitHub Pages deployment</li>
                        <li><strong className="text-foreground">Configuration:</strong> <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">output: &apos;export&apos;</code> in next.config.ts</li>
                        <li><strong className="text-foreground">Image Optimization:</strong> Disabled for static export compatibility</li>
                        <li><strong className="text-foreground">Code Quality:</strong> ESLint with Next.js rules enforced</li>
                        <li><strong className="text-foreground">Deployment:</strong> gh-pages package for automated deployment</li>
                        <li><strong className="text-foreground">Bundle Size:</strong> ~155 kB first load JS (optimized)</li>
                      </ul>
                    </div>

                    <Separator />

                    {/* Architecture Notes */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Architecture Highlights</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong className="text-foreground">Component Library:</strong> All UI components copied into project (not npm dependencies)</li>
                        <li><strong className="text-foreground">Styling Approach:</strong> Utility-first with Tailwind CSS variables</li>
                        <li><strong className="text-foreground">State Management:</strong> React hooks (useState, useEffect, useMemo)</li>
                        <li><strong className="text-foreground">Type Safety:</strong> Full TypeScript coverage with strict mode</li>
                        <li><strong className="text-foreground">Performance:</strong> IntersectionObserver for scroll tracking, memoized calculations</li>
                      </ul>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Why me?</h3>
          <p className="text-muted-foreground leading-relaxed">
            I have extensive software development, infrastructure, cloud and cybersecurity experience │
            Built (bootstrapped) and exited a very profitable startup │ Led massive technology initiatives │
            Planned and implemented several worldwide product initiatives │ Personally wrote enterprise
            software being used by the US Army in various locations │ Designed strategy and led the largest
            migration of Presidential data in history for the most important office in the world
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
