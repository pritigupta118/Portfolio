import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import './index.css'

function App() {
  return (
   <div className="bg-[#131313]">
    <Header/>
    <Outlet/>  
  
   </div>
  )
}

export default App
