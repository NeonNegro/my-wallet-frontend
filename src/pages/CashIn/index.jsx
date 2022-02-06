import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import Button from "../../components/FormComponents/Button";
import Form from "../../components/FormComponents/Form";
import Input from "../../components/FormComponents/Input";
import AuthContext from "../../contexts/AuthContext";
import api from "../../services/api";

function CashIn(){
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleNewIncome(e){
        e.preventDefault();
        setIsLoading(true);

        api.createNewIncome({value, description}, auth.token)
        .then((data) =>{
            setIsLoading(false);
            navigate("/transacoes");
        })
        .catch((err) =>{
            setIsLoading(false);
            console.log(err.response);
        })
    }

    return (
        <Container>
            <Form onSubmit={handleNewIncome}>
                <Input
                    placeholder="Valor"
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={isLoading}
                  />
                <Input 
                    placeholder="Descrição"
                    requiredvalue={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={isLoading}
                />
                <Button type="submit" disbled={isLoading}>Salvar Entrada</Button>
            </Form>
        </Container>
    )
}


export default CashIn;