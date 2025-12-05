import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { schoolApi } from '../api/schoolApi';
import type { School, CreateSchoolDTO } from '../types/school';

// Hook para obtener todas las escuelas
export const useSchools = () => {
  return useQuery({
    queryKey: ['schools'],
    queryFn: () => schoolApi.getSchools(),
  });
};

// Hook para obtener una escuela por ID
export const useSchool = (id: number) => {
  return useQuery({
    queryKey: ['schools', id],
    queryFn: () => schoolApi.getSchoolById(id),
    enabled: !!id,
  });
};

// Hook para crear una escuela
export const useCreateSchool = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateSchoolDTO) => schoolApi.createSchool(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schools'] });
    },
  });
};

// Hook para actualizar una escuela
export const useUpdateSchool = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: CreateSchoolDTO }) =>
      schoolApi.updateSchool(id, { id, ...data }),
    onSuccess: (updatedSchool) => {
      queryClient.invalidateQueries({ queryKey: ['schools'] });
      queryClient.setQueryData(['schools', updatedSchool.id], updatedSchool);
    },
  });
};

// Hook para eliminar una escuela
export const useDeleteSchool = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => schoolApi.deleteSchool(id),
    onSuccess: (_, deletedId) => {
      // Actualizar el cache removiendo la escuela
      queryClient.setQueryData(['schools'], (oldData: School[] | undefined) => {
        if (!oldData) return oldData;
        return oldData.filter((school) => school.id !== deletedId);
      });
      // También invalidar el cache de la escuela específica
      queryClient.removeQueries({ queryKey: ['schools', deletedId] });
    },
  });
};
