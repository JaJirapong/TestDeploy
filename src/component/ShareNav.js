import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"

export default function ShareNavbar() {
    return (
     <div>
      <Navbar />
      <Outlet />
     </div> 
    )
}