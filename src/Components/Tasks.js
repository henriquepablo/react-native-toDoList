import { Container, ContainerDay, Title, TitleDesc, ViewModalBtn, ViewTouchable } from "../styles/TaksStyle";
import { useContext, useEffect, useState } from "react";
import MyContext from "../Context";
import CardTasks from "./CardTasks";
import { Image, Modal, FlatList} from "react-native";
import MyModal from "./Modal";
import api from "../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Tasks = () => {

    const {backgroundColor, isDark, user} = useContext(MyContext);
    const [openModal, setOpenModal] = useState(false);
    const [listTasks, setListTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    },[listTasks]);

    async function loadTasks() {
        const token = await AsyncStorage.getItem('@token');

        const response = await api.get(`/tasks/${user.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
              }
        })
        .then(response => setListTasks(response.data))
        .catch(err => console.log(err));
    }

    return (
        <Container background={backgroundColor}>

            <ContainerDay >
                <Title TitleDay={isDark} > 
                    {new Date().toLocaleDateString('pt-BR', {weekday: 'long'}).replace('s', 'S')}
                </Title>

                <TitleDesc TitleDesc={isDark}>
                    {listTasks.length == 0 ? 'Não há tarefas' : 'Suas tarefas'} 
                </TitleDesc>
            </ContainerDay>

            <FlatList 
                data={listTasks}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <CardTasks data={item} />}
            />
                        
            <ViewTouchable onPress={() => setOpenModal(true)}>
                <ViewModalBtn background={isDark}>
                    <Image source={isDark == true ? require('../img/add.png') : require('../img/addBlack.png')} />
                </ViewModalBtn >
            </ViewTouchable>

            <Modal animationType="slide" visible={openModal} transparent={true}>
                <MyModal close={() => setOpenModal(false)} />
            </Modal>
        </Container>
    );
}