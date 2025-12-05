import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { ParticipantsListPage } from '../pages/ParticipantsListPage';
import { UsersPage, UserFormPage, UserDetailPage, SchoolsPage, SchoolFormPage, SchoolDetailPage } from '../pages';

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/participants" element={<ParticipantsListPage />} />

    {/* Rutas de Usuarios (Legacy) */}
    <Route path="/users" element={<UsersPage />} />
    <Route path="/users/create" element={<UserFormPage />} />
    <Route path="/users/edit/:id" element={<UserFormPage />} />
    <Route path="/users/detail/:id" element={<UserDetailPage />} />

    {/* Rutas de Escuelas (Legacy) */}
    <Route path="/schools" element={<SchoolsPage />} />
    <Route path="/schools/create" element={<SchoolFormPage />} />
    <Route path="/schools/edit/:id" element={<SchoolFormPage />} />
    <Route path="/schools/detail/:id" element={<SchoolDetailPage />} />
  </Routes>
);
