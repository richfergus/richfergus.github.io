"use client";

import { useMemo } from "react";
import type { ContributionDay } from "@/lib/github";

interface GitHubContributionGraphProps {
  contributions: ContributionDay[];
  totalContributions: number;
}

// Get color class based on contribution level (0-4)
// Uses theme chart colors for perfect integration with site design
function getColorClass(level: 0 | 1 | 2 | 3 | 4): string {
  const colorMap = {
    0: "bg-muted hover:bg-muted/80", // No contributions - theme muted color
    1: "bg-chart-5 hover:bg-chart-5/80", // Lightest green - chart-5
    2: "bg-chart-4 hover:bg-chart-4/80", // Light-medium green - chart-4
    3: "bg-chart-2 hover:bg-chart-2/80", // Medium green - chart-2
    4: "bg-chart-1 hover:bg-chart-1/80", // Primary green (most saturated) - chart-1
  };
  return colorMap[level];
}

// Format date for tooltip
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Get contribution text
function getContributionText(count: number): string {
  if (count === 0) return "No contributions";
  if (count === 1) return "1 contribution";
  return `${count} contributions`;
}

export function GitHubContributionGraph({
  contributions,
  totalContributions,
}: GitHubContributionGraphProps) {
  // Organize contributions into proper week columns (Sunday-Saturday)
  const { weeks, monthLabels } = useMemo(() => {
    if (contributions.length === 0) {
      return { weeks: [], monthLabels: [] };
    }

    // Group by weeks (each week is a column, Sunday to Saturday)
    const weeksMap = new Map<number, ContributionDay[]>();

    contributions.forEach((day) => {
      const date = new Date(day.date);
      const startOfYear = new Date(contributions[0].date);

      // Calculate week number from start
      const daysSinceStart = Math.floor(
        (date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)
      );
      const weekNumber = Math.floor(daysSinceStart / 7);

      if (!weeksMap.has(weekNumber)) {
        weeksMap.set(weekNumber, []);
      }
      weeksMap.get(weekNumber)!.push(day);
    });

    // Convert to array and sort each week by day
    const weeksArray = Array.from(weeksMap.entries())
      .sort(([a], [b]) => a - b)
      .map(([, days]) => {
        // Sort days within week by date
        return days.sort((a, b) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      });

    // Generate month labels
    const labels: { month: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    weeksArray.forEach((week, weekIndex) => {
      if (week[0]) {
        const date = new Date(week[0].date);
        const month = date.getMonth();

        if (month !== lastMonth) {
          labels.push({
            month: date.toLocaleDateString("en-US", { month: "short" }),
            weekIndex,
          });
          lastMonth = month;
        }
      }
    });

    return { weeks: weeksArray, monthLabels: labels };
  }, [contributions]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-foreground">
          {totalContributions.toLocaleString()} contributions in the last year
        </h3>
      </div>

      {/* Contribution Graph */}
      <div className="overflow-x-auto pb-2">
        <div className="inline-flex flex-col">
          {/* Month labels */}
          <div className="relative mb-2 ml-[30px]" style={{ height: "15px" }}>
            {monthLabels.map(({ month, weekIndex }, index) => {
              // Calculate width: distance to next month label or end of calendar
              const nextWeekIndex = monthLabels[index + 1]?.weekIndex ?? weeks.length;
              const widthInWeeks = nextWeekIndex - weekIndex;
              const widthInPixels = widthInWeeks * 13; // 10px square + 3px gap

              return (
                <div
                  key={`${month}-${weekIndex}`}
                  className="text-xs text-muted-foreground absolute"
                  style={{
                    left: `${weekIndex * 13}px`,
                    width: `${widthInPixels}px`,
                  }}
                >
                  {month}
                </div>
              );
            })}
          </div>

          {/* Calendar grid with day labels */}
          <div className="flex gap-1">
            {/* Day labels column */}
            <div className="flex flex-col justify-between text-xs text-muted-foreground pr-2" style={{ height: "91px" }}>
              <div style={{ height: "13px", lineHeight: "13px" }}>Mon</div>
              <div style={{ height: "13px", lineHeight: "13px" }}>Wed</div>
              <div style={{ height: "13px", lineHeight: "13px" }}>Fri</div>
            </div>

            {/* Contribution squares by week */}
            <div className="flex gap-[3px]">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {/* Create 7 slots for each day of the week (0=Sunday to 6=Saturday) */}
                  {[0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) => {
                    // Find the contribution for this day of the week
                    const day = week.find((d) => {
                      const date = new Date(d.date);
                      return date.getDay() === dayOfWeek;
                    });

                    if (!day) {
                      // Empty cell for days not in this week
                      return <div key={dayOfWeek} className="w-[10px] h-[10px]" />;
                    }

                    return (
                      <div
                        key={day.date}
                        className={`w-[10px] h-[10px] rounded-sm border border-border/50 ${getColorClass(
                          day.level
                        )} transition-colors cursor-pointer`}
                        title={`${getContributionText(day.count)} on ${formatDate(
                          day.date
                        )}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-3 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-[3px]">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-[10px] h-[10px] rounded-sm border border-border/50 ${getColorClass(
                    level as 0 | 1 | 2 | 3 | 4
                  )}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
