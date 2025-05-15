import * as S from './Sidebar.styled.ts';

export const Sidebar = () => {
  return (
    <S.SidebarContainer>
      <S.PostAdd>
        <S.PlusIcon />
        <div>Добавить пост</div>
      </S.PostAdd>
      <S.Activities>Активности</S.Activities>{' '}
    </S.SidebarContainer>
  );
};
