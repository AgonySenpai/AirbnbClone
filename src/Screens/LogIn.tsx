import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	View,
	Text,
	ScrollView,
	KeyboardAvoidingView,
	StyleSheet,
} from 'react-native';
import colors from '../Styles/Colors';
import InputField from '../Components/Form/InputField';

type MyProps = {};

type MyState = {};

class LogIn extends Component<MyProps, MyState> {
	render() {
		return (
			<KeyboardAvoidingView style={styles.wrapper}>
				<View style={styles.scrollViewWrapper}>
					<ScrollView style={styles.scrollView}>
						<Text style={styles.loginHeader}>Log In</Text>
						<InputField
							labelColor={colors.white}
							labelText={'EMAIL ADDRESS'}
							labelTextSize={14}
							textColor={colors.white}
						/>
						<InputField
							labelColor={colors.white}
							labelText={'PASSWORD'}
							labelTextSize={14}
							textColor={colors.white}
						/>
					</ScrollView>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flex: 1,
		backgroundColor: colors.green01,
	},
	scrollViewWrapper: {
		marginTop: 70,
		flex: 1,
	},
	scrollView: {
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 20,
		flex: 1,
	},
	loginHeader: {
		fontSize: 34,
		color: colors.white,
		fontWeight: '300',
		marginBottom: 40,
	},
});

export default LogIn;
