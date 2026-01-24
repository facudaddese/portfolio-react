import Header from "./assets/components/header/Header"
import MainLayout from "./assets/components/main/MainLayout"
import Footer from "./assets/components/footer/Footer"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
    })
  }, [])

  return (
    <>
      <Header />
      <MainLayout />
      <Footer />
    </>
  )
}

export default App
