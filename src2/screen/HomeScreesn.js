import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'

const HomeScreesn = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 28 }}>Explore</Text>
        <Text style={{ color: '#fff', fontWeight: 300, fontSize: 24 }}>Search for a pet</Text>
        <View style={styles.edtBorder}>
          <Image source={require('../image/seach.png')} style={{ width: 32, height: 32 }} />
          <TextInput placeholder='Enter you password' style={{ flex: 1 , textAlign:'center'}} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ width: 80, height: 80,  borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#bab8b8', }}>
            <Text>Cats</Text>
          </View>
          <View style={{ width: 80, height: 80,  borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFB228', }}>
            <Text>Dogs</Text>
          </View>
          <View style={{ width: 80, height: 80,  borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#bab8b8', }}>
            <Text>Birds </Text>
          </View>
          <View style={{ width: 80, height: 80,  borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#bab8b8', }}>
            <Text>Others</Text>
          </View>
        </View>
        <View style={{ width: 350, height: 180, backgroundColor: '#FFD2BB', flexDirection: 'row', justifyContent: 'space-around', borderRadius: 15, marginTop: 15, alignItems: 'center' }}>
          <View >
            <Image source={require('../image/dog1.png')} style={{ width: 120, height: 150 }} />
          </View>
          <View style={{}}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Coco</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Coat</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>Medium</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Age</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>3yrs</Text>
          </View>
          <View style={{}}>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>Female</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Origin</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>Canada</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Weight</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>4 pounds</Text>

          </View>
        </View>
        <View style={{ width: 350, height: 180, backgroundColor: '#FFD2BB', flexDirection: 'row', justifyContent: 'space-around', borderRadius: 15, marginTop: 15, alignItems: 'center' }}>
          <View >
            <Image source={require('../image/dog1.png')} style={{ width: 120, height: 150 }} />
          </View>
          <View style={{}}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Coco</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Coat</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>Medium</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Age</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>3yrs</Text>
          </View>
          <View style={{}}>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>Female</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Origin</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>Canada</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Weight</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>4 pounds</Text>

          </View>
        </View>
        <View style={{ width: 350, height: 180, backgroundColor: '#FFD2BB', flexDirection: 'row', justifyContent: 'space-around', borderRadius: 15, marginTop: 15, alignItems: 'center' }}>
          <View >
            <Image source={require('../image/dog1.png')} style={{ width: 120, height: 150 }} />
          </View>
          <View style={{}}>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Coco</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Coat</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>Medium</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Age</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>3yrs</Text>
          </View>
          <View style={{}}>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>Female</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Origin</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>Canada</Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>Weight</Text>
            <Text style={{ color: '#DF0054', fontSize: 18, fontWeight: 'bold' }}>4 pounds</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreesn

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f26d6f',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    
  },
  edtBorder: {
    width: 350,
    height: 55,
    backgroundColor: '#fff',
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 25,
    marginTop: 20
  },
})