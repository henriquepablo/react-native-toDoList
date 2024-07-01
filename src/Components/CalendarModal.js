import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { ButtonFilterText, Container, ModalContent, ButtonFilter } from "../styles/CalendarModalStyle";


const CalendarModal = ({setVisible}) => {

    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{flex: 1}}>

                </View>
            </TouchableWithoutFeedback>

            <ModalContent>
                <ButtonFilter >
                    <ButtonFilterText>
                        Filtrar
                    </ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    );
}

export default CalendarModal;