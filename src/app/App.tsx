import './App.css';
import { GlobalStyles } from '@/shared/config/theme/GlobalStyles.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/config/theme/theme.ts';
import { PostList } from '@/widgets/PostList/ui/PostList.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      Hello world
      <PostList/>
    </ThemeProvider>
  );
}

export default App;
