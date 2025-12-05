import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, Alert } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { UserForm } from '../components';
import { useUser, useCreateUser, useUpdateUser } from '../hooks/useUserQuery';
import type { CreateUserDTO } from '../types/user';

export const UserFormPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const isEditMode = !!id;

  const { data: user, isLoading: isLoadingUser } = useUser(id ? parseInt(id, 10) : 0);
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();

  const isLoading = isLoadingUser || createUserMutation.isPending || updateUserMutation.isPending;
  const error = createUserMutation.error?.message || updateUserMutation.error?.message;

  const handleSubmit = async (data: CreateUserDTO): Promise<void> => {
    try {
      if (isEditMode && id) {
        await updateUserMutation.mutateAsync({
          id: parseInt(id, 10),
          data,
        });
      } else {
        await createUserMutation.mutateAsync(data);
      }
      navigate('/users');
    } catch {
      // El error es manejado por el state de la mutation
    }
  };

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ pl: 3, mb: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/users')}
        >
          Volver
        </Button>
      </Box>

      {isEditMode && isLoadingUser ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : isEditMode && !user ? (
        <Alert severity="error">Usuario no encontrado</Alert>
      ) : (
        <UserForm
          initialData={user}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
        />
      )}
    </Box>
  );
};
