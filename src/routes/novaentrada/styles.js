import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Body = styled.div`
	position: absolute;
	width: 600px;
	height: 100%;
	bottom: 0;
	margin: auto;
	left: 0;
	right: 0;
	background: #8C11BE;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: darkgray;
	left: 0;
	top: 0;
	position: absolute;
	
`;

const TitleBox = styled.div`
	font-family: 'Saira Stencil One';
	font-style: normal;
	color: white;
	font-size: 60px;
	margin: auto;
	margin-top: 250px;
	text-align: center;
`;

const Input = styled.input`
	width: 500px;
	height: 70px;
	border-radius: 10px;
	font-size: 30px;
	border-style: none;
	margin-left: 50px;
	margin-top: 15px;
`;

const Button = styled.button`
	width: 500px;
	text-align: center;
	height: 70px;
	border-radius: 10px;
	font-size: 30px;
	border-style: none;
	margin-left: 50px;
	margin-top: 15px;
	background-color: #A328D6;
	color: white;
	font-weight: bold;
`;

const ToSignUp = styled.div`
width: 500px;
text-align: center;
height: 70px;
border-radius: 10px;
font-size: 20px;
border-style: none;
margin: auto;
margin-top: 30px;
color: white;
font-weight: bold;
`;

const TopBar = styled.div`
width: 500px;
height: 70px;
color: white;
font-weight: bold;
font-size: 40px;
margin: auto;
margin-top: 30px;
display: flex;
justify-content: space-between;
`;

const OpsBox = styled.div`
width: 500px;
height: 600px;
border-radius: 5px;
color: gray;
font-size: 25px;
line-height: 600px;
text-align: center;
margin: auto;
margin-top: 30px;
background-color: white;
`;

const BottomBox = styled.div`
width: 500px;
height: 200px;
color: white;
font-weight: bold;
font-size: 40px;
margin: auto;
margin-top: 10px;
display: flex;
justify-content: space-between;
`;

const BottomButton = styled.div`
width: 240px;
height: 200px;
border-radius: 10px;
background-color: #A328D6;
color: white;
font-size: 30px;
`;

const BottomButtomText = styled.div`
margin-left: 15px;
margin-top: 40px;`

const ExitButton = styled.div`
height: 70px;
width: 70px;
font-size: 10px;
background-color: #A328D6;
`;

export { Body, Container, TitleBox, Input, Button, ToSignUp, TopBar, OpsBox, BottomBox, BottomButton, BottomButtomText, ExitButton }