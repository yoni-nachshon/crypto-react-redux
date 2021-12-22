import React from "react";
import { Routes, Route } from "react-router-dom";
import Coins from './app/coins/coins';
import Coin from "./app/coin/coin";

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


