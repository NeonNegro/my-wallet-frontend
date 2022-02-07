import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import List from "../../components/List"
import AuthContext from "../../contexts/AuthContext";
import Transaction from "./Transaction";
import newIncome from "../../assets/newIncome.svg";
import newOutcome from "../../assets/newOutcome.svg";
import { Button, Buttons, Text, Img, Agregator, Message } from "./style";
import api from "../../services/api";
import Balance from "../../components/Balance";

function Transactions(){
    
    const navigate = useNavigate();
    const {auth} = useContext(AuthContext);
    const [transactions, setTransactions] = useState(null);
    const [balance, setBalance] = useState(0);
    
    useEffect(()=>{
            if(!auth){
                navigate("/");
            } else {
                api.getAllTransactions(auth.token)
                .then((response) =>{
                    setTransactions(response.data);
                    console.log(response.data);
                    handleBalance(response.data);
                })
                .catch((err) =>{
                    console.log(err.response);
                })
            }
    }, [auth]);
    

    function handleBalance(transactions){
        if(!transactions)
            return
        const balance = transactions.reduce((p,c)=>{
            const tosum = (c.type === 'cashIn') ? parseFloat(c.value) : -parseFloat(c.value);
            return p + tosum
        }, 0)
        setBalance(balance);
        console.log(balance);
    }

    function deleteTransaction(id){
        api.deleteTransaction(id, auth.token)
        .then((response)=>{
            const newList = transactions.filter(t =>{
                return t._id !== id;
            });
            setTransactions([...newList]);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    if(!auth){
        navigate("/");
    }

    function hasTransactions(){
        return transactions?.length;
    }

    return (
        <Container>
            <Agregator>
                <List hasList ={() =>{hasTransactions()}}>
                    {(hasTransactions()) 
                        ? transactions.map(t => <Transaction key = {t._id}{...t} remove={deleteTransaction}/>)
                        : <Message>Não há registros de entrada ou saída</Message>
                    }
                    {(hasTransactions()) ? <Balance value={balance}></Balance> : '' }
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