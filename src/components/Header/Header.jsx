import Style from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={Style.conteinerPrincipal}>
      <div className={Style.logoArea}>
        <Link href="/" className={Style.logo}>
          <span className={Style.letraR}>R</span>
          <span className={Style.letraE}>e</span>
          <span className={Style.letraP}>p</span>
          <span className={Style.letraR2}>r</span>
          <span className={Style.letraE2}>e</span>
          <span className={Style.letraS}>s</span>
          <span className={Style.letraE3}>e</span>
          <span className={Style.letraN}>n</span>
          <span className={Style.letraT}>t</span>
          <span className={Style.letraA}>a</span>
        </Link>
        <span className={Style.tagline}>visibilidade para quem sempre existiu</span>
      </div>

      <nav className={Style.nav}>
        <Link href="/#espectro-aro" className={Style.navLink}>
          Espectro AroAce
        </Link>
        <Link href="/#espectro-pluri" className={Style.navLink}>
          Espectro Plurissexual
        </Link>
      </nav>
    </header>
  );
}