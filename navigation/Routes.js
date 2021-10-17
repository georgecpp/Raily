import React, {useContext, useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";


export default function Routes()  {
    const [user, setUser] = useState(false);
    return (
        <NavigationContainer>
            {!user ? <AuthStack /> :<></>}
        </NavigationContainer>
    );
}