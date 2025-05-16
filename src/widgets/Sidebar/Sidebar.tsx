import * as S from './Sidebar.styled.ts';

export const Sidebar = () => {
  return (
    <S.SidebarContainer>
      <S.PostAddButton>
        <S.PlusIcon />
        <div>Добавить пост</div>
      </S.PostAddButton>
      <S.Activities>Активности</S.Activities>{' '}
    </S.SidebarContainer>
  );
};
