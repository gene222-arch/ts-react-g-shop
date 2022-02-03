import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import muiTheme from './config/muiTheme';
import AuthLayout from './views/layouts/AuthLayout';
import RenderRoute from './routes/RenderRoute';
import { authRoutes, mainRoutes } from './routes/index';
import MainLayout from './views/layouts/MainLayout';
import { createStructuredSelector } from 'reselect';
import { authSelector } from './redux/modules/auth/selector';
import { connect } from 'react-redux';
import { AuthState } from './types/states/AuthState';
import ConfirmationDialog from './components/dialogs/ConfirmationDialog';
import Alert from './components/Alert';

interface Prop {
	authState: AuthState
};

const App = ({ authState }: Prop) =>
{
	return (
		<ThemeProvider theme={ muiTheme }>
			<CssBaseline />
			<Alert />
			<ConfirmationDialog />
			{
				!authState.isAuthenticated && (
					<AuthLayout>
						<RenderRoute routes={ authRoutes } />
					</AuthLayout>
				)
			}

			{
				authState.isAuthenticated && (
					<MainLayout>
						<RenderRoute routes={ mainRoutes } />
					</MainLayout>
				)
			}
		</ThemeProvider>
	)
}

const mapStateToProps = createStructuredSelector({
	authState: authSelector
});

export default connect(mapStateToProps)(App);
