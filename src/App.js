// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Categories from "./Categories";

import List from "./List";
import Details from "./Details";
import Main from "./Main";

function App() {
  return (
    <div>
      <Main />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/:strCategory" element={<List />} />
        <Route path="/:strCategory/:idMeal" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
