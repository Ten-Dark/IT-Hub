import React from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout: React.FC = () => {
  return (
    <div style={{ margin: '2rem auto', maxWidth: '400px' }}>
      <Outlet /> {/* Здесь будет Login или Registration */}
    </div>
  );
};
