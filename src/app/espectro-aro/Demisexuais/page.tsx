import InfoLayout from '@/components/Layouts/InfoLayout'
import Style from '@/components/Layouts/Layout.module.css'
import Image from 'next/image'

export default function Demissexuais() {
  return (
    <InfoLayout className={Style.bgDemissexual}>

      <Image 
        src="/images/Ace/DemisexualBandeira.png" 
        alt="Bandeira Assexual" 
        width={600} 
        height={300} 
        />
      <h1 className={Style.titulo}>Demisexualidade</h1>
      <p className={Style.descricao}>
        Pessoas demissexuais são aquelas que só sentem atração sexual depois de formar um forte vínculo emocional com alguém. 
        Isso significa que, diferentemente da maioria das pessoas, elas não sentem atração sexual imediata ou baseada apenas em 
        aparência.
        Então para uma pessoa demissexual apenas aparencia ou um contato breve não é o suficiente para que se tenha uma atração sexual,
        essa atração é construída a partir do fortalecimento de um vínculo emocional.       
      </p>
      <p className={Style.descricao}>
        Caracteristicas:
      </p>
      <ul className={Style.lista}>
        <li>Atração sexual só após vínculo emocional.</li>
        <li>Diferenciam entre atração estética e sexual.</li>
        <li>A demisexualidade serve como forma de atração. Atração por gêneros específicos difere, pois ainda é pessoal e único.</li>
      </ul>
    </InfoLayout>
  )
}
