import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import BookCase from './components/bookcase/bookcase';
import Review from './components/review/review';
import React, { useState } from 'react';
import { CountContext } from './context/CountContext';
import Explorer from './components/explorer/explorer';
import Desejados from './components/mywishes/mywishes';
import Profile from './components/myprofile/profile/profile';

function App() {
  const [contagemLidos, setContagem] = useState(0)
  return (
    <div className="App">
      <Router>
        <CountContext.Provider value={{ contagemLidos, setContagem }}>
          <header className="App-header">
            <Header contagem={contagemLidos} queroLer='30' />
          </header>
          <hr />
          <div className='mainContent'>
              <Sidebar />
            <Routes>
              <Route path='/' element={<BookCase />} />
              <Route path='/explorer' element={<Explorer />} />
              <Route path='/wishes' element={<Desejados />} />
              <Route path='/review' element={<Review />} />
              <Route path='/myProfile' element={<Profile />} />
            </Routes>
          </div>
        </CountContext.Provider>
      </Router>
    </div>
  );
}

export default App;
