import styled from "styled-components";
import Logo from '../assets/Spock.png';
import Camisa from '../assets/Camisa.png';
import { useContext, useState } from "react";
import UserContext from '../context/UserContext';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Checkout() {
    const {token} = useContext(UserContext);
    const [cardName, setCardName] = useState('');
    const [cardNumb, setCardNumb] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    const [cardDate, setCardDate] = useState('');
    const navigate = useNavigate();


    function FinalizarCompra(e) {
        e.preventDefault();

        const body = {
            // cep: cep,
            // rdn: rdn,
            cardName: cardName,
            cardNumb: cardNumb,
            securityNumber: cardCVV,
            expirationDate: cardDate
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.post("http://localhost:5000/checkout", body, config)
        promise.then(res => {
            navigate('/');
        })
        promise.catch(err => {
            setCardName('');
            setCardNumb('');
            setCardCVV('');
            setCardDate('');
            alert('Confira se os dados do cartão estão corretos e tente novamente!')
        })

    }

    return (
        <>
            <Header>
                <img src={Logo} />
                <p>
                GeekDriven Store
                </p>
                
            </Header>
            <Page>
                <Content>
                    <h1>Resumo da Compra</h1>
                    <Product>
                        <img src={Camisa} />
                        <div>
                            <p>Camisa Star Wars</p>
                        </div>
                        <p>R$180,00</p>
                    </Product>
                    <Product>
                        <img src={Camisa} />
                        <div>
                            <p>Camisa Star Wars</p>
                        </div>
                        <p>R$180,00</p>
                    </Product>
                    <Product>
                        <img src={Camisa} />
                        <div>
                            <p>Camisa Star Wars</p>
                        </div>
                        <p>R${9999/100}</p>
                    </Product>
                    <Price>
                        <p>Subtotal: R$380,00</p>
                        <p>Frete: R$380,00</p>
                        <p>Total: R$380,00</p>
                    </Price>
                    <h2>Informações da Compra</h2>
                    <form onSubmit={FinalizarCompra}>
                        <Input type='text' placeholder="Nome Impresso no Cartão" value={cardName} onChange={(e) => setCardName(e.target.value)} required/>
                        <Input placeholder="Dígitos do Cartão" value={cardNumb} onChange={(e) => setCardNumb(e.target.value)} required/>
                        <Input type='text' maxLength='3' minLength='3'  placeholder="Código de Segurança" value={cardCVV} onChange={(e) => setCardCVV(e.target.value)} required/>
                        <Input type='text' placeholder="Validade(DD/MM)" value={cardDate} onChange={(e) => setCardDate(e.target.value)} required/>
                        <Button type='submit'>Finalizar Pedido</Button>
                        
                    </form>
                </Content>
            </Page>
        </>
    )
}

const Header = styled.header`
    width: 100vw;
    height: 78px;
    background-color: #010B21;
    font-family: 'Bungee Spice', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 40px;
        margin-right: 15px;
    }

`

const Page = styled.div`
    width: 100vw;
    background-color: #04223C;
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    width: 90vw;
    height: 100vh;
    margin-top: 20px;
    box-sizing: border-box;

    h1 {
        color: #D69A44;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 18px;
        margin-bottom: 15px;
    }

    h2 {
        color: #ffffff;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 18px;
        margin-bottom: 15px;
        margin-top: 15px;
    }
`

const Product = styled.div`
    border: 1px solid #010B21;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 15px;
    color: white;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    img {
        height: 80px;
    }

    p {
        margin-bottom: 10px;
    }
`

const Price = styled.div`
    border: 1px solid #010B21;
    height: 80px;
    width: 50%;
    margin-left: 183px;
    box-sizing: border-box;
    padding-left: 2px;
    padding-top: 5px;
    color: white;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
`

const Input = styled.input`
    width: 80%;
    height: 32px;
    background: #0E94B4;
    border-radius: 8px;
    font-size: 14px;
    padding-left: 14px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    color: #ffffff;

    &::placeholder {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;
    }
`

const Button = styled.button`
    width: 87%;
    height: 42px;
    background: #D69A44;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`