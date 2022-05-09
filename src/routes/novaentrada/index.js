import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './styles.js';
import { Body, Container, TitleBox, Input, Button, ToSignUp, TopBar, OpsBox, BottomBox, BottomButton, BottomButtomText, ExitButton } from './styles.js';
import { UserContext } from '../../UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NovaEntrada() {

    const { token, setToken } = useContext(UserContext);
    const [user, setUser] = useState();
    const [valor, setValor] = useState();
    const [descricao, setDescricao] = useState();

    const config = {
        headers: {
            "token": token
        }
    }

	useEffect(() => {
		const requisicao = axios.get("http://localhost:5000/userfromtoken", config);

		requisicao.then(resposta => {
			setUser(resposta.data);
		});
	}, []); 

    function novaentrada() {
        
        const requisicao = axios.post("http://localhost:5000/entrada", { valor, descricao }, config);

        requisicao.then(tratarSucesso);
        requisicao.catch(tratarErro);

        function tratarSucesso(resposta) {
            console.log(resposta.status); // Ex: 404
            alert("Entrada adicionada!");
            setValor("");
            setDescricao("");      
          }

        function tratarErro(erro) {
            console.log("Status code: " + erro.response.status); // Ex: 404
            console.log("Mensagem de erro: " + erro.response.data); // Ex: Not Found
          }
    }


    if(!user)
    return ( <div>loading</div>)
    else
    return (
		<Container>
            <Body>
                <TopBar>
                    Nova Entrada
                    <Link to="/mainpage">
                    <ExitButton></ExitButton>
                    </Link>
                </TopBar>
                <Input type="text" placeholder='Valor' value={valor} onChange={e => setValor(e.target.value)}></Input>
                <Input type="text" placeholder='Descrição' value={descricao} onChange={e => setDescricao(e.target.value)}></Input>
                <Button onClick={novaentrada}>Salvar Entrada</Button>
            </Body> 
		</Container>
	);
}