import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import {store} from '../store/store';

export function registerScreens() {

  Navigation.registerComponentWithRedux('Login', () => require('../components/logins/Login').default, Provider, store);
  Navigation.registerComponentWithRedux('Spad', () => require('../components/pad/Spad').default, Provider, store);
  Navigation.registerComponentWithRedux('Loading', () => require('../components/loading/Loading').default, Provider, store);
  Navigation.registerComponentWithRedux('List', () => require('../components/list/List').default, Provider, store);
  Navigation.registerComponentWithRedux('ListSuhum', () => require('../components/list/ListSuhum').default, Provider, store);
}