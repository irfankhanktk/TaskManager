import Header1x2x from 'components/atoms/clientslistheader/header-1x-2x';
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

const Deapartments = props => {
  return (
    <View style={styles.container}>
      <Header1x2x title={'Departments'} />
      <SearchInput containerStyle={{marginHorizontal: mvs(20)}} />
      <ScrollView style={styles.contentContainerStyle}>
        <DepartmentCard labelFlex={0.7} item={item}></DepartmentCard>
      </ScrollView>
    </View>
  );
};
export default Deapartments;
