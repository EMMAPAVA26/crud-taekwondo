export interface School {
  id: number;
  nombre: string;
  ciudad: string;
  pais: string;
}

export interface CreateSchoolDTO {
  nombre: string;
  ciudad: string;
  pais: string;
}

export interface UpdateSchoolDTO extends CreateSchoolDTO {
  id: number;
}
