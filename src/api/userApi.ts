import type { User, CreateUserDTO } from '../types/user';

// Datos mock en memoria
let users: User[] = [
  { id: 1, nombre: 'Juan Pérez', grado: '10°', edad: 15 },
  { id: 2, nombre: 'María García', grado: '11°', edad: 16 },
  { id: 3, nombre: 'Carlos López', grado: '9°', edad: 14 },
  { id: 4, nombre: 'Ana Martínez', grado: '10°', edad: 15 },
];

let nextId = 5;

// Simular una pequeña latencia de red
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const userApi = {
  // Obtener todos los usuarios
  getUsers: async (): Promise<User[]> => {
    await delay(300);
    return [...users];
  },

  // Obtener usuario por ID
  getUserById: async (id: number): Promise<User> => {
    await delay(200);
    const user = users.find(u => u.id === id);
    if (!user) {
      throw new Error(`Usuario con ID ${id} no encontrado`);
    }
    return { ...user };
  },

  // Crear usuario
  createUser: async (data: CreateUserDTO): Promise<User> => {
    await delay(300);
    const newUser: User = {
      id: nextId++,
      ...data,
    };
    users.push(newUser);
    return { ...newUser };
  },

  // Actualizar usuario
  updateUser: async (id: number, data: CreateUserDTO): Promise<User> => {
    await delay(300);
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      throw new Error(`Usuario con ID ${id} no encontrado`);
    }
    const updatedUser: User = { id, ...data };
    users[userIndex] = updatedUser;
    return { ...updatedUser };
  },

  // Eliminar usuario
  deleteUser: async (id: number): Promise<void> => {
    await delay(300);
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      throw new Error(`Usuario con ID ${id} no encontrado`);
    }
    users.splice(userIndex, 1);
  },
};
