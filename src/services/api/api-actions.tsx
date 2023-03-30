import { STORAGEKEYS } from 'config/constants';
import { goBack } from 'navigation/navigation-ref';
import { Alert } from 'react-native';
import { AppDispatch, RootState } from 'store';
import { setDepartmentList } from 'store/reducers/common-reducer';
import { setClientList } from 'store/reducers/common-reducer';
import { getData, postData } from '.';
import {
  setNotifications,
  setUserInfo,
  setWallet,
} from '../../store/reducers/user-reducer';
import { UTILS } from '../../utils';
import { URLS } from './api-urls';

// export const getNearByHospitals = async (lat: any, long: any) => {
//     try {
//         return postData(URLS.doctor_module.near_by_hospitals, {
//             lat,
//             long,
//         });
//     } catch (error: any) {
//         Alert.alert('', UTILS.returnError(error));
//     }
// }
export const onChangePassword = async (values: any) => {
  try {
    const res = await postData(URLS.update_password, values);
    console.log('res of onChangepassword=>', res);
    return res;
  } catch (error: any) {
    console.log('error in change password', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
//
export const onReadNotifications = async (values: any) => {
  try {
    const res = await postData(URLS.notification.read_notification, values);
    console.log('res of readNotifications=>', res);
    return res;
  } catch (error: any) {
    console.log('error in readNotifications', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const getUserList = async () => {
  try {
    const res = await getData(URLS.get_users);
    console.log('res of getusers=>', res);
    return res;
  } catch (error: any) {
    console.log('error in getusers', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const getClientList = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(URLS.get_clients);
      // console.log('res of getclients=>', res);
      dispatch(setClientList(res?.allClients));
      // return res;
    } catch (error: any) {
      console.log('error in getclients', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
      // throw UTILS.returnError(error);
    }
  }
};
export const getTaskCounter = async () => {
  try {
    const res = await getData(URLS.get_task_counter);
    console.log('res of task counter=>', res);
    return res;
  } catch (error: any) {
    console.log('error in get task counter', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const getTaskList = async (values: any) => {
  try {
    const res = await postData(URLS.get_tasklist, values);
    console.log('res of tasklist data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in tasklist', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const getDepartmentList = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {

    try {
      const res = await getData(URLS.get_department_list);
      console.log('res of departmentslist data=>', res);
      dispatch(setDepartmentList(res?.allDepartments));
      // return res;
    } catch (error: any) {
      console.log('error in departmenstlist', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
      // throw UTILS.returnError(error);
    }
  }
};
export const getUserDetails = async () => {
  try {
    const res = await getData(URLS.get_user_info);
    console.log('res of userdetails data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in userdetails', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const editDepartmentList = async (values: any) => {
  try {
    const res = await postData(URLS.update_department, values);
    console.log('res of editdepartmentslist data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in editdepartmenstlist', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const editClientList = async (values: any) => {
  try {
    const res = await postData(URLS.update_clients, values);
    console.log('res of editclientlist data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in editclientlist', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const editUserList = async (values: any) => {
  try {
    const res = await postData(URLS.update_user, values);
    console.log('res of edituser data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in edituser', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const editUserData = async (values: any) => {
  try {
    const res = await postData(URLS.update_user_data, values);
    console.log('res of edituserdata data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in edituserdata', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const addDepartment = async (values: any) => {
  try {
    const res = await postData(URLS.add_department, values);
    console.log('res of adddepartments data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in adddepartmenst', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const addClient = async (values: any) => {
  try {
    const res = await postData(URLS.add_client, values);
    console.log('res of addclient data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in addclient', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const addUser = async (values: any) => {
  try {
    const res = await postData(URLS.add_user, values);
    console.log('res of adduser data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in adduser', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const deleteDepartment = async (values: any) => {
  try {
    const res = await postData(URLS.delete_department, values);
    console.log('res of deletedepartments data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in deletedepartmenst', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const deleteClient = async (values: any) => {
  try {
    const res = await postData(URLS.delete_clients, values);
    console.log('res of deleteclients data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in deleteclients', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
export const deleteUser = async (values: any) => {
  try {
    const res = await postData(URLS.delete_user, values);
    console.log('res of deleteuser data=>', res);
    return res;
  } catch (error: any) {
    console.log('error in deleteuser', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
    throw UTILS.returnError(error);
  }
};
///Notifications///
export const getNotifications = (
  values: any,
  // setLoading: (bool: boolean) => void,
  // readNotifications: () => void,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      // setLoading(true);
      const res = await postData(URLS.notification.get_notification, values);
      // readNotifications()
      dispatch(setNotifications(res?.notifications || []));
      console.log('res of notification=>', res);
    } catch (error: any) {
      console.log('error in notification', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};
// export const onSignup = (
//   values: any,
//   setLoading: (bool: boolean) => void,
//   props: any,
//   setOtpLoading: (bool: boolean) => void,
// ) => {
//   return async (dispatch: AppDispatch, getState: () => RootState) => {
//     try {
//       setLoading(true);
//       const res = await postData(URLS.auth.signup, values);
//       console.log('res of onSignupPress=>', res);
//       Alert.alert('Account', 'Accrout is created successfully');
//       UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
//       dispatch(setUserInfo(res?.user));
//       UTILS.resetStack(props, 'BottomTab');
//     } catch (error: any) {
//       console.log('error in onSignupPress', UTILS?.returnError(error));
//       Alert.alert('', error?.message);
//     } finally {
//       setLoading(false);
//     }
//   };
// };

/// Wallet ///
// export const getWallet = (values: any, setLoading: (bool: boolean) => void) => {
//   return async (dispatch: AppDispatch, getState: () => RootState) => {
//     try {
//       setLoading(true);
//       const res = await postData(URLS.wallet.get_wallet, values);

//       dispatch(setWallet(res || {}));
//       console.log('res of wallet=>', res);
//     } catch (error: any) {
//       console.log('error in wallet', UTILS.returnError(error));
//       Alert.alert('', UTILS.returnError(error));
//     } finally {
//       setLoading(false);
//     }
//   };
// };

//// add amount///
export const onAddAmount = async (values: any) => {
  try {
    const res = await postData(URLS.wallet.add_amount, values);
    console.log('res of addamount=>', res);
    return res;
  } catch (error: any) {
    console.log('error in addamount', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
  }
};
export const onSignup = (
  values: any,
  setLoading: (bool: boolean) => void,
  props: any,
  setOtpLoading: (bool: boolean) => void,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.signup, values);
      console.log('res of onSignupPress=>', res);
      setOtpLoading(true);
      if (res?.status == 400) {
        throw new Error(res?.message);
      }
    } catch (error: any) {
      console.log('error in onSignupPress', UTILS?.returnError(error));
      Alert.alert('', UTILS?.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const onAddAvailability = (
  values: any,
  setLoading: (bool: boolean) => void,
  props: any,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      console.log('values=>', values);

      const res = await postData(URLS.availability.add, values);
      console.log('res of onAddAvailability=>', res);

      // UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      // dispatch(setUserInfo(res?.user));

      // UTILS.resetStack(props, 'Home');
      // navigate('AddAvailability', values)
    } catch (error: any) {
      console.log('error in onSignupPress', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
// export const onUpdateProfile = (values: any, setLoading: (bool: boolean) => void, props: any) => {
//     return async (dispatch: AppDispatch, getState: () => RootState) => {
//         try {
//             setLoading(true)
//             const res = await postData(URLS.auth.update_profile, values);
//             console.log('res of onUpdateProfile=>', res);

//             UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
//             dispatch(setUserInfo(res?.user));
//             goBack();
//         } catch (error: any) {
//             console.log('error in onUpdateProfile', error);
//             Alert.alert('', error?.message,);
//         } finally {
//             setLoading(false);
//         }
//     }
// }
export const onUpdateProfile = (
  values: any,
  setLoading: (bool: boolean) => void,
  props: any,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.update_profile, values);
      console.log('res of onUpdateProfile=>', res);

      UTILS.setItem(STORAGEKEYS.user, JSON.stringify(values));
      dispatch(setUserInfo(values));
      goBack();
    } catch (error: any) {
      console.log('error in onUpdateProfile', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const onLogin = (
  values: any,
  setLoading: (bool: boolean) => void,
  props: any,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.login, values);
      console.log('res of onLogin=>', res);
      UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user_data));
      UTILS.setItem(STORAGEKEYS.token, res?.access_token);
      dispatch(setUserInfo(res?.user_data));
      UTILS.resetStack(props, 'DrawerNavigation');
    } catch (error: any) {
      console.log('error in login', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const onVerifyOtp = (values: any) => {
  return postData(URLS.auth.login, values);
};

export const onForgot = async (values: any) => {
  try {
    const res = await postData(URLS.auth.forget_password, values);
    console.log('res of onforgot=>', res);
    return res;
  } catch (error: any) {
    console.log('error in forgot password', UTILS.returnError(error));
    Alert.alert('', UTILS.returnError(error));
  }
};
export const onVerifyOtpRenewpassword = (
  values: any,
  props: any,
  onClose: any,
  setLoading: (bool: boolean) => void,
  isSignup?: boolean,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.otp_verify, values);
      setLoading(false);
      console.log('res of onforgot=>', res);
      UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      dispatch(setUserInfo(res?.user));
      console.log('res===>>>>> onverifyotp', res);
      if (isSignup) {
        UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
        dispatch(setUserInfo(res?.user));
        props?.navigation?.pop(2);
      } else {
        props?.navigation?.navigate('RenewPasswordScreen', {
          email: values?.email,
        });
      }
    } catch (error: any) {
      console.log('error in forgot password', UTILS.returnError(error));

      Alert.alert('', UTILS.returnError(error));
    } finally {
      onClose();
    }
  };
};
export const onLogoutPress = (props: any) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      Alert.alert('Logout', 'Are you sure you want to Logout?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            await UTILS.clearStorage();
            dispatch(setUserInfo(null));
            UTILS.resetStack(props, 'Splash');
          },
        },
      ]);
      // await logout();
    } catch (error: any) {
      console.log('error in onDeleteTask', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    }
  };
};
