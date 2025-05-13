import {Search, ShoppingCartIcon, UserCircle2, LucideShoppingBag, ListFilterIcon} from "lucide-react"
import { useEffect } from "react";


function Navbar() {

    // This `useEffect` sets up a scroll event to make part of the navbar sticky at the top of the screen
        useEffect(() => {
            function stickNavbar() {
                let sec1 = document.querySelector(".navbar-section-1"); 
                let navContainer = document.querySelector(".custom-navbar");
    
                // When the user scrolls past the height of the navbar, make the first section sticky
                if (window.scrollY >= navContainer.scrollHeight) 
                    sec1.classList.add("stick-navbar");

                 else 
                    sec1.classList.remove("stick-navbar");
                
            }
    
            // Attach scroll event listener
            window.addEventListener('scroll', stickNavbar);
    
            // Clean up the listener when the component unmounts
            return () => {
                window.removeEventListener('scroll', stickNavbar);
            }
    
        }, []);

    return (
        // Main navbar container: uses Bootstrap utility classes for layout and styling
        <div className='container-fluid mx-0 px-1 py-2 custom-navbar d-flex justify-content-between align-items-center text-white'>

            {/* SECTION 1 — Left part of the navbar with logo, filter button, and search bar */}
            <div className="navbar-section-1 d-flex align-items-center">

                     {/* Website logo (visible on desktop) */}
                     <div className="veggora-logo-desktop">
                    <a href="">
                        <img src="/src/assets/images/website-logo.png" height="45px" alt="" />
                    </a>
                </div>

                {/* Filter button (with icon and label) */}
                <div className='me-2 me-md-0 ms-md-0 ms-lg-2'>
                    <a
                        role="button"
                        className='nav-link filter-btn px-2 px-lg-2 py-1 d-flex h-100 align-items-center'>
                        <ListFilterIcon color='#0d6efd' strokeWidth={3} />
                        <p className='my-0 ms-1'>Filter</p>
                    </a>
                </div>
  
                {/* Search bar */}
                <div className='nav-input-group rounded-2 d-flex'>
                    <form action="" className='d-flex align-items-center w-100'>
                        {/* Search icon inside button */}
                        <button className='bg-transparent border border-0 px-3' >
                            <Search color="white" strokeWidth={3} />
                        </button>

                        {/* Search input */}
                        <input
                            type="text"
                            className='text-white px-1 border rounded-start-0 rounded-end-2 border-0 h-100 w-100'
                            placeholder='Search grocery items...' />
                    </form>
                </div>
            </div>

            {/* SECTION 2 — Right part of the navbar with links like cart, orders, and user dropdown */}
            <div className="navbar-section-2 py-lg-0 pb-1 pb-md-0 d-flex ">

                 {/* Mobile logo (visible on small screens) */}
                 <div className="veggora-logo-mobile me-4">
                    <a href="">
                        <img src="/src/assets/images/website-logo.png" height="45px" alt="" />
                    </a>
                </div>

                   {/* Navigation icons and links */}
                   <ul className='list-unstyled nav-options-ul gap-xl-5 gap-md-3 gap-3 d-flex my-0'>

{/* Cart icon and label */}
<li className='nav-item d-flex'>
    <a href="" className='px-1 nav-link  d-flex border-0 rounded-3 align-items-center'>
        <ShoppingCartIcon fill='white' size={26} />
        <p className='para-link my-0 ms-1'>Cart</p>
    </a>
</li>

{/* Orders icon and label */}
<li className='nav-item d-flex'>
    <a href="" className='px-1 nav-link border-0 rounded-3 d-flex  align-items-center'>
        <LucideShoppingBag fill='orange' color='rgb(31, 31, 31)' size={26} strokeWidth={2} />
        <p className='para-link my-0 ms-1'>Orders</p>
    </a>
</li>

{/* Sign-in dropdown with user icon */}
<li className='nav-item d-flex align-items-center bg-success border border-0 dropdown rounded-5'>
    <a
        role="button"
        href=""
        id='navbar-login-opt'
        className='px-2 py-md-2 h-100 py-lg-2 rounded-5 border-0 nav-link-login nav-link d-flex align-items-center'
        data-bs-toggle="dropdown"
        aria-expanded="false">
        <UserCircle2 size={26} color='rgb(42, 42, 42)' strokeWidth={2} />
        <p className='fw-bold my-0 ms-2'>Sign in</p>
    </a>

    {/* Dropdown options for signing in */}
    <ul className='dropdown-menu dropdown-login-options dropdown-menu-dark' aria-labelledby='navbar-login-opt'>
        <a href='' className="dropdown-item py-2 border border-0 rounded-2">Via Mobile number</a>
        <a href='' className="dropdown-item py-2 border border-0 rounded-2">Via E-mail address</a>
    </ul>
</li>
</ul>
            </div>
        </div>
    )
}

export default Navbar;
