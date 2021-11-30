import React from 'react';
import ProfessorPage from './components/Professor/ProfessorPage';
import CursosPage from './components/Cursos/CursosPage';
import EstudantePage from './components/Estudante/EstudantePage';
import MateriasPage from './components/Materias/MateriasPage';
import TurmaPage from './components/Turma/TurmaPage';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import { Box, Container } from '@mui/material'

export default class App extends React.Component {
  render() {
    return <Box>
      <Container>
        <Router>
          <Routes>
            <Route path="/cursos" element={<CursosPage></CursosPage>}></Route>
            <Route path="/professor" element={<ProfessorPage></ProfessorPage>}></Route>
            <Route path="/estudante" element={<EstudantePage></EstudantePage>}></Route>
            <Route path="/materias" element={<MateriasPage></MateriasPage>}></Route>
            <Route path="/turma" element={<TurmaPage></TurmaPage>}></Route>
            <Route path="/" element={<>
              <nav>
                <ol>
                  <li><NavLink to="/cursos">Lista de Cursos</NavLink></li>
                  <li><NavLink to="/professor">Lista de Professor</NavLink></li>
                  <li><NavLink to="/estudante">Lista de Estudante</NavLink></li>
                  <li><NavLink to="/materias">Lista de Materias</NavLink></li>
                  <li><NavLink to="/turma">Lista de Turmas</NavLink></li>
                </ol>
              </nav>
            </>}></Route>
          </Routes>
        </Router>
      </Container>
    </Box>
  }
}