import Header1x2x from 'components/atoms/clientslistheader/header-1x-2x';
// import AppointmentCard from 'components/molecules/dashboard-card';
import {SearchInput} from 'components/atoms/inputs';
import {Loader} from 'components/atoms/loader';
import UserListCard from 'components/molecules/UserList-card ';
import {EmptyList} from 'components/molecules/empty-list';
import {mvs} from 'config/metrices';
import React from 'react';
import {FlatList, View} from 'react-native';
import {getUserList} from 'services/api/api-actions';
import styles from './styles';

const UserList = props => {
  const [loading, setLoading] = React.useState(true);
  const [userList, setUserList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchList, setSearchList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getUserList();
        console.log('res of userlist ==>>>>>', res);
        setUserList(res?.allUsers || []);
      } catch (error) {
        console.log('error=>', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  React.useEffect(() => {
    if (searchTerm?.trim()?.length) {
      const filtered = userList?.filter(item => {
        const cond =
          searchTerm === '' ||
          item?.username?.match(new RegExp(searchTerm, 'i'));
        if (cond) return item;
      });
      setSearchList(filtered);
    }
  }, [searchTerm]);
  return (
    <View style={styles.container}>
      <Header1x2x title={'User List'} />
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
            data={searchTerm?.trim()?.length ? searchList : userList}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({item, index}) => {
              return <UserListCard item={item}></UserListCard>;
            }}
            keyExtractor={(item, index) => index.toString()}
            // columnWrapperStyle={{justifyContent: 'space-between'}}
          />
        )}
      </View>
    </View>
  );
};
export default UserList;
