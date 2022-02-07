import { Container, Value, Date, Descript, Delete } from "./style";
import dayjs from 'dayjs';

function Transaction({key, date, description, value, type, remove}){

    date = dayjs(date).format('DD/MM');
    console.log(type);

    const formatedValue = value.toString().replace('.', ',');

    return(
        <Container>
            <Date>{date}</Date>
            <Descript>{description}</Descript>
            <Value type={type}>{formatedValue}</Value>
            <Delete onClick={()=> remove(key)}> X </Delete>
        </Container>
    )

}


export default Transaction;