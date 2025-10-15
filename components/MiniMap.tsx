"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { User, Award, Briefcase, Code, GraduationCap, BarChart } from "lucide-react";

const sections = [
  { id: "bio-section", label: "Bio", icon: User },
  { id: "achievements-section", label: "Achievements", icon: Award },
  { id: "experience-section", label: "Experience", icon: Briefcase },
  { id: "skills-section", label: "Skills", icon: Code },
  { id: "education-section", label: "Education", icon: GraduationCap },
  { id: "stats-section", label: "Stats", icon: BarChart },
];

export function MiniMap() {
  const [activeSection, setActiveSection] = useState<string>("bio-section");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine active section
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (const { id, element } of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Card className="hidden md:block fixed bottom-8 left-8 w-32 p-2 shadow-lg z-40 backdrop-blur-sm bg-background/95">
      <div className="space-y-2">
        {/* Progress bar */}
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Section links */}
        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-2 py-1.5 rounded-md text-xs transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </nav>
      </div>
    </Card>
  );
}
