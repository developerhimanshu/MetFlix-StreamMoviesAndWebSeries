import styled from 'styled-components'

export const Inner = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-family:sans-serif;
    flex-direction:${({ direction }) => direction}
    height:auto;

@media (max-width: 1000px){
        flex-direction:column;
    }
`;

const TextInner = styled.div`
    width:50%;
    height:auto;
    display:flex;
    flex-direction:column;
    
    @media (max-width:1000px){
        width:100%;
        padding: 0 45px;
        text-align:center;
    }

`
const Item = styled.div`
    display:flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    margin:0px;
    color: white;
    overflow: hidden;
`;

const Container = styled.section`
    background-color:black;
   

    @media (max-width: 1000px){
        ${Item}:last-of-type h2{
            margin-bottom:50px;
        }
    }

`;

//title
export const Title = styled.h1`
font-size:50px;
line-height:1.1;
margin-bottom:8px;
height:auto;
text-align:center;

@media  (max-width:600px){
    font-size:35px;
}
`;

//subtitle
export const SubTitle = styled.h2`
    font-size: 26px;
    font-width: normal;
    line-height:normal;
    text-align:center;
    @media  (max-width:600px){
        font-size:16px;
    }
`;

//image
export const Image = styled.img`
    max-width:100%;
    height:auto;
`;

export { Item, Container, TextInner };