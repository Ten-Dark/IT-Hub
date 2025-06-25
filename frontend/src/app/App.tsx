import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/shared/config/theme/GlobalStyles.ts';
import { theme } from '@/shared/config/theme/theme.ts';
import * as S from './App.styled.ts';
import { NotFound } from '@/pages/NotFound.tsx';
import { Profile } from '@/pages/Profile.tsx';
import { AuthLayout } from '@/layouts/AuthLayout.tsx';
import { MainLayout } from '@/layouts/MainLayout.tsx';
import { PostList } from '@/features/PostList/ui/PostList.tsx';
import { Route, Routes } from 'react-router-dom';
import { Auth } from '@/pages/auth/Auth.tsx';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.AppContainer>
        <Routes>
          {/* Общий лэйаут */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<PostList />} />
          </Route>
          {/* AuthButtonNavigate-лэйаут */}
          <Route element={<AuthLayout />}>
            <Route path="/auth/login" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </S.AppContainer>
    </ThemeProvider>
  );
};
