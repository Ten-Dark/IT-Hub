import './App.css';
import { GlobalStyles } from '@/shared/config/theme/GlobalStyles.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/config/theme/theme.ts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      Hello world
    </ThemeProvider>
  );
}

export default App;
