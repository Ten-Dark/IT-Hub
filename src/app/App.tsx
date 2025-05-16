import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/config/theme/theme.ts';
import { GlobalStyles } from '@/shared/config/theme/GlobalStyles.ts';
import { PostList } from '@/widgets/PostList/ui/PostList.tsx';
import * as S from './App.styled.ts';
import { Route, Routes } from 'react-router-dom';
import Profile from '@/pages/Profile.tsx';
// import Auth from '@/pages/Auth.tsx';
import MainLayout from '@/layouts/MainLayout.tsx';
import AuthLayout from '@/layouts/AuthLayout.tsx';
import NotFound from '@/pages/NotFound.tsx';
import Login from '@/widgets/Auth/Login.tsx';
import Register from '@/widgets/Auth/Register.tsx';



function App() {
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
