import React from "react";
import { Routes, Route } from "react-router-dom";
import Coins from './components/coins';
import Coin from "./components/coin";

export default function App() {

  const getValueByPath = (obj, path) => {
    let value;
    path.forEach((v, i) => {
      value = i ? value[path[i]] : obj[path[i]];
    });
    return value;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Coins getValueByPath={getValueByPath} />} />
        <Route path=":coinId" element={<Coin getValueByPath={getValueByPath} />} />
      </Routes>
    </>
  );
}


