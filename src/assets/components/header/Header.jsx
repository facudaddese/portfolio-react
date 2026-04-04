import './Header.css'
import { HashLink } from 'react-router-hash-link'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTIONS = ['sobre-mi', 'proyectos', 'contacto']

const Header = () => {
    const activeSection = useActiveSection(SECTIONS);

    return (
        <header>
            <nav className="nav-bar">
                <ul className="ul">
                    <li><HashLink smooth to="/#sobre-mi" className={`hash-link ${activeSection === 'sobre-mi' ? 'active' : ''}`}>Inicio</HashLink></li>
                    <li><HashLink smooth to="/#proyectos" className={`hash-link ${activeSection === 'proyectos' ? 'active' : ''}`}>Proyectos</HashLink></li>
                    <li><HashLink smooth to="/#contacto" className={`hash-link ${activeSection === 'contacto' ? 'active' : ''}`}>Contacto</HashLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header