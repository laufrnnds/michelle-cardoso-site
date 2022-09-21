import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import StylesGlobal from './config/GlobalStyles';
import AppRoutes from './routes/AppRoutes';
import ThemeDefault from './config/theme/Default';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ThemeDefault}>
      <StylesGlobal />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
