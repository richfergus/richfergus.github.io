import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Plane } from "lucide-react";

const awards = [
  {
    title: "Technologist of the Year 2023",
    organization: "Nevada's Center for Entrepreneurship and Technology (NCET)",
    year: "2023",
  },
  {
    title: "Presidential Award",
    organization: "For leading the first ever 'electronic Presidential Transition' (POTUS 43)",
    year: "2010",
  },
  {
    title: "Informatic Innovation Award",
    organization: "Association of Medical Directors of Information Systems (AMDIS)",
    year: "2004",
  },
];

const education = [
  {
    degree: "National Security Fellow",
    institution: "Harvard University - John F. Kennedy School of Government",
    field: "National Security",
  },
  {
    degree: "Masters of Leadership, MA",
    institution: "Georgetown University - McDonough School of Business",
    field: "Leadership",
  },
  {
    degree: "Graduate Certificate",
    institution: "Georgetown University - Senior Executive Leadership (SES Prep)",
    field: "Executive Leadership",
  },
  {
    degree: "Congressional Fellowship",
    institution: "The Brookings Institution",
    field: "Legislative Affairs",
  },
  {
    degree: "B.S. Biology",
    institution: "University of Nevada",
    field: "Biology",
  },
];

export function AwardsEducationCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Awards Card */}
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <CardTitle>Awards & Recognition</CardTitle>
          </div>
          <CardDescription>Notable achievements and honors</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {awards.map((award, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-lg">{award.title}</h3>
                <Badge variant="outline">{award.year}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{award.organization}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education Card */}
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <CardTitle>Education</CardTitle>
          </div>
          <CardDescription>Academic credentials and training</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="space-y-1">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
              {edu.field && (
                <Badge variant="secondary" className="text-xs">
                  {edu.field}
                </Badge>
              )}
            </div>
          ))}

          <div className="pt-4 mt-4 border-t">
            <div className="flex items-center gap-2 mb-2">
              <Plane className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Military Aviation</h3>
            </div>
            <div className="space-y-2">
              <Badge variant="default" className="text-xs">
                Master Aviator
              </Badge>
              <p className="text-sm text-muted-foreground">
                UH-60 Black Hawk Instructor Pilot (current) • 3,800+ flight hours
              </p>
              <Badge variant="secondary" className="text-xs">
                Qualified US Army Safety Officer
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
