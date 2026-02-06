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
                    <p>Estudiante de la Licenciatura en Sistemas en la Universidad Nacional de Lanús, enfocado en el Desarrollo Web FrontEnd (HTML, CSS, JavaScript y React), con conocimientos en BackEnd (Java, SQL). En este portfolio muestro proyectos que reflejan mi crecimiento y evolución como desarrollador.
                    </p>
                    <div className="contacto-container">
                        <Logos logoCv={logoCv}/>
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