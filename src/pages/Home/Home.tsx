import Header from '../../components/Header/Header';
import style from '../Home/Home.module.css';
import imgAbout from '../../assets/young-man-barber-s-shop-getting-his-beard-trimmed.jpg';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import { submitForm, FormData } from '../../Services/formService';

const Home = () => {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const formData: FormData = {
            nome: (event.currentTarget.elements.namedItem('nome') as HTMLInputElement).value,
            telefone: (event.currentTarget.elements.namedItem('telefone') as HTMLInputElement).value,
            email: (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
            mensagem: (event.currentTarget.elements.namedItem('mensagem') as HTMLTextAreaElement).value,
        };

        try {
            await submitForm(formData);
            alert('Dados enviados com sucesso');
        } catch (error) {
            alert('Erro ao enviar dados, tente novamente');
        }
    };

    return (
        <>
            <Header />
            <section id="Main" className={style.containerSectionMain}>
                <div className={style.backgroundImage}></div>
                <div className={style.containerTitle}>
                    <h1>CORTE & ESTILO</h1>
                </div>
            </section>

            <section id='About' className={style.containerSectionSecond}>
                <div className={style.containerAbout}>
                    <div>
                        <img src={imgAbout} className={style.aboutImg} alt="Sobre nós"></img>
                    </div>
                    <div className={style.paddingText}>
                        <h2>QUEM SOMOS?</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the 
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the 
                            leap into electronic typesetting, remaining 
                            essentially unchanged. It was popularised in the 
                            1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more 
                            recently with desktop publishing software like 
                            Aldus PageMaker including versions of Lorem 
                            Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and 
                                scrambled it to make a type specimen book. It has 
                                survived not only five centuries, but also the leap 
                                into electronic typesetting, remaining essentially 
                                unchanged. It was popularised in the 1960s with the 
                                release of Letraset sheets containing Lorem Ipsum 
                                passages, and more recently with desktop publishing 
                                software like Aldus PageMaker including versions of 
                                Lorem Ipsum.</p>
                    </div>
                </div>
            </section>

            <section id='Services' className={style.containerService}>
                <div>
                    <h2>NOSSOS SERVIÇOS</h2>
                </div>
                <div className={style.subContainerService}>
                    <div className={style.service}>
                        <span>Corte de cabelo</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 25</span>
                        <span>______</span>
                    </div>
                </div>
                <div className={style.subContainerService}>
                    <div className={style.service}>
                        <span>Cabelo + barba</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 35</span>
                        <span>______</span>
                    </div>
                </div>
                <div className={style.subContainerService}>
                    <div className={style.service}>
                        <span>Barba</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 15</span>
                        <span>______</span>
                    </div>
                </div>
                <div className={style.subContainerService}>
                    <div className={style.service}>
                        <span>Barba + sombrancelha</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 30</span>
                        <span>______</span>
                    </div>
                </div>
                <div className={style.subContainerService}>
                    <div className={style.service}>
                        <span>Sombrancelha</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 10</span>
                        <span>______</span>
                    </div>
                </div>
                <div className={style.subContainerService}>
                    <div className={style.service}>
                        <span>Cabelo + sombrancelha + barba</span>
                        <span>________________________________________________________</span>
                    </div>
                    <div className={style.precos}>
                        <span>R$ 50</span>
                        <span>______</span>
                    </div>
                </div>
            </section>

            <section id='Contact' className={style.containerSectionForm}>
                <h2>CONTATO</h2>
                <form className={style.containerForm} onSubmit={handleSubmit}>
                    <div className= {style.subContainerForm}>
                        <div className={style.containerInput}>
                            <label>Nome</label>
                            <input
                                className={style.firstInput}
                                type='text'
                                name='nome'
                                placeholder='Digite seu nome...'>
                            </input>
                        </div>
                        <div className={style.containerInput}>
                            <label>Telefone</label>
                            <input
                                className={style.firstInput}
                                type='tel'
                                name='telefone'
                                placeholder='Digite seu telefone...'>
                            </input>
                        </div>
                    </div>
                    <div className={style.containerInput}>
                        <label>Email</label>
                        <input
                            className={style.inputEmail}
                            type='email'
                            name='email'
                            placeholder='Digite seu email...'>
                        </input>
                    </div>
                    <div className={style.containerInput}>
                        <label>Mensagem</label>
                        <textarea
                            className={style.inputMensagem}
                            name='mensagem'
                            placeholder='Digite sua mensagem...'></textarea>
                    </div>
                    <Button type='submit'>ENVIAR</Button>
                </form>
            </section>

            <Footer />
        </>
    );
};

export default Home;
