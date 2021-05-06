import { Route, Switch } from 'react-router';
import Login from './pages/login';
import Register from './pages/register';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register} />
            <Route component={() => <div>Page 404!</div>} />
        </Switch>
    );
}
