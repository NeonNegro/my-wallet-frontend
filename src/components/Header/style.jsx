import styled from "styled-components";


const margin = "25px";

const Container = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: ${({hasButton})=> hasButton ? 'space-between' : 'flex-start'};
    align-items: center;
`

const Title = styled.h1`
    font-size: 26px;
    font-weight: bold;
    color: white;
    margin: ${margin};
`
const Img = styled.img`
    margin: ${margin};
    cursor: pointer;
`

export {
    Container,
    Title,
    Img,
}