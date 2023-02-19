import React from 'react';
import JumboData from '../fixtures/jumbo.json'
import {Jumbotron} from '../components';


export function JumbotronContainer(){
    return(      
        <Jumbotron.Container  >
            {JumboData.map((item)=>(
                <Jumbotron key = {item.id}>
                    <Jumbotron.TextInner>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.TextInner>
                    <Jumbotron.Image src={item.image} alt = {item.alt} />
                 </ Jumbotron>   
            )) }
           
        </Jumbotron.Container>
    )
}
