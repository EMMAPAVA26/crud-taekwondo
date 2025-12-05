import { useNavigate } from 'react-router-dom';
import { Box, Container, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ParticipantForm } from '../components';
import { useCreateParticipant } from '../hooks/useParticipantQuery';
import type { CreateParticipantDTO } from '../types/taekwondo';
import { COLORS } from '../constants';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const createParticipantMutation = useCreateParticipant();

  const handleSubmit = async (data: CreateParticipantDTO) => {
    try {
      await createParticipantMutation.mutateAsync(data);
      navigate('/participants');
    } catch {
      // Error es manejado por el state de la mutation
    }
  };

  return (
    <Box sx={{ minHeight: 'calc(100vh - 80px)', background: COLORS.BG_GRADIENT, py: 4 }}>
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

        <ParticipantForm
          onSubmit={handleSubmit}
          isLoading={createParticipantMutation.isPending}
          error={createParticipantMutation.error?.message}
        />
      </Container>
    </Box>
  );
};
