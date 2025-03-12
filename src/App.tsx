import { ThemeInitializer } from './components/theme-initializer';
import { ThemeProvider } from './contexts/theme-context';
import Router from './Router';

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
