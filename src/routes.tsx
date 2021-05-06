import { Route, Switch } from 'react-router';
import ListUsers from './pages/listUsers';
import Login from './pages/login';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/app" component={ListUsers} />
            <Route component={() => <div>Page 404!</div>} />
        </Switch>
    );
}
