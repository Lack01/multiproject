import {Route, Routes } from "react-router-dom";

import WordsPerMinute from "./screens/WordsPerMinute";
import Memotest from "./screens/Memotest";
import Pokemon from "./screens/Pokemon";


function App() {
return (
    <Routes>
      <Route element={<Memotest/>} path="/memotest" />
      <Route element={<WordsPerMinute/>} path="/wpm"/>
      <Route element={<Pokemon/>} path="/pokemon"/>
    </Routes>
  );
}


export default App
