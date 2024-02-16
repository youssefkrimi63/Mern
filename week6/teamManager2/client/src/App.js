import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import OneMovie from './components/OneProduct';
import Create from './components/Create';


function App() {
  return (
    <div className="App">
      <h1> Product</h1>
      <Link to="/"> ALL Product
      </Link>
      <p></p>
      <Link to="/products/create"> Create Of products </Link>


      <Routes >

        {/* DASHBOARD */}
        <Route path="/" element={<Main />} />

        {/* READ ONE */}
        <Route path="/products/:id" element={<OneMovie />} />

        {/* CREATE  */}
        <Route path="/products/create" element={<Create />} />

       




      </Routes>


    </div>
  );
}

export default App;
