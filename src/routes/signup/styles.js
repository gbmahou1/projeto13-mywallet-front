import styled from 'styled-components';

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
	margin-top: 100px;
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
margin-left: 50px;
margin-top: 30px;
color: white;
font-weight: bold;
`;

export { Body, Container, TitleBox, Input, Button, ToSignUp }