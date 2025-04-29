import {Search} from "lucide-react"


function Navbar() {
    return (
        // Main navbar container: uses Bootstrap utility classes for layout and styling
        <div className='container-fluid px-2 py-2 px-1g-2 custom-navbar d-flex justify-content-between align-items-center text-white'>

            {/* SECTION 1 — Left part of the navbar with logo, filter button, and search bar */}
            <div className="navbar-section-1 d-flex align-items-center">
  
                {/* Search bar */}
                <div className='nav-input-group rounded-2 d-flex'>
                    <form action="" className='d-flex align-items-center w-100'>
                        {/* Search icon inside button */}
                        <button className='bg-transparent border border-0 px-3'>
                            <Search color="white" strokeWidth={3} />
                        </button>

                        {/* Search input */}
                        <input
                            type="text"
                            className='text-white px-2 border rounded-start-0 rounded-end-2 border-0 h-100 w-100'
                            placeholder='Search grocery items or categories...' />
                    </form>
                </div>
            </div>

            {/* SECTION 2 — Right part of the navbar with links like cart, orders, and user dropdown */}
            <div className="navbar-section-2 py-lg-0 pb-1 d-flex flex-shrink-1">
            </div>
        </div>
    )
}

export default Navbar;
