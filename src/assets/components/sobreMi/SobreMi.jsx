import './SobreMi.css'
import miFoto from '../../img/fotoCv(copia).jpeg'
import logoCv from '../../img/logoCv.png'

const SobreMi = ({ nombre }) => {
    const skills = [
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    ];

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
                        <a href="https://www.linkedin.com/in/facundo-d-addese-797b241aa/" target="_blank"
                            className="contacto__link"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                                className="linkedin" /></a>
                        <a href="https://github.com/facudaddese?tab=repositories" target="_blank"
                            className="contacto__link">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                                className="github" />
                        </a>
                        <a href="/docs/CV_Facundo_Daddese.pdf" target="_blank" rel="noopener noreferrer" className="contacto__link">
                            <img src={logoCv} alt="Logo Cv" className='cv' /></a>
                    </div>
                </div>
            </div>

            <div className="skills-container">
                <h2>Skills</h2>
                <div className="carrousel-container">
                    <div className="carrousel">
                        {[...skills, ...skills].map((skill, index) => (
                            <div key={index} className="skill-item">
                                <img src={skill.icon} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SobreMi