export type DocumentType = 'Cédula' | 'Pasaporte' | 'DNI' | 'Otro';
export type Gender = 'Masculino' | 'Femenino';
export type Belt = 'Blanca' | 'Amarilla' | 'Naranja' | 'Verde' | 'Azul' | 'Roja' | 'Negra';

export interface Participant {
  id: number;
  nombreEscuela: string;
  nombreAlumno: string;
  apellidoAlumno: string;
  tipoDocumento: DocumentType;
  documento: string;
  correoElectronico: string;
  edad: number;
  peso: number;
  genero: Gender;
  grado: Belt;
  fechaRegistro: string;
}

export interface CreateParticipantDTO {
  nombreEscuela: string;
  nombreAlumno: string;
  apellidoAlumno: string;
  tipoDocumento: DocumentType;
  documento: string;
  correoElectronico: string;
  edad: number;
  peso: number;
  genero: Gender;
  grado: Belt;
}

export interface Tournament {
  id: number;
  nombre: string;
  descripcion: string;
  fecha: string;
  ubicacion: string;
  participantes: Participant[];
}

export interface CreateTournamentDTO {
  nombre: string;
  descripcion: string;
  fecha: string;
  ubicacion: string;
}
