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
import type { School } from '../types/school';

interface SchoolDetailProps {
  school: School | undefined;
  isLoading: boolean;
  error: Error | null;
  backPath?: string;
}

export const SchoolDetail: React.FC<SchoolDetailProps> = ({
  school,
  isLoading,
  error,
  backPath = '/schools',
}) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px',
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 3 }}>
        <Alert severity="error">Error al cargar la escuela</Alert>
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

  if (!school) {
    return (
      <Container sx={{ mt: 3 }}>
        <Alert severity="info">Escuela no encontrada</Alert>
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
              Detalles de la Escuela
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography color="textSecondary" variant="body2">
                  ID
                </Typography>
                <Typography variant="body1">{school.id}</Typography>
              </Box>

              <Box>
                <Typography color="textSecondary" variant="body2">
                  Nombre
                </Typography>
                <Typography variant="body1">{school.nombre}</Typography>
              </Box>

              <Box>
                <Typography color="textSecondary" variant="body2">
                  Ciudad
                </Typography>
                <Typography variant="body1">{school.ciudad}</Typography>
              </Box>

              <Box>
                <Typography color="textSecondary" variant="body2">
                  País
                </Typography>
                <Typography variant="body1">{school.pais}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
