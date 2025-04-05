import { Link } from "react-router-dom";
import { Search, LayoutListIcon, ListFilterIcon, ShoppingCartIcon, LucideLogIn } from "lucide-react"
import { useState } from "react";

function Navbar() {
    let [categorie, setCategorie] = useState(false);
    let [isRotate, setRotate] = useState(false);

    function showCategories(evt) {
        evt.preventDefault()

        setRotate(val => !val)
        setCategorie(val => !val)
    }


    return (
        <header>
            {/* navigation bar */}
            <div className="navbar-container">

                {/* container of filter button */}
                <div className="nav-option nav-child filter-product-container">

                    {/* icon */}
                    <div className=
                        {`filter-product-icon-container ${isRotate ? "filter-rotate-start" : ""}`}>
                        <ListFilterIcon size={24} />

                    </div>
                    <button onClick={showCategories}>Filter products</button>
                </div>

                {/* logo container */}
                <div className="logo-container nav-child">
                    <a href="http://localhost:5173/">
                        <img src="../public/images/website-logo.png" alt="" />
                    </a>
                </div>

{/* search bar container */}
                <div className="search-bar-container">

                    <input type="search" placeholder="Search items here" />
                    <button><Search color="white" size={24} /></button>
                </div>



{/* LINKS */}
{/* orders */}
                <div className="nav-link-container nav-child">

                    <Link to="/orders" className="nav-link">
                        <LayoutListIcon color="rgb(255, 102, 0)" size={26} strokeWidth={3} className="nav-link-icon" />

                        Purchases</Link>
                </div>

{/* cart */}
                <div className="nav-link-container nav-child">
                    <Link to="/cart" className="nav-link">
                        <ShoppingCartIcon color="rgb(255, 102, 0)" size={26} strokeWidth={3} className="nav-link-icon" />

                        Cart</Link>
                </div>

{/* login */}
                <div className="nav-link-container nav-child">
                    <Link to="/login" className="nav-link">
                        <LucideLogIn color="rgb(0, 255, 0)" size={26} strokeWidth={3} className="nav-link-icon" />

                        Login</Link>
                </div>


            </div>
        </header>
    )
}
export default Navbar