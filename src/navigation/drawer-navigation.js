import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {mvs, width} from '../config/metrices';

import {TabBar} from './curvedtabs';
import CustomDrawerContent from './drawer-navigation/drawer-content';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width - mvs(150),
          backgroundColor: 'transparent',
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={TabBar} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
