import Header from '../../components/Header/Header';
import style from '../Home/Home.module.css'
import imgAbout from '../../assets/young-man-barber-s-shop-getting-his-beard-trimmed.jpg'

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
            <section id='About' className={style.containerSectionSecond}>
                <div className={style.containerAbout}>
                    <div>
                        <img src={imgAbout} className={style.aboutImg}></img>
                    </div>
                    <div className={style.paddingText}>
                        <h2>QUEM SOMOS?</h2>  
                        <p>Lorem Ipsum is simply dummy text 
                            of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived 
                            not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially 
                            unchanged. It was popularised in the 1960s with 
                            the release of Letraset sheets containing Lorem 
                            Ipsum passages, and more recently with desktop 
                            publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the 
                            industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and 
                             scrambled it to make a type specimen book. It has 
                             survived not only five centuries, but also the leap 
                             into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of 
                             Letraset sheets containing Lorem Ipsum passages, and more 
                             recently with desktop publishing software like Aldus PageMaker 
                             including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </section>
            <section id='Services' className={style.containerService}>
                <div>
                    <h2>NOSSOS SERVIÇOS</h2>
                </div>
                <div className= {style.subContainerService}>
                    <div className={style.service}>
                        <span>Corte de cabelo</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 25</span>
                    </div>
                </div>
                <div className= {style.subContainerService}>
                    <div className={style.service}>
                        <span>Cabelo + barba</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 35</span>
                    </div>
                </div>
                <div className= {style.subContainerService}>
                    <div className={style.service}>
                        <span>Barba</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 15</span>
                    </div>   
                </div>
                <div className= {style.subContainerService}>
                    <div className={style.service}>
                        <span>Barba + sombrancelha</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 30</span>
                    </div>
                </div>
                <div className= {style.subContainerService}>
                    <div className={style.service}>
                        <span>Sombrancelha</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 10</span>
                    </div>
                </div>
                <div className= {style.subContainerService}>
                    <div className={style.service}>
                        <span>Cabelo + sombrancelha + barba</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 50</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
