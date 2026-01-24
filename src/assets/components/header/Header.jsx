import './Header.css'
import { useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
    const location = useLocation()

    return (
        <header>
            <nav className="nav-bar">
                <ul className="ul">
                    <li><HashLink smooth to="/#sobre-mi" className={`hash-link ${location.hash === '#sobre-mi' ? 'active' : ''}`}>Inicio</HashLink></li>
                    <li><HashLink smooth to="/#proyectos" className={`hash-link ${location.hash === '#proyectos' ? 'active' : ''}`}>Proyectos</HashLink></li>
                    <li><HashLink smooth to="/#contacto" className={`hash-link ${location.hash === '#contacto' ? 'active' : ''}`}>Contacto</HashLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
