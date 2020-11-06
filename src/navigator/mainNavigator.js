import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen6168450Navigator from '../features/BlankScreen6168450/navigator';
import BlankScreen5168449Navigator from '../features/BlankScreen5168449/navigator';
import BlankScreen4168448Navigator from '../features/BlankScreen4168448/navigator';
import BlankScreen3168326Navigator from '../features/BlankScreen3168326/navigator';
import BlankScreen2166935Navigator from '../features/BlankScreen2166935/navigator';
import BlankScreen1166934Navigator from '../features/BlankScreen1166934/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen6168450: { screen: BlankScreen6168450Navigator },
BlankScreen5168449: { screen: BlankScreen5168449Navigator },
BlankScreen4168448: { screen: BlankScreen4168448Navigator },
BlankScreen3168326: { screen: BlankScreen3168326Navigator },
BlankScreen2166935: { screen: BlankScreen2166935Navigator },
BlankScreen1166934: { screen: BlankScreen1166934Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
