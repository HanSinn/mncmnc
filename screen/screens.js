import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import {store} from '../store/store';

export function registerScreens() {

  Navigation.registerComponentWithRedux('login', () => require('../components/logins/Login').default, Provider, store);
  Navigation.registerComponentWithRedux('Spad', () => require('../components/pad/Spad').default, Provider, store);
  // Navigation.registerComponent('Spad', () => require('../components/pad/Spad').default);

}