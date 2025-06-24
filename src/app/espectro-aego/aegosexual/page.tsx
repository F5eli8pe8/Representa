import InfoLayout from '@/components/Layouts/InfoLayout'
import Style from '@/components/Layouts/Layout.module.css'
import Image from 'next/image'

export default function Aegosexual() {
  return (
    <InfoLayout className={Style.bgAegosexual}>

      <Image 
        src="/images/Aego/AegosexualBandeira.png" 
        alt="Bandeira Aegosexual" 
        width={600} 
        height={300} 
        />
      <h1 className={Style.titulo}>Aegosexual</h1>
      <p className={Style.descricao}>
        Caracteristicas:
      </p>
      <p className={Style.descricao}>
        Pessoas aegossexuais são aquelas que não sentem atração sexual direta ou pessoal, mas ainda podem ter interesse em conteúdos
        sexuais, fantasias e etc, sem o desejo de participar ou se envolver intimamente. Elas podem se sentir desconectadas da 
        experiência sexual real, mesmo que o tema desperte curiosidade ou excitação em contextos distantes ou imaginários.
        Mas pessoas Aegossexuais ainda podem se relacionar romanticamente com outras pessoas, manifestando seu amor da sua propria 
        maneira.

      </p>
      <ul className={Style.lista}>
        <li>Interesse em temas sexuais sem desejo de envolvimento.</li>
        <li>Podem se envolver romanticamente</li>
        <li>Vivenciam a sexualidade de forma dissociada ou desconectada.</li>
      </ul>
    </InfoLayout>
  )
}
