import {useIsFocused} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as IMG from 'assets/images';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getUserDetails} from 'services/api/api-actions';
import Medium from 'typography/medium-text';
import {KeyboardAvoidScrollview} from '../../components/atoms/keyboard-avoid-scrollview';
import {useAppDispatch} from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const UserInfo = (props: props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const isFocus = useIsFocused();

  const [image, setImage] = React.useState<any>('');
  const [loading, setLoading] = React.useState(false);
  const [userInformation, setUserInfoormation] = React.useState<any>({});
  React.useEffect(() => {
    (async () => {
      try {
        // setLoading(true);
        const res = await getUserDetails();
        console.log('res of userdetails ==>>>>>', res);
        setUserInfoormation(res);
      } catch (error) {
        console.log('error in=>', error);
      } finally {
        // setLoading(false);
      }
    })();
  }, [isFocus]);

  return (
    <View style={styles.container}>
      <Header1x2x isSearch={false} title={t('Profile')} />

      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            // source={IMG.cash}
            source={image?.uri ? {uri: image?.uri} : IMG.cash}
            resizeMode="contain"
            style={{
              width: mvs(140),
              height: mvs(140),
              borderWidth: 3,
              borderRadius: mvs(70),
              borderColor: colors.primary,
            }}
          />
        </View>
        <View
          style={{
            marginTop: mvs(20),
          }}>
          <Row style={styles.rowstyle}>
            <MaterialCommunityIcons
              name="email"
              size={mvs(20)}
              color={colors.primary}
            />
            <Medium
              label={userInformation?.email || 'Email'}
              color={colors.primary}
              style={{marginLeft: mvs(20)}}
            />
          </Row>
          <Row style={styles.rowstyle}>
            <FontAwesome name="user" size={mvs(20)} color={colors.primary} />
            <Medium
              label={userInformation?.username || 'Name'}
              color={colors.primary}
              style={{marginLeft: mvs(20)}}
            />
          </Row>
          <Row style={styles.rowstyle}>
            <FontAwesome name="phone" size={mvs(20)} color={colors.primary} />
            <Medium
              label={userInformation?.phone_number || 'Phone Number'}
              color={colors.primary}
              style={{marginLeft: mvs(20)}}
            />
          </Row>
          <Row style={styles.rowstyle}>
            <FontAwesome
              name="info-circle"
              size={mvs(20)}
              color={colors.primary}
            />
            <Medium
              label={userInformation?.profile_description || 'N/A'}
              color={colors.primary}
              style={{marginLeft: mvs(20)}}
            />
          </Row>
          <TouchableOpacity
            style={styles.touchableRow}
            onPress={() =>
              navigate('UpdatePassword', {
                userInformation: userInformation,
              })
            }>
            <Row style={styles.rowstyle}>
              <FontAwesome name="key" size={mvs(20)} color={colors.primary} />
              <Medium
                label={'Update Password'}
                color={colors.primary}
                style={{marginLeft: mvs(20)}}
              />
            </Row>
            <FontAwesome
              name="angle-right"
              size={mvs(30)}
              color={colors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableRow}
            onPress={() =>
              navigate('UpdateUserProfile', {
                userInformation: userInformation,
              })
            }>
            <Row style={styles.rowstyle}>
              <FontAwesome5
                name="user-edit"
                size={mvs(20)}
                color={colors.primary}
              />
              <Medium
                label={'Update Profile'}
                color={colors.primary}
                style={{marginLeft: mvs(20)}}
              />
            </Row>
            <FontAwesome
              name="angle-right"
              size={mvs(30)}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default UserInfo;
