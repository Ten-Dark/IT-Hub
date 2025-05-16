import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/widgets/Header/Header';

const MainLayout: React.FC = () => (
  <>
    <Header />
    <div style={{ padding: '1rem' }}>
      <Outlet /> {/* Здесь будут рендериться PostList и т.д. */}
    </div>
  </>
);

export default MainLayout;