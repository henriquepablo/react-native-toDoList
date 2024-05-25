import { Image, Switch, TouchableOpacity, View } from "react-native";
import { ViewCard, TextTasks } from "../styles/CardStyle";
import { useContext, useEffect, useState } from "react";
import MyContext from "../Context";
import DropShadow from "react-native-drop-shadow";
import { styleCard } from "../styles/CardStyle";


export default Card = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [idTask, setIdTask] = useState();

    const {isDark} = useContext(MyContext);
    
    useEffect(() => {
        deleteTask();
    },[]);

    const deleteTask = () => {
        setIdTask(props.data.id);
        fetch(`http://10.0.2.2:8080/tasks/${idTask}`, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({})
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
        })
        .catch(err => console.log(err));
    }

    return (
        <DropShadow style={styleCard}>
            <ViewCard backgroundCard={isDark}> 
                <Switch onValueChange={(value) => setIsEnabled(value)} value={isEnabled} />
                
                <TextTasks text={isDark} complete={isEnabled}>
                    {props.data.taks}
                </TextTasks>

                <TouchableOpacity onPress={() => console.log(props.data.id)}>
                    <Image source={require('../img/edit.png')} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={deleteTask}>
                    <Image source={require('../img/trash.png')} />
                </TouchableOpacity>
                
            </ViewCard>
        </DropShadow>

    );
}