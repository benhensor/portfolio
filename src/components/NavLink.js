import React from 'react'

const NavLink = ({ to, name, activeLink, onUpdateActiveLink }) => (
    <li>
        <a
            href={`#${to}`}
            className={activeLink === to ? 'active menu-link' : 'menu-link'}
            onClick={() => onUpdateActiveLink(to)}
        >
            {name}
        </a>
    </li>
)

export default NavLink