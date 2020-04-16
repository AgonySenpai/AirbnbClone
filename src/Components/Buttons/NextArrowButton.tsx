import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';
import colors from '../../Styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

type MyProps = {
	handleNextButton(): void;
	disabled: boolean;
};

type MyState = {};

class NextArrowButton extends Component<MyProps, MyState> {
	render() {
		const {handleNextButton, disabled} = this.props;
		const opacityStyle = disabled ? 0.2 : 0.6;
		return (
			<TouchableHighlight
				onPress={handleNextButton}
				disabled={disabled}
				style={[{opacity: opacityStyle}, styles.button]}>
				<Text>
					<Icon
						name={'angle-right'}
						style={styles.icon}
						color={colors.green01}
						size={32}
					/>
				</Text>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		marginRight: -2,
		marginTop: -2,
		width: '100%',
		height: '100%',
	},
	button: {
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 50,
		width: 60,
		height: 60,
	},
});

export default NextArrowButton;
