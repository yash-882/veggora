import { Search, ShoppingCartIcon } from "lucide-react"
import { useEffect } from "react";
import { Link } from "react-router";

function Navbar() {

    // This `useEffect` sets up a scroll event to make part of the navbar sticky at the top of the screen
    useEffect(() => {
        function stickNavbar(stickRemovalAnimation = true) {
            //stick navContainer element for desktops
            let navContainer = document.querySelector(".custom-navbar");
            // for section-2 of the NavBar for small devices (contains search bar)
            let sec2 = document.querySelector(".navbar-section-2");

            // on medium/small devices
            let isSmallDevice = window.innerWidth < 841;

            //checks if the Navbar has crossed the viewport from the top
            let shouldStick = window.scrollY > navContainer.offsetHeight
            // main content (homepage content,etc)
            let mainContent = document.querySelector('.main-content')

            //(for medium and small screens) 
            if (isSmallDevice) {
                // always remove sticky behaviour from Nav-Container(desktop view)
                navContainer.classList.remove('stick-navbar')

                // stick navbar by checking 'shouldStick'*true -> stick, false->unstick*
                sec2.classList.toggle("stick-navbar", shouldStick);

                // setting margin to avoid the main content from crossing the top
                mainContent.style.marginTop = shouldStick ?
                    `${sec2.offsetHeight}px` : mainContent.style.marginTop = '0px'
            }
            // for desktops
            else  {
                // always remove margin-top of main-content
                mainContent.style.marginTop = '0px'
                // always remove sticky behaviour from section-1(mobile view) 
                // before sticking the desktop's nav 
                sec2.classList.remove('stick-navbar')

                // stick navbar by checking 'shouldStick'*true -> stick, false->unstick*
                navContainer.classList.toggle("stick-navbar", shouldStick);
            }

            // if navigation bar is sticked to the top
            // then only remove animation should be applied
            // both mobile and desktop use removal animation on navContainer
           if (stickRemovalAnimation) {          
                let isSticked = sec2.classList.contains('stick-navbar') || 
                navContainer.classList.contains('stick-navbar')

                navContainer.classList.toggle("remove-animation-navbar", !isSticked);
            }
        }
        // wait for a some milliseconds to improve performance
        function debounce(func) {
            let waitScrolling;
            return function (...args) {
                clearTimeout(waitScrolling)

                waitScrolling = setTimeout(() => {
                    func.call(this, ...args)
                }, 100)
            }
        }

        // calling stickyNavbar
        const handleScroll = debounce(stickNavbar);

        // on the first mount *passing false to prevent displaying stick removal animation*
        handleScroll(false)
        // Attach event listener for scrolling and resizing
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll)

        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        }
    }, []);


    return (
        // Main navbar container: uses both css and bootstrap
        <div className='container-fluid mx-0 px-1 py-1 custom-navbar d-flex justify-content-around align-items-center text-white'>

            {/* nav section-3 */}
            <div className="navbar-section-1  d-flex align-items-center ">
                <div className="location-info d-flex  align-items-center ">

                    <h5 role="link" className=" text-break  delivery-address-info mb-0 me-2   align-items-center">
                        Add Location📍
                        <a href="" className=" text-decoration-none px-1 py-1">Set</a>
                    </h5>
                </div>

            </div>
            {/* SECTION 1 — Left part of the navbar with logo,  and search bar */}
            <div className="navbar-section-2 d-flex align-items-center">

                {/* Website logo (visible on desktop) */}
                <div className="me-2 veggora-logo-desktop">
                    <a
                        href="http://localhost:5173"
                        className="d-block">
                        <img src="/src/assets/images/website-logo.png"
                            height={'48px'} alt="" />
                    </a>
                </div>


                {/* Search bar */}
                <div className='nav-input-group  d-flex'>
                    <form action="" className='d-flex align-items-center w-100'>
                        {/* Search icon inside button */}
                        <button className='bg-transparent border border-0 px-3' >
                            <Search color="white" strokeWidth={3} />
                        </button>

                        {/* Search input */}
                        <input
                            type="text"
                            className='text-white px-1 h-100 w-100'
                            placeholder='Search grocery items...' />
                    </form>
                </div>
            </div>

            {/* SECTION 2 — Right part of the navbar with links like cart, orders, and user dropdown */}
            <div className="navbar-section-3 py-lg-0 pb-1 pb-md-0 d-flex ">

                {/* Mobile logo (visible on small screens) */}
                <div className="veggora-logo-mobile me-4">
                    <a href=""
                        className="d-block">
                        <img src="/src/assets/images/website-logo.png" height="45px" alt="" />
                    </a>
                </div>

                {/* Navigation icons and links */}
                <ul className='list-unstyled nav-options-ul gap-xl-4 gap-md-3 gap-3 d-flex my-0'>

                    {/* Cart icon and label */}
                    <li className='nav-item d-flex'>
                        <Link href="" className='px-2 nav-link  d-flex border-0 rounded-3 align-items-center'>
                            <ShoppingCartIcon fill='white' size={26} />
                            <p className='para-link my-0 ms-1'>Cart</p>
                        </Link>
                    </li>

                    {/* Sign-in */}
                    <li className='nav-item d-flex align-items-center nav-item-login rounded-4'>
                        <Link
                            href=""
                            id='navbar-login-opt'
                            className='px-3 py-md-2 h-100  py-lg-2 rounded-4 border-0 nav-link-login nav-link d-flex align-items-center'>
                            <p className='fw-bold my-0 '>Sign in</p>
                        </Link>
                    </li>
                </ul>
            </div>



        </div>
    )
}

export default Navbar;
