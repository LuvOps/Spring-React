import './styles.css'
import logo from '../../assets/img/logo.svg'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta logo"/>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.instagram.com/alienniilista/">@alienliilista.ig</a>
                    </p>
            </div>
        </header>
    )
}

export default Header