import { Container, ContainerDay, Title, TitleDesc } from "../styles/TaksStyle";
import { useContext } from "react";
import MyContext from "../Context";
import CardTasks from "./CardTasks";

export default Tasks = () => {

    const {backgroundColor, isDark} = useContext(MyContext);

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

        </Container>
    );
}