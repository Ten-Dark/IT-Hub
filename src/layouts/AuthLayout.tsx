import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => (
  <div style={{ margin: '2rem auto', maxWidth: '400px' }}>
    <Outlet /> {/* Здесь будет Login или Registration */}
  </div>
);

export default AuthLayout;