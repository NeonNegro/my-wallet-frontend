import styled from "styled-components";

const Container = styled.div`
    margin-top: auto;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    *:not([class]){
        color: ${({hasBalance}) => hasBalance ? '#03AC00' : 'red'};
        margin-right: 10px;
    }
`

const Title = styled.span`
    margin-left: 12px;
    font-size: 17px;
    font-weight: bold;
`

export {
    Container,
    Title,
}