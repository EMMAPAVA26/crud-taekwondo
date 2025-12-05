import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userApi } from '../api/userApi';
import type { User, CreateUserDTO } from '../types/user';

// Hook para obtener todos los usuarios
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => userApi.getUsers(),
  });
};

// Hook para obtener un usuario por ID
export const useUser = (id: number) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => userApi.getUserById(id),
    enabled: !!id,
  });
};

// Hook para crear un usuario
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserDTO) => userApi.createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

// Hook para actualizar un usuario
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: CreateUserDTO }) =>
      userApi.updateUser(id, data),
    onSuccess: (updatedUser) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.setQueryData(['users', updatedUser.id], updatedUser);
    },
  });
};

// Hook para eliminar un usuario
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => userApi.deleteUser(id),
    onSuccess: (_, deletedId) => {
      // Actualizar el cache removiendo el usuario
      queryClient.setQueryData(['users'], (oldData: User[] | undefined) => {
        if (!oldData) return oldData;
        return oldData.filter(user => user.id !== deletedId);
      });
      // También invalidar el cache del usuario específico
      queryClient.removeQueries({ queryKey: ['users', deletedId] });
    },
  });
};
