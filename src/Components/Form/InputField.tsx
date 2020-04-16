import React, {Component} from 'react';
import colors from '../../Styles/Colors';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type MyProps = {
	labelText: string;
	labelTextSize?: number;
	labelColor?: string;
	textColor?: string;
	borderBottomColor?: string;
	inputType: string;
	customStyles?: {};
	onChangeText(email: string): void;
};

type MyState = {
	secureInput: boolean;
};

class InputField extends Component<MyProps, MyState> {
	constructor(props: MyProps) {
		super(props);
		this.state = {
			secureInput: !(props.inputType === 'text' || props.inputType === 'email'),
		};
	}

	toggleShowPassword = () => {
		this.setState({secureInput: !this.state.secureInput});
	};

	render() {
		const {
			textColor,
			borderBottomColor,
			labelText,
			labelTextSize,
			labelColor,
			inputType,
			customStyles,
			onChangeText,
		} = this.props;
		const fontSize: number = labelTextSize || 14;
		const color: string = labelColor || colors.black;
		const inputColor = textColor || colors.white;
		const borderBottom = borderBottomColor || 'transparent';

		return (
			<View style={[customStyles, styles.wrapper]}>
				<Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
				{inputType === 'password' ? (
					<TouchableOpacity
						style={styles.showButton}
						onPress={this.toggleShowPassword}>
						<Text style={styles.showButtonText}>
							{this.state.secureInput ? 'Show' : 'Hide'}
						</Text>
					</TouchableOpacity>
				) : null}
				<TextInput
					autoCorrect={false}
					style={[
						{borderBottomColor: borderBottom, color: inputColor},
						styles.inputField,
					]}
					onChangeText={onChangeText}
					secureTextEntry={this.state.secureInput}
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
	showButton: {
		position: 'absolute',
		right: 0,
	},
	showButtonText: {
		color: colors.white,
		fontWeight: '700',
	},
});

export default InputField;
