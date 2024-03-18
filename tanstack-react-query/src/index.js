import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();             // we can pass the default value to the querClient inside parenthesis ().

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>      {/*  Registering QueryClient with QueryClientprovider */}
      <App />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>
);

