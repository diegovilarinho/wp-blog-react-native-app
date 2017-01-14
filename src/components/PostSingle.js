import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostSingle extends Component {
	componentDidMount() {
		this.props.fetchPost(this.props.postId);
	}

	render() {

		const { post } = this.props;

		if(!post) {
			return(
				<Text>Carregando...</Text>
			);
		}
		
		const { title, content } = this.props.post;

		return (
			<View>
				<Text>{ title.rendered }</Text>
				<Text>{ content.rendered }</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return { post: state.posts.selected }
};

export default connect(mapStateToProps, { fetchPost })(PostSingle);