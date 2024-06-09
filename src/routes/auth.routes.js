import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../Components/SignIn";

const AuthRoutes = () => {
    
    const AuthStack = createNativeStackNavigator();
    
    return(
        <AuthStack.Navigator>
        
            <AuthStack.Screen 
                name="SignIn"
                component={SignIn}
                options={
                    {headerShown: false}
                }
            />
        
        </AuthStack.Navigator>
    );  
}

export default AuthRoutes;