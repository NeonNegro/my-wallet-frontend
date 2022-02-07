import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 446px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 13px;
    display: flex;
    flex-direction: column;
    align-items: ${({hasList}) => !hasList && 'center' };
    justify-content: ${({hasList}) => !hasList ? 'center' : 'flex-start' };
`

function List({ hasList, children}){

    return (
    <Container hasList={hasList}>
            {children}
    </Container>
    )
}

export default List;