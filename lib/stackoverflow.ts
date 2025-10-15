/**
 * Stack Overflow API Integration (Currently Disabled)
 *
 * This file contains commented-out code for fetching Stack Overflow statistics.
 * To enable this functionality:
 *
 * 1. Find your Stack Overflow User ID:
 *    - Go to your Stack Overflow profile
 *    - The URL will look like: https://stackoverflow.com/users/{user-id}/rich-fergus
 *    - The number in the URL is your user ID
 *
 * 2. Create a .env.local file in the project root (copy from .env.local.example)
 *
 * 3. Add your user ID to .env.local:
 *    STACKOVERFLOW_USER_ID=your_user_id_here
 *
 * 4. Uncomment the code below and use it in your components
 *
 * 5. Note: Stack Exchange API has a rate limit of 300 requests/day without authentication
 *    For higher limits, register an app at https://stackapps.com/apps/oauth/register
 *    and add STACKOVERFLOW_API_KEY to your .env.local
 *
 * API Documentation: https://api.stackexchange.com/docs
 */

// Stack Overflow API types
/*
export interface StackOverflowStats {
  userId: number;
  displayName: string;
  reputation: number;
  badges: {
    gold: number;
    silver: number;
    bronze: number;
  };
  questionCount: number;
  answerCount: number;
  profileUrl: string;
  profileImageUrl: string;
}

export interface Badge {
  name: string;
  rank: 'gold' | 'silver' | 'bronze';
  badgeType: string;
  awardCount: number;
}
*/

// Fetch Stack Overflow user statistics
/*
export async function getStackOverflowStats(): Promise<StackOverflowStats | null> {
  const userId = process.env.STACKOVERFLOW_USER_ID;
  const apiKey = process.env.STACKOVERFLOW_API_KEY; // Optional: increases rate limit

  if (!userId) {
    console.warn('STACKOVERFLOW_USER_ID not found. Stack Overflow stats will not be fetched.');
    return null;
  }

  try {
    const params = new URLSearchParams({
      site: 'stackoverflow',
      ...(apiKey && { key: apiKey }),
    });

    const response = await fetch(
      `https://api.stackexchange.com/2.3/users/${userId}?${params.toString()}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Stack Overflow API error: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      throw new Error('User not found');
    }

    const user = data.items[0];

    return {
      userId: user.user_id,
      displayName: user.display_name,
      reputation: user.reputation,
      badges: {
        gold: user.badge_counts.gold,
        silver: user.badge_counts.silver,
        bronze: user.badge_counts.bronze,
      },
      questionCount: user.question_count || 0,
      answerCount: user.answer_count || 0,
      profileUrl: user.link,
      profileImageUrl: user.profile_image,
    };
  } catch (error) {
    console.error('Error fetching Stack Overflow stats:', error);
    return null;
  }
}
*/

// Fetch top badges
/*
export async function getTopBadges(limit = 10): Promise<Badge[]> {
  const userId = process.env.STACKOVERFLOW_USER_ID;
  const apiKey = process.env.STACKOVERFLOW_API_KEY;

  if (!userId) {
    console.warn('STACKOVERFLOW_USER_ID not found. Stack Overflow badges will not be fetched.');
    return [];
  }

  try {
    const params = new URLSearchParams({
      site: 'stackoverflow',
      pagesize: limit.toString(),
      sort: 'rank',
      ...(apiKey && { key: apiKey }),
    });

    const response = await fetch(
      `https://api.stackexchange.com/2.3/users/${userId}/badges?${params.toString()}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Stack Overflow API error: ${response.statusText}`);
    }

    const data = await response.json();

    return data.items.map((badge: any) => ({
      name: badge.name,
      rank: badge.rank,
      badgeType: badge.badge_type,
      awardCount: badge.award_count,
    }));
  } catch (error) {
    console.error('Error fetching Stack Overflow badges:', error);
    return [];
  }
}
*/

// Placeholder export for now
export const stackoverflowConfig = {
  // Add your user ID here when ready
  userId: null,
  profileUrl: '', // Will be like: https://stackoverflow.com/users/{id}/rich-fergus
};
