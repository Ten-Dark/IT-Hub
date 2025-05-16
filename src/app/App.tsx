import { account } from '@/shared/config/appwrite';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/shared/config/theme/GlobalStyles.ts';
import { theme } from '@/shared/config/theme/theme.ts';
import * as S from './App.styled.ts';
import Header from '@/widgets/Header/Header';
import { PostList } from '@/widgets/PostList/ui/PostList.tsx';
import { Sidebar } from '@/widgets/Sidebar/Sidebar.tsx';
import { useEffect } from 'react';
import { PostAddForm } from '@/widgets/PostAdd/ui/PostAddForm.tsx';

function App() {
  useEffect(() => {
    console.log(account);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.AppContainer>
        <Header />
        <S.Content>
          <PostList />
          <Sidebar />
        </S.Content>
        <PostAddForm />
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;
