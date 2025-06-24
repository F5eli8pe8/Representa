
import Link from 'next/link';
import {ReactNode} from 'react';
import Style from './Layout.module.css'
import Image from 'next/image';

interface InfoLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function InfoLayout({children, className}: InfoLayoutProps){
return(
    <div className={`Style.layoutContainer  ${className || ''}`}>
        <div className={Style.backButton}>
            <Link href={"/"}>
          <Image 
            src={"/images/ImgLayout/setaEsquerda.png" }
            alt="Voltar para o início" 
            width={30} 
            height={30}
          />          
            </Link>
        </div>
        <div className={Style.contentArea}>
           
            {children}
        
        
        </div>
    </div>
)
}