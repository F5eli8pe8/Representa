import InfoLayout from '@/components/Layouts/InfoLayout'
import Style from '@/components/Layouts/Layout.module.css'
import Image from 'next/image'

export default function Assexuais() {
  return (
    <InfoLayout className={Style.bgAssexual}>

      <Image 
        src="/images/Ace/AssexualBandeira.png" 
        alt="Bandeira Assexual" 
        width={600} 
        height={300} 
        />
      <h1 className={Style.titulo}>Assexualidade</h1>
      <p className={Style.descricao}>
Pessoas assexuais são aquelas que sentem pouca ou nenhuma atração sexual por outras pessoas. 
Isso não significa necessariamente que elas não tenham relacionamentos ou que rejeitem a intimidade, 
muitas pessoas assexuais podem querer se relacionar romanticamente ou intimamente com alguém.
Ou seja, assexuais podem manter relacionamentos amorosos completamente normais, mas apenas que priorizam outros pontos de um relacionamento, sem necessitar de ações íntimas para demonstrar amor e afeto.
      </p>
      <p className={Style.descricao}>
        Caracteristicas:
      </p>
      <ul className={Style.lista}>
        <li>Baixa frequência de atração sexual.</li>
        <li>Priorizar vínculos emocionais.</li>
        <li>Podem ter desejo afetivo ou romântico.</li>
        
      </ul>
    </InfoLayout>
  )
}
