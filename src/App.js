import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Coins from './app/coins/coins';
import Coin from "./app/coin/coin";
import { i18n } from "./translations/i18n";

function App() {

  const onChange = (event) => {
    if (event.target.value === "he") {
      document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
    } else {
      document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");
    }
    i18n.changeLanguage(event.target.value);
  };
  return (
    <Suspense fallback={"Loading..."}>
      <div className="App">
        <header className="App-header">
          <select name="language" onChange={onChange}>
            <option value="en">English</option>
            <option value="he">עברית</option>
          </select>
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Coins />} />
            <Route path="/Coin" element={<Coin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
