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
  getTaskList,
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
  const {userInfo} = useAppSelector(s => s?.user);
  console.log(userInfo);
  const [loading, setLoading] = React.useState(true);
  const [taskList, setTaskList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchList, setSearchList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getTaskList();
        console.log('res of tasklist ==>>>>>', res);
        setTaskList(res?.tasksList || []);
      } catch (error) {
        console.log('error=>', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  React.useEffect(() => {
    if (searchTerm?.trim()?.length) {
      const filtered = taskList?.filter(item => {
        const cond =
          searchTerm === '' ||
          item?.s_task_name?.match(new RegExp(searchTerm, 'i'));
        if (cond) return item;
      });
      setSearchList(filtered);
    }
  }, [searchTerm]);
  return (
    <View style={styles.container}>
      <Header1x2x title={'Tasks List'} />
      <SearchInput
        containerStyle={{marginHorizontal: mvs(20)}}
        onChangeText={setSearchTerm}
      />

      <View style={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            ListEmptyComponent={<EmptyList label={'no_result'} />}
            data={searchTerm?.trim()?.length ? searchList : taskList}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({item, index}) => {
              return <TaskListCard item={item}></TaskListCard>;
            }}
            keyExtractor={(item, index) => index.toString()}
            // columnWrapperStyle={{justifyContent: 'space-between'}}
          />
        )}
      </View>
    </View>
  );
};
export default TaskList;
