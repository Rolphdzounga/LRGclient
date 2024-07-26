import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from './pages/Public/PublicRouter'
import AdminRouter from './pages/Admin/AdminRouter'
import AuthRouter from './pages/Auth/AuthRouter'
import { ThemeProvider, createTheme } from '@mui/material'
import AuthGard from './_helpers/AuthGard'
import Erreur from './_utils/Erreur'
const theme = createTheme({
  palette: {
    // primary: { main: "#3f9c35" },
    // secondary: { main: "#0075b0" },
    // info: { main: "#dbe8f3", contrastText: "#0075b0", dark: "#a1c5e0" },
    // warning: { main: "#002244", contrastText: "#fff", dark: "#005c84" },
    primary: { main: "#211A44" },
    secondary: { main: "#C70039" },
    info: { main: "#dbe8f3", contrastText: "#0075b0", dark: "#a1c5e0" },
    warning: { main: "#002244", contrastText: "#fff", dark: "#005c84" },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter >
        <Routes>
          <Route path="/*" element={<PublicRouter   />} />
          <Route path="/admin/*" element={<AuthGard><AdminRouter/></AuthGard>} />
          <Route path="/auth/*" element={<AuthRouter/>} />
          <Route path="*" element={<Erreur/>} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
