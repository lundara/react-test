
import { Route, Switch, Redirect } from 'react-router-dom';

// PAGES
import HomePage from './pages/home/home';
import CounterPage from './pages/counter/counter';
import UsersPage from './pages/users/users';
import UserAddPage from './pages/users/user-add';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/counter" component={CounterPage} />
                <Route exact path="/users" component={UsersPage} />
                <Route path="/users/add" component={UserAddPage} />
            </Switch>
        </>
    )
}

export default Routes
