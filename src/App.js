import logo from './logo.svg';
import React from 'react';
import ProfessorPage from './components/ProfessorPage';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"

export default class App extends React.Component {
  render() {
    return <main>
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
</main>
  }
}