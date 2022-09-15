import styled from "styled-components";
import Logo from '../assets/Spock.png';

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
    height: 100vh;
    background-color: #04223C;
`