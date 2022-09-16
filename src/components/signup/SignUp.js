import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState("Cadastrar");
    const [password2, setPassword2] = useState('')
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        cep: "",
        rdn: "",
        phone: ""
    })
    const [block, setBlock] = useState(false)

    function changeSubmit(event) {
        event.preventDefault();

        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
       
        if(
            form.name === '' ||
            form.email === "" ||
            form.password === "" ||
            password2 === "" ||
            form.cep === "" ||
            form.rdn === "" ||
            form.phone === ""
        ){
            alert('preencha todos os campos')
            return
        } else if (form.password.length <= 6 ) {
            alert('a senha deve ter pelomenos 6 digitos')
            return
        } else {
        } 

        if(form.password === password2){
            setLoading(<ThreeDots color="white" width="30px" height="15px" />);

            const body = {
                name: form.name,
                email: form.email,
                password: form.password,
                cep: form.cep,
                rdn: form.rdn,
                phone: form.phone
            };

            axios.post(
                "http://localhost:5000/sign-up",
                body
            ).then((res) => {
                setBlock(true);
                navigate("/sign-in");
            }).catch((err) => {
                setBlock(true);
                setLoading('Cadastrar');
                setBlock(false);
            });
        } else {
            alert('as senhas devem coincidirem')
            return
        }
       
    }


    return (
        <Main>
            <h1>GeekDriven Store</h1>
            <form onSubmit={handleSubmit} >
                <input type='text' placeholder="Nome" name="name" value={form.name} onChange={changeSubmit} disabled={block} ></input>
                <input type="email" placeholder="E-mail" name="email" value={form.email} onChange={changeSubmit} disabled={block}></input>
                <input type="password" placeholder="Senha" name="password" value={form.password} onChange={changeSubmit} disabled={block} ></input>
                <input type="password" placeholder="Confirme a senha" name="password2" 
                value={password2} onChange={(e) => setPassword2(e.target.value)} disabled={block}
                ></input>
                <input type="number" placeholder="CEP"  name="cep" value={form.cep}  onChange={changeSubmit} disabled={block} ></input>
                <input type="text" placeholder="Nº da residencia" name="rdn" value={form.rdn} onChange={changeSubmit} disabled={block} ></input>
                <input type="number" placeholder="DDD-Telefone" name="phone" value={form.phone} onChange={changeSubmit} disabled={block} ></input>
                <button type="submit" > {loading} </button>
            </form>
            <h3 onClick={() => navigate('/sign-in')} > ja possui uma conta? faça o login!.</h3>
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

                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

`