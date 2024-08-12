import React from 'react'

export default function NavBar() {
    return (
        <div className="nav-scroller py-1 mb-3 border-bottom">
            <nav className="nav nav-underline justify-content-between">
                <a className="nav-item nav-link link-body-emphasis active" href="#">Categories</a>
                <a className="nav-item nav-link link-body-emphasis" href="#">New Products</a>
                <a className="nav-item nav-link link-body-emphasis" href="#">Men</a>
                <a className="nav-item nav-link link-body-emphasis" href="#">Women</a>
                <a className="nav-item nav-link link-body-emphasis" href="#">Children</a>
                <a className="nav-item nav-link link-body-emphasis" href="#">Electronics</a>
                <a className="nav-item nav-link link-body-emphasis" href="#">Bags</a>
                <a className="nav-item nav-link link-body-emphasis" href="#">Cosmetics</a>
                <a className="nav-item nav-link link-body-emphasis" href="#">Jewelries</a>
                <a className="nav-item nav-link link-body-emphasis" href="#">Sports</a>
                <a className="nav-item nav-link link-body-emphasis" href="#">Clothings</a>
                <a className="nav-item nav-link link-body-emphasis" href="#">Shoes</a>
            </nav>
        </div>
    )
}
