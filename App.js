import React, { useEffect, useState } from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home"
import Welcome from "./screens/Welcome"
import AddInfo from './screens/AddInfo';
import * as SecureStore from 'expo-secure-store';
import * as Localization from 'expo-localization'
import { PaperProvider } from 'react-native-paper';
import PolypAppBar from './components/PolypAppBar';
import i18n from './i18n';
const Stack= createNativeStackNavigator();

export default function App() {
  
  const [hasData, setHasData] = useState(false);
  useEffect(() => {
    const checkData = async () => {
        //check if user has data stored TODO: add implementation for backups or accounts
        const data = await SecureStore.getItemAsync('hasData');
         
        await setHasData(Boolean(data));
        console.log( hasData);
    };

    checkData();
    }, []);
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        {hasData ? <></> : <Stack.Screen options={{header: ()=>(<PolypAppBar simple ></PolypAppBar>)}} name={"Welcome"} component={Welcome}/> }
        <Stack.Screen name={"Home"} component={Home}/>
        <Stack.Screen
        name={"AddInfo"}
        options={({ navigation }) => ({
        header: () => (
          <PolypAppBar
            title={i18n.t("AddInfo_AppBar_Title")}
            icon1Name="check"
            icon1Press={() => { 
              SecureStore.setItemAsync('hasData','true');
              navigation.navigate('Home');
            }}
          />
        ),
      })}
      component={AddInfo}
    />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

