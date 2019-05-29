import { Navigation } from "react-native-navigation";
import {registerScreens} from './screens';
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			stack : {
				id:"loading",
				children : [
					{
						component: {
							name: "loading"
						}
					}
				]
			}
		}
	});
});
// AppRegistry.registerComponent(appName, () => App);
