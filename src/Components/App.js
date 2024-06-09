import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";

import MyContext from "../Context";
import Routes from "../routes";
import api from "../service/api";

export default App = () => {

  const [isDark, setIsDark] = useState(false);
  const [imgIcon, setImgCon] = useState(require('../img/moon.png'));
  const [backgroundColor, setBackgroundColor] = useState('#181A33');

  const [loading, setLoading] = useState(false);

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

  async function SignUp(name, email, password) {
    setLoading(true);
    try {
      const response = await api.post('/user/register', {
        name: name,
        email: email,
        password: password
      });
      setLoading(false);
      return true;
    } 
    catch (error) {
      console.log('Error ao se cadastrar: ' + error);
      setLoading(false);
    }
  }

  return (
    <MyContext.Provider value={{backgroundColor, setBackgroundColor, isDark, imgIcon, verifyIfIsDark, SignUp, loading}}>
      <NavigationContainer>
      
        <Routes/>
      
      </NavigationContainer>
    </MyContext.Provider>
  );
}