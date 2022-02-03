import { createStructuredSelector } from 'reselect';
import { AuthState } from '../types/states/AuthState';
import { authSelector } from './../redux/modules/auth/selector';
import { connect } from 'react-redux';
import { Route } from '../types/Route';
import { useNavigate } from 'react-router-dom';

interface Props {
    authState: AuthState,
    route: Route
};

const PublicRoute = ({ authState, route }: Props) => 
{
    const navigate = useNavigate();
    const { component: Component } = route;

    if (authState.isAuthenticated) {
        navigate(-1);
    }

    return <Component />
};

const mapStateToProps = createStructuredSelector({
    authState: authSelector
});

export default connect(mapStateToProps)(PublicRoute);
