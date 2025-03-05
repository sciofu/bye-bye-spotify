/**
 * Client credentials authorization
 */
export const fetchAppCredentials = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        btoa(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
        ),
    },
    body: 'grant_type=client_credentials',
  });

  const appToken = (await response.json()).access_token;

  window.sessionStorage.setItem('appToken', appToken);

  return { appToken };
};

export const authorizeUser = async () => {
  //TODO: User login authorization
};
