import React, {Suspense, useState } from "react";
import './App.css';
import Coins from './app/coins/coins';
import { i18n } from "./translations/i18n";

function App() {

  const onChange = (event) => {
    if(event.target.value === "he"){
      document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
    }else{
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
        <Coins />
      </div>
    </Suspense>
  );
}

export default App;
