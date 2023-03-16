import Header1x2x from 'components/atoms/taskheaders /header-1x-2x';
import {Loader} from 'components/atoms/loader';
// import AppointmentCard from 'components/molecules/dashboard-card';
import {EmptyList} from 'components/molecules/empty-list';
import {colors} from 'config/colors';
import {APPOINTMNETSTATUS} from 'config/constants';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {goBack, navigate} from 'navigation/navigation-ref';
import React from 'react';
import {FlatList, View} from 'react-native';
import {
  getAppointmentsList,
  onChangeAppoinmentStatus,
} from 'services/api/api-actions';
import i18n from 'translation';
import styles from './styles';
import {SearchBar} from 'react-native-screens';
import {SearchInput} from 'components/atoms/inputs';
import {mvs} from 'config/metrices';
import * as IMG from 'assets/images';
import TaskListCard from 'components/molecules/tasklist-card';
import * as SVGS from 'assets/icons';

const TaskList = props => {
  return (
    <View style={styles.container}>
      <Header1x2x title={'Tasks List'} />
      <SearchInput containerStyle={{marginHorizontal: mvs(20)}} />

      <View style={styles.container}>
        <FlatList
          data={[
            {
              title: 'Compilance',
              text1: 'Client:',
              text2: 'Irfan Khan',
              stageheading: 'Stage:',
              stagetext: 'Not Started',
              Tasktypehedaer: 'Task Type:',
              tasktypetext: 'One Time',
              dateheader: 'Created At:',
              datetext: 'Thu,Marhc 14/23, 12:35 pm',
              deadlineheader: 'Deadline:',
              deadlinetext: 'Fri,Mar 17/23',
            },
            {
              title: 'Compilance',
              text1: 'Client:',
              text2: 'Irfan Khan',
              stageheading: 'Stage:',
              stagetext: 'Not Started',
              Tasktypehedaer: 'Task Type:',
              tasktypetext: 'One Time',
              dateheader: 'Created At:',
              datetext: 'Thu,Marhc 14/23, 12:35 pm',
              deadlineheader: 'Deadline:',
              deadlinetext: 'Fri,Mar 17/23',
            },
            {
              title: 'Compilance',
              text1: 'Client:',
              text2: 'Irfan Khan',
              stageheading: 'Stage:',
              stagetext: 'Not Started',
              Tasktypehedaer: 'Task Type:',
              tasktypetext: 'One Time',
              dateheader: 'Created At:',
              datetext: 'Thu,Marhc 14/23, 12:35 pm',
              deadlineheader: 'Deadline:',
              deadlinetext: 'Fri,Mar 17/23',
            },
          ]}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item, index}) => {
            const Icon = SVGS[item.icon];
            return (
              <TaskListCard item={item}>
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
              </TaskListCard>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          // columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </View>
  );
};
export default TaskList;
