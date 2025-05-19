import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/widgets/Header/Header';
import * as S from './MainLayout.styled.ts';
import { Sidebar } from '@/widgets/Sidebar/Sidebar.tsx';
import { PostAddForm } from '@/widgets/PostAdd/ui/PostAddForm.tsx';

export const MainLayout: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openPostAddForm = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <Header />
      <div style={{ padding: '1rem' }}>
        <S.Content>
          <Outlet /> {/* Здесь будут рендериться PostList и т.д. */}
          <Sidebar openPostAddForm={openPostAddForm} />
          <S.PostAddDialog ref={modalRef}>
            <PostAddForm onClose={() => modalRef.current?.close()} />
          </S.PostAddDialog>
        </S.Content>
      </div>
    </>
  );
};
