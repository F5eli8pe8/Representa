import InfoLayout from '@/components/Layouts/InfoLayout'
import Style from '@/components/Layouts/Layout.module.css'
import Image from 'next/image'

export default function Pansexual() {
  return (
    <InfoLayout className={Style.bgPansexual}>

      <Image 
        src="/images/Pluri/PansexualBandeira.png" 
        alt="Bandeira Pansexual" 
        width={600} 
        height={300} 
        />
      <h1 className={Style.titulo}>Pansexualidade</h1>
      <p className={Style.descricao}>
        Pessoas pansexuais são aquelas que sentem atração por outras pessoas independentemente de seu gênero ou identidade de gênero.
        Isso significa que o gênero não é um fator determinante na hora de desenvolver uma conexão romântica ou sexual.
        Embora bissexualidade e pansexualidade sejam de certa forma iguais ambos possuem um contexto histórico diferente,
        a pansexualidade é frequentemente definida por uma abertura à atração por todas 
        as identidades de gênero, incluindo pessoas não-binárias, agênero e de outras expressões de gênero.  
        </p>
      <p className={Style.descricao}>
        Caracteristicas:
      </p>
      <ul className={Style.lista}>
        <li>Atração independente de gênero.</li>
        <li>Foco na pessoa, não no gênero.</li>
        <li>Inclusão de Todas as Identidades.</li>
      </ul>
    </InfoLayout>
  )
}
