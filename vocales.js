import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, View, Image } from 'react-native';
import { DarkTheme, useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export default function vocales() {
  const nav = useNavigation();
  const drawerStatus = useDrawerStatus();
  console.log(drawerStatus);

  return (

    
    <View style={styles.container}>
  <View>
  <Text style={styles.titulo} >Aprende las vocales</Text>
  </View>
     <View style={styles.caja}>
      <Image
      source={{uri: 'http://3.bp.blogspot.com/-AXZSrKXKg4Y/V5qbNlZc-sI/AAAAAAAAAAk/yAZ-YsrgBJ8vAHZ2Ypl7_SiQ8DMU7yeAgCK4B/s1600/Banner_VocalesDivertidas-1024x347.jpg'}}
      style= {styles.image} />
      </View>
      <View>
        <View style={styles.separacion}>
      <Image
      source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvU0fDkWmZ3ZjXAWQ3hZ70awWkIx_E7kVJI_PezdzSxPIltcTrL_JolCg99SuJW1F4lNI&usqp=CAU'}}
      style= {styles.images} />
      </View>
        <View >
      <Image
      source={{uri: 'https://centroderecursos.educarchile.cl/bitstream/handle/20.500.12246/41038/articles-101696_imagen_0.jpg?sequence=1&isAllowed=y'}}
      style= {styles.images} />
      </View>
      <View >
      <Image
      source={{uri: 'https://centroderecursos.educarchile.cl/bitstream/handle/20.500.12246/41034/articles-101700_imagen_0.jpg?sequence=1&isAllowed=y'}}
      style= {styles.images} />
      </View>
      <View >
      <Image
      source={{uri: 'https://centroderecursos.educarchile.cl/bitstream/handle/20.500.12246/41020/articles-101706_imagen_0.jpg?sequence=1&isAllowed=y'}}
      style= {styles.images} />
      </View>
      <View >
      <Image
      source={{uri: 'https://static.vecteezy.com/system/resources/previews/003/228/499/non_2x/hand-sign-language-alphabet-letter-u-illustration-vector.jpg'}}
      style= {styles.images} />
      </View>
</View>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:Dimensions.get('window').width
 
  },
  image: {
    width: 1024, height: 347
    
  },
  images: {
    width: 400, height: 400
    
  },
  
  caja: {
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
    flex: 0.4,
    backgroundColor: "beige",
    borderWidth: 5,
    padding: 20,
    marginTop: 2000,
  },
titulo:{

  textAlign: 'center',
  fontWeight: 'bold',
  color: 'black',
  fontSize: 50,



},
tex:{

 
  fontSize: 30,
  textAlign:'center',
  marginTop:150,
  marginHorizontal:10,
  flex: 0.3,
  justifyContent: 'center',

},
separacion:{

 
 
  marginTop:350,
 

},
});