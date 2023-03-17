import Header1x2x from 'components/atoms/taskdetailsheader/header-1x-2x';
import {Loader} from 'components/atoms/loader';
// import AppointmentCard from 'components/molecules/dashboard-card';
import {EmptyList} from 'components/molecules/empty-list';
import {colors} from 'config/colors';
import {APPOINTMNETSTATUS} from 'config/constants';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {goBack, navigate} from 'navigation/navigation-ref';
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
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
import TaskdetailsCard from 'components/molecules/taskdetails-card ';
import Bold from 'typography/bold-text';
import DescriptionCard from 'components/molecules/description-card';
import {ScrollView} from 'react-native-gesture-handler';
import {Row} from 'components/atoms/row';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Medium from 'typography/medium-text';
const item = {
  title: 'Compilance',
  text1: 'Client:',
  text2: 'Irfan Khan',
  stageheading: 'Stage:',
  stagetext: 'Not Started',
  Tasktypehedaer: 'Task Type:',
  tasktypetext: 'One Time',
  dateheader: 'Created At:',
  datetext: 'Thu,Marhc 14/23, 12:35 pm ',
  teamheader: 'Team:',
  teamtext: 'Ali Abdullah',
  workingdepheader: 'Working Department:',
  workingdeptext: 'Developer',
  deadlineheader: 'Deadline:',
  deadlinetext: 'Fri,Mar 17/23',
};

const TaskListDetails = props => {
  return (
    <View style={styles.container}>
      <Header1x2x title={'Tasks List View'} />

      <ScrollView style={styles.contentContainerStyle}>
        <TaskdetailsCard labelFlex={0.7} item={item}></TaskdetailsCard>

        <Bold label={'Details'} color={colors.black} fontSize={mvs(20)} />
        <DescriptionCard />
        <Row style={{marginTop: mvs(20)}}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.attachmentcolor,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: mvs(10),
              width: '45%',
              paddingHorizontal: mvs(12),
              padding: mvs(10),
              // borderWidth: 1,
            }}>
            <Ionicons
              name={'ios-document-attach-sharp'}
              size={mvs(30)}
              color={colors.white}
            />
            <Medium
              label={'Attachements'}
              fontSize={mvs(14)}
              color={colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.commentscolor,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: mvs(10),
              width: '45%',
              paddingHorizontal: mvs(12),
              padding: mvs(10),
            }}>
            <MaterialCommunityIcons
              name={'message-reply-text-outline'}
              size={mvs(30)}
              color={colors.white}
            />
            <Medium
              label={'Comments'}
              fontSize={mvs(14)}
              color={colors.white}
            />
          </TouchableOpacity>
        </Row>
      </ScrollView>
    </View>
  );
};
export default TaskListDetails;
