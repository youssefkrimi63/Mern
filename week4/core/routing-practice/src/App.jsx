import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Word from './components/word';
import WordColors from './components/WordColors';

function App() {
  return (
    <>
      <h1>Routing</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/:thisword' element={<Word/>}/>
          <Route path='/:thisword/:color/:background' element={<WordColors />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
