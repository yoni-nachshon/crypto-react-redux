import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Coins from './app/coins/coins';
import Coin from "./app/coin/coin";
import { i18n } from "./translations/i18n";
import { ButtonGroup, Button, Container, Navbar } from 'react-bootstrap';

function App() {

  const onClick = (event) => {
    event.preventDefault()
    if (event.target.value === "he") {
      document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
    } else {
      document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");
    }
    i18n.changeLanguage(event.target.value);
  };
  return (

      <div className="App">
        <Navbar className="nav" bg="dark" variant="dark">
        <Container>
      

        <Navbar.Brand href="#home">Crypto App</Navbar.Brand>
          <ButtonGroup className="nav">
            <Button size="sm" variant="outline-light" value="en" onClick={onClick}>English</Button>
            <Button size="sm" variant="outline-light" value="he" onClick={onClick}>עברית</Button>
          </ButtonGroup>     

        
        </Container>
        </Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Coins />} />
            <Route path=":coinId" element={<Coin />} />
          </Routes>
        </BrowserRouter>
      </div>
 
  );
}

export default App;
