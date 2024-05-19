import { useContext } from "react";
import { Image } from "react-native";

import { ViewModal, ContainerModal, ViewTextInput, Input, ViewTouchableModal } from "../styles/ModalStyle";
import { ViewTouchable, ViewModalBtn } from "../styles/TaksStyle";

import MyContext from "../Context";

export default MyModal = (props) => {

    const {isDark} = useContext(MyContext);

    return (
        <ContainerModal>
            <ViewModal background={isDark}>

                <ViewTextInput >
                    
                    <Input colorLetter={isDark} backgroundInput={isDark}/>

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