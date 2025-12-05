import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import type { Participant } from '../types/taekwondo';
import { COLORS, SPACING } from '../constants';

interface ParticipantTableProps {
  participants: Participant[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onView: (id: number) => void;
}

export const ParticipantTable: React.FC<ParticipantTableProps> = ({
  participants,
  onDelete,
  onEdit,
  onView,
}) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2, boxShadow: SPACING.CARD_SHADOW, borderRadius: SPACING.CARD_BORDER_RADIUS }}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: COLORS.PRIMARY_GRADIENT, color: 'white' }}>
            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Nombre</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Escuela</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Email</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Edad</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 700 }}>Cinturón</TableCell>
            <TableCell align="right" sx={{ color: 'white', fontWeight: 700 }}>
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {participants.map((participant) => (
            <TableRow key={participant.id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <TableCell>
                {participant.nombreAlumno} {participant.apellidoAlumno}
              </TableCell>
              <TableCell>{participant.nombreEscuela}</TableCell>
              <TableCell>{participant.correoElectronico}</TableCell>
              <TableCell>{participant.edad}</TableCell>
              <TableCell>{participant.grado}</TableCell>
              <TableCell align="right">
                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                  <Button
                    size="small"
                    variant="outlined"
                    color="info"
                    startIcon={<VisibilityIcon />}
                    onClick={() => onView(participant.id)}
                  >
                    Ver
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    startIcon={<EditIcon />}
                    onClick={() => onEdit(participant.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => onDelete(participant.id)}
                  >
                    Eliminar
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
