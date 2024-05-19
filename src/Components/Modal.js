import { useContext } from "react";
import { Image } from "react-native";

import { ViewModal, ContainerModal, ViewTextInput, Input, ViewTouchableModal} from "../styles/ModalStyle";
import { ViewTouchable, ViewModalBtn } from "../styles/TaksStyle";
import { shadowInput } from "../styles/ModalStyle";

import MyContext from "../Context";
import DropShadow from "react-native-drop-shadow";

export default MyModal = (props) => {

    const {isDark} = useContext(MyContext);

    return (
        <ContainerModal>
            <ViewModal background={isDark}>

                <ViewTextInput >
                    
                    <DropShadow style={shadowInput}>
                        <Input colorLetter={isDark} backgroundInput={isDark}/>
                    </DropShadow>
                    
                    <ViewTouchableModal >
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