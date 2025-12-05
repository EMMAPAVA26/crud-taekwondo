# CRUD de Usuarios - React + TypeScript + Material UI + React Query

Un CRUD completo de gestión de usuarios construido con las tecnologías más modernas de React.

## 🚀 Características

✅ **Gestión completa de usuarios** - Crear, Leer, Actualizar y Eliminar  
✅ **Material UI Components** - Interfaz moderna y profesional  
✅ **React Query (TanStack Query)** - Manejo optimizado de estado y caché  
✅ **React Router v6** - Navegación entre vistas  
✅ **TypeScript** - Código completamente tipado  
✅ **Custom Hooks** - Lógica reutilizable y modular  
✅ **API Mock** - Datos simulados en memoria  
✅ **Validaciones** - Formularios con validaciones básicas

## 📁 Estructura del Proyecto

```
src/
├── api/
│   └── userApi.ts           # Servicios API mock
├── components/
│   ├── UserTable.tsx        # Tabla de usuarios
│   ├── UserForm.tsx         # Formulario crear/editar
│   ├── UserDetail.tsx       # Vista de detalles
│   ├── DeleteDialog.tsx      # Modal de confirmación
│   └── index.ts             # Exportaciones
├── hooks/
│   └── useUserQuery.ts      # Custom hooks de React Query
├── pages/
│   ├── UsersPage.tsx        # Página principal (lista)
│   ├── UserFormPage.tsx     # Página de formulario
│   ├── UserDetailPage.tsx   # Página de detalles
│   └── index.ts             # Exportaciones
├── routes/
│   └── AppRoutes.tsx        # Configuración de rutas
├── types/
│   └── user.ts              # Interfaces TypeScript
├── App.tsx                  # Componente raíz
└── main.tsx                 # Punto de entrada
```

## 🛠️ Instalación

1. **Clonar/Descargar el proyecto**

```bash
cd Crud
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
```

4. **Compilar para producción**

```bash
npm run build
```

## 📦 Dependencias Principales

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "@tanstack/react-query": "^5.x",
  "@mui/material": "^6.x",
  "@mui/icons-material": "^6.x",
  "@emotion/react": "^11.x",
  "@emotion/styled": "^11.x",
  "axios": "^1.x",
  "typescript": "^5.x"
}
```

## 🎯 Rutas Disponibles

| Ruta          | Descripción         | Componente     |
| ------------- | ------------------- | -------------- |
| `/`           | Lista de usuarios   | UsersPage      |
| `/create`     | Crear nuevo usuario | UserFormPage   |
| `/edit/:id`   | Editar usuario      | UserFormPage   |
| `/detail/:id` | Ver detalles        | UserDetailPage |

## 🔧 Funcionalidades Detalladas

### 📋 Vista Lista de Usuarios (`/`)

- Tabla con columnas: Nombre, Grado, Edad
- Tres acciones por fila:
  - **👁️ Ver** - Muestra los detalles del usuario
  - **✏️ Editar** - Abre el formulario para editar
  - **🗑️ Eliminar** - Abre modal de confirmación
- Card de Material UI
- Indicador de carga
- Manejo de errores

### ➕ Crear Usuario (`/create`)

- Formulario con campos: Nombre, Grado, Edad
- Botón "Crear"
- Validación de campos requeridos
- Redirección a lista tras éxito
- Indicador de carga durante el envío

### ✏️ Editar Usuario (`/edit/:id`)

- Reutiliza el mismo formulario
- Campos pre-llenados con datos del usuario
- Botón "Actualizar"
- Carga automática de datos
- Manejo de errores si el usuario no existe

### 👁️ Ver Detalles (`/detail/:id`)

- Visualización completa de datos del usuario
- Botón para volver a la lista
- Manejo de estados de carga y error

### 🗑️ Eliminar Usuario

- Modal de confirmación con Material UI Dialog
- Mensaje: "¿Está seguro que desea eliminar este usuario?"
- Sin recarga de página
- Actualización automática de caché con React Query

## 🎨 Componentes

### UserTable

```tsx
<UserTable
  users={users}
  onDelete={(id) => {}}
  onEdit={(id) => {}}
  onView={(id) => {}}
/>
```

### UserForm

```tsx
<UserForm
  initialData={undefined}
  onSubmit={(data) => {}}
  isLoading={false}
  error={undefined}
/>
```

### UserDetail

```tsx
<UserDetail user={user} isLoading={false} error={null} />
```

### DeleteDialog

```tsx
<DeleteDialog
  open={true}
  onConfirm={() => {}}
  onCancel={() => {}}
  isLoading={false}
/>
```

## 🪝 Custom Hooks

### useUsers()

Obtiene la lista de todos los usuarios.

```tsx
const { data: users, isLoading, error } = useUsers();
```

### useUser(id)

Obtiene un usuario específico por ID.

```tsx
const { data: user, isLoading, error } = useUser(userId);
```

### useCreateUser()

Mutation para crear un nuevo usuario.

```tsx
const { mutateAsync, isPending, error } = useCreateUser();
await mutateAsync({ nombre: "Juan", grado: "10°", edad: 15 });
```

### useUpdateUser()

Mutation para actualizar un usuario.

```tsx
const { mutateAsync, isPending, error } = useUpdateUser();
await mutateAsync({ id: 1, data: { nombre: "Juan", grado: "11°", edad: 16 } });
```

### useDeleteUser()

Mutation para eliminar un usuario.

```tsx
const { mutateAsync, isPending, error } = useDeleteUser();
await mutateAsync(userId);
```

## 🔌 API Service

El archivo `src/api/userApi.ts` contiene servicios que simulan una API real:

- **getUsers()** - Obtiene todos los usuarios
- **getUserById(id)** - Obtiene un usuario específico
- **createUser(data)** - Crea un nuevo usuario
- **updateUser(id, data)** - Actualiza un usuario
- **deleteUser(id)** - Elimina un usuario

Todos incluyen simulación de latencia (300ms) para una experiencia más realista.

## 📊 Datos Mock Iniciales

El proyecto incluye 4 usuarios de prueba:

```typescript
[
  { id: 1, nombre: "Juan Pérez", grado: "10°", edad: 15 },
  { id: 2, nombre: "María García", grado: "11°", edad: 16 },
  { id: 3, nombre: "Carlos López", grado: "9°", edad: 14 },
  { id: 4, nombre: "Ana Martínez", grado: "10°", edad: 15 },
];
```

## 🎯 Configuración de React Query

Configurado en `src/main.tsx`:

```typescript
{
  staleTime: 1000 * 60 * 5,    // 5 minutos
  gcTime: 1000 * 60 * 10       // 10 minutos
}
```

- **staleTime**: Tiempo que los datos se consideran frescos
- **gcTime**: Tiempo antes de remover datos del caché

## 🎨 Tema Material UI

Tema personalizado en `src/App.tsx`:

```typescript
{
  primary: '#1976d2',
  secondary: '#dc004e'
}
```

## ✨ Características del Código

### ✅ TypeScript Estrictamente Tipado

- Todas las funciones tienen tipos de entrada y salida
- Interfaces bien definidas para datos

### ✅ Modularidad

- Componentes pequeños y reutilizables
- Separación de responsabilidades
- Hooks personalizados para lógica

### ✅ Manejo de Estados

- React Query para estado remoto
- useState para estado local
- Manejo completo de loading/error

### ✅ Material UI Integration

- Componentes profesionales
- Iconos consistentes
- Temas personalizables

### ✅ Validaciones

- Campos requeridos
- Validación de números positivos
- Mensajes de error informativos

## 🚀 Siguientes Pasos Sugeridos

1. **Conectar API Real**

   - Reemplazar `userApi.ts` con llamadas HTTP reales
   - Usar Axios con interceptores
   - Manejo de autenticación

2. **Mejorar Validaciones**

   - Usar `react-hook-form` con validaciones avanzadas
   - Validaciones en tiempo real
   - Mensajes de error más específicos

3. **Agregar Autenticación**

   - Login/Logout
   - Protección de rutas
   - Tokens JWT

4. **Tests**

   - Tests unitarios con Vitest
   - Tests de componentes
   - Tests de integración

5. **Paginación y Búsqueda**

   - Tabla con paginación
   - Filtros y búsqueda
   - Ordenamiento

6. **Notificaciones**
   - Toast para confirmaciones
   - Alerts mejorados
   - Sonidos de notificación

## 📝 Licencia

Este proyecto es de demostración educativa.

---

**Desarrollado con ❤️ usando React, TypeScript y Material UI**
