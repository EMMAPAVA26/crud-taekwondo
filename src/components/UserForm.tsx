import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import type { User, CreateUserDTO } from '../types/user';

interface UserFormProps {
  initialData?: User;
  onSubmit: (data: CreateUserDTO) => void;
  isLoading?: boolean;
  error?: string;
}

export const UserForm: React.FC<UserFormProps> = ({
  initialData,
  onSubmit,
  isLoading = false,
  error,
}) => {
  const [formData, setFormData] = useState<CreateUserDTO>({
    nombre: '',
    grado: '',
    edad: 0,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        nombre: initialData.nombre,
        grado: initialData.grado,
        edad: initialData.edad,
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'edad' ? parseInt(value, 10) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    // Validar campos
    if (!formData.nombre.trim() || !formData.grado.trim() || formData.edad <= 0) {
      return;
    }
    
    onSubmit(formData);
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          {initialData ? 'Editar Usuario' : 'Crear Nuevo Usuario'}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
            disabled={isLoading}
            required
          />
          
          <TextField
            label="Grado"
            name="grado"
            value={formData.grado}
            onChange={handleChange}
            fullWidth
            disabled={isLoading}
            required
          />
          
          <TextField
            label="Edad"
            name="edad"
            type="number"
            value={formData.edad}
            onChange={handleChange}
            fullWidth
            disabled={isLoading}
            required
            inputProps={{ min: 1 }}
          />

          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
              sx={{ flex: 1 }}
            >
              {isLoading ? (
                <>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  Guardando...
                </>
              ) : initialData ? (
                'Actualizar'
              ) : (
                'Crear'
              )}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};
