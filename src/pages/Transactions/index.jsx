import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import {List} from "../../components/List"
import AuthContext from "../../contexts/AuthContext";
import Transaction from "./Transaction";
import newIncome from "../../assets/newIncome.svg";
import newOutcome from "../../assets/newOutcome.svg";
import { Button, Buttons, Text, Img, Agregator } from "./style";

function Transactions(){
    
    const navigate = useNavigate();
    const {auth} = useContext(AuthContext);
    const transactions = [];
    transactions.push({
        _id:'oanlçkijdfbnakusdfblasdnb',
        date: Date.now(),
        name: 'cinema',
        value: '100.15',
        type: 'cashIn',
    })
    transactions.push({
        _id:'akkkajshuehuebrbrkkk',
        date: Date.now() - 8127638,
        name: 'shopping',
        value: '68.99',
        type: 'cashOut',
    })

    if(!auth){
        navigate("/");
    }

    return (
        <Container>
            <Agregator>
                <List>
                    {transactions.map(t => (
                        <Transaction
                            key = {t._id}
                            {...t}
                        />
                    ))}
                </List>
                <Buttons>
                <Button onClick={() =>{navigate('/novaEntrada')}}>
                    <Img alt="" src={newIncome}></Img>
                    <Text>Nova entrada</Text>
                </Button>
                <Button onClick={() =>{navigate('/novaSaida')}}>
                    <Img alt="" src={newOutcome}></Img>
                    <Text>Nova saída</Text>
                </Button>
                </Buttons>
            </Agregator>
        </Container>
    )
}

export default Transactions