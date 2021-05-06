import { Route, Switch } from 'react-router';
import Login from './pages/login';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
            <Route component={() => <div>Page 404!</div>} />
        </Switch>
    );
}
