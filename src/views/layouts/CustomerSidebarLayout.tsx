import { ReactNode } from 'react';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CustomerSidebar from '../../components/layouts/CustomerSidebar';
import Typography from '@mui/material/Typography'


interface Prop {
    children: ReactNode,
    headerTitle: ReactNode
}

const CustomerSidebarLayout = ({ children, headerTitle }: Prop) => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={1}>
                <Grid item xs={ 12 } sm={ 2 }>
					<CustomerSidebar />
                </Grid>
                <Grid item xs={ 12 } sm={ 10 }>
                    <Grid container spacing={1} flexDirection="column">
                        <Grid item>
                            <Typography color="GrayText" variant="h5" gutterBottom sx={{ mb: 2 }}>
                                { headerTitle }
                            </Typography>
                        </Grid>
                        <Grid item>
                            { children }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CustomerSidebarLayout;
