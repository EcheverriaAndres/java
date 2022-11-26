import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import vocales from './vocales';
import Home from './Home';
import Colores from './Colores';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';




const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6',
            marginBottom: 20,
          }}
        >
          <View>
            <Text></Text>
            <Text>MENU</Text>
          </View>
          <Image
            source={{
              uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12fb29e2-0b71-4eee-b72f-a6f470cb5309/db4z9uj-59d43ca6-8c4c-4293-8998-029a9583d7ce.png/v1/fill/w_1024,h_1024,strp/manos_unidas_png_by_gianferdinand_db4z9uj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzEyZmIyOWUyLTBiNzEtNGVlZS1iNzJmLWE2ZjQ3MGNiNTMwOVwvZGI0ejl1ai01OWQ0M2NhNi04YzRjLTQyOTMtODk5OC0wMjlhOTU4M2Q3Y2UucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oMZm--iW2aM1d9aEPxu3eDpO7ODeP0hMbbSqiAkGaf4',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity exit
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#f6f6f6',
          padding: 20,
        }}
      >
        <Text>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitle: '',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={Home} name='Home' />
      <Drawer.Screen component={vocales} name='vocales' />
      <Drawer.Screen component={Colores} name='Colores' />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}