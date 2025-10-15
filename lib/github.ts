/**
 * GitHub API Integration with GraphQL
 *
 * Fetches GitHub contribution calendar data using GitHub's GraphQL API.
 * For static site generation, this data is fetched client-side on component mount.
 *
 * Setup:
 * 1. Create a GitHub Personal Access Token at https://github.com/settings/tokens
 * 2. Select scope: read:user (for reading contribution data)
 * 3. Add to .env.local:
 *    NEXT_PUBLIC_GITHUB_TOKEN=your_token_here
 *    NEXT_PUBLIC_GITHUB_USERNAME=richfergus
 */

import { graphql } from '@octokit/graphql';

// GitHub contribution data types
export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4; // GitHub's contribution levels
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export interface GitHubContributionData {
  contributions: ContributionDay[];
  totalContributions: number;
}

/**
 * Fetches GitHub contribution calendar data using GraphQL API
 * @param username - GitHub username (defaults to env variable)
 * @param token - GitHub Personal Access Token (defaults to env variable)
 * @returns Contribution data with daily counts and total
 */
export async function fetchGitHubContributions(
  username?: string,
  token?: string
): Promise<GitHubContributionData | null> {
  const githubUsername = username || process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'richfergus';
  const githubToken = token || process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  if (!githubToken) {
    console.warn('GitHub token not found. Contribution data will not be fetched.');
    return null;
  }

  try {
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `token ${githubToken}`,
      },
    });

    interface GraphQLResponse {
      user: {
        contributionsCollection: {
          contributionCalendar: {
            totalContributions: number;
            weeks: {
              contributionDays: {
                contributionCount: number;
                date: string;
                contributionLevel: string;
              }[];
            }[];
          };
        };
      };
    }

    const { user } = await graphqlWithAuth<GraphQLResponse>(
      `
      query ($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  contributionLevel
                }
              }
            }
          }
        }
      }
      `,
      {
        username: githubUsername,
      }
    );

    const calendar = user.contributionsCollection.contributionCalendar;

    // Flatten weeks into a single array of contribution days
    const contributions: ContributionDay[] = calendar.weeks.flatMap(
      (week) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: getLevelFromGitHub(day.contributionLevel),
        }))
    );

    return {
      contributions,
      totalContributions: calendar.totalContributions,
    };
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return null;
  }
}

/**
 * Converts GitHub's contribution level string to numeric level (0-4)
 */
function getLevelFromGitHub(level: string): 0 | 1 | 2 | 3 | 4 {
  const levelMap: { [key: string]: 0 | 1 | 2 | 3 | 4 } = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
  };
  return levelMap[level] || 0;
}

// GitHub config
export const githubConfig = {
  username: 'richfergus',
  profileUrl: 'https://github.com/richfergus',
};
