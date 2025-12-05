import type { Participant, CreateParticipantDTO } from '../types/taekwondo';

const participants: Participant[] = [
  {
    id: 1,
    nombreEscuela: 'Dojang Tigres del Sur',
    nombreAlumno: 'Carlos',
    apellidoAlumno: 'Martínez',
    tipoDocumento: 'Cédula',
    documento: '123456789',
    correoElectronico: 'carlos@email.com',
    edad: 16,
    peso: 65,
    genero: 'Masculino',
    grado: 'Azul',
    fechaRegistro: '2024-12-01',
  },
  {
    id: 2,
    nombreEscuela: 'Academia Dragones',
    nombreAlumno: 'María',
    apellidoAlumno: 'García',
    tipoDocumento: 'DNI',
    documento: '987654321',
    correoElectronico: 'maria@email.com',
    edad: 14,
    peso: 52,
    genero: 'Femenino',
    grado: 'Roja',
    fechaRegistro: '2024-12-02',
  },
];

let nextId = 3;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const participantApi = {
  getParticipants: async (): Promise<Participant[]> => {
    await delay(300);
    return [...participants];
  },

  getParticipantById: async (id: number): Promise<Participant> => {
    await delay(300);
    const participant = participants.find((p) => p.id === id);
    if (!participant) {
      throw new Error('Participante no encontrado');
    }
    return participant;
  },

  createParticipant: async (data: CreateParticipantDTO): Promise<Participant> => {
    await delay(300);
    const newParticipant: Participant = {
      id: nextId++,
      ...data,
      fechaRegistro: new Date().toISOString().split('T')[0],
    };
    participants.push(newParticipant);
    return newParticipant;
  },

  updateParticipant: async (id: number, data: CreateParticipantDTO): Promise<Participant> => {
    await delay(300);
    const index = participants.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error('Participante no encontrado');
    }
    const updated: Participant = {
      id,
      ...data,
      fechaRegistro: participants[index].fechaRegistro,
    };
    participants[index] = updated;
    return updated;
  },

  deleteParticipant: async (id: number): Promise<void> => {
    await delay(300);
    const index = participants.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error('Participante no encontrado');
    }
    participants.splice(index, 1);
  },
};
