import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { participantApi } from '../api/participantApi';
import type { Participant, CreateParticipantDTO } from '../types/taekwondo';

export const useParticipants = () => {
  return useQuery({
    queryKey: ['participants'],
    queryFn: () => participantApi.getParticipants(),
  });
};

export const useParticipant = (id: number) => {
  return useQuery({
    queryKey: ['participants', id],
    queryFn: () => participantApi.getParticipantById(id),
    enabled: !!id,
  });
};

export const useCreateParticipant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateParticipantDTO) => participantApi.createParticipant(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['participants'] });
    },
  });
};

export const useUpdateParticipant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: CreateParticipantDTO }) =>
      participantApi.updateParticipant(id, data),
    onSuccess: (updatedParticipant) => {
      queryClient.invalidateQueries({ queryKey: ['participants'] });
      queryClient.setQueryData(['participants', updatedParticipant.id], updatedParticipant);
    },
  });
};

export const useDeleteParticipant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => participantApi.deleteParticipant(id),
    onSuccess: (_, deletedId) => {
      queryClient.setQueryData(['participants'], (oldData: Participant[] | undefined) => {
        if (!oldData) return oldData;
        return oldData.filter((participant) => participant.id !== deletedId);
      });
      queryClient.removeQueries({ queryKey: ['participants', deletedId] });
    },
  });
};
