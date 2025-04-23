import Header from '@/widgets/Header/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/config/theme/theme.ts';
import { GlobalStyles } from '@/shared/config/theme/GlobalStyles.ts';
import { PostList } from '@/widgets/PostList/ui/PostList.tsx';
import * as S from './App.styled.ts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.AppContainer>
        <Header />
        <PostList />
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;
