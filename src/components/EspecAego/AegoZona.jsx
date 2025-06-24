
import Style from './AegoZona.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function AroZona(){
    return (
    <div className={Style.conteinerCentral}>
      <div className={Style.conteinerTexto}>
        <h1 className={Style.titulo}>
          Espectro Atração Divergente
        </h1>
        <p className={Style.texto}>
          Pessoas que vivenciam a sexualidade ou o romance de maneiras não convencionais — como através de dissociação entre atração 
          e desejo de envolvimento, ou por meio de atração que muda com o tempo. Estes espectros 
          mostram formas únicas de sentir e se relacionar, que nem sempre seguem os padrões esperados de conexão romântica ou sexual.
        </p>

      </div>
  
      <div className={Style.conteinerBotoes}>

        <Link href="/espectro-aego/aegosexual" className={Style.botao} >
          <Image src="/images/Aego/AegosexualBandeira.png" alt="Aego" width={100} height={100} className={Style.imagemBandeira}/>
          <h2 className={Style.Textobotao}>Aegosexual</h2>

         </Link>           
         
        <Link href="/espectro-aego/aegoromantico" className={Style.botao} >
          <Image src="/images/Aego/AegoromanticoBandeira.png" alt="AegoRom" width={100} height={100} className={Style.imagemBandeira}/>
          <h2 className={Style.Textobotao}>Aegoromantico</h2>

         </Link>        

        <Link href="/espectro-aego/fraysexual" className={Style.botao} >
          <Image src="/images/Aego/FraysexualBandeira.jpg" alt="Fray" width={100} height={100} className={Style.imagemBandeira}/>
          <h2 className={Style.Textobotao}>Fraysexuais</h2>

         </Link>        


        
      </div>
    </div>
    )
}