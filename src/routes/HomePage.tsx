import { useNavigate } from 'react-router-dom';
import { Container, Box, Card, CardContent, Typography, Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: 'calc(100vh - 80px)', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <EmojiEventsIcon sx={{ fontSize: 80, color: 'white' }} />
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, color: 'white', letterSpacing: '-1px' }}>
            Torneo de Taekwondo
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500, fontSize: '1.1rem' }}>
            Sistema de Inscripción y Gestión de Participantes
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', mb: 6 }}>
          {/* Card Nueva Inscripción */}
          <Card
            onClick={() => navigate('/register')}
            sx={{
              width: { xs: '100%', sm: '48%', md: '40%' },
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
              border: 'none',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'white',
              '&:hover': {
                transform: 'translateY(-12px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <CardContent sx={{ textAlign: 'center', pt: 5, pb: 5 }}>
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s',
                    '&:hover': { transform: 'scale(1.15)' },
                  }}
                >
                  <PersonAddIcon sx={{ fontSize: 50, color: 'white' }} />
                </Box>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: '#333' }}>
                Nueva Inscripción
              </Typography>

              <Typography color="textSecondary" sx={{ mb: 3, fontSize: '0.95rem', lineHeight: 1.6 }}>
                Registra nuevos participantes en el torneo
              </Typography>

              <Button
                variant="contained"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/register');
                }}
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  fontWeight: 700,
                  padding: '10px 24px',
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                }}
              >
                Inscribir Alumno
              </Button>
            </CardContent>
          </Card>

          {/* Card Lista de Inscritos */}
          <Card
            onClick={() => navigate('/participants')}
            sx={{
              width: { xs: '100%', sm: '48%', md: '40%' },
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
              border: 'none',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'white',
              '&:hover': {
                transform: 'translateY(-12px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            <CardContent sx={{ textAlign: 'center', pt: 5, pb: 5 }}>
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s',
                    '&:hover': { transform: 'scale(1.15)' },
                  }}
                >
                  <GroupIcon sx={{ fontSize: 50, color: 'white' }} />
                </Box>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: '#333' }}>
                Lista de Inscritos
              </Typography>

              <Typography color="textSecondary" sx={{ mb: 3, fontSize: '0.95rem', lineHeight: 1.6 }}>
                Ver y administrar todos los participantes
              </Typography>

              <Button
                variant="contained"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/participants');
                }}
                sx={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  fontWeight: 700,
                  padding: '10px 24px',
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                }}
              >
                Ver Lista
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
            © 2024 Torneo de Taekwondo. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
