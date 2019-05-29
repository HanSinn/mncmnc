import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screen/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			stack: {
				id : "AppStack",
				children: [
					{
						component: {
							name: 'login'
						}
					}
				]
			}
		}
	});
});