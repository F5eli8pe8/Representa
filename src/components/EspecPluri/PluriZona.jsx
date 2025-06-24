
import Style from './PluriZona.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function AroZona(){
    return (
    <div className={Style.conteinerCentral}>
      <div className={Style.conteinerTexto}>
        <h1 className={Style.titulo}>
          Espectro Plurisexual
        </h1>
        <p className={Style.texto}>
         Pessoas que sentem atração por mais de um gênero, mas não necessariamente por todos, nem da mesma forma.
         O espectro plurissexual abrange uma vasta gama de identidades que demonstram a fluidez e a variedade das conexões afetivas e sexuais.
        </p>

      </div>
  
      <div className={Style.conteinerBotoes}>

        <Link href="/espectro-pluri/pansexuais" className={Style.botao} >
          <Image src="/images/Pluri/PansexualBandeira.png" alt="Pan" width={100} height={100} className={Style.imagemBandeira}/>
          <h2 className={Style.Textobotao}>Pansexual</h2>

         </Link>           
         
        <Link href="/espectro-pluri/polysexuais" className={Style.botao} >
          <Image src="/images/Pluri/PolysexualBandeira.png" alt="Poly" width={100} height={100} className={Style.imagemBandeira}/>
          <h2 className={Style.Textobotao}>Polysexual</h2>

         </Link>        

        <Link href="/espectro-pluri/Ominisexuais" className={Style.botao} >
          <Image src="/images/Pluri/OminiBandeira.png" alt="Omini" width={100} height={100} className={Style.imagemBandeira}/>
          <h2 className={Style.Textobotao}>Ominisexual</h2>

         </Link>        


        
      </div>
    </div>
    )
}