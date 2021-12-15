import './NavBar.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = () => (
    <nav className='NavBar'>
        <NavLink exact to='/donuts' >Donuts</NavLink>
        <NavLink exact to='/chips' >Chips</NavLink>
        <NavLink exact to='/gum' >Gum</NavLink>
    </nav>
)

export default NavBar;