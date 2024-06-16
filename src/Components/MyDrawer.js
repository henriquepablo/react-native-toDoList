import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { ContainerTitle, Logout, Title, TitleLogout } from "../styles/MyDrawerStyle";
import { useContext } from "react";
import MyContext from "../Context";

const MyDrawer = (props) => {

    const {user, isDark} = useContext(MyContext);

    return (
        <DrawerContentScrollView >
            <ContainerTitle>
                <Title color={isDark}>Olá {user.name}</Title>
            </ContainerTitle>

            <DrawerItemList {...props} />

            <Logout activeOpacity={0.5}>
                <TitleLogout >
                    Sair
                </TitleLogout>
            </Logout>
        </DrawerContentScrollView>
        
    );
}

export default MyDrawer;