import styled from "styled-components";

const Button = styled.div`
    width:100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    background-color: #A328D6;
    border-radius: 5px;
`
const Buttons = styled.div`
    width:100%;
    height: 114px;
    display:flex;
    gap: 15px;
    justify-content: center;
    align-items: center;

`
const Text = styled.p`
    font-weight: bold;
    font-size: 17px;
    width:64px;
    color: white;
    margin: 10px;
`
const Img = styled.img`
    width: 22px;
    margin: 10px;
`
const Agregator = styled.div`
    width: 90%;
    min-width: 326px;
    min-height: 446px;
    max-width:800px;
`


export {
    Button,
    Buttons,
    Text,
    Img,
    Agregator,
}