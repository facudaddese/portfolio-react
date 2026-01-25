import './Footer.css'
import logoGmail from "../../img/gmail_icon-icons.com_59877.ico"

const Footer = () => {
    return (
        <footer className='footer' id='contacto'>
            <div data-aos="zoom-in">
                <h2 className="title-footer">¿Querés hablar sobre un proyecto o conocer más sobre mí?</h2>
                <h3 className='caption'>Pongámonos en contacto</h3>
                <form className='form'>
                    <div className="campos">
                        <input type="text" placeholder='Ingrese su nombre...' />
                        <input type="text" placeholder='Ingrese su apellido...' />
                        <input type="mail" placeholder='Ingrese su correo electrónico...' />
                        <textarea placeholder='Ingrese su mensaje aquí...' style={{ height: "180px" }}></textarea>
                    </div>
                    <div className="btn-enviar">
                        <button className='btn' type="submit" onClick={(e) => e.preventDefault()}>Enviar</button>
                    </div>
                </form>
                <div className="iconos-footer-container">
                    <a href="https://www.linkedin.com/in/facundodaddese/" target="_blank" rel="noopener noreferrer">
                        <i className="devicon-linkedin-plain"></i>
                    </a>
                    <a href="https://github.com/facudaddese?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <i className="devicon-github-original"></i>
                    </a>
                    <a href="mailto:facundo.daddese19@gmail.com" rel="noopener noreferrer">
                        <img src={logoGmail} alt='Enviar mail a Facundo' />
                    </a>
                </div>
                <p>&copy; Facundo D'Addese | Portfolio Web.</p>
            </div>
        </footer>
    )
}

export default Footer