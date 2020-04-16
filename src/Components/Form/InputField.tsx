import React, {Component} from 'react';
import colors from '../../Styles/Colors';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type MyProps = {
	labelText: string;
	labelTextSize?: number;
	labelColor?: string;
	textColor?: string;
	borderBottomColor?: string;
	inputType: string;
	customStyles?: {};
};

type MyState = {};

class InputField extends Component<MyProps, MyState> {
	render() {
		const {
			textColor,
			borderBottomColor,
			labelText,
			labelTextSize,
			labelColor,
			inputType,
			customStyles,
		} = this.props;
		const fontSize: number = labelTextSize || 14;
		const color: string = labelColor || colors.black;
		const inputColor = textColor || colors.white;
		const borderBottom = borderBottomColor || 'transparent';

		return (
			<View style={[customStyles, styles.wrapper]}>
				<Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
				<TextInput
					autoCorrect={false}
					style={[
						{borderBottomColor: borderBottom, color: inputColor},
						styles.inputField,
					]}
					secureTextEntry={inputType === 'password'}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
	},
	label: {
		fontWeight: '700',
		marginBottom: 20,
	},
	inputField: {
		borderBottomWidth: 1,
		paddingTop: 5,
		paddingBottom: 5,
	},
});

export default InputField;
