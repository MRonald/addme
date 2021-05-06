import styled from 'styled-components';
import User from "../../components/User";

const ListUsersWrapper = styled.div`
    width: 50%;
    margin: auto;
`;

const user = {
    "name": "Eduardo Santos",
    "cpf": "213.123.123-45",
    "email": "edusantos@email.com",
    "urlImage": "https://randomuser.me/api/portraits/men/1.jpg",
    "address": {
        "cep": 13454000,
        "street": "Rua Talvez",
        "number": 785,
        "district": "bairro azul",
        "city": "cidade eterna"
    }
}

export default function ListUsers() {
    return (
        <ListUsersWrapper>
            <User userData={user} />
            <User userData={user} />
            <User userData={user} />
            <User userData={user} />
            <User userData={user} />
            <User userData={user} />
            <User userData={user} />
            <User userData={user} />
        </ListUsersWrapper>
    );
}
