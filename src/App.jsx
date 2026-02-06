import Header from "./assets/components/header/Header"
import MainLayout from "./assets/components/main/MainLayout"
import Footer from "./assets/components/footer/Footer"
import Loading from "./assets/components/loading/Loading"
import { useLoading } from "./assets/components/hooks/useLoading"
import { useAos } from "./assets/components/hooks/useAos"

function App() {
  useAos();
  const { loading } = useLoading();

  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <MainLayout />
      <Footer />
    </>
  )
}

export default App
