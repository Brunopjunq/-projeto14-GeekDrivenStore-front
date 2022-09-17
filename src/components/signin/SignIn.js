import styled from "styled-components";
import logo from "../../imgs/eevee.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext , useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../context/UserContext.js";

export default function SignIn(){
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState("Entrar");
    const [block, setBlock] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        if(email === ""){
           return alert('campo de email vazio')
        } else if (password === ''){
           return alert('campo de senha vazio')
        } else {   
        }


        setLoading(<ThreeDots color="white" width="30px" height="15px"  />);
        const body = {
            email,
            password,
        };

        axios.post('http://localhost:5000/sign-in', body).then((res) => {
            setBlock(true)
            setToken(res.data.token);
            navigate('/')
        }).catch(() => {
            alert('Email ou senha incorretos')
            setBlock(true)
            setLoading('Entrar')
            setBlock(false)
        })

    }



    return (
        <Main>
            <img src={logo} />
            <h1>GeekDriven Store</h1>
            <form onSubmit={handleSubmit}>
                <input
                type='email' placeholder="E-mail" name="email" 
                value={email}  onChange={(e) => setEmail(e.target.value)} disabled={block}>
                </input>
                <input
                type="password" placeholder="Digite sua senha" name="password" 
                value={password} onChange={(e) => setPassword(e.target.value)} disabled={block}>
                </input>
                <button>{loading}</button>
            </form> 
            <p>Não tem uma conta? cadastra-se aqui!</p>
        </Main>
    )
}

const Main = styled.main`
width: 100%;
height: 667px;
background: #010B21;

display: flex;
flex-direction: column;
align-items: center;
gap: 25px;

    img {
        margin-top: 120px;
    }

    h1{
        font-family: 'Bungee Spice', cursive;
        font-size: 30px;
    }

    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 15px;

        input{
                font-family: 'Inter', sans-serif;
                width: 250px;
                height: 30px;
                border-radius: 15px;
                border: 5px solid  orangered;
                background-color: #f9a72e;
                font-size: 17px;
                padding: 7px;

                outline: none;

                ::placeholder{
                    color: red;
                }

            }

        button {
                width: 100px;
                height: 30px;
                border-radius: 5px;
                border: none;
                padding: 7px;
                background: #070273;
                font-size: 18px;

                color: #ffffff;

                display: flex;
                align-items: center;
                justify-content: center;
            }
    }

   p {
    color: #fda61a;
   }

`