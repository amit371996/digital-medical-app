import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRoutes } from './component/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './component/store/store';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
      textTransform: 'none',
      fontSize: 18,
      color:'#282C36'
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
