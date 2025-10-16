import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

          </Routes>
        </BrowserRouter>


      </ThemeProvider>
    </>
  )
}

export default App
