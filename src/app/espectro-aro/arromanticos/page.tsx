/* eslint-disable react/no-unescaped-entities */
import InfoLayout from '@/components/Layouts/InfoLayout'
import Style from '@/components/Layouts/Layout.module.css'
import Image from 'next/image'

export default function Arromanticos() {
  return (
    <InfoLayout className={Style.bgArromantico}>
      <Image 
        src="/images/Ace/ArromanticaBandeira.png" 
        alt="Bandeira arromântica" 
        width={600} 
        height={300} 
      />
      <h1 className={Style.titulo}>Arromanticidade</h1>
      <p className={Style.descricao}>
      Pessoas arromânticas são aquelas que sentem pouca ou nenhuma atração romântica por outras pessoas.
      Isso significa que elas não experimentam o desejo de ter relacionamentos românticos da mesma forma que a maioria das pessoas.

      Mas é importante entender que uma pessoa arromântica não é incapaz de amar, essa pessoa pode amar profundamente amigos e familiares, 
      mas esses sentimentos não estão ligados ao romance. Além disso, uma pessoa arromântica pode se envolver em um relacionamento 
      íntimo com alguém, mas ainda assim sem o componente romântico.
     </p>
      <p className={Style.descricao}>
        Características:
      </p>
      <ul className={Style.lista}>
        <li>Não sente atração romântica.</li>
        <li>Separar AMOR de AMOR ROMÂNTICO.</li>
        <li>Preferir conexões platônicas.</li>
      </ul>
    </InfoLayout>
  )
}

