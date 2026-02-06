import imgCr7 from '../../img/cr7.png'
import imgTrivia from '../../img/trivia.png'
import imgToDoList from '../../img/toDoList.png'
import imgBuscadorPasajes from '../../img/buscadorDePasajes.png'
import imgGestionTurnos from '../../img/gestionDeTurnos.png'
import imgAgendaWeb from '../../img/agendaWeb.png'
import imgJava from '../../img/java.png'
import imgLocademia from '../../img/locademia.png'
import imgApiDbz from '../../img/apidbz.png'
import imgApiClima from '../../img/apiclima.png'
import './ProyectosContainer.css'
import Proyecto from '../proyecto/Proyecto'

const ProyectosContainer = ({ titulo }) => {
    return (
        <section id="proyectos" className='proyectos'>
            <h2>{titulo}</h2>
            <div className="flex-container-proyectos">
                <Proyecto img={imgCr7} alt="Imagen proyecto CR7" title="Cristiano Ronaldo" descripcion="Primer sitio web responsive que incluye cinco páginas HTML
                                completamente maquetadas. El mismo, se dedica a contar la vida de Cristiano Ronaldo:
                                carrera
                                deportiva, títulos obtenidos y récords." skill1="HTML" skill2="CSS" skill3="SASS" skill4="BOOTSTRAP" url="https://github.com/facudaddese/proyecto-cr7-39385" repo="REPO" />

                <Proyecto img={imgTrivia} alt="Imagen proyecto Trivia Futbolera" title="Trivia Futbolera" descripcion="Mi primer juego. Un quiz interactivo sobre fútbol, inspirado
                                en el
                                estilo de Preguntados. El usuario responde una serie de preguntas y al finalizar
                                puede
                                ver
                                su puntaje total según las respuestas correctas." skill1="HTML" skill2="CSS" skill3="JAVASCRIPT" url="https://github.com/facudaddese/trivia" repo="REPO" />

                <Proyecto img={imgToDoList} alt="magen proyecto TO-DO-LIST" title="TO-DO-LIST" descripcion="Sitio web interactivo que permite al usuario gestionar sus
                                tareas
                                de manera dinámica: agregar, modificar y eliminar." skill1="HTML" skill2="CSS" skill3="JAVASCRIPT" url="https://github.com/facudaddese/proyecto-to-do-list" repo="REPO" />

                <Proyecto img={imgBuscadorPasajes} alt="Imagen proyecto Agencia de Turismo" title="Buscador de Pasajes" descripcion="Permite al usuario ingresar origen y destino
                                (validando que no sean iguales), seleccionar fechas de ida y vuelta (asegurando que
                                la
                                fecha
                                de regreso no sea anterior a la de salida) y calcular el total según la cantidad de
                                pasajeros." skill1="HTML" skill2="CSS" skill3="JAVASCRIPT" url="https://github.com/facudaddese/proyecto-agenciaDeViajes" repo="REPO" />

                <Proyecto img={imgGestionTurnos} alt="Imagen proyecto Gestión de turnos" title="Gestión de Turnos" descripcion="Sitio desarrollado como SPA, donde los usuarios pueden
                                registrarse
                                e iniciar sesión para agendar turnos en cualquier especialidad. Permite elegir
                                fecha,
                                hora y
                                el médico deseado, y gestionar sus turnos de manera interactiva y dinámica." skill1="HTML" skill2="CSS" skill3="JAVASCRIPT" url="https://github.com/facudaddese/gestion-de-turnos" repo="REPO" />

                <Proyecto img={imgAgendaWeb} alt="Imagen proyecto Agenda Web" title="Agenda Web" descripcion="Permite a los usuarios gestionar sus contactos:
                                agregar, visualizar, editar y eliminar información de manera sencilla." skill1="HTML" skill2="CSS" skill3="JAVASCRIPT" url="https://github.com/facudaddese/agenda-web" repo="REPO" />

                <Proyecto img={imgJava} alt="Logo Java" title="Sistema de Gestión de Torneos de Fútbol" descripcion="Este trabajo práctico desarrollado en Java en la Universidad Nacional de Lanús, permite administrar
                                torneos,
                                equipos y jugadores, generar tablas de posiciones y estadísticas, aplicando
                                principios
                                de
                                POO." skill1="JAVA" url="https://github.com/facudaddese/torneo-de-futbol" repo="REPO" />

                <Proyecto img={imgLocademia} alt="Imagen proyecto Locademia" title="Clon de Locademia" descripcion="Clon de la tienda oficial de Racing Club de Avellaneda, desarrollado como un
                                e-commerce interactivo donde los usuarios pueden explorar productos, ver detalles y
                                navegar
                                por las diferentes categorías del sitio. El proyecto replica la experiencia visual y
                                funcional de la tienda original de Racing Club." skill1="HTML" skill2="CSS" skill3="JAVASCRIPT" url="https://github.com/facudaddese/clon-locademia" repo="REPO" />

                <Proyecto img={imgApiDbz} alt="Imagen proyecto Dragon Ball - API" title="Dragon Ball - API" descripcion="Sitio web que consume la API de Dragon Ball permitiendo a los
                                usuarios
                                seleccionar un personaje mediante botones y visualizar instantáneamente su información
                                completa junto a todas sus transformaciones." skill1="HTML" skill2="CSS" skill3="JAVASCRIPT" url="https://github.com/facudaddese/api-dragon-ball" repo="REPO" />

                <Proyecto img={imgApiClima} alt="Imagen proyecto Weather - API" title="Weather - API" descripcion="Aplicación que permite consultar el clima actual de cualquier
                                ciudad o país del mundo en tiempo real. Consume la API de OpenWeather para mostrar
                                temperatura, sensación térmica, velocidad del viento y ráfagas. Interfaz responsive con
                                diseño dinámico que se
                                adapta según la búsqueda realizada." skill1="HTML" skill2="CSS" skill3="JAVASCRIPT" url="https://github.com/facudaddese/api-clima" repo="REPO" />
            </div>
        </section>
    )
}

export default ProyectosContainer