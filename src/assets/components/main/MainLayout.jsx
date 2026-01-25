import SobreMi from '../sobreMi/SobreMi'
import Proyectos from '../proyectos/Proyectos'

const MainLayout = () => {
    return (
        <main>
            <SobreMi nombre="Facundo D'Addese" />
            <Proyectos titulo="Proyectos personales" />
        </main>
    )
}

export default MainLayout