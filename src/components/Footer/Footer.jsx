import Style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={Style.conteinerPrincipal}>
      <div className={Style.linha}>
        <span className={Style.projeto}>Representa</span>
        <span className={Style.separador}>·</span>
        <span className={Style.descricao}>Visualidade das Sexualidades LGBT+</span>
      </div>

      <div className={Style.linha}>
        <span className={Style.credito}>
          Projeto desenvolvido por: <strong>Valdenilson Felipe Souza Silva</strong>
        </span>
      </div>

      <div className={Style.linha}>
        <span className={Style.credito}>
          RU: <strong>4963097</strong> &nbsp;|&nbsp; Centro Universitário Internacional <strong>UNINTER</strong>
        </span>
      </div>

      <div className={Style.arcoIris} aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
    </footer>
  );
}