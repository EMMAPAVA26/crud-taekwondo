import { useParams } from 'react-router-dom';
import { useSchool } from '../hooks/useSchoolQuery';
import { SchoolDetail } from '../components';

export const SchoolDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: school, isLoading, error } = useSchool(
    id ? parseInt(id, 10) : 0
  );

  return (
    <SchoolDetail
      school={school}
      isLoading={isLoading}
      error={error as Error | null}
      backPath="/schools"
    />
  );
};
