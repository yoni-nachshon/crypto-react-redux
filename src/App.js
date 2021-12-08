import React from "react";
import { Routes, Route } from "react-router-dom";
import Coins from './app/coins/coins';
import Coin from "./app/coin/coin";
import { i18n } from "./translations/i18n";
import { Container, Form } from 'react-bootstrap';


export default function App() {

  const onChange = (event) => {
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
      <Container style={{ direction: 'ltr', display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
        <Form.Select style={{width:'7rem'}} size="sm" onChange={onChange}>
          <option value="en">English</option>
          <option value="he">עברית</option>
        </Form.Select>
      </Container>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path=":coinId" element={<Coin />} />
      </Routes>
    </>
  );
}


