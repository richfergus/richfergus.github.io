"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Building2, Calendar, ChevronRight } from "lucide-react";
import type { RoleFilter } from "./RoleFilterSidebar";

interface Experience {
  title: string;
  company: string;
  period: string;
  status: "current" | "past";
  badge: string;
  preview: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  budget?: string;
  certifications?: string[];
  awards?: string[];
  roles: RoleFilter[];
}

const experiences: Experience[] = [
  {
    title: "Chief Technological Officer",
    company: "Coleridge Initiative",
    period: "Nov 2023 – Present",
    status: "current",
    badge: "Current Position",
    preview: "FedRAMP-authorized research Cloud Service Provider",
    description:
      "Responsible for the development and security of a first-of-its-kind, FedRAMP-authorized research Cloud Service Provider (CSP) that powers secure, data-driven research at scale.",
    achievements: [
      "Lead enablement of highly secure infrastructure for researchers, policymakers, and government organizations",
      "Ensure highest standards of privacy, compliance, and security",
      "Developed and deployed an AI Research and Data Exports assistant for users on the platform",
      "Enable secure collaboration with confidence across multiple sectors",
    ],
    technologies: ["FedRAMP", "AI", "Cloud Security", "Compliance", "Research Infrastructure"],
    roles: ["cto", "ciso"],
  },
  {
    title: "President and Chief Technological Officer",
    company: "Lulius Innovation",
    period: "July 2016 – Present",
    status: "current",
    badge: "Founder",
    preview: "Bootstrapped startup - DoD enterprise software",
    description:
      "Founder of a traditional startup. Fully bootstrapped and immediately profitable. Envisioned, designed and installed custom written enterprise software for the Department of Defense currently being used in the US Army.",
    achievements: [
      "Built profitable startup from ground up without external funding",
      "Developed custom enterprise software deployed to US Army",
      "Became an expert on the US Government's Risk Management Framework (RMF)",
      "Achieved immediate profitability and sustained growth",
    ],
    technologies: ["DoD RMF", "Enterprise Software", "Full-Stack Development", "Government Contracting"],
    roles: ["cto"],
  },
  {
    title: "Commander, 29th Combat Aviation Brigade",
    company: "US Army MDARNG",
    period: "July 2019 – April 2023",
    status: "past",
    badge: "Military Leadership",
    preview: "4,300 Soldiers, billions in equipment",
    description:
      "Responsible for over 4300 wartime and 1300 in garrison Soldiers, accountable for the most lethal force on the linear battlefield. Oversees billions of dollars' worth of military equipment, ensuring its maintenance, proper allocation, and optimal utilization.",
    achievements: [
      "Led 4,300 wartime and 1,300 garrison Soldiers",
      "Managed billions of dollars in military equipment and assets",
      "Ensured combat readiness and force agility for worldwide deployment",
      "Maintained highest operational standards for aviation brigade",
    ],
    technologies: ["UH-60 Black Hawk", "Aviation Operations", "Leadership", "Logistics"],
    certifications: ["Master Aviator", "UH-60 Instructor Pilot (3800+ hours)", "Army Safety Officer"],
    roles: ["pilot"],
  },
  {
    title: "Global Director of Technology and Innovation (CTO)",
    company: "Haws Corporation",
    period: "Sep 2016 – July 2019",
    status: "past",
    badge: "Enterprise CTO",
    preview: "Innovation lead, IoT development, 40% cost reduction",
    description:
      "The lead on all technological aspects to one of the oldest companies in the US. Head of innovation; built a software development team focused on DevOps and product improvement.",
    achievements: [
      "Built software development team focused on DevOps and product improvement",
      "Developed several IoT prototypes leading to productization",
      "Responsible for worldwide IT delivery, improvement, and support to International Offices",
      "Reduced IT budget by 40% while improving service delivery",
    ],
    technologies: ["IoT", "DevOps", "VMware", "Cloud", "Product Development"],
    roles: ["cto"],
  },
  {
    title: "National Security Fellow",
    company: "Harvard University",
    period: "June 2015 – Sep 2016",
    status: "past",
    badge: "Harvard NSF",
    preview: "Nationally competitive fellowship",
    description:
      "Selected for a nationally competitive yearlong postgraduate fellowship in National Security. Conducted specific research on the strategic uses of Information Technology as it applies to US national security and Cyber defense.",
    achievements: [
      "Selected for nationally competitive postgraduate fellowship",
      "Conducted research on strategic uses of IT for national security",
      "Planned and briefed senior government and industry leadership on cyber operations",
      "Advanced expertise in cybersecurity policy and defense strategy",
    ],
    technologies: ["Cybersecurity", "National Security", "Policy Research", "Strategic Planning"],
    roles: ["ciso"],
  },
  {
    title: "Federal Chief Information Officer",
    company: "The Federal Labor Relations Authority",
    period: "Jul 2009 – June 2012",
    status: "past",
    badge: "Presidential Appointee",
    preview: "First full open-source government website, $18M budget",
    description:
      "The agency's lead on all communications and technical operations. Reported directly to the Presidential appointed Chairman on specific IT metrics, plans, budget execution and Presidential initiatives.",
    achievements: [
      "Led the first full, all open-source public website by a Government agency",
      "Designed and developed agency-wide upgrade of network, telecommunications and server infrastructure",
      "Refreshed 85% of the agencies hardware and migrated over 50% of server infrastructure utilizing virtualization",
      "Moved majority of application development to SaaS framework",
      "First small agency to provide data elements for data.gov",
      "Voting member on the Federal CIO Council",
    ],
    technologies: ["Open Source", "SaaS", "Virtualization", "FISMA", "data.gov"],
    budget: "$18 million",
    certifications: ["VCP4"],
    roles: ["cto", "ciso"],
  },
  {
    title: "Chief of Engineering, Infrastructure and Support",
    company: "The Executive Office of the President (The White House)",
    period: "Jul 2007 – Jul 2009",
    status: "past",
    badge: "The White House",
    preview: "Innovation for POTUS, $35M budget, Top Secret/SCI",
    description:
      "Responsible for the design, development and deployment of innovative solutions on all new initiatives for the nation's most important chief executive. Managed the agencies most senior IT administrators and engineers with the mission to enhance data center operational stability and leverage IT solutions seamlessly to the end-user.",
    achievements: [
      "Led design and deployment of innovative solutions for the President",
      "Implemented technologies consistent with FISMA and Presidential Records Act (PRA) provisions",
      "Managed enterprise test and release readiness and tier III support",
      "Ensured data center operational stability for critical executive operations",
    ],
    technologies: ["FISMA", "PRA", "Enterprise Infrastructure", "Data Center"],
    budget: "$35 million Capital Investment Program",
    certifications: ["PMP", "Federal Contracting Warrant"],
    roles: ["cto", "ciso"],
  },
  {
    title: "Presidential Transition Program Manager",
    company: "The Executive Office of the President (The White House)",
    period: "Aug 2008 – Jan 2009",
    status: "past",
    badge: "Historic",
    preview: "Largest Presidential records transfer in U.S. history",
    description:
      "Planned, implemented and led the largest transfer of Presidential records in U.S. history to the National Archives while maintaining the continuity and stability of a large and complex data enterprise.",
    achievements: [
      "Led largest Presidential records transfer in U.S. history",
      "Ensured no data from one Administration transcended to the next",
      "Preserved all electronic records in record copy format",
      "Transmitted records by 12:01 AM on January 20, 2009",
      "Maintained enterprise continuity during transition",
    ],
    technologies: ["Data Migration", "Archival Systems", "Presidential Records Act", "Enterprise Data Management"],
    awards: ["Presidential Award 2010 - First Ever Electronic Presidential Transition"],
    roles: ["cto", "ciso"],
  },
  {
    title: "Congressional Fellow",
    company: "U.S. Senate (Brookings Institution)",
    period: "Jan 2005 – July 2007",
    status: "past",
    badge: "Brookings Institute",
    preview: "Senate Majority Leader staff, DoD appropriations",
    description:
      "Worked for Senate Majority leader. Focused on Department of Defense appropriations and emerging technology issues. Managed issues pertaining to legislative, policies, products and business practices.",
    achievements: [
      "Worked on E-government act of 2006 that drove new FISMA requirements",
      "Planned and implemented first ever U.S. Senate appropriations web application",
      "Assisted management of billions of congressional funds",
      "Briefed members of US Senate on national policy and legislative initiatives",
      "Gained in-depth knowledge of Congressional appropriations and legislative process",
    ],
    technologies: ["Web Applications", "Legislative Technology", "FISMA", "E-Government"],
    roles: ["cto"],
  },
  {
    title: "Deputy CIO",
    company: "Nevada National Guard",
    period: "May 1999 – Jan 2005",
    status: "past",
    badge: "State Leadership",
    preview: "28 locations, 15,000 users, 30 staff",
    description:
      "Responsible for round-the-clock operations and stability of extremely large data enterprise extending to 28 locations within the state of Nevada and over 15,000 users.",
    achievements: [
      "Managed 24/7 operations across 28 locations statewide",
      "Accountable to CIO for trained and proficient staff of over 30",
      "Led major technological improvements including web development, telephony, security implementations",
      "Executed enterprise-wide operating system upgrades",
      "Responsible for development of new technologies and enhancements",
    ],
    technologies: ["Enterprise Operations", "Network Infrastructure", "Telephony", "Security", "Web Development"],
    roles: ["cto"],
  },
  {
    title: "Network Operations Center Manager",
    company: "Nevada National Guard",
    period: "Oct 1995 - May 1999",
    status: "past",
    badge: "Career Start",
    preview: "24/7 operations, network fundamentals",
    description:
      "Managed the 24 hours / 7 days a week operational environment of a large, fast paced data network operations center. Advised the CIO on new technologies and enhancements to existing systems.",
    achievements: [
      "Managed 24/7 large-scale network operations center",
      "Provided status reports and solutions to senior management on QoS and infrastructure",
      "Gained deep understanding of routing, switching, remote access, network telephony",
      "Became expert in network and client operating systems including Windows, Windows AD, HP Unix NMS",
    ],
    technologies: ["Routing", "Switching", "Network Operations", "Windows", "Unix", "Active Directory"],
    certifications: ["MCSE+I (Microsoft Certified Systems Engineer + Internet)", "MCP (Exchange)"],
    roles: ["cto"],
  },
];

interface ExperienceTimelineProps {
  filter?: RoleFilter;
}

export function ExperienceTimeline({ filter = "all" }: ExperienceTimelineProps) {
  const filteredExperiences = filter === "all" 
    ? experiences 
    : experiences.filter(exp => exp.roles.includes(filter));

  const showingCount = filteredExperiences.length;
  const totalCount = experiences.length;

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Experience</h2>
            <p className="text-muted-foreground">
              {filter === "all" 
                ? "30+ years of technology leadership across government, military, and private sectors"
                : `Showing ${showingCount} of ${totalCount} positions`
              }
            </p>
          </div>
          {filter !== "all" && (
            <Badge variant="outline" className="text-sm">
              Filtered by {filter.toUpperCase()}
            </Badge>
          )}
        </div>
      </div>

      {filteredExperiences.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No experiences match the selected filter.</p>
        </div>
      ) : (
        <div className="relative ml-3">
          {/* Timeline line */}
          <div className="absolute left-0 top-4 bottom-0 border-l-2" />

          {filteredExperiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div
                className={`absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 ${
                  exp.status === "current"
                    ? "border-primary bg-primary"
                    : "border-primary bg-background"
                }`}
              />

              {/* Content */}
              <Sheet>
                <SheetTrigger asChild>
                  <div className="space-y-3 cursor-pointer group hover:bg-accent/50 p-4 rounded-lg transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="text-base font-medium">{exp.company}</span>
                      {exp.badge && (
                        <Badge variant={exp.status === "current" ? "default" : "secondary"}>
                          {exp.badge}
                        </Badge>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                      {exp.preview}
                    </p>
                    <Button variant="ghost" size="sm" className="mt-2 group-hover:translate-x-1 transition-transform">
                      View Details <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto w-full sm:max-w-2xl">
                  <SheetHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {exp.badge && (
                        <Badge variant={exp.status === "current" ? "default" : "secondary"}>
                          {exp.badge}
                        </Badge>
                      )}
                    </div>
                    <SheetTitle className="text-2xl">{exp.title}</SheetTitle>
                    <SheetDescription className="text-lg">
                      {exp.company} • {exp.period}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Overview</h4>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="rounded-full">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {exp.budget && (
                      <div>
                        <h4 className="font-semibold mb-2">Budget Managed</h4>
                        <p className="text-muted-foreground">{exp.budget}</p>
                      </div>
                    )}

                    {exp.certifications && exp.certifications.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Certifications Obtained</h4>
                        <ul className="space-y-1">
                          {exp.certifications.map((cert, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              • {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.awards && exp.awards.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Awards</h4>
                        <ul className="space-y-1">
                          {exp.awards.map((award, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              🏆 {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
