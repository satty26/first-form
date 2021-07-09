import React from "react";
import "./app.css";
import Header from './components/Header';
import HiringForm from "./components/Hiring";

function App() {
  return (
    <div className="app">
      <Header />
      <HiringForm />
    </div>
  );
}

export default App;