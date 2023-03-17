import {useIsFocused} from '@react-navigation/native';
import {appointment_bg} from 'assets/images';
import {IconButton, PlusButton} from 'components/atoms/buttons';
import AppHeader from 'components/atoms/headers';
import {SearchInput} from 'components/atoms/inputs';
import {Row} from 'components/atoms/row';
import AppointmentCounter from 'components/molecules/appointment-counter';
import {EmptyList} from 'components/molecules/empty-list';
import PopularPatientCard from 'components/molecules/popular-patient-card';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {FlatList, TouchableOpacity, Image} from 'react-native';
import {ImageBackground, ScrollView, View} from 'react-native';
import {shadow} from 'react-native-paper';
import {
  getAllHospitals,
  getHomeData,
  getNotifications,
} from 'services/api/api-actions';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import * as IMG from 'assets/images';
import DashboardCard from 'components/molecules/dashboard-card';
import * as SVGS from 'assets/icons';

const Home = props => {
  const {navigation} = props;
  const {userInfo, unreadNotification, location} = useAppSelector(s => s?.user);
  const isFocus = useIsFocused();
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [homeData, setHomeData] = React.useState({});
  React.useEffect(() => {
    // getDoctorAvailability(2);
    dispatch(getAllHospitals());
    (async () => {
      try {
        if (isFocus) {
          const res = await getHomeData(userInfo?.id);
          loadNotifications();
          setHomeData(res);
        }
      } catch (error) {}
    })();
  }, [isFocus]);
  const loadNotifications = async () => {
    try {
      dispatch(getNotifications({doctor_id: userInfo?.id}));
    } catch (error) {
      console.log('error=>', error);
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader
        unreadNotification={unreadNotification}
        onMenuClick={() => navigation?.toggleDrawer()}
        title={'Dashboard'}
      />
      {/* <View style={styles.search}>
        <SearchInput value="" />
      </View> */}
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={[
            {
              title: 'Today Task',
              icon: false,
              number: '5',
              isGif: true,
            },
            {
              title: 'Tomorrow Task',
              icon: 'Chart',
              number: '5',
            },
            {
              title: 'Over All Task',
              icon: false,
              number: '5',
              isProgress: true,
            },
            {
              title: 'Upcoming Task',
              icon: 'lineChart',
              number: '5',
            },
            {
              title: 'In Progress Task',
              icon: 'lineChart2',
              number: '5',
            },
            {
              title: 'Completed Task',
              icon: 'Chart',
              number: '5',
            },
            {
              title: 'Over Due Task',
              icon: false,
              number: '5',
              isProgress: true,
            },
          ]}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item, index}) => {
            const Icon = SVGS[item.icon];
            return (
              <DashboardCard item={item}>
                {item.icon && (
                  <Icon
                    // height={mvs(30)}
                    // width={mvs(40)}
                    style={{
                      alignSelf: 'flex-end',
                      resizeMode: 'contain',
                    }}
                  />
                )}
              </DashboardCard>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />

        <PlusButton
          containerStyle={{bottom: mvs(100)}}
          onPress={() => navigate('ReminderTask')}
        />
      </View>
    </View>
  );
};
export default Home;
