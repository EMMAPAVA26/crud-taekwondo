import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, Alert } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SchoolForm } from '../components';
import {
  useSchool,
  useCreateSchool,
  useUpdateSchool,
} from '../hooks/useSchoolQuery';
import type { CreateSchoolDTO } from '../types/school';

export const SchoolFormPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const isEditMode = !!id;

  const { data: school, isLoading: isLoadingSchool } = useSchool(
    id ? parseInt(id, 10) : 0
  );
  const createSchoolMutation = useCreateSchool();
  const updateSchoolMutation = useUpdateSchool();

  const isLoading =
    isLoadingSchool ||
    createSchoolMutation.isPending ||
    updateSchoolMutation.isPending;
  const error =
    createSchoolMutation.error?.message ||
    updateSchoolMutation.error?.message;

  const handleSubmit = async (data: CreateSchoolDTO): Promise<void> => {
    try {
      if (isEditMode && id) {
        await updateSchoolMutation.mutateAsync({
          id: parseInt(id, 10),
          data,
        });
      } else {
        await createSchoolMutation.mutateAsync(data);
      }
      navigate('/schools');
    } catch {
      // El error es manejado por el state de la mutation
    }
  };

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ pl: 3, mb: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/schools')}
        >
          Volver
        </Button>
      </Box>

      {isEditMode && isLoadingSchool ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : isEditMode && !school ? (
        <Alert severity="error">Escuela no encontrada</Alert>
      ) : (
        <SchoolForm
          initialData={school}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
        />
      )}
    </Box>
  );
};
