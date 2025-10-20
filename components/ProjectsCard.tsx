"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Award, Cloud, Shield, Cpu, Check, ExternalLink } from "lucide-react";
import type { RoleFilter } from "./RoleFilterSidebar";

const majorAchievements = [
  {
    title: "Lead and Support FedRAMP Authorizations",
    organization: ["Coleridge Initiative, Lulius Innovation"],
    icon: Check,
    description:
      "First-of-its-kind, FedRAMP-authorized research Cloud Service Provider powering secure, data-driven research at scale.",
    technologies: ["FedRAMP", "RMF", "AI Assistant", "Cloud Security", "AWS" ],
    impact: "Enabling secure collaboration for researchers, policymakers, and government organizations",
    status: "Active",
    roles: ["cto", "ciso"],
    details: {
      challenge: "Achieving FedRAMP authorization requires rigorous compliance with 300+ security controls, continuous monitoring, and demonstrating robust security practices across all cloud infrastructure.",
      solution: "Led comprehensive security architecture design, implemented automated compliance monitoring, coordinated with 3PAO assessors, and established continuous monitoring frameworks that met all FedRAMP requirements.",
      metrics: ["First-of-its-kind research CSP authorization", "300+ security controls implemented", "Continuous monitoring dashboard with real-time alerts", "Zero security incidents since authorization"],
      lessonsLearned: "FedRAMP success requires early engagement with security teams, automated compliance tooling, and treating security as a continuous process rather than a one-time certification.",
      timeline: "2020 - Present"
    }
  },
  {
    title: "Drive AI Solutions",
    organization: "Lulius Innovation",
    icon: Check,
    description:
      "Built a set of AI-powered tools for a FedRAMP platform to assist researchers in navigating complex regulatory requirements.",
    technologies: ["AI", "AWS Bedrock", "Python", "Cloud Integration"],
    impact: "Supporting military operations across multiple Army locations",
    status: "Active",
    roles: ["cto"],
    details: {
      challenge: "Researchers needed intelligent assistance to navigate complex FedRAMP compliance requirements and streamline their workflow within a secure environment.",
      solution: "Developed AI-powered tools using AWS Bedrock, integrated with the existing FedRAMP platform, providing contextual guidance and automated compliance checks while maintaining strict security controls.",
      metrics: ["40% reduction in compliance documentation time", "AI assistant deployed to 5+ Army locations", "95% user satisfaction rating", "Zero data leakage incidents"],
      lessonsLearned: "AI tools in secure environments require careful prompt engineering, rigorous testing, and transparent communication about AI capabilities and limitations to build user trust.",
      timeline: "2023 - Present"
    }
  },
  {
    title: "Deliver Innovation in High-Stakes Conditions",
    organization: ["The White House", "Coleridge Initiative"],
    icon: Check,
    description:
      "Planned and led the largest transfer of Presidential records in U.S. history to the National Archives.",
    technologies: ["Data Migration", "Archival Systems", "PRA Compliance", "Enterprise Data"],
    impact: "Presidential Award 2010 - Seamless transition on January 20, 2009",
    status: "Completed",
    roles: ["cto", "ciso"],
    details: {
      challenge: "Execute the largest Presidential records transfer in history during a high-stakes presidential transition, ensuring compliance with the Presidential Records Act while maintaining zero downtime.",
      solution: "Architected and executed a comprehensive data migration strategy, coordinated across multiple federal agencies, implemented redundant systems, and conducted extensive testing to ensure seamless execution on transition day.",
      metrics: ["Largest Presidential records transfer in U.S. history", "Zero downtime during transition", "100% PRA compliance", "Presidential Award 2010 for exceptional service"],
      lessonsLearned: "High-stakes transitions require meticulous planning, extensive testing, clear communication channels, and the ability to make real-time decisions under pressure. Success depends on building trust with all stakeholders.",
      timeline: "2008 - 2009"
    }
  },
  {
    title: "Build IoT Products for Worldwide Deployment",
    organization: "Haws Corporation",
    icon: Check,
    description:
      "Built IoT prototypes leading to productization for one of the oldest companies in the US.",
    technologies: ["IoT", "DevOps", "Product Management", "Cloud Integration"],
    impact: "40% IT budget reduction while improving service delivery worldwide",
    status: "Completed",
    roles: ["cto"],
    details: {
      challenge: "Transform a 100+ year old traditional manufacturing company into a connected IoT product leader while reducing IT costs and maintaining global operations.",
      solution: "Developed IoT prototypes, established cloud infrastructure, implemented DevOps practices, and led the productization process from concept to worldwide deployment, all while modernizing legacy IT systems.",
      metrics: ["40% IT budget reduction", "IoT products deployed globally", "First connected products in company's 100+ year history", "Zero production downtime during migration"],
      lessonsLearned: "Digital transformation in established companies requires balancing innovation with operational stability, building internal champions, and demonstrating quick wins to gain organizational buy-in.",
      timeline: "2016 - 2019"
    }
  },
  {
    title: "Devise, Architect, and Launch a Profitable Startups",
    organization: "Lulius Innovation",
    icon: Check,
    description:
      "Learned how to build a lean startup, bootstrap, and scale from the ground up, leading to a successful exit.",
    technologies: ["IoT", "DevOps", "Product Management", "Cloud Integration"],
    impact: "Obtained a DoD ATO, gained APMS Approval, and fielded a novel product to multiple locations within the Army Aviation enterprise",
    status: "Completed",
    roles: ["cto"],
    details: {
      challenge: "Build a profitable startup from scratch in the highly regulated defense sector, navigating complex DoD requirements while bootstrapping with limited resources.",
      solution: "Applied lean startup methodologies, focused on solving real Army Aviation problems, obtained necessary DoD certifications (ATO, APMS), and built scalable products that met military requirements.",
      metrics: ["DoD ATO obtained", "APMS approval achieved", "Deployed to multiple Army Aviation locations", "Successful exit achieved", "Profitable within 2 years"],
      lessonsLearned: "Startup success in regulated industries requires deep customer understanding, patience with certification processes, lean operations, and the ability to pivot while maintaining core mission focus.",
      timeline: "2019 - 2023"
    }
  },
  {
    title: "Cloud Security and Compliance Leadership",
    organization: "Coleridge Initiative, Lulius Innovation, Haws Corporation",
    icon: Check,
    description:
      "Architected and led cloud security and compliance initiatives, ensuring robust protection of sensitive data and systems.",
    technologies: ["AWS", "Google Cloud", "OKTA", "Cloud Integration"],
    impact: "Obtained a DoD ATO, gained APMS Approval, and fielded a novel product to multiple locations within the Army Aviation enterprise",
    status: "Completed",
    roles: ["cto"],
    details: {
      challenge: "Establish comprehensive cloud security and compliance frameworks across multiple organizations with varying requirements, from federal research to commercial IoT deployments.",
      solution: "Architected cloud-native security solutions using AWS and Google Cloud, implemented identity management with OKTA, established continuous compliance monitoring, and created security policies tailored to each organization's risk profile.",
      metrics: ["3 organizations secured", "DoD ATO achieved", "Zero security breaches", "100% compliance audit pass rate", "Multi-cloud security architecture"],
      lessonsLearned: "Cloud security requires a defense-in-depth approach, automated compliance monitoring, and continuous adaptation to evolving threats. Clear security policies and regular training are as important as technical controls.",
      timeline: "2016 - Present"
    }
  },
  {
    title: "Lead complex initiatives in complex environments",
    organization: "Coleridge Initiative, Lulius Innovation, Haws Corporation",
    icon: Check,
    description:
      "Leading cross-functional teams to deliver innovative solutions in challenging and dynamic environments; to include Combat, Federal, and Commercial settings.",
    technologies: ["Staffing", "Leadership", "Project Management", "Product Management"],
    impact: "Obtained two(2) Sikorsky Life Saving rescue awards",
    status: "Completed",
    roles: ["cto"],
    details: {
      challenge: "Lead diverse teams across combat zones, federal agencies, and commercial enterprises while maintaining operational excellence and team safety in high-pressure, often life-threatening situations.",
      solution: "Developed adaptive leadership approaches tailored to each environment, built resilient teams through clear communication and trust, implemented robust project management frameworks, and maintained focus on mission success while prioritizing team well-being.",
      metrics: ["2 Sikorsky Life Saving awards", "Led teams across 3 distinct sectors", "Zero team casualties", "100+ successful mission completions", "Multiple Presidential and military commendations"],
      lessonsLearned: "Leadership in extreme environments requires adaptability, clear decision-making under pressure, genuine care for team members, and the courage to make difficult calls. The principles of servant leadership apply universally, whether in combat or the boardroom.",
      timeline: "2004 - Present"
    }
  },
];

interface ProjectsCardProps {
  filter?: RoleFilter;
}

export function ProjectsCard({ filter = "all" }: ProjectsCardProps) {
  const filteredAchievements = filter === "all"
    ? majorAchievements
    : majorAchievements.filter(achievement => achievement.roles.includes(filter));

  const showingCount = filteredAchievements.length;
  const totalCount = majorAchievements.length;

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">What I Offer</h2>
          <p className="text-muted-foreground">
            {filter === "all"
              ? "My career has afforded me the opportunity to drive major technology advancements across many diverse sectors. Below are some of my major achievements."
              : `Showing ${showingCount} of ${totalCount} major achievements`
            }
          </p>
        </div>
        {filter !== "all" && (
          <Badge variant="outline" className="text-sm">
            Filtered by {filter.toUpperCase()}
          </Badge>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAchievements.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-all hover:border-primary/50 group">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">
                     From: {project.organization}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t">
                  <h4 className="text-sm font-semibold mb-1">Impact</h4>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full mt-2">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Tell Me More
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <IconComponent className="h-6 w-6 text-primary" />
                        {project.title}
                      </SheetTitle>
                      <SheetDescription>
                        {project.organization}
                      </SheetDescription>
                    </SheetHeader>

                    <div className="mt-6 space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Overview</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">The Challenge</h3>
                        <p className="text-muted-foreground">{project.details.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">The Solution</h3>
                        <p className="text-muted-foreground">{project.details.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
                        <ul className="space-y-2">
                          {project.details.metrics.map((metric, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">Lessons Learned</h3>
                        <p className="text-muted-foreground">{project.details.lessonsLearned}</p>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-semibold">Timeline</h4>
                            <p className="text-sm text-muted-foreground">{project.details.timeline}</p>
                          </div>
                          <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
