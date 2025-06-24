import InfoLayout from '@/components/Layouts/InfoLayout'
import Style from '@/components/Layouts/Layout.module.css'
import Image from 'next/image'

export default function Omini() {
  return (
    <InfoLayout className={Style.bgOminisexual}>

      <Image 
        src="/images/Pluri/OminiBandeira.png" 
        alt="Bandeira Pansexual" 
        width={600} 
        height={300} 
        />
      <h1 className={Style.titulo}>Omnisexuais</h1>
      <p className={Style.descricao}>
        Pessoas omnisexuais sentem atração por múltiplos ou todos os gêneros, mas diferentemente da pansexualidade, a omnissexualidade reconhece e pode levar em conta o gênero da pessoa por quem há atração.
        Isso significa que o gênero importa de alguma forma na experiência da atração, mesmo que não limite o desejo ou afeto da pessoa.
        Ou seja pessoas Omnisexuais podem ser atraídas por homens, mulheres, pessoas não-binárias e outras identidades de gênero, mas a pessoa pode acabar sendo atraída de maneira diferente por cada gênero.
      </p>
      <p className={Style.descricao}>
        Caracteristicas:
      </p>
      <ul className={Style.lista}>
        <li>Sentem atração por múltiplos ou todos os gêneros</li>
        <li>O gênero influencia como a atração é vivida</li>
        <li>Atração pode variar de intensidade entre diferentes identidades de gênero</li>
      </ul>
    </InfoLayout>
  )
}
