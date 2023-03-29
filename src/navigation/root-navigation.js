// In App.js in a new project
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddTask from 'screens/add-task';
import ClientList from 'screens/Clientss-list';
import Deapartments from 'screens/departments';
import DepartmentList from 'screens/departments-list';
import EditClient from 'screens/edit-client';
import EditUser from 'screens/edit-user';
import ForgotPassword from 'screens/forgot-password';
import LoginScreen from 'screens/login-screen';
import Notifications from 'screens/notifications';
import ReminderTask from 'screens/reminder-task';
import RenewPassword from 'screens/renew-password';
import RenewPasswordScreen from 'screens/Renew_Password';
import Signup from 'screens/signup';
import Splash from 'screens/splash';
import TaskList from 'screens/Tasks-list';
import TaskListDetails from 'screens/Tasks-list-details';
import UpdatePassword from 'screens/update-password';
import UpdateProfile from 'screens/update-profile';
import UpdateTaskList from 'screens/update-Tasks-list- ';
import UserList from 'screens/user-list-list ';
import {horizontalAnimation} from '../utils';
import DrawerNavigation from './drawer-navigation';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
export const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} />
      <StatusBar
        translucent={false}
        backgroundColor={colors.primary}
        barStyle={'light-content'}
      />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={horizontalAnimation}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="RenewPassword" component={RenewPassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen
            name="RenewPasswordScreen"
            component={RenewPasswordScreen}
          />
        </Stack.Group>
        {/* <Stack.Group>
          {/* <Stack.Screen name="AddAvailability" component={AddAvailability} />
          <Stack.Screen name="EditAvailability" component={EditAvailability} />
          <Stack.Screen name="AvailabilityList" component={AvailabilityList} />
          <Stack.Screen
            name="AvailabilityDetails"
            component={AvailabilityDetails}
          />
          <Stack.Screen
            name="UpdateAvailability"
            component={UpdateAvailability}
          /> */}
        {/* </Stack.Group> */}
        {/* <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
        {/* <Stack.Screen name="BottomTab" component={TabBar} /> */}
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
        {/* <Stack.Screen name="LanguageScreen" component={LanguageScreen} /> */}
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="TaskList" component={TaskList} />
        <Stack.Screen name="TaskListDashboard" component={TaskList} />
        <Stack.Screen name="AddTask" component={AddTask} />
        <Stack.Screen name="TaskListDetails" component={TaskListDetails} />
        <Stack.Screen name="ClientList" component={ClientList} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="Deapartments" component={Deapartments} />
        <Stack.Screen name="ReminderTask" component={ReminderTask} />
        <Stack.Screen name="UpdateTaskList" component={UpdateTaskList} />
        <Stack.Screen name="DepartmentList" component={DepartmentList} />
        <Stack.Screen name="EditClient" component={EditClient} />
        <Stack.Screen name="EditUser" component={EditUser} />
        {/* <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetails}
        /> */}
        {/* <Stack.Screen name="Checkout" component={Checkout} /> */}
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  drawerStyle: {
    // width: responsiveWidth(65),
    // height: responsiveHeight(100),
    width: '65%',
    height: '95%',
    position: 'absolute',
    top: Platform.OS === 'ios' ? mvs(6) : mvs(7),
    // borderWidth: 1,
    borderTopEndRadius: 35,
    borderBottomEndRadius: 35,
    //backgroundColor: 'transparent',
  },
});
