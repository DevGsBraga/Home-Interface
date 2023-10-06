import React from 'react'
import {CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserPicture,Userinfo} from './style';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <Userinfo>
                <UserPicture />
                <div>
                    <h4>Gabriel Braga</h4>
                    <p>Há 7 minutos</p>
                </div>
            </Userinfo>
            <PostInfo>
                <h4>Projeto React</h4>
                <p>Projeto desenvolvido em ReactJs</p>
            </PostInfo>
            <HasInfo>
                <h4>#React #JavaScript #DeveloperWeb</h4>
            </HasInfo>
        </Content>








    </CardContainer>
  )
}

export { Card };
