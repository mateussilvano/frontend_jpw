import React from 'react';
import ProfessorPage from './components/ProfessorPage';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import { Box, Container } from '@mui/material'

export default class App extends React.Component {
  render() {
    return <Box>
      <Container>
        <Router>
          <Routes>
            <Route path="/professor" element={<ProfessorPage></ProfessorPage>}></Route>
            <Route path="/" element={<>
              <nav>
                <ol>
                  <li><NavLink to="/professor">Lista de Professor</NavLink></li>
                </ol>
              </nav>
            </>}></Route>
          </Routes>
        </Router>
      </Container>
    </Box>
  }
}