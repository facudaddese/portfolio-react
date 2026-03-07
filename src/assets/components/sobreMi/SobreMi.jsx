import './SobreMi.css'
import miFoto from '../../img/fotoCv.jpg'
import logoCv from '../../img/logoCv.png'
import Skills from '../skills/Skills';
import Logos from '../logos/Logos';

const SobreMi = ({ nombre }) => {
    return (
        <section id='sobre-mi'>
            <div className="flex-container">
                <img src={miFoto} alt="Foto Facundo D'Addese" className='mi-img' />
                <div className="info-container">
                    <h1>{nombre}</h1>
                    <div className="strong">
                        <strong>Front-End Developer</strong>
                    </div>
                    <p>Estudiante avanzado de la Licenciatura en Sistemas en la Universidad Nacional de Lanús y Frontend Developer con React & Tailwind CSS. En este portfolio muestro mis proyectos y habilidades.
                    </p>
                    <div className="contacto-container">
                        <Logos logoCv={logoCv} />
                    </div>
                </div>
            </div>

            <div className="skills-container">
                <Skills />
            </div>
        </section>
    )
}

export default SobreMi