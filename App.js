import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Image, ScrollView} from 'react-native'
// import Swiper from 'react-native-swiper'
import ViewPager from '@react-native-community/viewpager';

const Styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container:{
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    width:'90%',
    alignSelf:'center',
    marginVertical:15
  },
  header : {
    backgroundColor:'black',
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    height:50,
  },
  title:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  viewBanner: {
    width:'100%',
    height:200,
    backgroundColor:'white'
  },
  banner:{
    width:'100%',
    height:200
  },
  boxPaket:{
    width:100,
    height:70,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:10
  },
  textPaket:{
    backgroundColor:'rgba(0,0,0,0.5)',
    paddingHorizontal:20,
    paddingVertical:5,
    color:'white',
    fontSize:14,
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  imgMateri:{
    width:100,
    height:70,
    justifyContent:'center',
    alignItems:'center',
  },
  titleSection:{
    fontSize:20,
    borderBottomWidth:1,
    width:80,
    marginBottom:10
  },
  boxMateri:{
    width:100,
    height:130,
    marginRight:10
  },
  titleMateri:{
    fontSize:14,
    fontWeight:'bold',
  },
  wrapHarga:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  hargaCoret:{
    fontSize:8,
    textDecorationLine:"line-through"
  },
  hargaReal:{
    fontSize:12
  }
})

function App(props) {
  return (
    <View style={Styles.wrapper}>
       <View style={Styles.header}>
          <Text style={Styles.title}>Logo Shop</Text>
        </View>
        
      <ScrollView>
       
        <View>
          <ViewPager showPageIndicator={true} style={Styles.viewBanner} initialPage={0}>
            <View key="1">
              <Image style={Styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
            </View>
            <View key="2">
              <Image style={Styles.banner} source={require('./src/images/banner-babastudio.webp')}/>
            </View>
          </ViewPager>
        </View>

        <View style={[Styles.container, Styles.shadow]}>
          <Text style={Styles.titleSection}>Package</Text>
          <ScrollView horizontal={true}>
            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')} style={Styles.boxPaket}>
              <Text style={Styles.textPaket}>Website</Text>
            </ImageBackground>
            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')} style={Styles.boxPaket}>
              <Text style={Styles.textPaket}>Desain</Text>
            </ImageBackground>
            <ImageBackground source={require('./src/images/paket-internet-marketing.webp')} style={Styles.boxPaket}>
              <Text style={Styles.textPaket}>Mobile</Text>
            </ImageBackground>
          </ScrollView>
        </View>

        <View style={[Styles.container, Styles.shadow]}>
          <Text style={Styles.titleSection}>Popular</Text>
          <ScrollView horizontal={true}>
            <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={[Styles.container, Styles.shadow]}>
          <Text style={Styles.titleSection}>New</Text>
          <ScrollView horizontal={true}>
          <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
            <View style={Styles.boxMateri}>
              <Image source={require('./src/images/paket-internet-marketing.webp')} style={Styles.imgMateri}/>
              <Text style={Styles.titleMateri}>HTML & CSS Fundamental</Text>
              <View style={Styles.wrapHarga}>
                <Text style={Styles.hargaCoret}>Rp 100.000</Text>
                <Text style={Styles.hargaReal}>Rp 80.000</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={Styles.header}>
          <Text style={Styles.title}>@copyright 2019</Text>
        </View>

      </ScrollView>
    </View>
  );
}

export default App;