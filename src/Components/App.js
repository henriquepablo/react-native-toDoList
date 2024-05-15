import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Tarefas from "./Tasks";
import Todas from "./Alltasks";

const drawer = createDrawerNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <drawer.Navigator>
        <drawer.Screen name="Tarefas" component={Tarefas} />
        <drawer.Screen name="Todas" component={Todas} />
      </drawer.Navigator>
    </NavigationContainer>
  );
}