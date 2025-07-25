import imglogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Information() {
  return (
    <section id="Information">
      <div className="top">
        <img src={imglogo} alt="logo do site" />
        <Link to="#">
          <button className="revealed">Entrar</button>
        </Link>
      </div>
      <div className="center">
        <div className="box-title">
          <div className="title frist">Tinder</div>
          <div className="title second">CodeTime</div>
        </div>
        <div className="description">Não basta code, tem que se apaixonar</div>
        <Link to="/register">
          <button className="from">Cadastre-se</button>
        </Link>
        <Link to="#">
          <button className="ent hidden">Entrar</button>
        </Link>
      </div>
    </section>
  );
}
