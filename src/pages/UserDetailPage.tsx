import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/useUserQuery';
import { UserDetail } from '../components';

export const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading, error } = useUser(id ? parseInt(id, 10) : 0);

  return (
    <UserDetail
      user={user}
      isLoading={isLoading}
      error={error as Error | null}
      backPath="/users"
    />
  );
};
