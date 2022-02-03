import { ReactNode } from 'react';
import MainLayoutAppBar from '../../components/layouts/MainLayoutAppBar';
import Container from '@mui/material/Container';

interface Prop {
    children: ReactNode
};

const MainLayout = ({ children }: Prop) => 
{
    return (
        <div>
            <MainLayoutAppBar />
            <Container maxWidth="xl" sx={{ pt: '5.25rem' }} disableGutters>
                { children }
            </Container>
        </div>
    );
}

export default MainLayout;