import { View, Text, Button, TouchableOpacity, Image, Alert } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";

import MyContext from "../Context";
import Routes from "../routes";

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
    <MyContext.Provider value={{backgroundColor, setBackgroundColor, isDark, imgIcon, verifyIfIsDark}}>
      <NavigationContainer>
      
        <Routes/>
      
      </NavigationContainer>
    </MyContext.Provider>
  );
}