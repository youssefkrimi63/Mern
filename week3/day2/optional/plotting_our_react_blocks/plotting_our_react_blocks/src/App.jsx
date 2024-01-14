import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
import Content from './Components/Content';
import { css } from '@emotion/css';


function App() {
  return (
    <div className="app">
      <Header />
      <div className= {css`
      width:80%;
      display:flex;
      align-items:center;
      justify-content: space-between;`}>
      <Navigation />
      <Main>
        <Content>
        <SubContents />
        <SubContents />
        <SubContents />
        </Content>
        <Advertisement />
      </Main>
      </div>
    </div>
  );
}

export default App;


