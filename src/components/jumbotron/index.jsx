import React from 'react';
import {Title, SubTitle, Inner, Container, Item, Image, TextInner} from './styles/Jumbotron'
export default function Jumbotron({ children, direction = "row", ...restProps }){
    return (
        <Item {...restProps} style={{ margin:"1rem"}}>
            <Inner direction ={direction}>
                {children}
            </Inner>
        </Item>
    )
}


Jumbotron.Container = function JumbotronContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = function JumbotronImage({children, ...restProps}){
    return <Image {...restProps} />
}

Jumbotron.TextInner = function JumbotronSubTitle({children, ...restProps}){
    return <TextInner {...restProps}>{children}</TextInner>
}