import { account } from '@/shared/config/appwrite';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/shared/config/theme/GlobalStyles.ts';
import { theme } from '@/shared/config/theme/theme.ts';
import * as S from './App.styled.ts';
import { Route, Routes } from 'react-router-dom';
import Profile from '@/pages/Profile.tsx';
import MainLayout from '@/layouts/MainLayout.tsx';
import AuthLayout from '@/layouts/AuthLayout.tsx';
import NotFound from '@/pages/NotFound.tsx';
import { PostList } from '@/widgets/PostList/ui/PostList.tsx';
import { useEffect } from 'react';

function App() {
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
