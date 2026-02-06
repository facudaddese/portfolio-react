import './Footer.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import Swal from 'sweetalert2'
import Logos from '../logos/Logos'
import logoCv from '../../img/logoCv.png'

const Footer = () => {

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        const form = formRef.current;

        // validación email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(form.from_email.value.trim())) {
            Swal.fire({
                title: "Atención",
                text: "Ingrese un email válido.",
                icon: "warning",
                confirmButtonText: "OK"
            })
            return;
        }

        emailjs.sendForm('service_6hrfv8l', 'template_lfvwzpn', form, 'l-KXdsYqFE11VRNqI')
            .then(() => {
                Swal.fire({
                    title: "¡Mensaje enviado!",
                    text: "Gracias por contactarte, te responderé a la brevedad.",
                    icon: "success",
                    confirmButtonText: "OK"
                })

                form.reset();
            })
            .catch(() => {
                Swal.fire({
                    title: "Error",
                    text: "No se pudo enviar el mensaje. Intente nuevamente.",
                    icon: "error",
                    confirmButtonText: "OK"
                })
            })
    }

    return (
        <footer className='footer' id='contacto'>
            <div data-aos="zoom-in">
                <h2 className="title-footer">
                    ¿Querés hablar sobre un proyecto o conocer más sobre mí?
                </h2>
                <h3 className='caption'>Pongámonos en contacto</h3>

                <form className='form' ref={formRef} onSubmit={sendEmail}>
                    <div className="campos">
                        <input type="text" name="from_name" placeholder='Ingrese su nombre...' required />
                        <input type="text" name="from_lastname" placeholder='Ingrese su apellido...' required />
                        <input type="email" name="from_email" placeholder='Ingrese su correo electrónico...' required />
                        <textarea name="message" placeholder='Ingrese su mensaje aquí...' style={{ height: "180px" }} required></textarea>
                    </div>

                    <div className="btn-enviar">
                        <button className='btn' type="submit">Enviar</button>
                    </div>
                </form>

                <div className="iconos-footer-container">
                    <Logos logoCv={logoCv} />
                </div>

                <p>&copy; Facundo D'Addese | Portfolio Web.</p>
            </div>
        </footer>
    )
}

export default Footer
