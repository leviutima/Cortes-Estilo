import style from '../Header/Header.module.css'
import logo from '../../assets/unnamed-removebg-preview.png'
import { IoLogoInstagram } from "react-icons/io5";

const Header = () => {
    return(
        <>
            <header className={style.headerStyle}>
                <nav className={style.container}>
                    <div className={style.containerLogo}>
                        <a className={style.ancoraStyle} href='#Main'>
                            <img className={style.imgMain} src={logo}/>
                        </a>
                        <span>C&E</span>  
                    </div>
                    <ul className={style.listContainer}>
                        <a href='#About' className={style.ancoraStyle}>
                            <li>QUEM SOMOS</li>
                        </a>
                        <a href='#Services' className={style.ancoraStyle}>
                            <li>SERVIÇOS</li>
                        </a>
                        <a href='#Contact' className={style.ancoraStyle}>
                            <li>CONTATO</li>
                        </a>
                    </ul>
                    <div className={style.containerRedeSocial}>
                        <a href='https://www.instagram.com/levi.utima/'>
                            <IoLogoInstagram color='white' size={28} />
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header 