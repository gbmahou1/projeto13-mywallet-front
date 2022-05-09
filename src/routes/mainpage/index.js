import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './styles.js';
import { Body, Container, TitleBox, Input, Button, ToSignUp, TopBar, OpsBox, BottomBox, BottomButton, BottomButtomText, ExitButton, ReqBox } from './styles.js';
import { UserContext } from '../../UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {

    const { token, setToken } = useContext(UserContext);
    const [user, setUser] = useState();
    const [reqs, setReqs] = useState([]);
    const navigate = useNavigate();

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

        const requisicao2 = axios.get("http://localhost:5000/regsfromtoken", config);
        requisicao2.then(resposta => {
			setReqs(resposta.data);
		});

	}, []); 

    let valor = 0;

    for (let i=0; i<reqs.length; i++)
    {
        valor = reqs[i].valor + valor;
    }


    if(!user)
    return ( <div>loading</div>)
    
    if(reqs.length === 0)
    return (

		<Container>
            <Body>
                <TopBar>
                    Olá {user.nome} 
                    <Link to="/">
                    <ExitButton></ExitButton>
                    </Link>
                </TopBar>
                <OpsBox>
                    Não há registros de entrada ou saída
                </OpsBox>

                <BottomBox>
                    
                    <BottomButton onClick={()=> navigate('/novaentrada', {replace: true})}>  
                        <BottomButtomText>
                            Nova entrada                   
                        </BottomButtomText>             
                    </BottomButton>
                    
                    <BottomButton onClick={()=> navigate('/novasaida', {replace: true})}>
                    <BottomButtomText >
                            Nova saída
                        </BottomButtomText>
                    </BottomButton>
                </BottomBox>
    
            </Body> 
		</Container>
	);

    return(
        <Container>
            <Body>
                <TopBar>
                    Olá {user.nome} 
                    <Link to="/">
                    <ExitButton></ExitButton>
                    </Link>
                </TopBar>
                <ReqBox>
                    <ul>
			            {reqs.map(req => <li>{req.descricao}{req.valor}</li>)}
		            </ul>
                    Valor Total: {valor}                       
                </ReqBox>

                <BottomBox>
                    
                    <BottomButton onClick={()=> navigate('/novaentrada', {replace: true})}>  
                        <BottomButtomText>
                            Nova entrada                   
                        </BottomButtomText>             
                    </BottomButton>
                    
                    <BottomButton onClick={()=> navigate('/novasaida', {replace: true})}>
                    <BottomButtomText >
                            Nova saída
                        </BottomButtomText>
                    </BottomButton>
                </BottomBox>
    
            </Body> 
		</Container>

    );
}