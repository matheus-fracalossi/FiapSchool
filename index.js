/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';

import {name as appName} from './app.json';
import {App} from './src/app';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

AppRegistry.registerComponent(appName, () => App);
