import React from "react";

import {Button} from '../Button';
import  logo  from '../../assets/logo-dio.png';


import {BuscarInput,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    } from './styles';



const Header = () => {
    return (
       <Wrapper>
        <Container>
            <Row>
               <img src={logo} alt="logo do site" />
                <BuscarInput>
                    <Input placeholder="Buscar" />
                </BuscarInput>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button> </Button>
            </Row>
        </Container>
       </Wrapper>
    );
}


export { Header };
