/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text,StyleSheet ,TouchableOpacity,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SwiperComponent from './component/SwiperComponent'
import StarRating from './component/StarRating'
import Icon from 'react-native-ionicons';
import Swiper from 'react-native-swiper';
import Mybutton from './component/Mybutton';


const HomeScreen = () => {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center'}}>
      <SwiperComponent/>
    </View>
    
  
     < View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Restaurant'})}
          >
          <View style={styles.categoryIcon}>
            <Icon name="ios-restaurant" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Fastfood Center'})
          }>
          <View style={styles.categoryIcon}>
            <Icon
              name="water"
              size={35}
              color="#FF6347"
            />
          </View>
          <Text style={styles.categoryBtnTxt}>Staff</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Icon name="walk" size={35} color="#FF6347" />
          </View>
          <Text style={styles.categoryBtnTxt}>Custormer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
         Package Forest Tour 
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./component/img/1.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>วิสาหกิจชุมชนกลุ่มอนุรักษ์ป่าชายเลนบ้านแหลมโฮมสเตย์</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
            https://thailandtourismdirectory.go.th/th/info/attraction/detail/itemid/21344 {'\n'}
            <TouchableOpacity>
              <Mybutton title='Booking' padding={50}/>
              
            </TouchableOpacity>
              
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./component/img/2.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place{'\n'}
              <TouchableOpacity>
              <Mybutton title='Booking' padding={50}/>
              
            </TouchableOpacity>
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./component/img/3.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Amazing Food Place</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Amazing description for this amazing place{'\n'}
              <TouchableOpacity>
              <Mybutton title='Booking' padding={50}/>
              
            </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
    
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 180,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  
});
