import { Navigation } from "react-native-navigation";
import {registerScreens} from './screen/screens';
import {PermissionsAndroid} from 'react-native';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setDefaultOptions({
		topBar: {
			elevation: 0,
			backButton: {
				showTitle: false
			},
		}
	})
	Navigation.setRoot({
		root: {
			stack: {
				id : "loading",
				children: [
					{
						component: {
							name: 'Loading'
						}
					}
				],
			}
		}
	});
});
