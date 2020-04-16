/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import LoggedOut from './src/Screens/LoggedOut';
import LogIn from './src/Screens/LogIn';

declare const global: {HermesInternal: null | {}};

export default class App extends React.Component {
	render(): React.ReactElement {
		return <LogIn />;
	}
}
