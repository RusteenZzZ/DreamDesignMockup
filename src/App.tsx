import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/app-router/AppRouter";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
