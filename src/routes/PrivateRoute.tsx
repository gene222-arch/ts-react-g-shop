import React from 'react';
import { createStructuredSelector } from 'reselect';
import { AuthState } from '../types/states/AuthState';
import { authSelector } from './../redux/modules/auth/selector';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN_PATH } from './paths';
import { Route } from '../types/Route';


interface Props {
    authState: AuthState,
    route: Route
};

const PrivateRoute = ({ authState, route }: Props) => 
{
    const { component: Component } = route;
    const navigate = useNavigate();

    if (! authState.isAuthenticated) {
        navigate(SIGN_IN_PATH);
    };

    return <Component />
};

const mapStateToProps = createStructuredSelector({
    authState: authSelector
});

export default connect(mapStateToProps)(PrivateRoute);
