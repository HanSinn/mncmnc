import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			stack: {
				children: [
					{
					component: {
						name: 'login'
					}
					}
				],
				options: {
					topBar: {
						title: {
							text: 'Login Page'
						}
					},
					layout: {
						orientation: ['landscape']
					}
				}
			}
		}
	});
});

export default App;