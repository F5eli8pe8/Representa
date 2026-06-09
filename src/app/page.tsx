import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import AroZona from "@/components/EspecAro/AroZona"
import PluriZona from "@/components/EspecPluri/PluriZona"

export default function Home() {
  return (
    <>
      <Header />
      <AroZona />
      <PluriZona />
      <Footer />
    </>
  )
}