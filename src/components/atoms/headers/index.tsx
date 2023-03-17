import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import Bold from '../../../typography/bold-text';
import {drawericon} from 'assets/images';
import {notificationicon} from 'assets/images';

import {Row} from '../row';
import {SearchInput} from '../inputs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigate} from 'navigation/navigation-ref';
import Regular from 'typography/regular-text';
import {DrawerActions} from '@react-navigation/native';
import {Notificationicon} from 'assets/icons';
import {Hamburger} from 'assets/icons';
type props = {
  style?: StyleProp<TextStyle>;
  title?: string;
  unreadNotification?: number;
  back?: boolean;
  onMenuClick?: () => {};
};
const AppHeader = ({
  style,
  title,
  unreadNotification,
  back,
  onMenuClick,
  ...props
}: props) => {
  return (
    <View style={[styles.container, style]}>
      <Row style={{alignItems: 'center', justifyContent: 'space-between'}}>
        {/* <Row
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}> */}
        <TouchableOpacity onPress={onMenuClick}>
          {/* <Image
            source={drawericon}
            style={{height: mvs(30), width: mvs(30), borderRadius: mvs(69 / 2)}}
          /> */}
          <Hamburger />
        </TouchableOpacity>
        <Bold fontSize={mvs(20)} label={title} style={[styles.title]} />
        {/* </Row> */}
        <TouchableOpacity onPress={() => navigate('Notifications')}>
          {/* <Ionicons
            name="notifications-sharp"
            size={mvs(25)}
            color={colors.white}
            style={{marginVertical: mvs(12)}}
          /> */}
          {/* <Image
            source={notificationicon}
            style={{height: mvs(30), width: mvs(30), borderRadius: mvs(69 / 2)}}
          /> */}
          <Notificationicon />
          {unreadNotification ? (
            <View style={styles.notificationbadge}>
              <Regular
                label={unreadNotification}
                fontSize={mvs(10)}
                style={{lineHeight: mvs(14), color: colors.white}}
              />
            </View>
          ) : null}
        </TouchableOpacity>
      </Row>
    </View>
  );
};
export default React.memo(AppHeader);
const styles = StyleSheet.create({
  container: {
    // height: mvs(120),
    width: '100%',
    // backgroundColor: colors.primary,
    paddingHorizontal: mvs(22),
    // borderBottomLeftRadius: mvs(40),
    // borderBottomRightRadius: mvs(40),
  },
  title: {
    fontSize: mvs(20),
    color: colors.primary,
    marginVertical: mvs(12),
    marginHorizontal: mvs(12),
  },
  back: {
    marginRight: mvs(20),
  },
  notificationbadge: {
    backgroundColor: colors.red,
    // borderWidth: 1,
    borderColor: colors.white,
    position: 'absolute',
    alignSelf: 'flex-end',
    top: mvs(6),
    right: mvs(-3),
    // padding: mvs(3),
    alignItems: 'center',
    justifyContent: 'center',
    height: mvs(15),
    width: mvs(15),
    borderRadius: mvs(7.5),
  },
});
