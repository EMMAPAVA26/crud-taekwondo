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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import type { Participant, CreateParticipantDTO, DocumentType, Gender, Belt } from '../types/taekwondo';

interface ParticipantFormProps {
  initialData?: Participant;
  onSubmit: (data: CreateParticipantDTO) => Promise<void>;
  isLoading: boolean;
  error?: string | null;
}

const documentTypes: DocumentType[] = ['Cédula', 'Pasaporte', 'DNI', 'Otro'];
const genders: Gender[] = ['Masculino', 'Femenino'];
const belts: Belt[] = ['Blanca', 'Amarilla', 'Naranja', 'Verde', 'Azul', 'Roja', 'Negra'];

export const ParticipantForm: React.FC<ParticipantFormProps> = ({
  initialData,
  onSubmit,
  isLoading,
  error,
}) => {
  const [formData, setFormData] = useState<CreateParticipantDTO>({
    nombreEscuela: '',
    nombreAlumno: '',
    apellidoAlumno: '',
    tipoDocumento: 'Cédula',
    documento: '',
    correoElectronico: '',
    edad: 0,
    peso: 0,
    genero: 'Masculino',
    grado: 'Blanca',
  });

  useEffect(() => {
    if (initialData) {
      const { nombreEscuela, nombreAlumno, apellidoAlumno, tipoDocumento, documento, correoElectronico, edad, peso, genero, grado } = initialData;
      setFormData({ nombreEscuela, nombreAlumno, apellidoAlumno, tipoDocumento, documento, correoElectronico, edad, peso, genero, grado });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'edad' || name === 'peso' ? parseFloat(value) : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <Card sx={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)', borderRadius: '16px' }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#333' }}>
          {initialData ? 'Editar Participante' : 'Nueva Inscripción'}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          {error && <Alert severity="error">{error}</Alert>}

          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Nombre de Escuela"
              name="nombreEscuela"
              value={formData.nombreEscuela}
              onChange={handleChange}
              required
            />

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              <TextField
                fullWidth
                label="Nombre del Alumno"
                name="nombreAlumno"
                value={formData.nombreAlumno}
                onChange={handleChange}
                required
              />

              <TextField
                fullWidth
                label="Apellido del Alumno"
                name="apellidoAlumno"
                value={formData.apellidoAlumno}
                onChange={handleChange}
                required
              />
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Tipo de Documento</InputLabel>
                <Select
                  value={formData.tipoDocumento}
                  label="Tipo de Documento"
                  onChange={(e) => handleSelectChange('tipoDocumento', e.target.value)}
                >
                  {documentTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="RUT / Pasaporte / DNI"
                name="documento"
                value={formData.documento}
                onChange={handleChange}
                required
              />
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              <TextField
                fullWidth
                type="email"
                label="Correo Electrónico"
                name="correoElectronico"
                value={formData.correoElectronico}
                onChange={handleChange}
                required
              />

              <TextField
                fullWidth
                type="number"
                label="Edad"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                required
              />
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              <TextField
                fullWidth
                type="number"
                label="Peso (kg)"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
                inputProps={{ step: '0.1' }}
                required
              />

              <FormControl fullWidth>
                <InputLabel>Género</InputLabel>
                <Select
                  value={formData.genero}
                  label="Género"
                  onChange={(e) => handleSelectChange('genero', e.target.value)}
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <FormControl fullWidth>
              <InputLabel>Grado / Cinturón</InputLabel>
              <Select
                value={formData.grado}
                label="Grado / Cinturón"
                onChange={(e) => handleSelectChange('grado', e.target.value)}
              >
                {belts.map((belt) => (
                  <MenuItem key={belt} value={belt}>
                    {belt}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>

          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              disabled={isLoading}
              sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontWeight: 700, borderRadius: '10px' }}
            >
              {isLoading ? <CircularProgress size={24} /> : initialData ? 'Actualizar' : 'Inscribir Alumno'}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

