import { Image, Switch, TouchableOpacity, View } from "react-native";
import { ViewCard, TextTasks } from "../styles/CardStyle";
import { useContext, useState } from "react";
import MyContext from "../Context";

export default Card = () => {

    const [isEnabled, setIsEnabled] = useState(false);

    const {isDark} = useContext(MyContext);
    
    return (
        <ViewCard backgroundCard={isDark}> 
            <Switch onValueChange={(value) => setIsEnabled(value)} value={isEnabled} />
            
            <TextTasks text={isDark} complete={isEnabled}>
                Estudar React Native
            </TextTasks>

            <TouchableOpacity>
                <Image source={require('../img/edit.png')} />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Image source={require('../img/trash.png')} />
            </TouchableOpacity>
            
        </ViewCard>

    );
}