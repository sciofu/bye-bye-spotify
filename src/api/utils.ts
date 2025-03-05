export const getCurrentUsersToken = () => {
  return `Bearer ${sessionStorage.getItem('spotifyToken')}`;
};
