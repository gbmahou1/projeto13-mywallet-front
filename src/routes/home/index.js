import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './styles.js';
import { Body, Container, TitleBox, Input, Button, ToSignUp } from './styles.js';
import { UserContext } from '../../UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Home ()
{

    const { token, setToken } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function login() {
        
        const requisicao = axios.post("http://localhost:5000/signin", { email, password });

        requisicao.then(tratarSucesso);
        requisicao.catch(tratarErro);

        function tratarSucesso(resposta) {
            console.log(resposta.status);
            console.log(resposta.data); // Ex: 404


            setToken(resposta.data)
            navigate('/mainpage', {replace: true})
            
            
          }

        function tratarErro(erro) {
            console.log("Status code: " + erro.response.status); // Ex: 404
            console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
            alert("Email ou senha incorretos...")
            setEmail("")
            setPassword("")
          }
    }

    return (
		<Container>
            <Body>
                <TitleBox>MyWallet</TitleBox> 
                <Input placeholder='E-mail' type="email" value={email} onChange={e => setEmail(e.target.value)}></Input> 
                <Input placeholder='Senha' type="password" value={password} onChange={e => setPassword(e.target.value)}></Input> 
                <Button onClick={login}>Entrar</Button>
                <Link to="/signup">
                <ToSignUp>Primeira vez? Cadastre-se! </ToSignUp> 
                </Link> 
            </Body> 
		</Container>
	);

}