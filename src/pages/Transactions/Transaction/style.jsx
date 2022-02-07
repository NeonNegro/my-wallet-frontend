import styled from "styled-components";

function getColor(type){
    if(type === 'cashIn')
        return '#03AC00'
    if(type === 'cashOut')
        return '#C70000'
}


const Container = styled.div`
    padding: 10px 0;
    width: 100%;
    display:flex;
    justify-content: space-between;

    :first-of-type{
        padding-top: 20px;
    }
    :last-of-type{
        padding-bottom: 20px;
    }
`

const Value = styled.span`
    margin-left: auto;
    padding-left: 5px;
    margin-right: 10px;
    color: ${({type}) => getColor(type)};
    max-width: 50%;
`
const Date = styled.span`
    margin-left: 12px;
    margin-right: 10px;
    color: #C6C6C6;
`
const Descript = styled.span`
    max-width: 70%;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-grow: 1;
`;

const Delete = styled.button`
    margin-right: 3px;
    color: #C6C6C6;
    border: none;
    background-color: white;
    cursor: pointer;
`

export {
    Container,
    Value,
    Date,
    Descript,
    Delete,
}