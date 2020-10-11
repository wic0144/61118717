// /* This is an Login Registration example from https://aboutreact.com/ */
// /* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React
// import React from 'react';

// //Import all required component
// import { View, Text ,TextInput,SafeAreaView } from 'react-native';
// import Mytextinput from './component/Mytext';
// import Mybutton from './component/Mybutton';

// const StaffScreen = () => {

//   Search_Function = ({}) => {

//     fetch('http://172.16.29.136/tour/Search.php', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         // Showing response message coming from server after inserting records.
//         console.log(responseJson)
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//     <View style={{ flex: 1, backgroundColor: 'white' }}>
//       <View style={{ flex: 1 }}>
//         <Mytextinput
//           placeholder="Enter User Id"
//           // onChangeText={(inputUserId) => setInputUserId(inputUserId)}
//           style={{ padding: 10 }}
//         />
//         <Mybutton title="Search Staff" customClick={Search_Function}/>
//       </View>
//       <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>

//       </Text>
//       <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
//         www.aboutreact.com
//       </Text>
//     </View>
//   </SafeAreaView>
//   )
// };

// export default StaffScreen;
import React, {Component} from 'react';
import {Text, ScrollView, View, FlatList, StyleSheet} from 'react-native';
import Mytextinput from './component/Mytext';
import Mybutton from './component/Mybutton';

export default class CustomerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Customer: [],
    };
  }
  _renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item.addr} </Text>
        <Text>{item.phone}</Text>
      </View>
    );
  };

  componentDidMount() {
    const url = 'http://172.16.156.133/tour/getAllCustomer_api.php';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          Customer: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView>
        <View >
          <Mytextinput
            placeholder="Enter Customer Id"
            // onChangeText={(inputUserId) => setInputUserId(inputUserId)}
            style={{padding: 10}}
          />
          <Mybutton title="Filter by date" />
          <Mybutton title="Filter by TourName" />
        </View>
        <View
          style={{
            borderRadius: 20,
            paddingVertical: 20,
            backgroundColor: 'white',
            alignItems:"center"
          }}>
          <Text>Customer</Text>

          <FlatList
            horizontal={false}
            data={this.state.Customer}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Text style={{fontSize: 15, alignItems: 'center'}}>
                {'\n'}
                  ID :{item.CID}
                {'\n'}
                <Text style={{fontSize: 15, alignItems: 'center'}}>
                  Name : {item.CName}
                </Text>{' '}
                {'\n'}
                <Text style={{fontSize: 15, alignItems: 'center'}}>
                  Tel :{item.CTelephone}
                </Text>
                {'\n'}
                <Text style={{fontSize: 15, alignItems: 'center'}}>
                  Sex : {item.CSex}
                </Text>
                {'\n'}
              </Text>
            )}
          />

          <View style={{height: 20}} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  divCategorie: {
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  titleCatg: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
