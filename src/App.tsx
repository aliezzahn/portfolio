import Router from './Router';
import { ThemeInitializer } from './components/theme-initializer';
import { ThemeProvider } from './contexts/theme-context';

const App = () => {
  return (
    <>
      <ThemeInitializer />
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
