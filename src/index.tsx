import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, history,	 persistor } from './redux/store';
import App from './App';
import PageLoader from './components/loaders/PageLoader';
import { HistoryRouter as Router } from "redux-first-history/rr6";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={ <PageLoader /> }> { /** Required for component lazy loading */}
			<Router history={ history }> { /** Allow navigation within a saga function */}
				<PersistGate persistor={ persistor }> { /** Required for storing state in localStorage */}
					<Provider store={ store }>
						<App />
					</Provider>
				</PersistGate>
			</Router>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
