import InfoLayout from '@/components/Layouts/InfoLayout'
import Style from '@/components/Layouts/Layout.module.css'
import Image from 'next/image'

export default function Fraysexual() {
  return (
    <InfoLayout className={Style.bgFraysexual}>

      <Image 
        src="/images/Aego/FraysexualBandeira.jpg" 
        alt="Bandeira Fraysexual" 
        width={600} 
        height={300} 
        />
      <h1 className={Style.titulo}>Fraysexual</h1>
      <p className={Style.descricao}>
        Pessoas fraysexuais são aquelas que sentem atração sexual apenas por pessoas com quem ainda não possuem um vínculo emocional profundo. Ou seja, o interesse sexual tende a desaparecer à medida que a conexão afetiva ou emocional se aprofunda.
Então pessoas Fraysexuais tendem a sentir atração por colegas com relação superficial ou pessoas conhecidas recentemente, mas a atração tende a desaparecer ou enfraquecer com o fortalecimento do vinculo.
      </p>
      <p className={Style.descricao}>
        Caracteristicas:
      </p>
      <ul className={Style.lista}>
        <li>Atração Inicial Diminui com o Conhecimento.</li>
        <li>Fazer parte do espectro ace.</li>
        <li>Dificuldade em Manter Relações intimas e romanticas a longo prazo.</li>
      </ul>
    </InfoLayout>
  )
}
