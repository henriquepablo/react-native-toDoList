import { Container, ContainerDay, Title, TitleDesc, ViewModalBtn, ViewTouchable } from "../styles/TaksStyle";
import { useContext, useState } from "react";
import MyContext from "../Context";
import CardTasks from "./CardTasks";
import { Image} from "react-native";

export default Tasks = () => {

    const {backgroundColor, isDark} = useContext(MyContext);
    const [imgBtn, setImgBtn] = useState(require('../img/add.png'));

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

            <ViewTouchable>
                <ViewModalBtn background={isDark}>
                    <Image source={isDark == true ? require('../img/add.png') : require('../img/addBlack.png')} />
                </ViewModalBtn >
            </ViewTouchable>

        </Container>
    );
}