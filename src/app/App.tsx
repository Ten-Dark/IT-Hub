import { account } from '@/shared/config/appwrite';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/shared/config/theme/GlobalStyles.ts';
import { theme } from '@/shared/config/theme/theme.ts';
import * as S from './App.styled.ts';
import NotFound from '@/pages/NotFound.tsx';
import Profile from '@/pages/Profile.tsx';
import MainLayout from '@/layouts/MainLayout.tsx';
import AuthLayout from '@/layouts/AuthLayout.tsx';
import { PostList } from '@/widgets/PostList/ui/PostList.tsx';
import { PostAddForm } from '@/widgets/PostAdd/ui/PostAddForm.tsx';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openPostAddForm = () => {
    modalRef.current?.showModal();
  };
  useEffect(() => {
    console.log(account);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.AppContainer>
        <Routes>
          {/* Общий лэйаут */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<PostList />} />
            <S.PostAddDialog ref={modalRef}>
              <PostAddForm onClose={() => modalRef.current?.close()} />
            </S.PostAddDialog>
          </Route>

          {/* Auth-лэйаут */}
          <Route path="auth" element={<AuthLayout />}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;
