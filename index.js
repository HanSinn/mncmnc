import { Navigation } from "react-native-navigation";
import {registerScreens} from './screen/screens';
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setDefaultOptions({
		topBar: {
		  elevation: 0,
		  backButton: {
			showTitle: false
		  },
		},layout: {
			orientation: ['landscape']
		  }
	  })
	Navigation.setRoot({
		root: {
			stack: {
				id : "loading",
				children: [
					{
						component: {
							name: 'loading'
						}
					}
				],
			}
		}
	});
});