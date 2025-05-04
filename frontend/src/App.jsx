import { useState } from 'react'
import Navbar from "./components/home-page/Navbar"
import {Outlet} from "react-router"

function App() {
  
  return (
    <> 
<Navbar/>
{/* wraps main content */}
<main className='px-1 py-1 pt-3 '>

<Outlet/>

</main>
    </>)
}

export default App;
