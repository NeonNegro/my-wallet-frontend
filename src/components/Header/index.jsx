import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Container, Img, Title } from "./style";
import exit from "../../assets/exit.svg";
import { noHeader } from "../../Utils/utils";
import { useLocation } from "react-router-dom";
import api from "../../services/api";

function Header(){
    const { auth } = useContext(AuthContext);
    const name = (auth) ? auth.name : '';
    const { logOff } = useContext(AuthContext);
    const location = useLocation();
    let showButton = false;
    let phrase = `Olá, ${name}`;

    function handleLogOff(){
        api.signOut(auth.token)
        .then((resp)=> {
            logOff();
        })
        .catch((err)=>{
            alert(`Erro ao Deslogar`);
            console.log(err.response);
        });
    }


    if(noHeader.includes(location.pathname)){
        return null;
    }

    if(location.pathname === "/novaEntrada")
        phrase = "Nova Entrada";
    else if(location.pathname === "/novaSaida")
        phrase = "Nova Saída";
    else
        showButton = true;

    return (
        <Container hasButton={showButton}>
            <Title>{phrase}</Title>
            {(showButton) ?<Img src={exit} alt="Deslocar da Aplicação" onClick={handleLogOff}></Img> : ''}
        </Container>
    )
}

export default Header;