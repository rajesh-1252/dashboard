import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SharedLayout from "./components/SharedLayout";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
