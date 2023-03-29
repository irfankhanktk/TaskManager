import {useIsFocused} from '@react-navigation/native';
import Header1x2x from 'components/atoms/clientslistheader/header-1x-2x';
// import AppointmentCard from 'components/molecules/dashboard-card';
import {SearchInput} from 'components/atoms/inputs';
import {Loader} from 'components/atoms/loader';
import ClientlistCard from 'components/molecules/Clientlist-card';
import {EmptyList} from 'components/molecules/empty-list';
import ClientDetailsModal from 'components/molecules/modals/client-details';
import EditClientModal from 'components/molecules/modals/edit-client-modal';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import {
  addClient,
  deleteClient,
  editClientList,
  getClientList,
  getDepartmentList,
  getUserList,
} from 'services/api/api-actions';
import styles from './styles';

const ClientList = props => {
  const [loading, setLoading] = React.useState(true);

  const [clientList, setClientList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchList, setSearchList] = React.useState([]);

  const [selectedClient, setSelectedClient] = React.useState({});
  const [showClient, setShowClient] = React.useState(false);
  const isFocus = useIsFocused();
  const getClients = async () => {
    try {
      // setLoading(true);
      const res = await getClientList();
      // console.log('res of userlist ==>>>>>', res);
      setClientList(res?.allClients || []);
    } catch (error) {
      console.log('error=>', error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    // ()();
    getClients();
  }, [isFocus]);
  React.useEffect(() => {
    if (searchTerm?.trim()?.length) {
      const filtered = clientList?.filter(item => {
        const cond =
          searchTerm === '' ||
          item?.client_name?.match(new RegExp(searchTerm, 'i'));
        if (cond) return item;
      });
      setSearchList(filtered);
    }
  }, [searchTerm]);

  // const onSave = async () => {
  //   try {
  //     setSaveLoading(true);
  //     const res = selectedDepartment?.id
  //       ? await editClientList({
  //           id: selectedClient?.id,
  //           client_name: selectedClient?.client_name,
  //           c_email: selectedClient?.c_email,
  //           c_mobile_no: selectedClient?.c_mobile_no,
  //           address_1: selectedClient?.address_1,
  //           address_2: selectedClient?.address_2,
  //           cp_name: selectedClient?.cp_name,
  //           cp_email: selectedClient?.cp_email,
  //           cp_mobile_no: selectedClient?.cp_mobile_no,
  //         })
  //       : await addClient({
  //           client_name: selectedClient?.client_name,
  //           c_email: selectedClient?.c_email,
  //           c_mobile_no: selectedClient?.c_mobile_no,
  //           address_1: selectedClient?.address_1,
  //           address_2: selectedClient?.address_2,
  //           cp_name: selectedClient?.cp_name,
  //           cp_email: selectedClient?.cp_email,
  //           cp_mobile_no: selectedClient?.cp_mobile_no,
  //         });
  //     Alert.alert('Success', 'Saved Successfully');
  //     await getDepartments();

  //     console.log('res of edit client', res);
  //   } catch (error) {
  //     console.log('error=>', error);
  //   } finally {
  //     setSaveLoading(false);
  //     setShowClientDetails(false);
  //   }
  // };
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
            const res = await deleteClient({id: id});
            Alert.alert('Success', 'Client Deleted Successfully');

            await getClients();
            console.log('res of edit clients', res);
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
        title={'Client List'}
        onPressAdd={() => {
          navigate('EditClient');
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
            data={searchTerm?.trim()?.length ? searchList : clientList}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({item, index}) => {
              return (
                <ClientlistCard
                  onPress={() => {
                    setShowClient(true);
                    setSelectedClient(item);
                  }}
                  onPressEdit={() => {
                    navigate('EditClient', {item: item});
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
      <ClientDetailsModal
        visible={showClient}
        department={selectedClient}
        onClose={setShowClient}
      />
      {/* <EditClientModal
        visible={showClientDetails}
        department={selectedClient}
        onClose={setShowClientDetails}
        onChange={setSelectedClient}
        onPressSave={() => onSave()}
        loading={saveLoading}
      /> */}
    </View>
  );
};
export default ClientList;
