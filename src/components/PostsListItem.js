import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const PostsListItem = ( { item, onItemPress } ) => {
	const { title, id } = item;

	return (
		<TouchableOpacity style={styles.postListItemStyle} onPress={() => onItemPress(id)}>
			<Text>{title.rendered}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	postListItemStyle: {
		marginBottom: 10
	}
});

export default PostsListItem;