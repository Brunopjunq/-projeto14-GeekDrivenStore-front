import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

export default function SignUp(){
    const navigate = useNavigate();

    return (
        <Main>
            <h1>GeekDriven Store</h1>
            <form>
                <input type='text' placeholder="Nome"  ></input>
                <input type="email" placeholder="E-mail" ></input>
                <input type="password" placeholder="Senha" ></input>
                <input type="password" placeholder="Confirme a senha" ></input>
                <input type="number" placeholder="CEP" ></input>
                <input type="text" placeholder="Nº da residencia" ></input>
                <input type="number" placeholder="Telefone"></input>
                <button onClick={() => navigate('/sign-in')} > Cadastrar </button>
            </form>
            <h3> ja possui uma conta? faça o login!.</h3>
        </Main>
    )
}

const Main = styled.main`
background: #010B21;
width: 100%;
height: 667px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 15px;

        h1{
            font-family: 'Bungee Spice', cursive;
            font-size: 30px;
        }

        h3{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;

            color: #D69A44;

            text-decoration: underline;
        } 

        form {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 13px;

            input{
                font-family: 'Inter', sans-serif;
                width: 230px;
                height: 30px;
                border-radius: 10px;
                border: none;
                padding: 7px;

                font-size: 15px;

            }

            button {
                width: 150px;
                height: 30px;
                border-radius: 50px;
                border: none;
                padding: 7px;
                background: #D69A44;
                font-size: 15px;

                color: #ffffff;
            }
        }

`