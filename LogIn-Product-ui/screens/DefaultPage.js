import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DefaultPage = ({ route }) => {
  const [data, setData] = useState([]);
  var [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataByType();
  }, []);

  const getDataByType = async () => {
    route.params.title == 'All'
      ? await axios
          .get(`http://192.168.86.6:3000/product/getall?offset=${offset}`)
          .then((response) => {
            setData(data.concat(response.data));
            setLoading(false);
          })
          .catch((e) => {
            if (axios.isCancel(e)) return;
          })
      : await axios
          .get(
            `http://192.168.86.6:3000/product/getbytype?type=${route.params.title}&offset=${offset}`
          )
          .then((response) => {
            setData(data.concat(response.data));
            setLoading(false);
          })
          .catch((e) => {
            if (axios.isCancel(e)) return;
          });
  };

  //   const handleEndReached = () => {
  //     setOffset(offset + 5);
  //     setLoading(true);
  //     getDataByType();
  //   };

  //   const renderFooter = () => {
  //     return (
  //       <View
  //         style={{ alignItems: 'center', marginVertical: 10, marginBottom: 60 }}
  //       >
  //         <ActivityIndicator size="small" />
  //         <Text>Loading...</Text>
  //       </View>
  //     );
  //   };

  const handleOnLoadMore = () => {
    setOffset((offset += 6));
    setLoading(true);
    getDataByType();
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          marginVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            handleOnLoadMore();
          }}
        >
          <Text style={{ color: 'blue', fontSize: 20 }}>Load more</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
        <FlatList
          spacing={10}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          //   onEndReached={handleEndReached}
          //   onEndReachedThreshold={1}
          //   ListFooterComponent={loading ? renderFooter : null}
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => (
            <View
              style={{
                paddingVertical: 10,
                width: '100%',
                borderWidth: 1,
                borderColor: 'gray',
                paddingHorizontal: 10,
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 17 }}>{'ID: ' + item.id}</Text>
              <Text style={{ fontSize: 17 }}>{'Name: ' + item.name}</Text>
              <Text style={{ fontSize: 17 }}>{'Type: ' + item.danh_muc}</Text>
              <Text style={{ fontSize: 17 }}>{'Color: ' + item.color}</Text>
              <Text style={{ fontSize: 17 }}>{'Price: ' + item.price}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default DefaultPage;

const styles = StyleSheet.create({
  TVSubMenuContainer: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'flex-start',
  },
  TVSubMenuText: {
    marginRight: 10,
    color: 'black',
    fontSize: 18,
  },
});
