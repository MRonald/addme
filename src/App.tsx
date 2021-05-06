import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Arkhip;
        src: url('assets/fonts/Arkhip-Regular.ttf');
    }
    /* Global var */
    :root {
        --blue: #3363FF;
        --blue-light: #74B0FF;
    }
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: var(--blue-light);
        font-family: Arial, Helvetica, sans-serif;
    }
    a {
        color: var(--blue);
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
`;

function App() {
    return (
        <div>
            <GlobalStyle />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default App;
