import * as S from './Sidebar.styled.ts';
import * as React from 'react';

interface Props {
  openPostAddForm: () => void;
}

export const Sidebar: React.FC<Props> = ({ openPostAddForm }) => {
  return (
    <S.SidebarContainer>
      <S.PostAddButton onClick={openPostAddForm}>
        <S.PlusIcon />
        <span>Добавить пост</span>
      </S.PostAddButton>
      <S.Activities>Активности</S.Activities>{' '}
    </S.SidebarContainer>
  );
};
