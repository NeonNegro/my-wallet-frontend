import { Container, Value, Date } from "./style";
import dayjs from 'dayjs';

function Transaction({date, name, value, type}){

    date = dayjs(date).format('DD/MM');
    console.log(type);

    return(
        <Container>
            <Date>{date}</Date>
            <span>{name}</span>
            <Value type={type}>{value}</Value>
        </Container>
    )

}


export default Transaction;