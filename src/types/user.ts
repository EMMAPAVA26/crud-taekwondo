export interface User {
  id: number;
  nombre: string;
  grado: string;
  edad: number;
}

export interface CreateUserDTO {
  nombre: string;
  grado: string;
  edad: number;
}

export interface UpdateUserDTO extends CreateUserDTO {
  id: number;
}
