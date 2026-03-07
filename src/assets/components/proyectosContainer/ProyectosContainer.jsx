import './ProyectosContainer.css'
import Proyecto from '../proyecto/Proyecto'
import imgTrivia from '../../img/trivia.png'
import imgApiPeli from '../../img/apipelis.png'
import imgTechShop from '../../img/techShop.png'

const ProyectosContainer = ({ titulo }) => {
    return (
        <section id="proyectos" className='proyectos'>
            <h2>{titulo}</h2>
            <div className="flex-container-proyectos">
                <div data-aos="fade-down">
                    <Proyecto img={imgTechShop} alt="Imagen proyecto TechShop" title="TechShop" descripcion="E-commerce de tecnología desarrollado en React, completamente responsive. Permite a los usuarios explorar y buscar productos fácilmente, consultar el detalle de cada item con control de stock en tiempo real, y gestionar su carrito de compras de forma intuitiva." skill1="REACT" page="https://tech-shop-daddese.netlify.app/" repo="https://github.com/facudaddese/tech-shop" />
                </div>

                <div data-aos="fade-down">
                    <Proyecto img={imgApiPeli} alt="Imagen proyecto API de películas" title="The Movie Database - API" descripcion="Aplicación web que permite explorar películas y series. Los usuarios pueden filtrar contenido por género (Acción, Terror, Comedia, Aventura, Familiar) o tipo (Películas/Series) mediante botones interactivos, navegar por contenido dinámico que se actualiza según su selección, y buscar su película favorita utilizando el buscador integrado." skill1="REACT" page="https://pelis-api.netlify.app/" repo="https://github.com/facudaddese/api-peli" />
                </div>

                <div data-aos="fade-down">
                    <Proyecto img={imgTrivia} alt="Imagen proyecto Trivia Futbolera" title="Trivia Futbolera" descripcion="Quiz interactivo sobre fútbol, inspirado en el estilo de Preguntados. El usuario responde una serie de preguntas y al finalizar puede su puntaje total según las respuestas correctas." skill1="HTML" skill2="CSS" skill3="JAVASCRIPT" page="https://facudaddese.github.io/trivia/" repo="https://github.com/facudaddese/trivia" />
                </div>

                {/* <div data-aos="fade-down">

                </div> */}

                {/* <div data-aos="fade-down">

                </div> */}

                {/* <div data-aos="fade-down">

                </div> */}
                
                {/* <div data-aos="fade-down">

                </div> */}
            </div>
        </section>
    )
}

export default ProyectosContainer