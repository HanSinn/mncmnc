/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import thunk from 'redux-thunk';
import {name as appName} from './app.json';
import { Navigation } from "react-native-navigation";


Navigation.registerComponent(`login`, () => App);
Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			component: {
				name: "login"
			}
		}
	});
});
// AppRegistry.registerComponent(appName, () => App);
