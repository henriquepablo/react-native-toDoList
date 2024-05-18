import { Button, Container } from "../styles/TaksStyle";
import { useContext } from "react";
import MyContext from "../Context";
import { Text, View } from "react-native";


export default Tasks = () => {

    const {backgroundColor} = useContext(MyContext);

    return (
        <Container background={backgroundColor}>
            
        </Container>
    );
}