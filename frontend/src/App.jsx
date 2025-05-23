import { useState } from 'react'
import Navbar from "./components/home-page/Navbar"
import {Outlet} from "react-router"

function App() {
  
  return (
    <> 
<Navbar/>
{/* wraps main content */}
<main className='py-1 main-content pt-3 '>

<Outlet/>

</main>
    </>)
}

export default App;
