import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Cloud, Shield, Cpu, Check } from "lucide-react";
import type { RoleFilter } from "./RoleFilterSidebar";

const majorAchievements = [
  {
    title: "Build and Support FedRAMP Platforms",
    organization: "Coleridge Initiative, Lulius Innovation",
    icon: Check,
    description:
      "First-of-its-kind, FedRAMP-authorized research Cloud Service Provider powering secure, data-driven research at scale.",
    technologies: ["FedRAMP", "RMF", "AI Assistant", "Cloud Security", "AWS" ],
    impact: "Enabling secure collaboration for researchers, policymakers, and government organizations",
    status: "Active",
    roles: ["cto", "ciso"],
  },
  {
    title: "Drive AI Solutions",
    organization: "Lulius Innovation",
    icon: Cpu,
    description:
      "Custom-written enterprise software for the Department of Defense, currently deployed and used by the US Army.",
    technologies: ["DoD RMF", "Enterprise Architecture", "Government Contracting"],
    impact: "Supporting military operations across multiple Army locations",
    status: "Active",
    roles: ["cto"],
  },
  {
    title: "High Pressure Technology Operations",
    organization: "The White House",
    icon: Award,
    description:
      "Planned and led the largest transfer of Presidential records in U.S. history to the National Archives.",
    technologies: ["Data Migration", "Archival Systems", "PRA Compliance", "Enterprise Data"],
    impact: "Presidential Award 2010 - Seamless transition on January 20, 2009",
    status: "Completed",
    roles: ["cto", "ciso"],
  },
  {
    title: "IoT Product Development",
    organization: "Haws Corporation",
    icon: Cloud,
    description:
      "Built IoT prototypes leading to productization for one of the oldest companies in the US.",
    technologies: ["IoT", "DevOps", "Product Management", "Cloud Integration"],
    impact: "40% IT budget reduction while improving service delivery worldwide",
    status: "Completed",
    roles: ["cto"],
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
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
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
                      {project.organization}
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
