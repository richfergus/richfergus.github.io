"use client";

import { useState } from "react";
import { BioCard } from "@/components/BioCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsCard } from "@/components/SkillsCard";
import { ProjectsCard } from "@/components/ProjectsCard";
import { AwardsEducationCard } from "@/components/AwardsEducationCard";
import { StatsCard } from "@/components/StatsCard";
import { Footer } from "@/components/Footer";
import { RoleFilterSidebar, type RoleFilter } from "@/components/RoleFilterSidebar";
import { MiniMap } from "@/components/MiniMap";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<RoleFilter>("all");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with Role Filters */}
      <RoleFilterSidebar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Bio Section */}
            <section id="bio-section" aria-label="Biography">
              <BioCard />
            </section>

            {/* Major Achievements Section - MOVED TO TOP */}
            <section id="achievements-section" aria-label="Major Achievements">
              <ProjectsCard filter={activeFilter} />
            </section>

            {/* Experience Timeline Section with Filter */}
            <section id="experience-section" aria-label="Professional Experience">
              <ExperienceTimeline filter={activeFilter} />
            </section>

            {/* Skills Section */}
            <section id="skills-section" aria-label="Technical Skills">
              <SkillsCard />
            </section>

            {/* Awards and Education Section */}
            <section id="education-section" aria-label="Awards and Education">
              <AwardsEducationCard />
            </section>

            {/* Developer Stats Section (Optional) */}
            <section id="stats-section" aria-label="Developer Statistics">
              <StatsCard />
            </section>
          </div>
        </main>

        <Footer />
      </div>

      {/* Mini Map for Quick Navigation */}
      <MiniMap />
    </div>
  );
}
