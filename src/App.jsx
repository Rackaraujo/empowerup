import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import CadastroPage from "./pages/CadastroPage"
import "./App.css"
import React from 'react';

function App() {
  return (
        <div className="App">
          <HomePage />
        </div>
  );
}

export default App;

