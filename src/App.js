import './App.css'
import Navbar from "./components/Navbar";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="sec1-prt3"> </div>
      <AllRoutes />
    </div>
  );
}

export default App;
