import { getCurrentUsersToken } from './utils';

/**
 * Fetch current user's profile
 */
export const fetchProfile = async () => {
  const response = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: {
      Authorization: getCurrentUsersToken(),
    },
  });

  const profile = await response.json();
  console.log({ profile });
  return { profile };
};
