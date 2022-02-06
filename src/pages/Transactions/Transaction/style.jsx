import styled from "styled-components";

function getColor(type){
    if(type === 'cashIn')
        return '#03AC00'
    if(type === 'cashOut')
        return '#C70000'
}


const Container = styled.div`
    margin: 20px 0;
    width: 100%;
    display:flex;
    justify-content: space-between;
`

const Value = styled.span`
    margin-left: auto;
    margin-right: 10px;
    color: ${({type}) => getColor(type)};
`
const Date = styled.span`
    margin-left: 12px;
    margin-right: 10px;
    color: #C6C6C6;
`

export {
    Container,
    Value,
    Date,
}