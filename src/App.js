import React from "react";
import { Routes, Route } from "react-router-dom";
import Coins from './app/coins/coins';
import Coin from "./app/coin/coin";
import { i18n } from "./translations/i18n";
import { ButtonGroup, Button, Container, Navbar } from 'react-bootstrap';

export default function App() {

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
    <> 
      <Navbar bg="light" variant="light" style={{ direction: 'ltr' }}>
      <Container style={{justifyContent:'space-around'}}>       
          <Navbar.Brand >Crypto App</Navbar.Brand>
          <ButtonGroup style={{border:'none'}}>
            <Button size="sm" variant="outline-dark" value="en" onClick={onClick}>English</Button>
            <Button size="sm" variant="outline-dark" value="he" onClick={onClick}>עברית</Button>
          </ButtonGroup>        
          </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path=":coinId" element={<Coin />} />
      </Routes>
    </>
  );
}


