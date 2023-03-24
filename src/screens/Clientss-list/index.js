import Header1x2x from 'components/atoms/clientslistheader/header-1x-2x';
// import AppointmentCard from 'components/molecules/dashboard-card';
import {SearchInput} from 'components/atoms/inputs';
import {Loader} from 'components/atoms/loader';
import ClientlistCard from 'components/molecules/Clientlist-card';
import {EmptyList} from 'components/molecules/empty-list';
import {mvs} from 'config/metrices';
import React from 'react';
import {FlatList, View} from 'react-native';
import {getClientList, getUserList} from 'services/api/api-actions';
import styles from './styles';

const ClientList = props => {
  const [loading, setLoading] = React.useState(true);
  const [clientList, setClientList] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchList, setSearchList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getClientList();
        console.log('res of clientlist ==>>>>>', res);
        setClientList(res?.allClients || []);
      } catch (error) {
        console.log('error=>', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  React.useEffect(() => {
    if (searchTerm?.trim()?.length) {
      const filtered = clientList?.filter(item => {
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
      <Header1x2x title={'Client List'} />
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
              return <ClientlistCard item={item}></ClientlistCard>;
            }}
            keyExtractor={(item, index) => index.toString()}
            // columnWrapperStyle={{justifyContent: 'space-between'}}
          />
        )}
      </View>
    </View>
  );
};
export default ClientList;
