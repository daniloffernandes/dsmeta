
import './style.css';
import logo from '../../assets/socicon_apple.svg';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-conteiner">
                <img src={logo} alt=""/>
                    <h1>DSMeta</h1>
                    <p> Desenvolvido por
                        <a href="https://www.instagram.com/danilof.fernandes/">@danilof.fernandes </a>
                    </p>
            </div>
        </header>
    )
}

export default Header