import InfoLayout from '@/components/Layouts/InfoLayout'
import Style from '@/components/Layouts/Layout.module.css'
import Image from 'next/image'

export default function Polysexual() {
  return (
    <InfoLayout className={Style.bgPolysexual}>

      <Image 
        src="/images/Pluri/PolysexualBandeira.png" 
        alt="Bandeira Polysexual" 
        width={600} 
        height={300} 
        />
      <h1 className={Style.titulo}>Polisexualidade</h1>
      <p className={Style.descricao}>
        Pessoas polisexuais sentem atração por múltiplos gêneros, mas não necessariamente por todos os gêneros. 
        Isso significa que, ao contrário da pansexualidade ou bisexualidade que abrange todas as identidades de gênero, 
        a polissexualidade se refere à atração por algumas, mas não por todas as identidades de gênero.     
      
      </p>
      <p className={Style.descricao}>
        Caracteristicas:
      </p>
      <ul className={Style.lista}>
        <li>Atração por multiplos Gêneros</li>
        <li>Não sente atração por todos os gêneros</li>
        <li>Pode ter preferência por certos gêneros, mesmo sentindo atração por vários.</li>
      </ul>
    </InfoLayout>
  )
}
