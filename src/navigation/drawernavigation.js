import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
//   import Images from '../constants/Images';
//   import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as IMG from 'assets/images';
import {Avatar} from 'react-native-paper';
import {mvs} from 'config/metrices';
import {colors} from 'config/colors';
import {color} from 'react-native-reanimated';
//   import BaseApi from '../ApiServices/BaseApi';
//   import BaseStorage from '../ApiServices/BaseStorage';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
//   export const authUser = {avatar: null, name: null};
const SideDrawer = ({navigation}, props) => {
  const [name, setname] = useState('');
  const [avatar, setavatar] = useState('');

  const getdata = async () => {
    AsyncStorage.getItem('avatar').then(img => {
      if (img) {
        // let i = JSON.parse(img);
        setavatar(img);
        authUser.avatar = img;
        console.log('avatar===???', img);
      }
    });
    AsyncStorage.getItem('name').then(val => {
      if (val) {
        setname(val);
        authUser.name = val;
        console.log('nameeeeeeeeee===>>>>', val);
      }
    });
  };
  setTimeout(() => getdata(), 1000);

  // useEffect(() => {
  //   getdata();
  // }, []);

  const Toggleoptions = props => {
    navigation.navigate(props);
  };
  const LogoutAlert = () =>
    Alert.alert('Logout', 'Are you sure want to Logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: async () => {
          const res = await AsyncStorage.removeItem('Token');
          const res1 = await AsyncStorage.removeItem('name');
          const res2 = await AsyncStorage.removeItem('avatar');
          if (!res) {
            navigation.navigate('Signin');
            console.log('Ok Pressed', !res);
          } else {
            alert('Something went wrong');
          }

          // AsyncStorage.removeItem('token');
          // AsyncStorage.removeItem('token');
          // navigation?.closeDrawer();
          // navigation.navigate('Signin');
        },
      },
    ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            width: mvs(100),
            height: mvs(10),
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: mvs(2),
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              width: mvs(45),
              height: mvs(4),
            }}
            source={IMG.master}
          />
        </View>
        <View
          style={{
            width: mvs(60),
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            //borderWidth: 1,
          }}>
          {/* <View
              style={{
                borderRadius: 50,
                height: responsiveHeight(12),
                width: responsiveWidth(25),
                borderWidth: 3,
                borderColor: Colors.PrimaryDark,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,
              }}> */}
          <Image
            source={
              // avatar ? {uri: `${BaseStorage}${avatar}`} : Images.otpmobile
              IMG.master
            }
            //source={Images.otpmobile}
            style={{
              ...styles.userimg,
            }}
          />

          {/* </View> */}

          <Text style={styles.username}>{'Ali Abdullah'}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <DrawerContentScrollView
          {...props}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: 'red',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <View
            style={{
              // borderWidth: 1,
              // height: responsiveHeight(50),
              position: 'relative',
              bottom: Platform.OS === 'ios' ? 30 : 30,
            }}>
            <DrawerItem
              activeTintColor="red"
              //inactiveTintColor="#000000"
              style={{
                borderRadius: 10,
              }}
              label="Home"
              labelStyle={{
                fontSize: mvs(2),
                color: colors.primary,
                fontWeight: '500',
              }}
              icon={({focused, color, size}) => (
                <Image
                  source={IMG.cash}
                  // style={{width: 18, height: 18, resizeMode: 'contain'}}
                  style={{
                    width: mvs(4),
                    height: mvs(4),
                    resizeMode: 'contain',
                  }}
                />
              )}
              onPress={() => navigation.navigate('Home')}
            />
            <DrawerItem
              style={{}}
              label="Follow Up Details"
              labelStyle={{
                fontSize: mvs(2),
                color: colors.primary,
                fontWeight: '500',
              }}
              icon={({focused, color, size}) => (
                <Image
                  source={IMG.cash}
                  // style={{width: 18, height: 18, resizeMode: 'contain'}}
                  style={{
                    width: mvs(3.5),
                    height: mvs(3.5),
                    resizeMode: 'contain',
                  }}
                />
              )}
              onPress={() => navigation.navigate('Followupdetails', {})}
            />
            {/* <DrawerItem
                style={{}}
                label="Leads Details"
                labelStyle={{
                  fontFamily:
                    Platform.OS === 'ios'
                      ? 'Poppins-Medium'
                      : Fonts.PoppinsMedium,
                  fontSize: responsiveFontSize(2),
                  color: Colors.PrimaryDark,
                  fontWeight: '500',
                }}
                icon={({focused, color, size}) => (
                  <Image
                    source={Images.Chartdrawer}
                    // style={{width: 18, height: 18, resizeMode: 'contain'}}
                    style={{
                      width: responsiveWidth(4),
                      height: responsiveHeight(4),
                      resizeMode: 'contain',
                    }}
                  />
                )}
                onPress={() => navigation.navigate('LeadsInformation')}
              /> */}
            {/* <DrawerItem
                style={{}}
                label="Targets"
                labelStyle={{
                  fontFamily:
                    Platform.OS === 'ios'
                      ? 'Poppins-Medium'
                      : Fonts.PoppinsMedium,
                  fontSize: responsiveFontSize(2),
                  color: Colors.PrimaryDark,
                  fontWeight: '500',
                }}
                icon={({focused, color, size}) => (
                  <Image
                    source={Images.Targetdrawer}
                    //style={{width: 18, height: 18, resizeMode: 'contain'}}
                    style={{
                      width: responsiveWidth(4),
                      height: responsiveHeight(4),
                      resizeMode: 'contain',
                    }}
                  />
                )}
                onPress={() => navigation.navigate('Home')}
              /> */}

            {Platform.OS === 'ios' ? null : (
              <DrawerItem
                style={{}}
                label="Call Details"
                labelStyle={{
                  fontSize: mvs(2),
                  color: colors.primary,
                  fontWeight: '500',
                }}
                icon={({focused, color, size}) => (
                  <Image
                    source={IMG.cash}
                    // style={{width: 18, height: 18, resizeMode: 'contain'}}
                    style={{
                      width: mvs(4),
                      height: mvs(4),
                      resizeMode: 'contain',
                    }}
                  />
                )}
                onPress={() => navigation.navigate('CallDetails')}
              />
            )}
            {/* <DrawerItem
                style={{}}
                label="Create Leads"
                labelStyle={{
                  fontFamily:
                    Platform.OS === 'ios'
                      ? 'Poppins-Medium'
                      : Fonts.PoppinsMedium,
                  fontSize: responsiveFontSize(2),
                  color: Colors.PrimaryDark,
                  fontWeight: '500',
                }}
                icon={({focused, color, size}) => (
                  <Image
                    source={Images.Roundchart}
                    // style={{width: 18, height: 18, resizeMode: 'contain'}}
                    style={{
                      width: responsiveWidth(4),
                      height: responsiveHeight(4),
                      resizeMode: 'contain',
                    }}
                  />
                )}
                onPress={() => navigation.navigate('CreateLeads')}
              /> */}
          </View>

          {/* </DrawerItemList> */}
        </DrawerContentScrollView>

        <DrawerItem
          style={{marginBottom: 20}}
          label="Sign Out"
          labelStyle={{
            //   fontFamily:
            //     Platform.OS === 'ios' ? 'Poppins-Medium' : Fonts.PoppinsMedium,
            fontSize: mvs(2.5),
            color: 'red',
            fontWeight: '900',
          }}
          icon={({focused, color, size}) => (
            <Image
              source={IMG.cash}
              //style={{width: 22, height: 22, resizeMode: 'contain'}}
              style={{
                width: mvs(4),
                height: mvs(4),
                resizeMode: 'contain',
              }}
            />
          )}
          onPress={() => LogoutAlert()}
        />
      </View>
    </View>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,

    // borderWidth: 1,
    borderTopEndRadius: 35,
    borderBottomEndRadius: 35,
    overflow: 'hidden',
  },
  header: {
    flex: Platform.OS === 'ios' ? 0.4 : 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  userimg: {
    height: mvs(8),
    width: mvs(16),

    //borderRadius: 50,
    borderColor: colors.primary,
    // borderWidth: 3.0,
    resizeMode: 'contain',
  },
  footer: {
    flex: 0.7,
  },
  username: {
    fontSize: mvs(3),
    color: colors.primary,
    fontWeight: 'bold',

    marginVertical: 10,
  },
});
