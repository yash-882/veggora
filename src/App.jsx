import { useState } from 'react'
import Navbar from "./components/Navbar"
import {Outlet} from "react-router"

function App() {
  
  return (
    <> 
<Navbar/>
<main className='px-2 py-2'>

<Outlet/>

</main>
    </>)
}

export default App;
