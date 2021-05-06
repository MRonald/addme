import styled from 'styled-components';

const UserWrapper = styled.div`
    width: 100%;
    min-height: 180px;
    background: #8c8f8c;
    border: 1px solid black;
    display: flex;

    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 200px;
        margin: 0 10px;

        div {
            width: 128px;
            height: 128px;
            border-radius: 100%;
            overflow: hidden;

            img {
                min-height: 100%;
                min-width: 100%;
            }
        }
    }
    .info {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h4 {
                margin-bottom: 10px;
            }
            p {
                font-size: 1.2rem;
                margin: 3px 0;
            }
        }
        div:first-child {
            width: 45%;
        }
    }
`;

interface userProps {
    userData: {
        name: string,
        cpf: string,
        email: string,
        urlImage: string,
        address: {
            cep: number,
            street: string,
            number: number,
            district: string,
            city: string
        }
    }
}

export default function User({ userData }: userProps) {
    return (
        <UserWrapper>
            <div className="hero">
                <div>
                    <img src={userData.urlImage} alt="Foto usuário"/>
                </div>
                <h2>{userData.name}</h2>
            </div>
            <div className="info">
                <div>
                    <h4>Informações pessoais</h4>
                    <p>Email: {userData.email}</p>
                    <p>CPF: {userData.cpf}</p>
                </div>
                <div>
                    <h4>Endereço</h4>
                    <p>Rua e número: {userData.address.street}, {userData.address.number}</p>
                    <p>Bairro: {userData.address.district}</p>
                    <p>Cidade: {userData.address.city}</p>
                    <p>CEP: {userData.address.cep}</p>
                </div>
            </div>
        </UserWrapper>
    );
}
