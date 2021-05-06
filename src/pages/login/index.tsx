import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    width: 30%;
    background-color: #f7f7f7;
    border-radius: 5px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
        font-family: Arkhip;
        margin: auto;
    }
    div.fields {
        width: 50%;
        margin: 10px auto 20px;

        label {
            display: block;
            font-size: 1.2rem;
            margin: 15px auto 5px;
        }
        input {
            width: calc(100% - 15px);
            padding: 5px;
            font-size: 1.2rem;
            border: 1px solid gray;
            border-radius: 5px;
        }
    }
    button {
        width: 30%;
        margin: 10px auto;
        padding: 5px 0;
        font-size: 1.2rem;
        background-color: #3363FF;
        color: white;
        border: none;
        border-radius: 5px;
    }
    button:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
        cursor: pointer;
    }
    p {
        text-align: center;
        margin: 15px 0;
    }
`;

export default function Login() {
    return (
        <LoginWrapper>
            <h1>AddMe</h1>
            <div className="fields">
                <label htmlFor="username">Nome de usuário no GitHub</label>
                <input type="text" id="username" required/>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" required/>
            </div>
            <button>Login</button>
            <p>Ainda não tem conta? <Link to="/register">Cadastre-se</Link></p>
        </LoginWrapper>
    );
}
