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

export default class StaffScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Staff: [],
      Keyword:'',
      Comment:[]
    };
  }
  Search_Function = () => {
    
    fetch('http://172.16.29.136/tour/getOneStaff_api.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Keyword: this.state.Keyword,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        
        this.setState({
          isLoading: false,
          Keyword: responseJson,
          
        });
        console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    const url = 'http://172.16.156.133/tour/getAllStaff_api.php'
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
console.log(responseJson)
        this.setState({
          isLoading: false,
          Staff: responseJson,
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
            placeholder="Enter User Id"
            onChangeText={(data) => this.setState({Keyword: data}) }

            style={{padding: 10}}
          />
          <Mybutton title="Search Staff" onPress={this.Search_Function}/>
        </View>
        <View
          style={{
            borderRadius: 20,
            paddingVertical: 20,
            backgroundColor: 'white',
            alignItems:"center"
          }}>
          <Text>Staff</Text>

          <FlatList
            horizontal={false}
            data={this.state.Staff}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => 
            (
              <Text style={{fontSize: 15, alignItems: 'center',justifyContent:"center"}}>
                
                {'\n'}
             
                {item.SPhoto}
                {'\n'}
                <Text style={{fontSize: 15, alignItems: 'center'}}>
                  Id : {item.SID}
                </Text>{' '}
                {'\n'}
                <Text style={{fontSize: 15, alignItems: 'center'}}>
                  Name :{item.SName}
                </Text>
                {'\n'}
                <Text style={{fontSize: 15, alignItems: 'center'}}>
                  TEL : {item.STelephone}
                </Text>
                {'\n'}
<Mytextinput title='input Comment'  onChangeText={(data) => this.setState({Comment: data}) } style={{width:200}}/>{'\n'}
<Mybutton title='Comment'style={{width:200}} onPress={()=>{console.log(this.state.Comment)}}/>
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
