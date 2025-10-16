"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Building2, Shield, Plane, Sparkles, Menu, X } from "lucide-react";

export type RoleFilter = "all" | "cto" | "ciso" | "pilot";

interface RoleFilterSidebarProps {
  activeFilter: RoleFilter;
  onFilterChange: (filter: RoleFilter) => void;
}

const roleFilters = [
  {
    id: "all" as RoleFilter,
    label: "All Roles",
    icon: Sparkles,
    description: "Complete resume",
    count: 11,
    color: "text-primary",
  },
  {
    id: "cto" as RoleFilter,
    label: "CTO / Technology Leadership",
    icon: Building2,
    description: "Executive & tech leadership",
    count: 7,
    color: "text-blue-500",
  },
  {
    id: "ciso" as RoleFilter,
    label: "CISO / Security Leadership",
    icon: Shield,
    description: "Security & compliance",
    count: 4,
    color: "text-red-500",
  },
  {
    id: "pilot" as RoleFilter,
    label: "Helicopter Pilot / Military",
    icon: Plane,
    description: "Aviation & military leadership",
    count: 1,
    color: "text-green-500",
  },
];

function SidebarContent({ activeFilter, onFilterChange }: RoleFilterSidebarProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-2">Select a Role</h2>
        <p className="text-sm text-muted-foreground">
          Filter my resume by specific roles to see relevant experience and achievements.
           {/* add a down arrow here */}
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up size-4"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
        </p>
       
        
      </div>

      <Separator />

      <ScrollArea className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {roleFilters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;

            return (
              <Button
                key={filter.id}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start text-left h-auto py-3 px-4 ${
                  !isActive && "hover:bg-accent"
                }`}
                onClick={() => onFilterChange(filter.id)}
              >
                <div className="flex items-start gap-3 w-full">
                  <Icon className={`h-5 w-5 mt-0.5 ${isActive ? "text-primary-foreground" : filter.color}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-sm truncate">{filter.label}</span>
                      <Badge variant={isActive ? "secondary" : "outline"} className="shrink-0">
                        {filter.count}
                      </Badge>
                    </div>
                    <p className="text-xs opacity-80 mt-0.5">{filter.description}</p>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </ScrollArea>

      <Separator />

      <div className="p-4">
        <p className="text-xs text-muted-foreground text-center">
          {activeFilter === "all"
            ? "Showing all positions"
            : `Filtered: ${roleFilters.find((f) => f.id === activeFilter)?.label}`}
        </p>
      </div>
    </div>
  );
}

export function RoleFilterSidebar({ activeFilter, onFilterChange }: RoleFilterSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="shadow-lg">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <div className="flex items-center justify-between p-6 pb-4">
              <SheetTitle>Role Filter</SheetTitle>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <SidebarContent
              activeFilter={activeFilter}
              onFilterChange={(filter) => {
                onFilterChange(filter);
                setMobileOpen(false);
              }}
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r bg-background h-screen sticky top-0 overflow-hidden">
        <SidebarContent activeFilter={activeFilter} onFilterChange={onFilterChange} />
      </aside>
    </>
  );
}
