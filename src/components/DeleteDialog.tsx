import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface DeleteDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  onConfirm,
  onCancel,
  isLoading = false,
}) => {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>Confirmar eliminación</DialogTitle>
      <DialogContent>
        ¿Está seguro que desea eliminar este usuario?
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} disabled={isLoading}>
          Cancelar
        </Button>
        <Button
          onClick={onConfirm}
          color="error"
          variant="contained"
          disabled={isLoading}
        >
          {isLoading ? 'Eliminando...' : 'Eliminar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
