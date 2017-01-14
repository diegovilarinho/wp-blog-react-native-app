import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import PostsList from './components/PostsList';
import PostSingle from './components/PostSingle';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key='list' component={PostsList} title='Blog DiegoVilarinho.' />
			<Scene key='postSingle' component={PostSingle} title='Ver Post' />
		</Router>
	);
};

export default RouterComponent;