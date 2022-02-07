import { formatedValue } from "../../Utils/utils";
import { Container, Title } from "./style";

function Balance({value}){
    const positive = (value > 0);
    value = formatedValue(value);
    return(
        <Container hasBalance={positive}>
            <Title>SALDO</Title>
            <span>{value}</span>
        </Container>
    )
}

export default Balance;