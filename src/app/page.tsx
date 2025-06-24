import AroZona from "@/components/EspecAro/AroZona"
import PluriZona from "@/components/EspecPluri/PluriZona"
import AegoZona from "@/components/EspecAego/AegoZona"
import Header from "@/components/Header/Header"

export default function Home (){
return(
  <div>
    <Header />
    <AroZona />
    <PluriZona />	
    <AegoZona />
  </div>
)  
}