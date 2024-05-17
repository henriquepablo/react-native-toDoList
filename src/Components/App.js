import { View, Text, Button, TouchableOpacity, Image, Alert } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";

import Tarefas from "./Tasks";
import Todas from "./Alltasks";

const drawer = createDrawerNavigator();

export default App = () => {

  const [isDark, setIsDark] = useState(false);
  const [imgIcon, setImgCon] = useState(require('../img/moon.png'));

  useEffect(() => {
    verifyIfIsDark()
  }, []);

  const verifyIfIsDark = () => {    
    if (isDark == false) {
      setImgCon(require('../img/moon.png'));
      setIsDark(true);
    }
    else {
      setImgCon(require('../img/sun.png'));
      setIsDark(false);
    }

    
  }

  return (
    <NavigationContainer>
      <drawer.Navigator>
        
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
  );
}