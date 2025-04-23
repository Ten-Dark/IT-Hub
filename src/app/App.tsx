import './App.css';
import { Auth } from '@/features/Auth/ui/Auth.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />;
      Hello world
      <PostList/>
    </ThemeProvider>
  );

}

export default App;
