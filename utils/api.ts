import { projectId, publicAnonKey } from './supabase/info.tsx';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-c3d27de3`;

interface UserData {
  userPoints: number;
  userLevel: number;
  achievements: string[];
  favorites: {
    videos: number[];
    recipes: number[];
    activities: number[];
  };
}

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'API request failed');
    }

    return await response.json();
  } catch (error: any) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function saveUserData(userId: string, data: UserData) {
  return fetchAPI('/user/save', {
    method: 'POST',
    body: JSON.stringify({ userId, data }),
  });
}

export async function getUserData(userId: string) {
  return fetchAPI(`/user/${userId}`);
}

export async function saveActivityProgress(
  userId: string,
  activityId: number,
  progress: number
) {
  return fetchAPI('/activity/progress', {
    method: 'POST',
    body: JSON.stringify({ userId, activityId, progress }),
  });
}

export async function healthCheck() {
  return fetchAPI('/health');
}