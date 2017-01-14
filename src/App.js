import React from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './reducers';

import Router from './Router';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers); //Cria o Application State

const App = () => {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
};

export default App;