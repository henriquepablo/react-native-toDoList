import { Container, ContainerDay, Title, TitleDesc, ViewModalBtn, ViewTouchable } from "../styles/TaksStyle";
import { useContext, useEffect, useState } from "react";
import MyContext from "../Context";
import CardTasks from "./CardTasks";
import { Image, Modal, FlatList} from "react-native";
import MyModal from "./Modal";

export default Tasks = () => {

    const {backgroundColor, isDark} = useContext(MyContext);
    const [openModal, setOpenModal] = useState(false);
    const [listTasks, setListTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    },[listTasks]);

    const loadTasks = () => {
        fetch('http://10.0.2.2:8080/tasks')
        .then(response => response.json())
        .then(json => {
            setListTasks(json)
        })
        .catch(err => console.log(err))
    }

    return (
        <Container background={backgroundColor}>

            <ContainerDay >
                <Title TitleDay={isDark} > 
                    Segunda - Feira
                </Title>

                <TitleDesc TitleDesc={isDark}>
                    Suas tarefas de hoje
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