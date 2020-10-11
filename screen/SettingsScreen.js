import React, { Component } from 'react';
import {  FlatList,View,Text} from 'react-native';

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Staff: [],
      data:{
        Head:'วิสาหกิจชุมชนกลุ่มอนุรักษ์ป่าชายเลนบ้านแหลมโฮมสเตย์',
        Description:'แหล่งท่องเที่ยวแห่งเดียวที่มีจุดเด่นที่สุดในประเทศ ที่มีการสปาโคลนสดในทะเล',
        Contact:'065-5137273'
      }
    };
  }
  
  render() {
    return (
      <View>
        <FlatList
      horizontal={false}
      data={this.state.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => 
      (
        <Text style={{fontSize: 15, alignItems: 'center'}}>
          
          {'\n'}
       
          {item.Head}
          {'\n'}
          <Text style={{fontSize: 15, alignItems: 'center'}}>
            Id : {item.Description}
          </Text>{' '}
          {'\n'}
          <Text style={{fontSize: 15, alignItems: 'center'}}>
            Name :{item.Contact}
          </Text>
          {'\n'}
        </Text>
      )}
    /></View>
      
    );
  }
}