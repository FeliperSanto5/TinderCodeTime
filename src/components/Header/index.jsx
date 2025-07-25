import  imglogo_MN from "../../assets/logo-menu.png";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li className="left">
            <img src={imglogo_MN} alt="logo do menu rosa" />
            <div className="box-title">
              <div className="title frist">Tinder</div>
              <div className="title second">CodeTime</div>
            </div>
          </li>
          <li className="right revealed">
            <div className="box-buttons">   
              <button className="credt">Adiquirir Créditos</button>
              <button className="profile">Perfil</button>
              <button className="message">Mensagem</button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
