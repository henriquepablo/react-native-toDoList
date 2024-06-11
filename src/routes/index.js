import { useContext } from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import MyContext from "../Context";

const Routes = () => {

    const {user, signed} = useContext(MyContext);
    
    return(
        signed ? <AppRoutes /> : <AuthRoutes/>
    );
}

export default Routes;