import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Container,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import type { User } from '../types/user';

interface UserDetailProps {
  user: User | undefined;
  isLoading: boolean;
  error: Error | null;
  backPath?: string;
}

export const UserDetail: React.FC<UserDetailProps> = ({
  user,
  isLoading,
  error,
  backPath = '/users',
}) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 3 }}>
        <Alert severity="error">Error al cargar el usuario</Alert>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(backPath)}
          sx={{ mt: 2 }}
        >
          Volver
        </Button>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container sx={{ mt: 3 }}>
        <Alert severity="info">Usuario no encontrado</Alert>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(backPath)}
          sx={{ mt: 2 }}
        >
          Volver
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(backPath)}
          sx={{ mb: 2 }}
        >
          Volver
        </Button>

        <Card>
          <CardContent>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Detalles del Usuario
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography color="textSecondary" variant="body2">
                  ID
                </Typography>
                <Typography variant="body1">{user.id}</Typography>
              </Box>

              <Box>
                <Typography color="textSecondary" variant="body2">
                  Nombre
                </Typography>
                <Typography variant="body1">{user.nombre}</Typography>
              </Box>

              <Box>
                <Typography color="textSecondary" variant="body2">
                  Grado
                </Typography>
                <Typography variant="body1">{user.grado}</Typography>
              </Box>

              <Box>
                <Typography color="textSecondary" variant="body2">
                  Edad
                </Typography>
                <Typography variant="body1">{user.edad} años</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
