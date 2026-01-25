import './Proyectos.css'
import imgCr7 from '../../img/cr7.png'
import imgTrivia from '../../img/trivia.png'
import imgPrimerCarrito from '../../img/primerCarrito.png'
import imgToDoList from '../../img/toDoList.png'
import imgBuscadorPasajes from '../../img/buscadorDePasajes.png'
import imgGestionTurnos from '../../img/gestionDeTurnos.png'
import imgAgendaWeb from '../../img/agendaWeb.png'
import imgJava from '../../img/java.jpg'
import imgLocademia from '../../img/locademia.png'
import imgApiDbz from '../../img/apidbz.png'
import imgApiClima from '../../img/apiclima.png'

const Proyectos = ({ titulo }) => {
    return (
        <section id="proyectos" className='proyectos'>
            <h2>{titulo}</h2>
            <div className="flex-container-proyectos">
                <div data-aos="fade-down">
                    <div className="grid-container__div">
                        <img src={imgCr7} alt="Imagen proyecto CR7" />
                        <div className="grid-container__info">
                            <h3 className="title-proyecto">Cristiano Ronaldo</h3>
                            <p className="grid-container__p">Primer sitio web responsive que incluye cinco páginas HTML
                                completamente maquetadas. El mismo, se dedica a contar la vida de Cristiano Ronaldo:
                                carrera
                                deportiva, títulos obtenidos y récords.</p>
                            <div className="span">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>SASS</span>
                                <span>BOOTSTRAP</span>
                                <a href="https://github.com/facudaddese/proyecto-cr7-39385" target="_blank"
                                    rel="noopener noreferrer">
                                    <span>REPO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down">
                    <div className="grid-container__div">
                        <img src={imgTrivia} alt="Imagen proyecto Trivia Futbolera" />

                        <div className="grid-container__info">
                            <h3 className="title-proyecto">Trivia Futbolera</h3>
                            <p className="grid-container__p">Mi primer juego. Un quiz interactivo sobre fútbol, inspirado
                                en el
                                estilo de Preguntados. El usuario responde una serie de preguntas y al finalizar
                                puede
                                ver
                                su puntaje total según las respuestas correctas.</p>
                            <div className="span">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JAVASCRIPT</span>
                                <a href="https://github.com/facudaddese/trivia" target="_blank"
                                    rel="noopener noreferrer">
                                    <span>REPO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down">
                    <div className="grid-container__div">
                        <img src={imgPrimerCarrito} alt="Imagen proyecto Primer Carrito" />

                        <div className="grid-container__info">
                            <h3 className="title-proyecto">Carrito de compras</h3>
                            <p className="grid-container__p">Primer carrito de compras básico que permite agregar productos,
                                visualizar
                                los ítems en una tabla dinámica, calcular el total según la cantidad y eliminar los
                                productos seleccionados.</p>
                            <div className="span">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JAVASCRIPT</span>
                                <a href="https://github.com/facudaddese/proyecto-primer-carrito" target="_blank"
                                    rel="noopener noreferrer">
                                    <span>REPO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down">
                    <div className="grid-container__div">
                        <img src={imgToDoList} alt="Imagen proyecto TO-DO-LIST" />

                        <div className="grid-container__info">
                            <h3 className="title-proyecto">TO-DO-LIST</h3>
                            <p className="grid-container__p">Sitio web interactivo que permite al usuario gestionar sus
                                tareas
                                de manera dinámica: agregar, modificar y eliminar.</p>
                            <div className="span">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JAVASCRIPT</span>
                                <a href="https://github.com/facudaddese/proyecto-to-do-list" target="_blank"
                                    rel="noopener noreferrer">
                                    <span>REPO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down">
                    <div className="grid-container__div">
                        <img src={imgBuscadorPasajes}
                            alt="Imagen proyecto Agencia de Turismo" />

                        <div className="grid-container__info">
                            <h3 className="title-proyecto">Buscador de Pasajes</h3>
                            <p className="grid-container__p">Permite al usuario ingresar origen y destino
                                (validando que no sean iguales), seleccionar fechas de ida y vuelta (asegurando que
                                la
                                fecha
                                de regreso no sea anterior a la de salida) y calcular el total según la cantidad de
                                pasajeros.</p>
                            <div className="span">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JAVASCRIPT</span>
                                <a href="https://github.com/facudaddese/proyecto-agenciaDeViajes" target="_blank"
                                    rel="noopener noreferrer">
                                    <span>REPO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down">
                    <div className="grid-container__div">
                        <img src={imgGestionTurnos}
                            alt="Imagen proyecto Gestión de turnos" />

                        <div className="grid-container__info">
                            <h3 className="title-proyecto">Gestión de Turnos</h3>
                            <p className="grid-container__p">Sitio desarrollado como SPA, donde los usuarios pueden
                                registrarse
                                e iniciar sesión para agendar turnos en cualquier especialidad. Permite elegir
                                fecha,
                                hora y
                                el médico deseado, y gestionar sus turnos de manera interactiva y dinámica.</p>
                            <div className="span">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JAVASCRIPT</span>
                                <a href="https://github.com/facudaddese/gestion-de-turnos" target="_blank"
                                    rel="noopener noreferrer">
                                    <span>REPO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down">
                    <div className="grid-container__div">
                        <img src={imgAgendaWeb} alt="Imagen proyecto Agenda Web" />

                        <div className="grid-container__info">
                            <h3 className="title-proyecto">Agenda Web</h3>
                            <p className="grid-container__p">Permite a los usuarios gestionar sus contactos:
                                agregar, visualizar, editar y eliminar información de manera sencilla.</p>
                            <div className="span">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JAVASCRIPT</span>
                                <a href="https://github.com/facudaddese/agenda-web" target="_blank"
                                    rel="noopener noreferrer">
                                    <span>REPO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down">
                    <div className="grid-container__div">
                        <img src={imgJava} alt="Logo de Java" />

                        <div className="grid-container__info">
                            <h3 className="title-proyecto">Sistema de Gestión de Torneos de Fútbol
                            </h3>
                            <p className="grid-container__p">Este trabajo práctico desarrollado en Java en la Universidad Nacional de Lanús, permite administrar
                                torneos,
                                equipos y jugadores, generar tablas de posiciones y estadísticas, aplicando
                                principios
                                de
                                POO.</p>
                            <div className="span">
                                <span>JAVA</span>
                                <a href="https://github.com/facudaddese/torneo-de-futbol" target="_blank"
                                    rel="noopener noreferrer">
                                    <span>REPO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down">
                    <div className="grid-container__div">
                        <img src={imgLocademia} alt="Imagen proyecto Locademia" />

                        <div className="grid-container__info">
                            <h3 className="title-proyecto">Clon de Locademia</h3>
                            <p className="grid-container__p">Clon de la tienda oficial “Locademia”, desarrollado como un
                                e-commerce interactivo donde los usuarios pueden explorar productos, ver detalles y
                                navegar
                                por las diferentes categorías del sitio. El proyecto replica la experiencia visual y
                                funcional de la tienda original de Racing Club.</p>
                            <div className="span">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JAVASCRIPT</span>
                                <a href="https://github.com/facudaddese/clon-locademia" target="_blank"
                                    rel="noopener noreferrer">
                                    <span>REPO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down">
                    <div className="grid-container__div">
                        <img src={imgApiDbz} alt="Imagen proyecto Dragon Ball - API" />

                        <div className="grid-container__info">
                            <h3 className="title-proyecto">Dragon Ball - API</h3>
                            <p className="grid-container__p">Sitio web que consume la API de Dragon Ball permitiendo a los
                                usuarios
                                seleccionar un personaje mediante botones y visualizar instantáneamente su información
                                completa junto a todas sus transformaciones.</p>
                            <div className="span">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JAVASCRIPT</span>
                                <a href="https://github.com/facudaddese/api-dragon-ball" target="_blank"
                                    rel="noopener noreferrer">
                                    <span>REPO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down">
                    <div className="grid-container__div">
                        <img src={imgApiClima} alt="Imagen proyecto Weather - API" />

                        <div className="grid-container__info">
                            <h3 className="title-proyecto">Weather - API</h3>
                            <p className="grid-container__p">Aplicación que permite consultar el clima actual de cualquier
                                ciudad o país del mundo en tiempo real. Consume la API de OpenWeather para mostrar
                                temperatura, sensación térmica, velocidad del viento y ráfagas. Interfaz responsive con
                                diseño dinámico que se
                                adapta según la búsqueda realizada.</p>
                            <div className="span">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JAVASCRIPT</span>
                                <a href="https://github.com/facudaddese/api-clima" target="_blank"
                                    rel="noopener noreferrer">
                                    <span>REPO</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyectos