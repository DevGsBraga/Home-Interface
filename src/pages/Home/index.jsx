import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import {Container,TextContent,Title,TitleColor} from './styles'
import banner from '../../assets/banner.png'
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const Navigate = useNavigate();


    const entrarLogin = () => {
        Navigate('/login');
    }



    return (
        <>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleColor>
                        Implemente <br />
                    </TitleColor>
                    o seu futuro agora!
                 </Title>
                 <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                 </TextContent>
                 <Button title="Começar agora" variant="secondary" onClick={entrarLogin}></Button>
            </div>
            <div>
               <img src={banner} alt="Banner principal" />
            </div>








        </Container>

        </>
    );
}


export { Home };
