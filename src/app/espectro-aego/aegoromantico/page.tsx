import InfoLayout from '@/components/Layouts/InfoLayout'
import Style from '@/components/Layouts/Layout.module.css'
import Image from 'next/image'
export default function AegoRom() {
  return (
    <InfoLayout className={Style.bgAegoromantico}>

      <Image 
        src="/images/Aego/AegoromanticoBandeira.png" 
        alt="Bandeira AegoRomantico" 
        width={600} 
        height={300} 
        />
      <h1 className={Style.titulo}>AegoRomantico</h1>
      <p className={Style.descricao}>
        Caracteristicas:
      </p>
      <p className={Style.descricao}>
        Pessoas aegorromânticas são aquelas que não sentem atração romântica direta ou não desejam envolvimento romântico próprio, mas podem se interessar por temas românticos de forma dissociada.
        Isso significa que uma pessoa aegorromântica pode gostar de filmes românticos, histórias de amor ou até imaginar situações românticas, mas sem querer vivenciar isso na vida real ou sem se sentir envolvida emocionalmente com esses sentimentos.
        Mas uma pessoa aegorromântica pode se envolver de maneira mais intima com outra pessoa contanto que o vinculo não tenha romance individual envolvido ou esperado.
      </p>
      <ul className={Style.lista}>
        <li>Vivenciam o romance de forma dissociada</li>
        <li>Podem se envolver intimamente</li>
        <li>Sentimentos românticos que os envolvem podem ser desconfortáveis</li>
      </ul>
    </InfoLayout>
  )
}
