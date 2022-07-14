import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/auth-context';
import { PropertyProvider } from './context/property-context';
import { reset, global } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={reset}/>
    <Global styles={global}/>
    <BrowserRouter>
      <AuthProvider>
        <PropertyProvider>
          <App />
        </PropertyProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
