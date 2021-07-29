import {Navigation} from 'react-native-navigation';
import RegisterComponent from './RegisterComponent';

RegisterComponent();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'User.list',
              // name: 'User.add',
            },
          },
        ],
      },
    },
  });
});