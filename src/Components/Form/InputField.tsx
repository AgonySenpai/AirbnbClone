import React, {Component} from 'react';
import colors from '../../Styles/Colors';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type MyProps = {
	labelText: string;
	labelTextSize?: number;
	labelColor?: string;
	textColor?: string;
	borderBottomColor?: string;
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
		} = this.props;
		const fontSize: number = labelTextSize || 14;
		const color: string = labelColor || colors.black;
		const inputColor = textColor || colors.white;

		return (
			<View style={styles.wrapper}>
				<Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
				<TextInput
					autoCorrect={false}
					style={[{color: inputColor}, styles.inputField]}
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
		marginBottom: 10,
	},
	inputField: {
		borderBottomWidth: 1,
		paddingTop: 5,
		paddingBottom: 5,
	},
});

export default InputField;
