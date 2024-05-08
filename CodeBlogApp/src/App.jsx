import { Outlet } from "react-router-dom";
import Navbar from "/src/Component/Navbar/Navbar.jsx";
import Footer from "/src/Component/Footer/Footer.jsx";

function App() {
  return (
   <>
   <Outlet/>
   <Navbar/>
   <Footer/>
   </>
  )
}

export default App
