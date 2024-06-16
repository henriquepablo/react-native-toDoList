import { Image, Switch, TouchableOpacity, View, Text, Alert } from "react-native";
import { ViewCard, TextTasks } from "../styles/CardStyle";
import { useContext, useEffect, useState } from "react";
import MyContext from "../Context";
import DropShadow from "react-native-drop-shadow";
import { styleCard } from "../styles/CardStyle";

import { Swipeable } from "react-native-gesture-handler";

import SwipeableRight from "./SwipeableRight";
import api from "../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Card = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);

    const {isDark, setOpenModal} = useContext(MyContext);
    
    async function deleteTask(idTask) {
        
        const token = await AsyncStorage.getItem('@token');

        const response = await api.delete(`/tasks/${idTask}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(err => console.log('erro ao apagar tarefa: ', err))

    }

    return (
        <DropShadow style={styleCard}>
            <Swipeable renderRightActions={SwipeableRight} onSwipeableOpen={(value) => value === 'right' ? deleteTask() : alert('Tarefa concluída')}>
                <ViewCard backgroundCard={isDark}> 
                    <Switch onValueChange={(value) => setIsEnabled(value)} value={isEnabled} />
                    
                    <TextTasks text={isDark} complete={isEnabled}>
                        {props.data.tasks}
                    </TextTasks>

                    <TouchableOpacity onPress={() => setOpenModal(true)}>
                        <Image source={require('../img/edit.png')} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => deleteTask(props.data.id)}>
                        <Image source={require('../img/trash.png')} />
                    </TouchableOpacity>
                    
                </ViewCard>
            </Swipeable>
        </DropShadow>

    );
}