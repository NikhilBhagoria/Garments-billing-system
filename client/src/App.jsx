import { BrowserRouter, Routes, Route } from 'react-router';
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './App.css'
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/login"  element={<Login />} />
            <Route path='*' element={<Login/>}/>

          </Routes>
        </BrowserRouter>


      </ThemeProvider>
    </>
  )
}

export default App
