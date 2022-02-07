import { Container, Value, Date, Descript, Delete } from "./style";
import dayjs from 'dayjs';

function Transaction({_id, date, description, value, type, remove}){

    date = dayjs(date).format('DD/MM');

    const formatedValue = value.toString().replace('.', ',');

    return(
        <Container>
            <Date>{date}</Date>
            <Descript>{description}</Descript>
            <Value type={type}>{formatedValue}</Value>
            <Delete onClick={()=> remove(_id)}> X </Delete>
        </Container>
    )

}


export default Transaction;