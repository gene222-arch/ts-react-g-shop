import { Route as RouterRoute, Routes } from 'react-router-dom';
import { Route } from '../types/Route';
import PageNotFound from '../views/errors/PageNotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

interface Prop {
    routes: Route[]
};

const RenderRoute = ({ routes }: Prop) => 
{
    return (
        <Routes>
            {
                routes.map((route) => (
                    route.isPrivate
                        ? (
                            <RouterRoute 
                                key={ route.key }
                                path={ route.path }  
                                element={  
                                    <PrivateRoute route={ route } />
                                } 
                            />
                        )
                        : (
                            <RouterRoute 
                                key={ route.key }
                                path={ route.path }
                                element={  
                                    <PublicRoute route={ route } />
                                }
                            />
                        )
                ))
            }
            <RouterRoute path='*' element={ <PageNotFound /> } />
        </Routes>
    );
};

export default RenderRoute;
