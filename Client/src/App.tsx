import React from 'react';
import { Route,} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Title from './Components/Title/Title';
import LineUp from './Views/LineUp/LineUp';
import Stats from './Views/Stats/Stats';
import axios from "axios"
import ZoneResponsive from './Views/Zone/ZoneResponsive';

axios.defaults.baseURL = 'http://localhost:3001/'

function App() {


  return (
    <>
    <Title/>
    <NavBar/>
      <Routes>
        <Route path="/stats" element={<Stats />} />
        <Route path="/lineup" element={<LineUp />} />
        <Route path="/zone" element={<ZoneResponsive/>} />
      </Routes>
    </>
  );
}

export default App;