import { View, Text, Button, TouchableOpacity, Image, Alert } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";

import Tarefas from "./Tasks";
import Todas from "./Alltasks";
import MyContext from "../Context";

const drawer = createDrawerNavigator();

export default App = () => {

  const [isDark, setIsDark] = useState(false);
  const [imgIcon, setImgCon] = useState(require('../img/moon.png'));
  const [backgroundColor, setBackgroundColor] = useState('#181A33');

  useEffect(() => {
    verifyIfIsDark()
  }, []);

  const verifyIfIsDark = () => {    
    if (isDark == false) {
      setImgCon(require('../img/moon.png'));
      setIsDark(true);
      setBackgroundColor('#181A33');
    }
    else {
      setImgCon(require('../img/sun.png'));
      setIsDark(false);
      setBackgroundColor('#C5D4FF');
    }

    
  }

  return (
    <MyContext.Provider value={{backgroundColor, setBackgroundColor, isDark}}>
      <NavigationContainer>
        <drawer.Navigator
          screenOptions={{
            drawerStyle: {backgroundColor: isDark == false ? '#C5D4FF' : '#181A33' ,}, 
            drawerActiveBackgroundColor: isDark == false ? '#acc1ff' : '#3F414D',
            drawerLabelStyle: {color: isDark == false ? '#000' : '#fff'}
          }}>
          
          <drawer.Screen name="Tarefas" component={Tarefas} 
            options={{
              
              headerStyle: {backgroundColor: isDark == false ? '#C5D4FF' : '#181A33' ,}, 
              
              headerTintColor: isDark == false ? '#000' : '#fff',
              
              headerRight: () => (
                <TouchableOpacity onPress={ verifyIfIsDark }>
                  <Image source={imgIcon} style={{ marginRight: 10}}/>
                </TouchableOpacity>
              )
            }}/>
          
          <drawer.Screen name="Todas" component={Todas} />
        </drawer.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}