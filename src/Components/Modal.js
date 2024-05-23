import { useContext, useState } from "react";
import { Image } from "react-native";

import { ViewModal, ContainerModal, ViewTextInput, Input, ViewTouchableModal} from "../styles/ModalStyle";
import { ViewTouchable, ViewModalBtn } from "../styles/TaksStyle";
import { shadowInput } from "../styles/ModalStyle";

import MyContext from "../Context";
import DropShadow from "react-native-drop-shadow";

export default MyModal = (props) => {

    const {isDark} = useContext(MyContext);

    const [tasks, setTasks] = useState('');

    const createTask = () => {
        fetch('http://10.0.2.2:8080/tasks', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
            taks: tasks,})
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            alert('Tarefa cadastrada');
        })
        .catch(err => console.log(err));
    }

    return (
        <ContainerModal>
            <ViewModal background={isDark}>

                <ViewTextInput >
                    
                    <DropShadow style={shadowInput}>
                        <Input colorLetter={isDark} backgroundInput={isDark} onChangeText={value => setTasks(value)} />
                    </DropShadow>
                    
                    <ViewTouchableModal onPress={createTask}>
                        <ViewModalBtn background={isDark}>
                            <Image source={isDark == true ? require('../img/add.png') : require('../img/addBlack.png')} />
                        </ViewModalBtn >
                    </ViewTouchableModal >

                </ViewTextInput>

                <ViewTouchable onPress={props.close}>
                    <ViewModalBtn background={isDark}>
                        <Image source={isDark == true ? require('../img/close.png') : require('../img/closeBlack.png')} />
                    </ViewModalBtn >
                </ViewTouchable>

            </ViewModal>
        </ContainerModal>
        
    );
}