import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ParticipantTable, DeleteDialog } from '../components';
import { useParticipants, useDeleteParticipant } from '../hooks/useParticipantQuery';

export const ParticipantsListPage: React.FC = () => {
  const navigate = useNavigate();
  const { data: participants, isLoading, error } = useParticipants();
  const deleteParticipantMutation = useDeleteParticipant();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedParticipantId, setSelectedParticipantId] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setSelectedParticipantId(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (selectedParticipantId !== null) {
      await deleteParticipantMutation.mutateAsync(selectedParticipantId);
      setDeleteDialogOpen(false);
      setSelectedParticipantId(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setSelectedParticipantId(null);
  };

  return (
    <Box sx={{ minHeight: 'calc(100vh - 80px)', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 3 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{ color: 'primary.main', fontWeight: 600 }}
          >
            Volver a Inicio
          </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Lista de Inscritos
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/register')}
            sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontWeight: 700, borderRadius: '10px' }}
          >
            Nuevo Inscrito
          </Button>
        </Box>

        <Card sx={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)', borderRadius: '16px' }}>
          <CardContent>
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <CircularProgress />
              </Box>
            ) : error ? (
              <Alert severity="error">Error al cargar los participantes</Alert>
            ) : participants && participants.length > 0 ? (
              <ParticipantTable
                participants={participants}
                onDelete={handleDeleteClick}
                onEdit={() => {}}
                onView={() => {}}
              />
            ) : (
              <Alert severity="info">No hay participantes registrados</Alert>
            )}
          </CardContent>
        </Card>

        <DeleteDialog
          open={deleteDialogOpen}
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
          isLoading={deleteParticipantMutation.isPending}
        />
      </Container>
    </Box>
  );
};
