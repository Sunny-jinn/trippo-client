/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import axios from 'axios';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.headers.common['X-CSRFToken'] = getCookie
