import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Create from "./Pages/Create";
import Event from "./Pages/Event";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/create" element={ <Create /> } />
        <Route path="/event" element={ < Event /> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
