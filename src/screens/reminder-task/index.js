import Header1x2x from 'components/atoms/reminder-type-header/header-1x-2x';
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
import DepartmentCard from 'components/molecules/Department-card  ';
import PendingTaskCard from 'components/molecules/pending-task-card  ';
const item = {
  title: 'Department Name',
  title2: 'Area',
  text1: 'Prismatic Web:',
  text2: 'Irfan Khan',
  stageheading: 'Audit Department:',
  stagetext: 'Not Started',
  Tasktypehedaer: 'Corporate:',
  tasktypetext: 'One Time',
  dateheader: 'Tax Department:',
  datetext: 'Thu,Marhc 14/23, 12:35 pm ',
  teamheader: 'Account & Finance:',
  teamtext: 'Ali Abdullah',
  workingdepheader: 'HR:',
  workingdeptext: 'Developer',
  deadlineheader: 'Legal:',
  deadlinetext: 'Fri,Mar 17/23',
  marketingheader: 'Marketing:',
  marketingtext: 'Marketing Department',
  erpheader: 'Prismatic ERP:',
  erptext: 'Prismatic ERP',
  ipoheader: 'IPO:',
  ipotext: 'One time',
  tecxtadvheader: 'Tax Advisory:',
  taxadvictext: 'Thu,Marhc 14/23, 12:35 pm',
};

const ReminderTask = props => {
  return (
    <View style={styles.container}>
      <Header1x2x title={'Departments'} />

      <ScrollView style={styles.contentContainerStyle}>
        <Row
          style={{
            marginTop: mvs(5),
            // paddingHorizontal: mvs(20),
            // backgroundColor: 'red',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.attachmentcolor,
              paddingVertical: mvs(30),
              borderRadius: mvs(20),
              width: '45%',
              paddingHorizontal: mvs(12),
              padding: mvs(10),
              // borderWidth: 1,
            }}>
            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                paddingBottom: mvs(10),
              }}>
              <SVGS.Remindericon1 />
            </View>
            <Bold
              label={'UI/UX Design'}
              color={colors.white}
              fontSize={mvs(18)}
            />
            <Medium label={'2 Task'} color={colors.white} fontSize={mvs(11)} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.commentscolor,
              paddingVertical: mvs(30),
              borderRadius: mvs(20),
              width: '45%',
              paddingHorizontal: mvs(12),
              padding: mvs(10),
              // borderWidth: 1,
            }}>
            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                paddingBottom: mvs(10),
              }}>
              <SVGS.Remindericon2 />
            </View>
            <Bold
              label={'Development'}
              color={colors.white}
              fontSize={mvs(18)}
            />
            <Medium label={'2 Task'} color={colors.white} fontSize={mvs(11)} />
          </TouchableOpacity>
        </Row>
        <Bold
          label={'Pending task'}
          color={colors.black}
          fontSize={mvs(20)}
          style={{marginTop: mvs(20)}}
        />

        {/* <DepartmentCard labelFlex={0.7} item={item}></DepartmentCard> */}
      </ScrollView>
      <>
        <FlatList
          data={[
            {
              title: 'UI UX Design',
              text1: 'Mobile App Designer',
              text2: 'Deadline Date',
              stageheading: '01,04,2023',
              stagetext: '3 Days',
            },
            {
              title: 'UI UX Design',
              text1: 'Mobile App Designer',
              text2: 'Deadline Date',
              stageheading: '01,04,2023',
              stagetext: '3 Days',
            },
            {
              title: 'UI UX Design',
              text1: 'Mobile App Designer',
              text2: 'Deadline Date',
              stageheading: '01,04,2023',
              stagetext: '3 Days',
            },
          ]}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item, index}) => {
            const Icon = SVGS[item.icon];
            return (
              <PendingTaskCard item={item}>
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
              </PendingTaskCard>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          // columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </>
    </View>
  );
};
export default ReminderTask;
