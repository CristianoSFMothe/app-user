import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/page-home" element={<p>Página Inicial</p>} />
      
      <Route path="*" element={<Navigate to="/page-home" />} />
    </Routes>
  );
};