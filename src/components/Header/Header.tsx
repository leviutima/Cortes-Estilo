import style from '../Header/Header.module.css'
import logo from '../../assets/unnamed-removebg-preview.png'
import { IoLogoInstagram } from "react-icons/io5";

const Header = () => {
    return(
        <>
            <header className={style.headerStyle}>
                <nav className={style.container}>
                    <div className={style.containerLogo}>
                        <img className={style.imgMain} src={logo}/>
                        <span>C&E</span>
                    </div>
                    <ul className={style.listContainer}>
                        <li>QUEM SOMOS</li>
                        <li>SERVIÇOS</li>
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