"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubContributionGraph } from "@/components/GitHubContributionGraph";
import { fetchGitHubContributions, type GitHubContributionData } from "@/lib/github";
import { Loader2 } from "lucide-react";

export function StatsCard() {
  const [contributionData, setContributionData] = useState<GitHubContributionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadGitHubData() {
      try {
        setIsLoading(true);
        const data = await fetchGitHubContributions();

        if (data) {
          setContributionData(data);
        } else {
          setError("Unable to load GitHub contribution data. Please check your GitHub token configuration.");
        }
      } catch (err) {
        console.error("Error loading GitHub data:", err);
        setError("Failed to load GitHub contribution data.");
      } finally {
        setIsLoading(false);
      }
    }

    loadGitHubData();
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>GitHub Activity</CardTitle>
        <CardDescription>
          Contribution activity over the past year
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <span className="ml-3 text-muted-foreground">Loading contribution data...</span>
          </div>
        )}

        {error && (
          <div className="py-8 text-center">
            <p className="text-sm text-destructive mb-2">{error}</p>
            <p className="text-xs text-muted-foreground">
              Set <code className="px-1 py-0.5 bg-muted rounded">NEXT_PUBLIC_GITHUB_TOKEN</code> in your{" "}
              <code className="px-1 py-0.5 bg-muted rounded">.env.local</code> file to enable this feature.
            </p>
          </div>
        )}

        {!isLoading && !error && contributionData && (
          <GitHubContributionGraph
            contributions={contributionData.contributions}
            totalContributions={contributionData.totalContributions}
          />
        )}
      </CardContent>
    </Card>
  );
}
