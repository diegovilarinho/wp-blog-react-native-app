import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Actions } from 'react-native-router-flux';
import PostsListItem from './PostsListItem';

class PostList extends Component {
	componentDidMount() {
		// Chamar action creator para fazer um request dos dados da lista de posts
		this.props.fetchPosts();
	}

	onItemPress(id) {
		Actions.postSingle({ postId: id });
	}

	render() {
		const { posts } = this.props;

		if(!posts) {
			return(
				<Text>Carregando...</Text>
			);
		}

		const postItems = posts.map(post => {
			return <PostsListItem key={post.id} item={post} onItemPress={this.onItemPress} />
		});	

		return (
			<View>
				{postItems}
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return { posts: state.posts.all };
};

const mapDispatchToProps = (dispatch) => {
	// ES6: fetchPosts --- significa --- fetchPosts: fetchPosts
	return bindActionCreators({ fetchPosts }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);