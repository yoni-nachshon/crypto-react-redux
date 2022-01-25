import React from "react";
import { Routes, Route } from "react-router-dom";
import Coins from './components/coins';
import Coin from "./components/coin";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path=":coinId" element={<Coin />} />
      </Routes>
    </>
  );
}


