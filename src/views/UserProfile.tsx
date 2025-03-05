import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from '../api';

export const UserProfile = () => {
  const profileQuery = useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchProfile,
  });

  return <div>Hi user</div>;
};
