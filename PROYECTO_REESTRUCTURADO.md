# Estructura del Proyecto Actualizada - CRUD con Usuarios y Escuelas

## 📋 Resumen de Cambios

El proyecto ha sido reestructurado para consumir **dos APIs** (Usuarios y Escuelas) con navegación completa mediante **BrowserRouter**.

---

## 🗂️ Estructura de Carpetas

```
src/
├── api/
│   ├── userApi.ts          # API mock de Usuarios (5 métodos CRUD)
│   └── schoolApi.ts        # API mock de Escuelas (5 métodos CRUD)
├── types/
│   ├── user.ts            # Interfaces: User, CreateUserDTO, UpdateUserDTO
│   └── school.ts          # Interfaces: School, CreateSchoolDTO, UpdateSchoolDTO
├── hooks/
│   ├── useUserQuery.ts    # 5 hooks React Query para Usuarios
│   └── useSchoolQuery.ts  # 5 hooks React Query para Escuelas
├── components/
│   ├── UserForm.tsx       # Formulario para crear/editar usuarios
│   ├── UserTable.tsx      # Tabla de usuarios con acciones
│   ├── UserDetail.tsx     # Vista de detalles de usuario
│   ├── SchoolForm.tsx     # Formulario para crear/editar escuelas
│   ├── SchoolTable.tsx    # Tabla de escuelas con acciones
│   ├── SchoolDetail.tsx   # Vista de detalles de escuela
│   ├── DeleteDialog.tsx   # Modal de confirmación (compartido)
│   └── index.ts           # Exportaciones
├── pages/
│   ├── UsersPage.tsx      # Página principal de usuarios
│   ├── UserFormPage.tsx   # Página de formulario de usuario
│   ├── UserDetailPage.tsx # Página de detalle de usuario
│   ├── SchoolsPage.tsx    # Página principal de escuelas
│   ├── SchoolFormPage.tsx # Página de formulario de escuela
│   ├── SchoolDetailPage.tsx # Página de detalle de escuela
│   └── index.ts           # Exportaciones
├── routes/
│   ├── AppRoutes.tsx      # Configuración de todas las rutas
│   └── HomePage.tsx       # Página de inicio con navegación
├── App.tsx                # Componente raíz
└── main.tsx               # Entrada de la aplicación
```

---

## 🛣️ Rutas Configuradas (BrowserRouter)

```
/                           → Página de Inicio (HomePage)
├── /users                  → Listado de Usuarios
├── /users/create           → Crear Usuario
├── /users/edit/:id         → Editar Usuario
├── /users/detail/:id       → Ver Detalles de Usuario
├── /schools                → Listado de Escuelas
├── /schools/create         → Crear Escuela
├── /schools/edit/:id       → Editar Escuela
└── /schools/detail/:id     → Ver Detalles de Escuela
```

---

## 🔌 APIs Mock Integradas

### API de Usuarios

- **URL Base**: `userApi` (en memoria)
- **Datos Iniciales**: 4 usuarios predefinidos
- **Métodos**: `getUsers()`, `getUserById()`, `createUser()`, `updateUser()`, `deleteUser()`

### API de Escuelas

- **URL Base**: `schoolApi` (en memoria)
- **Datos Iniciales**: 3 escuelas predefinidas
  - Dojang Tigres del Sur - Santiago, Chile
  - Academia Dragones - Buenos Aires, Argentina
  - Centro Marcial Phoenix - Lima, Perú
- **Métodos**: `getSchools()`, `getSchoolById()`, `createSchool()`, `updateSchool()`, `deleteSchool()`

---

## ⚙️ Tecnologías Utilizadas

- **React 18** - UI Library
- **TypeScript 5** - Tipado estático
- **React Router v6** - Navegación SPA
- **React Query (TanStack Query) v5** - State Management para datos remotos
- **Material UI v6** - Componentes UI
- **Emotion** - CSS-in-JS
- **Vite** - Build tool
- **Axios** - HTTP Client (preparado para consumir APIs externas)

---

## 🎯 Características Principales

### Componentes Reutilizables

- ✅ Formularios dinámicos (crear/editar)
- ✅ Tablas con acciones (ver, editar, eliminar)
- ✅ Modal de confirmación compartido
- ✅ Vistas de detalle
- ✅ Navegación con botones "Volver"

### Gestión de Estado

- ✅ Queries para obtener datos (usuarios/escuelas)
- ✅ Mutations para crear/actualizar/eliminar
- ✅ Caché automático con React Query
- ✅ Invalidación inteligente de cache

### UX/UI

- ✅ HomePage con dos módulos principales
- ✅ Diseño responsivo con Material UI
- ✅ Loading spinners
- ✅ Mensajes de error y validación
- ✅ Navegación intuitiva entre módulos

---

## 🚀 Cómo Usar

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

Accede a: `http://localhost:5173/`

### Compilar para producción

```bash
npm run build
```

### Vista previa de producción

```bash
npm run preview
```

---

## 📝 Ejemplo de Navegación

1. **Página de Inicio** (`/`): Dos tarjetas interactivas

   - ➜ Usuarios
   - ➜ Escuelas

2. **Usuarios** (`/users`):

   - Tabla con usuarios existentes
   - Botón "Nueva Usuario" → `/users/create`
   - Acciones por fila: Ver, Editar, Eliminar

3. **Escuelas** (`/schools`):
   - Tabla con escuelas existentes
   - Botón "Nueva Escuela" → `/schools/create`
   - Acciones por fila: Ver, Editar, Eliminar

---

## 🔄 Flujo de Datos

```
API Mock (userApi / schoolApi)
         ↓
React Query Hooks (useUsers / useSchools)
         ↓
Componentes (Pages/Components)
         ↓
Material UI Components
         ↓
Navegación React Router
```

---

## ✨ Estado Actual

✅ Proyecto compilado sin errores
✅ Servidor de desarrollo ejecutándose
✅ Todas las rutas configuradas
✅ Ambas APIs funcionando
✅ Componentes reutilizables
✅ Validación y manejo de errores implementado
