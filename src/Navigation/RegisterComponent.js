import {Navigation} from 'react-native-navigation';

// User
import ListUserScreen from '../Screens/User/List';
import UserAddScreen from '../Screens/User/Add';
import ResultScreen from '../Screens/User/Result';

export default function registerScreen() {
  Navigation.registerComponent('User.list', () => ListUserScreen);
  Navigation.registerComponent('User.add', () => UserAddScreen);
  Navigation.registerComponent('User.result', () => ResultScreen);
}
