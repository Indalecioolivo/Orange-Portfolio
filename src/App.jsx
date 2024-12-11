import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app-container">
      <Header />
      <h1>Olá Mundo</h1>
      <Outlet />
    </div>
  );
}

export default App;
