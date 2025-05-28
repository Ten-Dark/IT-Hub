import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/widgets/Header/Header';
import * as S from './MainLayout.styled.ts';
import { Sidebar } from '@/widgets/Sidebar/Sidebar.tsx';
import { PostForm } from '@/features/PostAdd/ui/PostForm.tsx';

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
          <Outlet />
          <Sidebar openPostAddForm={openPostAddForm} />
          <S.PostAddDialog ref={modalRef}>
            <PostForm onClose={() => modalRef.current?.close()} />
          </S.PostAddDialog>
        </S.Content>
      </div>
    </>
  );
};
