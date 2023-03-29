import Header1x2x from 'components/atoms/clientslistheader/header-1x-2x';
// import AppointmentCard from 'components/molecules/dashboard-card';
import {SearchInput} from 'components/atoms/inputs';
import {Loader} from 'components/atoms/loader';
import UserListCard from 'components/molecules/UserList-card ';
import {EmptyList} from 'components/molecules/empty-list';
import {mvs} from 'config/metrices';
import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import {deleteUser, getUserList} from 'services/api/api-actions';
import styles from './styles';
import {useIsFocused} from '@react-navigation/native';
import UserDetailsModal from 'components/molecules/modals/user-details-modal';
import {navigate} from 'navigation/navigation-ref';

const UserList = props => {
  const [loading, setLoading] = React.useState(true);
  const [userList, setUserList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchList, setSearchList] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState({});
  const [showUser, setShowUser] = React.useState(false);
  const isFocus = useIsFocused();

  const getUsers = async () => {
    try {
      // setLoading(true);
      const res = await getUserList();
      console.log('res of userlist ==>>>>>', res);
      setUserList(res?.allUsers || []);
    } catch (error) {
      console.log('error=>', error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    // ()();
    getUsers();
  }, [isFocus]);
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
            const res = await deleteUser({id: id});
            Alert.alert('Success', 'User Deleted Successfully');

            await getUsers();
            console.log('res of usresdata', res);
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
        title={'User List'}
        onPressAdd={() => {
          navigate('EditUser');
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
            ListEmptyComponent={<EmptyList label={'no_result'} />}
            data={searchTerm?.trim()?.length ? searchList : userList}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({item, index}) => {
              return (
                <UserListCard
                  onPress={() => {
                    setShowUser(true);
                    setSelectedUser(item);
                  }}
                  onPressEdit={() => {
                    navigate('EditUser', {item: item});
                    // setShowClientDetails(true);
                    // setSelectedClient(item);
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
      <UserDetailsModal
        visible={showUser}
        user={selectedUser}
        onClose={setShowUser}
      />
    </View>
  );
};
export default UserList;
