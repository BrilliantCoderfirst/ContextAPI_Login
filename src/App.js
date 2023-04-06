import { createContext, useState } from "react";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

export const DataTransferContext = createContext();

function App() {
  const [name, setName] = useState();
  const location = useLocation();

  return (
    <>
      <DataTransferContext.Provider value={{ name, setName }}>
        {location.pathname == "/" ? <LoginPage /> : <HomePage />}

        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </DataTransferContext.Provider>
    </>
  );
}

export default App;
