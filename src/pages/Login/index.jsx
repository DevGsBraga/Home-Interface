
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import {Column, Container, CriarText, EsqueciText, Row, SubTitle,Title,TitleLogin,Wrapper} from './styles';
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {api} from '../../services/api'


const schema = yup
  .object({
    email: yup.string().email('Email inválido').required(),
    password: yup.string().min(7, 'Senha deve conter 7 caracters').required(),
  })
  .required()

const Login = () => {

    const navigate = useNavigate();

    const {control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            console.log(data);

            if(data.email === 1 ) {
                navigate('/feed');
            } else {
                alert('Email ou senha não econtrado!')
            }
        }catch {
            alert('Error usuário ou senha não encontrado')
        }
    };





    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                 </Title>
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro!</TitleLogin>
                <SubTitle>Faça seu login e make the change._</SubTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" control={control} placeholder='Email' />
                    <Input name="password" control={control} placeholder='Senha' type='password' />
                    <Button title="Entrar" variant="secondary" type='submit' onClick={onSubmit}  />
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha </EsqueciText>
                    <CriarText>Criar conta</CriarText>
                </Row>
            </Wrapper>
            </Column>
        </Container>

        </>
    );
}


export { Login };
