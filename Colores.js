import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, View, Image } from 'react-native';
import { DarkTheme, useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export default function colores() {
  const nav = useNavigation();
  const drawerStatus = useDrawerStatus();
  console.log(drawerStatus);

  return (

    
    <View style={styles.container}>
  <View>
  <Text style={styles.titulo} >Aprende los Colores</Text>
  </View>
     <View style={styles.caja}>
     <View>
  <Text style={styles.titulo} >Aprende los Colores</Text>
  </View>
      <Image
      source={{uri: 'https://www.beedigital.es/wp-content/uploads/2020/09/26602c0baa5cee11201c9e394afa9950701133475-1.jpg'}}
      style= {styles.image} />
      </View>
      <View>
        <View style={styles.separacion}>
      <Image
      source={{uri: 'https://i.pinimg.com/564x/a9/8f/97/a98f97d06a10e93deb01cc4a1296308c.jpg'}}
      style= {styles.images} />
      </View>
        <View >
      <Image
      source={{uri: 'https://i.pinimg.com/236x/fb/46/2b/fb462b348b6c60c12620867c50d54365.jpg'}}
      style= {styles.images} />
      </View>
      <View >
      <Image
      source={{uri: 'https://i.pinimg.com/564x/59/63/58/59635843b9cefedb4877bc5fbb2f8203.jpg'}}
      style= {styles.images} />
      </View>
      <View >
      <Image
      source={{uri: 'https://i.pinimg.com/564x/70/bb/24/70bb2461a2cd126487332ce014742844.jpg'}}
      style= {styles.images} />
      </View>
      <View >
      <Image
      source={{uri: 'https://i.pinimg.com/564x/52/0a/f9/520af90d1a7c4a6099ced7db63744c8c.jpg'}}
      style= {styles.images} />
      </View>
      <View >
      <Image
      source={{uri: 'https://i.pinimg.com/564x/3f/f2/2d/3ff22dbdfd0e1d780a634eba319aa5bf.jpg'}}
      style= {styles.images} />
      </View>
      <View >
      <Image
      source={{uri: 'https://i.pinimg.com/564x/c8/51/87/c85187269abc6141618118f333dd7d54.jpg'}}
      style= {styles.images} />
      </View>
      <View >
      <Image
      source={{uri: 'https://i.pinimg.com/564x/25/37/10/253710706a87c93a2e83a7f954b1763e.jpg'}}
      style= {styles.images} />
      </View>
      <View >
      <Image
      source={{uri: 'https://i.pinimg.com/564x/92/ce/7b/92ce7bc25ce011b3c9680fded50c4206.jpg'}}
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
    width: 250, height: 400
    
  },
  
  caja: {
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
    flex: 0.4,
    backgroundColor: "beige",
    borderWidth: 5,
    padding: 20,
    marginTop: 4000,
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

 
 
  marginTop:450,
 

},
});