import { Outlet } from "react-router-dom";
import Navbar from "/src/Component/Navbar/Navbar";

function App() {
  return (
   <>
   <Outlet/>
   <Navbar/>
   </>
  )
}

export default App
