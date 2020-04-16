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
	validEmail: boolean;
	emailAddress: string;
	validPassword: boolean;
	Password: string;
};

class LogIn extends Component<MyProps, MyState> {
	constructor(props: MyProps) {
		super(props);
		this.state = {
			formValid: true,
			validEmail: false,
			emailAddress: '',
			validPassword: false,
			Password: '',
		};
	}

	handleNextButton = () => {
		if (
			this.state.emailAddress === 'Hello@gmail.com' &&
			this.state.validPassword
		) {
			this.setState({formValid: true});
		} else {
			this.setState({formValid: false});
		}
	};

	handleCloseNotification = () => {
		this.setState({formValid: true});
	};

	handleEmailChange = (email: string) => {
		const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		this.setState({emailAddress: email});
		if (!this.state.validEmail) {
			if (emailCheckRegex.test(email)) {
				this.setState({validEmail: true});
			}
		} else if (!emailCheckRegex.test(email)) {
			this.setState({validEmail: false});
		}
	};

	handlePasswordChange = (password: string) => {
		this.setState({Password: password});
		if (!this.state.validPassword) {
			if (password.length > 4) {
				// Password has to be at least 4 characters long
				this.setState({validPassword: true});
			}
		} else if (password.length <= 4) {
			this.setState({validPassword: false});
		}
	};

	toggleNextButtonState = () => {
		const {validEmail, validPassword} = this.state;
		return !(validEmail && validPassword);
	};

	render() {
		const {formValid} = this.state;
		const showNotification = !formValid;
		const background = formValid ? colors.green01 : colors.darkOrange;
		const notificationMarginTop: number = showNotification ? 10 : 0;
		return (
			<KeyboardAvoidingView
				style={[{backgroundColor: background}, styles.wrapper]}>
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
							onChangeText={this.handleEmailChange}
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
							onChangeText={this.handlePasswordChange}
						/>
					</ScrollView>
					<View style={styles.nextButton}>
						<NextArrowButton
							disabled={this.toggleNextButtonState()}
							handleNextButton={this.handleNextButton}
						/>
					</View>
					<View
						style={[
							styles.notificationWrapper,
							{marginTop: notificationMarginTop},
						]}>
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
	notificationWrapper: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		zIndex: 999,
	},
});

export default LogIn;
