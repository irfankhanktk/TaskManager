import Header1x2x from 'components/atoms/clientslistheader/header-1x-2x';
// import AppointmentCard from 'components/molecules/dashboard-card';
import {SearchInput} from 'components/atoms/inputs';
import {Loader} from 'components/atoms/loader';
import UserListCard from 'components/molecules/UserList-card ';
import {EmptyList} from 'components/molecules/empty-list';
import {mvs} from 'config/metrices';
import React from 'react';
import {FlatList, View} from 'react-native';
import {getDepartmentList, getUserList} from 'services/api/api-actions';
import styles from './styles';
import DepartmentlistCard from 'components/molecules/departmentlist-card';
import DropdownModal from 'components/molecules/modals/dropdown-modal';
import CartModal from 'components/molecules/modals/cart-modal';

const DepartmentList = props => {
  const [loading, setLoading] = React.useState(true);
  const [departmentList, setDepartmentList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchList, setSearchList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getDepartmentList();
        // console.log('res of userlist ==>>>>>', res);
        setDepartmentList(res?.allDepartments || []);
      } catch (error) {
        console.log('error=>', error);
      } finally {
        setLoading(false);
      }
    })();
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
  return (
    <View style={styles.container}>
      <Header1x2x title={'Departments'} />
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
              return <DepartmentlistCard item={item}></DepartmentlistCard>;
            }}
            keyExtractor={(item, index) => index.toString()}
            // columnWrapperStyle={{justifyContent: 'space-between'}}
          />
        )}
      </View>
      <CartModal visible />
    </View>
  );
};
export default DepartmentList;
