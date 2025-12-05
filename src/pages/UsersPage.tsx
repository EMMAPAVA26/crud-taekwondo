import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { UserTable, DeleteDialog } from '../components';
import { useUsers, useDeleteUser } from '../hooks/useUserQuery';

export const UsersPage: React.FC = () => {
  const navigate = useNavigate();
  const { data: users, isLoading, error } = useUsers();
  const deleteUserMutation = useDeleteUser();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleDeleteClick = (id: number): void => {
    setSelectedUserId(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async (): Promise<void> => {
    if (selectedUserId !== null) {
      await deleteUserMutation.mutateAsync(selectedUserId);
      setDeleteDialogOpen(false);
      setSelectedUserId(null);
    }
  };

  const handleDeleteCancel = (): void => {
    setDeleteDialogOpen(false);
    setSelectedUserId(null);
  };

  const handleEditClick = (id: number): void => {
    navigate(`/users/edit/${id}`);
  };

  const handleViewClick = (id: number): void => {
    navigate(`/users/detail/${id}`);
  };

  return (
    <Box sx={{ minHeight: 'calc(100vh - 80px)', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 3 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{ color: 'primary.main', fontWeight: 600, '&:hover': { backgroundColor: 'rgba(102, 126, 234, 0.1)' } }}
          >
            Volver a Inicio
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Gestión de Usuarios
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => navigate('/users/create')}
            sx={{ fontWeight: 700, borderRadius: '10px', padding: '10px 24px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', textTransform: 'none' }}
          >
            Nuevo Usuario
          </Button>
        </Box>

        <Card sx={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)', borderRadius: '16px', border: 'none' }}>
          <CardContent>
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <CircularProgress />
              </Box>
            ) : error ? (
              <Alert severity="error">Error al cargar los usuarios</Alert>
            ) : users && users.length > 0 ? (
              <UserTable
                users={users}
                onDelete={handleDeleteClick}
                onEdit={handleEditClick}
                onView={handleViewClick}
              />
            ) : (
              <Alert severity="info">No hay usuarios registrados</Alert>
            )}
          </CardContent>
        </Card>

        <DeleteDialog
          open={deleteDialogOpen}
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
          isLoading={deleteUserMutation.isPending}
        />
      </Container>
    </Box>
  );
};
