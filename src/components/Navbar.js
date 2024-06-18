import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';
import { useContext } from 'react';

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav className="navbar">
            <Link to="/"><h1>Worldie</h1></Link>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
        </nav>
    );
}

export default Navbar;