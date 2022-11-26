import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, View, Image } from 'react-native';
import { DarkTheme, useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export default function Home() {
  const nav = useNavigation();
  const drawerStatus = useDrawerStatus();
  console.log(drawerStatus);

  return (

    
    <View style={styles.container}>


      
  <View>

  <Text style={styles.titulo} >INCLUSCUN</Text>
  </View>
     <View style={styles.caja}>
      <Image
      source={{uri: 'https://cdn-icons-png.flaticon.com/512/2905/2905033.png'}}
      style= {styles.image} />
      </View>
      <View>
        <View></View>

<Text style={styles.tex} >En el contexto escolar se manejan múltiples situaciones debido a la diversidad de ambientes y problemáticas que se encuentran en nuestra sociedad y según las características de cada una de estas poblaciones, lo que permite que la labor docente se desempeñe en diversas tareas, con diferentes especializaciones y con variados métodos pedagógicos según sea la necesidad de los educandos.</Text>
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
    width: 370, height: 300
    
  },
  
  caja: {
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
    flex: 0.4,
    backgroundColor: "beige",
    borderWidth: 5,
    padding: 20,
    margin: 10,
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
  
});