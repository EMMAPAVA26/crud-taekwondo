import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
            onClick={() => navigate('/')}
          >
            <EmojiEventsIcon sx={{ fontSize: 28, color: 'white' }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: '0.5px',
                color: 'white',
              }}
            >
              Torneo Taekwondo
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              onClick={() => navigate('/register')}
              sx={{
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.3s',
                padding: '8px 16px',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Inscribir
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/participants')}
              sx={{
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.3s',
                padding: '8px 16px',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Lista
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
