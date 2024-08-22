import Header from '../../components/Header/Header';
import style from '../Home/Home.module.css'

const Home = () => {
    return (
        <>  
            <Header/>
            <section id="Main" className={style.containerSectionMain}>
                <div className={style.backgroundImage}></div>
                <div className={style.containerTitle}>
                    <h1>CORTE & ESTILO</h1>
                </div>
            </section>
            <section className={style.containerSectionSecond}>
                <h2>QUEM SOMOS?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </section>
        </>
    )
}

export default Home;
