import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registro from './components/Registro';
import Inicio from './components/Inicio'
import Servicios from './components/Servicios'
import Agenda from './components/agenda'
import Gestionreservas from './components/gestionreservas'
import Reporte from './components/reporte'
import Servicio from './components/Servicio'
import Admin from './components/admin'
import Nav from './components/Nav';
import Footer from './components/Footer';

import Error from './components/error';

import './App.css';

function App() {
  const [name, setName] = useState('')
  useState( () => {
    (
      async () => {
          const response = await fetch('http://localhost:4000/api/user', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          });

          const content = await response.json();
          setName(content.name);
          
      }
    )();
  });

  return (

    <Router>
      <Nav name={name} setName={setName} />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/ingresar" element={<Login setName={setName} />}/>
        <Route exact path="/" element={<Inicio name={name} />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/gestionReservas" element={<Gestionreservas />} />
        <Route path="/reporte" element={<Reporte />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

