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
import NextArrowButton from '../Components/Buttons/NextArrowButton';
import Notification from '../Components/Notification';

type MyProps = {};

type MyState = {
	formValid: boolean;
};

class LogIn extends Component<MyProps, MyState> {
	constructor(props: MyProps) {
		super(props);
		this.state = {
			formValid: false,
		};
	}

	handleNextButton = () => {
		alert(':V');
	};

	handleCloseNotification = () => {
		this.setState({formValid: !this.state.formValid});
	};

	render() {
		const {formValid} = this.state;
		const showNotification = !formValid;
		const background = formValid ? colors.green01 : colors.darkOrange;
		return (
			<KeyboardAvoidingView
				style={[{backgroundColor: background}, styles.wrapper]}
				behavior={'padding'}>
				<View style={styles.scrollViewWrapper}>
					<ScrollView style={styles.scrollView}>
						<Text style={styles.loginHeader}>Log In</Text>
						<InputField
							labelColor={colors.white}
							labelText={'EMAIL ADDRESS'}
							labelTextSize={14}
							textColor={colors.white}
							borderBottomColor={colors.white}
							inputType={'email'}
							customStyles={{
								marginBottom: 30,
							}}
						/>
						<InputField
							labelColor={colors.white}
							labelText={'PASSWORD'}
							labelTextSize={14}
							textColor={colors.white}
							borderBottomColor={colors.white}
							inputType={'password'}
							customStyles={{
								marginBottom: 30,
							}}
						/>
					</ScrollView>
					<View style={styles.nextButton}>
						<NextArrowButton
							disabled={true}
							handleNextButton={this.handleNextButton}
						/>
					</View>
					<View>
						<Notification
							type={'Error'}
							firstLine={"Those Credentials don't look right "}
							secondLine={'Please try again.'}
							showNotification={showNotification}
							handleCloseNotification={this.handleCloseNotification}
						/>
					</View>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flex: 1,
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
	nextButton: {
		alignItems: 'flex-end',
		right: 20,
		bottom: 20,
	},
});

export default LogIn;
