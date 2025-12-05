import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import type { School, CreateSchoolDTO } from '../types/school';

interface SchoolFormProps {
  initialData?: School;
  onSubmit: (data: CreateSchoolDTO) => Promise<void>;
  isLoading: boolean;
  error?: string | null;
}

export const SchoolForm: React.FC<SchoolFormProps> = ({
  initialData,
  onSubmit,
  isLoading,
  error,
}) => {
  const [formData, setFormData] = useState<CreateSchoolDTO>({
    nombre: '',
    ciudad: '',
    pais: '',
  });

  useEffect(() => {
    if (initialData) {
      const { nombre, ciudad, pais } = initialData;
      setFormData({ nombre, ciudad, pais });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {initialData ? 'Editar Escuela' : 'Nueva Escuela'}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="País"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            required
            fullWidth
          />

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Guardar'}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
