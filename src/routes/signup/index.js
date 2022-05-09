import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './styles.js';
import { Body, Container, TitleBox, Input, Button, ToSignUp } from './styles.js';
import { UserContext } from '../../UserContext';
import axios from 'axios';


export default function SignUp ()
{

    const { token, setToken } = useContext(UserContext);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    function registerUser() {
        
        const requisicao = axios.post("http://localhost:5000/signup", { nome, email, password, confirm});

        requisicao.then(tratarSucesso);
        requisicao.catch(tratarErro);

        function tratarSucesso(resposta) {
            console.log(resposta.status); // Ex: 404
            alert("Cadastro bem sucedido!");
            setNome("");
            setEmail("");
            setPassword("");
            setConfirm("");
            
          }

        function tratarErro(erro) {
            console.log("Status code: " + erro.response.status); // Ex: 404
              console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
          }
    }

    return (
		<Container>
            <Body>
                <TitleBox>MyWallet</TitleBox> 
                <Input placeholder='Nome' type="text" value={nome} onChange={e => setNome(e.target.value)}></Input> 
                <Input placeholder='E-mail' type="email" value={email} onChange={e => setEmail(e.target.value)}></Input> 
                <Input placeholder='Senha' type="password" value={password} onChange={e => setPassword(e.target.value)}></Input> 
                <Input placeholder='Confirme a senha' type="password" value={confirm} onChange={e => setConfirm(e.target.value)}></Input> 
                <Button onClick={registerUser}>Cadastrar</Button>
                <Link to="/">
                <ToSignUp>Já tem uma conta? Entre agora!</ToSignUp> 
                </Link> 
            
            
            </Body> 
		</Container>
	);

}