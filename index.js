/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {notifee,EventType} from 'react-native-nativeappmodule';

notifee.registerForegroundService( notification => {
	return new Promise( () => {
 console.log('notification-->',notification)
 notifee.onForegroundEvent(async ({ type, detail }) => {
	console.log('notif notif',type,detail)
	if (type === EventType.ACTION_PRESS && detail.pressAction.id === 'stop') {
	  await notifee.stopForegroundService()
	}
  });
})
 
	} );


AppRegistry.registerComponent(appName, () => App);

