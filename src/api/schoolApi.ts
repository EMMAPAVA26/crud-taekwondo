import type { School, CreateSchoolDTO, UpdateSchoolDTO } from '../types/school';

// Mock data - Simulating database
const schools: School[] = [
  {
    id: 1,
    nombre: 'Dojang Tigres del Sur',
    ciudad: 'Santiago',
    pais: 'Chile',
  },
  {
    id: 2,
    nombre: 'Academia Dragones',
    ciudad: 'Buenos Aires',
    pais: 'Argentina',
  },
  {
    id: 3,
    nombre: 'Centro Marcial Phoenix',
    ciudad: 'Lima',
    pais: 'Perú',
  },
];

let nextId = 4;

// Simulated API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const schoolApi = {
  getSchools: async (): Promise<School[]> => {
    await delay(300);
    return [...schools];
  },

  getSchoolById: async (id: number): Promise<School> => {
    await delay(300);
    const school = schools.find((s) => s.id === id);
    if (!school) {
      throw new Error('Escuela no encontrada');
    }
    return school;
  },

  createSchool: async (data: CreateSchoolDTO): Promise<School> => {
    await delay(300);
    const newSchool: School = {
      id: nextId++,
      ...data,
    };
    schools.push(newSchool);
    return newSchool;
  },

  updateSchool: async (id: number, data: UpdateSchoolDTO): Promise<School> => {
    await delay(300);
    const index = schools.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error('Escuela no encontrada');
    }
    const { id: _, ...dataWithoutId } = data;
    schools[index] = { id, ...dataWithoutId };
    return schools[index];
  },

  deleteSchool: async (id: number): Promise<void> => {
    await delay(300);
    const index = schools.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error('Escuela no encontrada');
    }
    schools.splice(index, 1);
  },
};
