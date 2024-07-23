import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from 'react-auth-kit/AuthProvider'
import { CookiesProvider } from 'react-cookie'
import createStore from 'react-auth-kit/createStore'
//import { QueryClient, QueryClientProvider } from 'react-query'
const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});
/*const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      refetchOnMount:false,
      retry:false,staleTime:5*60*1000 // req valable pdt 5mn
    }
  }
});*/
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider store={store}>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
