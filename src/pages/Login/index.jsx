import { useContext, useState } from "react";
import Container from "../../components/Container";
import Button from "../../components/FormComponents/Button";
import Form from "../../components/FormComponents/Form";
import Input from "../../components/FormComponents/Input";
import StyledLink from "../../components/StyledLink";
import myWallet from "../../assets/myWallet.png"
import Img from "../../components/Img";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";



function Login(){

    const navigate = useNavigate();
    const  { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({email:'', password:''});
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);

        api.signIn({...formData})
        .then((resp)=> {
            setIsLoading(false);
            login({...resp.data});
            navigate("/transacoes");
        })
        .catch((err)=>{
            setIsLoading(false);
            alert(`Erro ao Logar`);
            console.log(err.response);
        });
    }

    return(
        <Container>
            <Img src={myWallet} alt="Logo" />
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    disabled={isLoading}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    disabled={isLoading}
                    required
                />
                <Button type="submit">
                    Entrar
                </Button>
            </Form>

            <StyledLink to='/sign-up'>Primeira vez? Cadastre-se!</StyledLink>

        </Container>
    )
};

export default Login;