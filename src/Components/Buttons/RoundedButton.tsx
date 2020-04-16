import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import colors from '../../Styles/Colors';

type MyProps = {
	text: string;
	textColor: string;
	background?: string;
	icon?: React.ReactElement;
	handleOnPress(): void;
};

type MyState = {};

class RoundedButton extends Component<MyProps, MyState> {
	render() {
		const {text, icon, background, textColor, handleOnPress} = this.props;
		const backgroundColor: string = background || 'transparent';
		const color: string = textColor || colors.black;
		return (
			<TouchableHighlight
				onPress={handleOnPress}
				style={[{backgroundColor}, Style.wrapper]}>
				<View style={Style.buttonTextWrapper}>
					{icon}
					<Text style={[{color}, Style.buttonText]}>{text}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

export default RoundedButton;

const Style = StyleSheet.create({
	wrapper: {
		display: 'flex',
		padding: 15,
		borderRadius: 40,
		borderWidth: 1,
		borderColor: colors.white,
		marginBottom: 15,
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 16,
		width: '100%',
		textAlign: 'center',
	},
	buttonTextWrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});
