import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <h1>TEST</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
