import Header1x2x from 'components/atoms/clientslistheader/header-1x-2x';
// import AppointmentCard from 'components/molecules/dashboard-card';
import {SearchInput} from 'components/atoms/inputs';
import {Loader} from 'components/atoms/loader';
import UserListCard from 'components/molecules/UserList-card ';
import {EmptyList} from 'components/molecules/empty-list';
import {mvs} from 'config/metrices';
import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import {
  addDepartment,
  addDepartmentList,
  deleteDepartment,
  editDepartmentList,
  getDepartmentList,
  getUserList,
} from 'services/api/api-actions';
import styles from './styles';
import DepartmentlistCard from 'components/molecules/departmentlist-card';
import DropdownModal from 'components/molecules/modals/dropdown-modal';

import DepartmentModal from 'components/molecules/modals/department-modal';
import EditDepartmentModal from 'components/molecules/modals/edit-department-modal';

const DepartmentList = props => {
  const [loading, setLoading] = React.useState(true);
  const [saveLoading, setSaveLoading] = React.useState(false);
  const [departmentList, setDepartmentList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchList, setSearchList] = React.useState([]);
  const [showDepartmentDetails, setShowDepartmentDetails] =
    React.useState(false);
  const [selectedDepartment, setSelectedDepartment] = React.useState({});
  const [showDepartment, setShowDepartment] = React.useState(false);

  const getDepartments = async () => {
    try {
      // setLoading(true);
      const res = await getDepartmentList();
      // console.log('res of userlist ==>>>>>', res);
      setDepartmentList(res?.allDepartments || []);
    } catch (error) {
      console.log('error=>', error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    // ()();
    getDepartments();
  }, []);
  React.useEffect(() => {
    if (searchTerm?.trim()?.length) {
      const filtered = departmentList?.filter(item => {
        const cond =
          searchTerm === '' ||
          item?.dep_title?.match(new RegExp(searchTerm, 'i'));
        if (cond) return item;
      });
      setSearchList(filtered);
    }
  }, [searchTerm]);

  const onSave = async () => {
    try {
      setSaveLoading(true);
      const res = selectedDepartment?.id
        ? await editDepartmentList({
            id: selectedDepartment?.id,
            dep_title: selectedDepartment?.dep_title,
            description: selectedDepartment?.description,
          })
        : await addDepartment({
            dep_title: selectedDepartment?.dep_title,
            description: selectedDepartment?.description,
          });
      Alert.alert('Success', 'Saved Successfully');
      await getDepartments();

      console.log('res of edit department', res);
    } catch (error) {
      console.log('error=>', error);
    } finally {
      setSaveLoading(false);
      setShowDepartmentDetails(false);
    }
  };
  const onDelete = async id => {
    Alert.alert('Delete', 'Are you sure you want to Delete?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: async () => {
          try {
            setLoading(true);
            const res = await deleteDepartment({id: id});
            Alert.alert('Success', 'Department Deleted Successfully');

            await getDepartments();
            console.log('res of edit department', res);
          } catch (error) {
            console.log('error=>', error);
          } finally {
            setLoading(false);
          }
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Header1x2x
        title={'Departments'}
        onPressAdd={() => {
          setShowDepartmentDetails(true);
          setSelectedDepartment({});
        }}
      />
      <SearchInput
        containerStyle={{marginHorizontal: mvs(20)}}
        onChangeText={setSearchTerm}
      />

      <View style={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <FlatList
            ListEmptyComponent={<EmptyList label={'No Result'} />}
            data={searchTerm?.trim()?.length ? searchList : departmentList}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({item, index}) => {
              return (
                <DepartmentlistCard
                  onPress={() => {
                    setShowDepartment(true);
                    setSelectedDepartment(item);
                  }}
                  onPressEdit={() => {
                    setShowDepartmentDetails(true);
                    setSelectedDepartment(item);
                  }}
                  item={item}
                  onPressDelete={() => onDelete(item?.id)}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            // columnWrapperStyle={{justifyContent: 'space-between'}}
          />
        )}
      </View>
      <DepartmentModal
        visible={showDepartment}
        department={selectedDepartment}
        onClose={setShowDepartment}
      />
      <EditDepartmentModal
        visible={showDepartmentDetails}
        department={selectedDepartment}
        onClose={setShowDepartmentDetails}
        onChange={setSelectedDepartment}
        onPressSave={() => onSave()}
        loading={saveLoading}
      />
    </View>
  );
};
export default DepartmentList;
