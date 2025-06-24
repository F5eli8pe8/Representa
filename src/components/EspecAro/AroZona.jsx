
import Style from './AroZona.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function AroZona(){
    return (
    <div className={Style.conteinerCentral}>
      <div className={Style.conteinerTexto}>
        <h1 className={Style.titulo}>
          Espectro AroAce
        </h1>
        <p className={Style.texto}>
        Pessoas que experienciam pouca, nenhuma ou atração sexual e/ou romântica que se desenvolve sob condições específicas.
         Dentro do espectro aroace, há um reconhecimento profundo da individualidade de cada experiência, 
         validando diferentes jornadas em relação à atração.
        </p>

      </div>
  
      <div className={Style.conteinerBotoes}>

        <Link href="/espectro-aro/assexuais" className={Style.botao} >
          <Image src="/images/Ace/AssexualBandeira.png" alt="Ace" width={100} height={100} className={Style.imagemBandeira}/>
          <h2 className={Style.Textobotao}>Assexuais</h2>

         </Link>            

        <Link href="/espectro-aro/arromanticos" className={Style.botao} >
          <Image src="/images/Ace/ArromanticaBandeira.png" alt="Aro" width={100} height={100} className={Style.imagemBandeira}/>
          <h2 className={Style.Textobotao}>Arromânticos</h2>
        </Link>

        <Link href="/espectro-aro/Demisexuais" className={Style.botao} >
          <Image src="/images/Ace/DemisexualBandeira.png" alt="Demi" width={100} height={100} className={Style.imagemBandeira}/>
          <h2 className={Style.Textobotao}>Demisexuais</h2>
        </Link>
        
      </div>
    </div>
    )
}