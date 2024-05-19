import { Container, ContainerDay, Title, TitleDesc, ViewModalBtn, ViewTouchable } from "../styles/TaksStyle";
import { useContext, useState } from "react";
import MyContext from "../Context";
import CardTasks from "./CardTasks";
import { Image, Modal, View} from "react-native";
import MyModal from "./Modal";

export default Tasks = () => {

    const {backgroundColor, isDark} = useContext(MyContext);
    const [openModal, setOpenModal] = useState(false);


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

            <CardTasks/>

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