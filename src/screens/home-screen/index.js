import { useIsFocused } from '@react-navigation/native';
import * as SVGS from 'assets/icons';
import { PlusButton } from 'components/atoms/buttons';
import AppHeader from 'components/atoms/headers';
import { Loader } from 'components/atoms/loader';
import { Row } from 'components/atoms/row';
import DashboardCard from 'components/molecules/dashboard-card';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useAppDispatch, useAppSelector } from 'hooks/use-store';
import { navigate } from 'navigation/navigation-ref';
import React from 'react';
import { ScrollView, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {
  getTaskCounter
} from 'services/api/api-actions';
import i18n from 'translation';
import styles from './styles';

const Home = props => {
  const { navigation } = props;
  const { userInfo, unreadNotification, location } = useAppSelector(s => s?.user);
  const isFocus = useIsFocused();
  const dispatch = useAppDispatch();
  const { t } = i18n;

  const [loading, setLoading] = React.useState(true);
  const [taskCounter, setTaskCounter] = React.useState({});

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getTaskCounter();
        console.log('res of task counter ==>>>>>', res);
        setTaskCounter(res);
      } catch (error) {
        console.log('error in=>', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [isFocus]);

  return (
    <View style={styles.container}>
      <AppHeader
        unreadNotification={unreadNotification}
        onMenuClick={() => navigation?.toggleDrawer()}
        title={'Dashboard'}
      />
      <ScrollView style={styles.contentContainerStyle}>
        <View style={styles.body}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Row>
                <DashboardCard
                  onPress={title =>
                    navigate('TaskListDashboard', {
                      id: 2,
                      taskTitle: title,
                    })
                  }
                  item={{
                    title: 'Planned Task',
                    icon: false,
                    number: taskCounter?.planned,
                    isGif: true,
                  }}></DashboardCard>
                <DashboardCard
                  onPress={title =>
                    navigate('TaskListDashboard', {
                      id: 10,
                      taskTitle: title,
                    })
                  }
                  item={{
                    title: 'This Week Task',
                    icon: 'Chart',
                    number: taskCounter?.thisWeek,
                  }}>
                  <SVGS.Chart
                    // height={mvs(30)}
                    // width={mvs(40)}
                    style={{
                      alignSelf: 'flex-end',
                      resizeMode: 'contain',
                    }}
                  />
                </DashboardCard>
              </Row>
              <Row>
                <DashboardCard
                  onPress={title =>
                    navigate('TaskListDashboard', {
                      id: 2,
                      taskTitle: title,
                    })
                  }
                  item={{
                    title: 'Over All Task',
                    icon: false,
                    number: taskCounter?.alltasks,
                    isProgress: true,
                  }}>
                  <View style={{ alignItems: 'flex-end' }}>
                    <CircularProgress
                      value={
                        (taskCounter?.completed / taskCounter?.alltasks) * 100
                      }
                      valueSuffix={'%'}
                      radius={20}
                      duration={2000}
                      progressValueColor={'#000'}
                      maxValue={100}
                      titleStyle={{ fontWeight: 'bold' }}
                      activeStrokeWidth={mvs(2)}
                      inActiveStrokeWidth={mvs(4)}
                      // style={{alignSelf: 'flex-end'}}
                      inActiveStrokeColor={colors.lightGray}
                      activeStrokeColor={colors.red}
                      inActiveStrokeOpacity={0.2}
                    // progressValueColor={'#fff'}
                    />
                  </View>
                </DashboardCard>
                <DashboardCard
                  onPress={title =>
                    navigate('TaskListDashboard', {
                      id: 7,
                      taskTitle: title,
                    })
                  }
                  item={{
                    title: 'Next Week Task',
                    icon: 'lineChart',
                    number: taskCounter?.nextWeek,
                  }}>
                  <SVGS.lineChart
                    // height={mvs(30)}
                    // width={mvs(40)}
                    style={{
                      alignSelf: 'flex-end',
                      resizeMode: 'contain',
                    }}
                  />
                </DashboardCard>
              </Row>
              <Row>
                <DashboardCard
                  onPress={title =>
                    navigate('TaskListDashboard', {
                      id: 8,
                      taskTitle: title,
                    })
                  }
                  item={{
                    title: 'This Month Task',
                    icon: 'lineChart2',
                    number: taskCounter?.thisMonth,
                  }}>
                  <SVGS.lineChart2
                    // height={mvs(30)}
                    // width={mvs(40)}
                    style={{
                      alignSelf: 'flex-end',
                      resizeMode: 'contain',
                    }}
                  />
                </DashboardCard>
                <DashboardCard
                  onPress={title =>
                    navigate('TaskListDashboard', {
                      id: 9,
                      taskTitle: title,
                    })
                  }
                  item={{
                    title: 'Next Month Task',
                    icon: 'Chart2',
                    number: taskCounter?.nextMonth,
                  }}>
                  <SVGS.lineChart2
                    // height={mvs(30)}
                    // width={mvs(40)}
                    style={{
                      alignSelf: 'flex-end',
                      resizeMode: 'contain',
                    }}
                  />
                </DashboardCard>
              </Row>
              <Row>
                <DashboardCard
                  onPress={title =>
                    navigate('TaskListDashboard', {
                      id: 6,
                      taskTitle: title,
                    })
                  }
                  item={{
                    title: 'Over Due Task',
                    icon: false,
                    number: taskCounter?.overdue,
                    isProgress: true,
                  }}>
                  <View style={{ alignItems: 'flex-end' }}>
                    <CircularProgress
                      value={
                        (taskCounter?.overdue / taskCounter?.alltasks) * 100
                      }
                      valueSuffix={'%'}
                      radius={20}
                      duration={2000}
                      progressValueColor={'#000'}
                      maxValue={100}
                      titleStyle={{ fontWeight: 'bold' }}
                      activeStrokeWidth={mvs(2)}
                      inActiveStrokeWidth={mvs(4)}
                      // style={{alignSelf: 'flex-end'}}
                      inActiveStrokeColor={colors.lightGray}
                      activeStrokeColor={'purple'}
                      inActiveStrokeOpacity={0.2}
                    // progressValueColor={'#fff'}
                    />
                  </View>
                </DashboardCard>
                <DashboardCard
                  onPress={title =>
                    navigate('TaskListDashboard', {
                      id: 4,
                      taskTitle: title,
                    })
                  }
                  item={{
                    title: 'In Progress Task',
                    icon: 'Chart2',
                    number: taskCounter?.pending,
                  }}>
                  <SVGS.lineChart2
                    // height={mvs(30)}
                    // width={mvs(40)}
                    style={{
                      alignSelf: 'flex-end',
                      resizeMode: 'contain',
                    }}
                  />
                </DashboardCard>
              </Row>
              <Row>
                <DashboardCard
                  onPress={title =>
                    navigate('TaskListDashboard', {
                      id: 5,
                      taskTitle: title,
                    })
                  }
                  item={{
                    title: 'Completed Task',
                    icon: 'Chart2',
                    number: taskCounter?.completed,
                  }}>
                  <SVGS.Chart2
                    // height={mvs(30)}
                    // width={mvs(40)}
                    style={{
                      alignSelf: 'flex-end',
                      resizeMode: 'contain',
                    }}
                  />
                </DashboardCard>
              </Row>
            </>
          )}
        </View>
      </ScrollView>

      <PlusButton
        containerStyle={{ bottom: mvs(100) }}
        onPress={() => navigate('AddTask')}
      />
    </View>
  );
};
export default Home;
