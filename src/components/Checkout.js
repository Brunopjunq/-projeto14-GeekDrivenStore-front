import styled from "styled-components";
import Logo from '../assets/Spock.png';
import Camisa from '../assets/Camisa.png';

export default function Checkout() {
    return (
        <>
            <Header>
                <img src={Logo} />
                <p>
                GeekDriven <span>Store</span>
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
                        <p>R$180,00</p>
                    </Product>
                    <h2>Informações da Compra</h2>
                    <form>
                        <Input placeholder="Nome Impresso no Cartão" />
                        <Input placeholder="Dígitos do Cartão" />
                        <Input placeholder="Código de Segurança" />
                        <Input placeholder="Validade(DD/MM)" />
                        <Input placeholder="Endereço de Entrega(Completo com N° e apto)" />
                        <Button>Finalizar Pedido</Button>
                        
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        color: #D69A44;
    }

`

const Page = styled.div`
    width: 100vw;
    background-color: #04223C;
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    width: 80vw;
    height: 100vh;
    margin-top: 20px;
    box-sizing: border-box;

    h1 {
        color: #D69A44;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 18px;
        margin-bottom: 15px;
    }

    h2 {
        color: #ffffff;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 18px;
        margin-bottom: 15px;
        margin-top: 15px;
    }
`

const Product = styled.div`
    border: 1px solid #010B21;
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 15px;
    color: white;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 18px;

    img {
        height: 120px;
    }

    p {
        margin-bottom: 10px;
    }
`

const Input = styled.input`
    width: 50%;
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
    width: 51%;
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