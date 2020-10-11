import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import Mytextinput from './Mytext'
const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}

export default class SwiperComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
          <View style={styles.slide1}>
            <Mytextinput placeholder='enter name'/>
          <Image style={styles.tinyLogo}source={require('./img/2.jpg')}/>
          </View>
          <View style={styles.slide2}>
          <Mytextinput placeholder='enter name'/>
          <Image style={styles.tinyLogo}source={require('./img/3.jpg')}/>
          </View>
          <View style={styles.slide3}>
          <Mytextinput placeholder='enter name'/>
          <Image style={styles.tinyLogo}source={require('./img/4.jpg')}/>
          </View>
        </Swiper>

      </View>
    )
  }
}