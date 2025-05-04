import { useState } from 'react'
import Navbar from "./components/Navbar"
import {Outlet} from "react-router"

function App() {
  
  return (
    <> 
<Navbar/>
{/* wraps main content */}
<main className='px-1 py-1 '>

<Outlet/>

</main>
    </>)
}

export default App;
