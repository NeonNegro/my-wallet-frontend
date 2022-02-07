import { useState } from "react";
import Container from "../../components/Container";
import Button from "../../components/FormComponents/Button";
import Form from "../../components/FormComponents/Form";
import Input from "../../components/FormComponents/Input";
import StyledLink from "../../components/StyledLink";
import myWallet from "../../assets/myWallet.png"
import Img from "../../components/Img";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";



function Register(){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({name:'', email:'', password:'', confirmPassword:''});
    const [isLoading, setIsLoading] = useState(false);



    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);

        const form = {...formData};
        if(form.confirmPassword === form.password){
            delete form.confirmPassword;

            api.signUp({...form})
            .then(()=> {
                setIsLoading(false);
                navigate("/");
            })
            .catch((err)=>{
                setIsLoading(false);
                alert(`Erro ao Cadastrar`);
                console.log(err.response);
            });
        } else {
            alert('Senhas não condizem!');
            setIsLoading(false);
        }
    }

    return(
        <Container>
            <Img src={myWallet} alt="Logo" />
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    disabled={isLoading}
                    required
                />
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
                <Input
                    type="password"
                    placeholder="Confirme a senha"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    disabled={isLoading}
                    required
                />
                <Button type="submit">
                    Cadastrar
                </Button>
            </Form>

            <StyledLink to='/'>Já tem uma conta? Faça login!</StyledLink>

        </Container>
    )
};

export default Register;