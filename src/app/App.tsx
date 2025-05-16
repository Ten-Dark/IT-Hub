import { account } from '@/shared/config/appwrite';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/shared/config/theme/GlobalStyles.ts';
import { theme } from '@/shared/config/theme/theme.ts';
import * as S from './App.styled.ts';
import { Route, Routes } from 'react-router-dom';
import Profile from '@/pages/Profile.tsx';
// import Auth from '@/pages/Auth.tsx';
import MainLayout from '@/layouts/MainLayout.tsx';
import AuthLayout from '@/layouts/AuthLayout.tsx';
import NotFound from '@/pages/NotFound.tsx';
import Login from '@/widgets/Auth/Login.tsx';
import Register from '@/widgets/Auth/Register.tsx';
import Header from '@/widgets/Header/Header';
import { PostList } from '@/widgets/PostList/ui/PostList.tsx';
import { Sidebar } from '@/widgets/Sidebar/Sidebar.tsx';
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
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="reg" element={<Register />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;
