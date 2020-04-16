import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Animated} from 'react-native';
import colors from '../Styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

type MyProps = {
	type: string;
	firstLine?: string;
	secondLine?: string;
	handleCloseNotification(): void;
	showNotification: boolean;
};

type MyState = {
	positionValue: Animated.Value;
};

class Notification extends Component<MyProps, MyState> {
	constructor(props: MyProps) {
		super(props);
		this.state = {
			positionValue: new Animated.Value(0),
		};
	}

	animateNotification = (value: number) => {
		Animated.timing(this.state.positionValue, {
			toValue: value,
			duration: 2000,
			useNativeDriver: false,
		}).start();
	};

	closeNotification = () => {
		this.props.handleCloseNotification();
	};

	render() {
		const {type, firstLine, secondLine, showNotification} = this.props;
		showNotification
			? this.animateNotification(0)
			: this.animateNotification(-60);
		const {positionValue} = this.state;
		return (
			<Animated.View
				style={[
					{marginBottom: positionValue, opacity: positionValue},
					styles.wrapper,
				]}>
				<View style={styles.notificationContent}>
					<Text style={styles.errorText}>{type}</Text>
					<Text style={styles.errorMessage}>{firstLine}</Text>
					<Text style={styles.errorMessage}>{secondLine}</Text>
				</View>
				<TouchableOpacity
					style={styles.closeButton}
					onPress={this.closeNotification}>
					<Icon name={'times'} size={28} color={colors.lightGray} />
				</TouchableOpacity>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: colors.white,
		height: 60,
		width: '100%',
		padding: 10,
	},
	notificationContent: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
	},
	errorText: {
		color: colors.darkOrange,
		marginRight: 5,
		fontSize: 14,
		marginBottom: 2,
	},
	errorMessage: {
		marginBottom: 2,
		fontSize: 14,
	},
	closeButton: {
		position: 'absolute',
		right: 10,
		top: 10,
	},
});

export default Notification;
