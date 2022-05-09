import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './routes/home';
import SignUp from "./routes/signup";
import MainPage from "./routes/mainpage";
import NovaEntrada from "./routes/novaentrada";
import NovaSaida from "./routes/novasaida";
import { UserContext } from './UserContext';

function App() {

  const [token, setToken] = useState();

  return (
    <UserContext.Provider value={{token, setToken}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/novaentrada" element={<NovaEntrada />} />
        <Route path="/novasaida" element={<NovaSaida />} />
      </Routes>
    </UserContext.Provider>

    
  );
}

export default App;
