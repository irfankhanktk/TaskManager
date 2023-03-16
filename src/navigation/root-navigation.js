// In App.js in a new project
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from 'config/colors';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddCard from 'screens/add-card-screen';
import AppointmentDetails from 'screens/appointment-details';
import AppointmentsList from 'screens/Tasks-list';
import AvailabilityList from 'screens/availability-list';
import DetailsScreen from 'screens/details-screen';
import ForgotPassword from 'screens/forgot-password';
import LanguageScreen from 'screens/language-screen';
import LoginScreen from 'screens/login-screen';
import RenewPassword from 'screens/renew-password';
import Signup from 'screens/signup';
import AddAvailability from 'screens/add-availability';
import Splash from 'screens/splash';
import UpdatePassword from 'screens/update-password';
import UpdateProfile from 'screens/update-profile';
import {horizontalAnimation} from '../utils';
import TabNavigator from './tab-navigation';
import EditAvailability from 'screens/edit-availability';
import AvailabilityDetails from 'screens/availability-details';
import UpdateAvailability from 'screens/update-availability';
import {TabBar} from './curvedtabs';
import Checkout from 'screens/checkout';
import Notifications from 'screens/notifications';
import RenewPasswordScreen from 'screens/Renew_Password';
import WalletScreen from 'screens/Wallet';
import {mvs} from 'config/metrices';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TaskList from 'screens/Tasks-list';
import TaskListDetails from 'screens/Tasks-list-details';
import ClientList from 'screens/Clientss-list';
import UserList from 'screens/user-list-list ';
import Deapartments from 'screens/departments';
import ReminderTask from 'screens/reminder-task';

const Drawer = createDrawerNavigator();
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
        <Stack.Group>
          <Stack.Screen name="AddAvailability" component={AddAvailability} />
          <Stack.Screen name="EditAvailability" component={EditAvailability} />
          <Stack.Screen name="AvailabilityList" component={AvailabilityList} />
          <Stack.Screen
            name="AvailabilityDetails"
            component={AvailabilityDetails}
          />
          <Stack.Screen
            name="UpdateAvailability"
            component={UpdateAvailability}
          />
        </Stack.Group>
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="BottomTab" component={TabBar} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="TaskList" component={TaskList} />
        <Stack.Screen name="TaskListDetails" component={TaskListDetails} />
        <Stack.Screen name="ClientList" component={ClientList} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="Deapartments" component={Deapartments} />
        <Stack.Screen name="ReminderTask" component={ReminderTask} />
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetails}
        />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="DrawerTab" component={DrawerTab} />
      </Stack.Navigator>
    </View>
  );
  function DrawerTab() {
    return (
      <Drawer.Navigator
        drawerStyle={styles.drawerStyle}
        initialRouteName="Home"
        screenOptions={{
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'yellow',
        }}
        drawerContent={props => (
          <SideDrawer
            {...props}
            drawerType="slide"
            openByDefault={true}
            hideStatusBar={true}

            //drawerStyle={{borderTopEndRadius: 100}}
          />
        )}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="LeadsDetails" component={LeadsDetails} />
        <Drawer.Screen name="LeadsInformation" component={LeadsInformation} />
      </Drawer.Navigator>
    );
  }
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
