import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/widgets/Header/Header';
import * as S from './MainLayout.styled.ts';
import { Sidebar } from '@/widgets/Sidebar/Sidebar.tsx';

const MainLayout: React.FC = () => (
  <>
    <Header />
    <div style={{ padding: '1rem' }}>
      <S.Content>
        <Outlet /> {/* Здесь будут рендериться PostList и т.д. */}
        <Sidebar />
      </S.Content>
    </div>
  </>
);

export default MainLayout;
