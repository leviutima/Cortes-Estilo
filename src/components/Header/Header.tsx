import style from '../Header/Header.module.css'
import logo from '../../assets/unnamed-removebg-preview.png'
import { IoLogoInstagram } from "react-icons/io5";

const Header = () => {
    return(
        <>
            <header className={style.headerStyle}>
                <nav className={style.container}>
                    <div>
                        <img className={style.imgMain} src={logo}/>
                    </div>
                    <ul className={style.listContainer}>
                        <li>SERVIÇOS</li>
                        <li>QUEM SOMOS</li>
                        <li>CONTATO</li>
                    </ul>
                    <div className={style.containerRedeSocial}>
                        <IoLogoInstagram color='white' size={28}/>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header 