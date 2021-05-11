import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../app/Home';
import Story from '../app/Story';

const screens = {
  Home: {
    screen: Home
  },
  Story: {
    screen: Story
  }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);


