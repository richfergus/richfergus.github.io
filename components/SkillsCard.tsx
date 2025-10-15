import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillCategories = {
  programming: {
    title: "Programming & Development",
    skills: [
      "JavaScript",
      "Node.js",
      "Svelte",
      "TypeScript",
      "Vue",
      "Angular",
      "C",
      "PHP",
      "ColdFusion",
      "Handlebars",
      "CI/CD",
    ],
  },
  cloud: {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "GCP",
      "VMware ESXi",
      "VMware Horizon",
      "VMware vSphere",
      "Hyper-V",
      "Docker",
      "Kubernetes",
      "Harbor",
      "Cisco",
    ],
  },
  security: {
    title: "Security & Compliance",
    skills: [
      "CISSP",
      "FedRAMP",
      "DoD RMF 2.0",
      "NIST 800 Series",
      "CrowdStrike",
      "AWS CloudWatch",
      "Snort",
      "FirePOWER NGIPS",
      "Top Secret/SCI",
      "FISMA",
    ],
  },
  ai: {
    title: "AI & APIs",
    skills: [
      "ChatGPT",
      "Bard",
      "GitHub Copilot",
      "GitHub Copilot X",
      "AWS APIs",
      "Azure APIs",
      "OAuth 2.0",
      "Twilio",
      "Git",
    ],
  },
  standards: {
    title: "Standards & Frameworks",
    skills: [
      "ITIL v3/4",
      "COBIT",
      "DoDAF",
      "ISO/IEC 27000",
      "OMB Circular A-11",
      "NIST 800 Series",
      "Presidential Records Act",
    ],
  },
  tools: {
    title: "Tools & Platforms",
    skills: [
      "eMass",
      "Salesforce",
      "Confluence",
      "WordPress",
      "Drupal",
      "Cisco CMCU",
      "PostgreSQL",
      "MongoDB",
    ],
  },
};

export function SkillsCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Technical Expertise</CardTitle>
        <CardDescription>
          Comprehensive skills across programming, cloud, security, and compliance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6">
            <TabsTrigger value="programming">Dev</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="ai">AI & APIs</TabsTrigger>
            <TabsTrigger value="standards">Standards</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-6 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-3">Certifications</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">PMP (2003/2008/2013)</Badge>
            <Badge variant="outline">CISSP (2004/2013)</Badge>
            <Badge variant="outline">ITIL (2006/2011)</Badge>
            <Badge variant="outline">VCP V4 (2011)</Badge>
            <Badge variant="outline">MCSE+I (2000)</Badge>
            <Badge variant="outline">MCP Exchange (2000)</Badge>
            <Badge variant="outline">IANM/DISA4 (1999)</Badge>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <h3 className="text-lg font-semibold mb-3">Security Clearance</h3>
          <Badge variant="destructive" className="text-sm">
            Top Secret / SCI - FBI Adjudicated (Presidential)
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
