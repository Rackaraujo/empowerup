import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import CadastroPage from "./pages/CadastroPage"
import ComunidadePage from "./pages/ComunidadePage"
import "./App.css"
import React from 'react'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/comunidade" element={<ComunidadePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastroPage />} />
    </Routes>
  )
}

export default App;


