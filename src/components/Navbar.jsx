import {Search, ListFilterIcon} from "lucide-react"


function Navbar() {
    return (
        // Main navbar container: uses Bootstrap utility classes for layout and styling
        <div className='container-fluid px-2 py-2 px-1g-2 custom-navbar d-flex justify-content-between align-items-center text-white'>

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
              
                 {/* Mobile logo (visible on small screens) */}
                 <div className="veggora-logo-mobile me-4">
                    <a href="">
                        <img src="/src/assets/images/website-logo.png" height="45px" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
