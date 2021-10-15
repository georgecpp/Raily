import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { Platform } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SocialMediaButton from "../components/SocialMediaButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Divider from "react-native-divider";
import { windowWidth, windowHeight } from "../utils/Dimensions";
import { registerValidation } from "../utils/Validation";
import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { GoogleSigninButtonProps } from "@react-native-google-signin/google-signin/lib/typescript/GoogleSigninButton";

// Implement & Import AuthContext


export default function Register({navigation}) {
    GoogleSignin.configure({
        webClientId: '484570899911-12kcvtbp4vkh23fodm0qu58n9iapq58p.apps.googleusercontent.com',
    });
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const [keepLoggedIn, setKeepLoggedIn] = useState("false");

    return (
        <>
        {/* handle Platform if Android or iOS */}
        {Platform.OS === 'android' ? (
            <SafeAreaView style={styles.containerSafeAreaAndroid}>
                    <Text style={styles.RegisterText}>Register</Text> 

                <View>
                    <FormInput 
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        placeHolderText="Email"
                        iconType="user"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput 
                        labelValue={password}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        placeHolderText="Password"
                        iconType="lock"
                        secureTextEntry={true}
                    />
                    <FormInput 
                        labelValue={confirmPassword}
                        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                        placeHolderText="Confirm Password"
                        iconType="lock"
                        secureTextEntry={true}
                    />
                </View>

                <FormButton 
                    buttonTitle="Find my friends now"
                    onPress={() => {
                        // Validate data before login operation
                        const {error} = registerValidation({email,password,confirmPassword});
                        if(error) {
                            console.log(error.details[0].message); // Will pop-up to user actually.
                            return;
                        }

                        // implement Login - AuthContext
                    }} 
                />                

 


            </SafeAreaView>
            ) : null}
        </>
    );
}

const styles = StyleSheet.create({
    containerSafeAreaAndroid: {
        paddingTop: 10,
        backgroundColor:"#23272A", 
        alignItems:"center",
        justifyContent:"center",
        flex: 1
    },

    RegisterText: {
        marginBottom: 20,
        height: 150,
        color:"white",
        fontSize:windowHeight*0.09,
    },

    signupNav: {
        flex:1,
        justifyContent:"flex-end",
        marginBottom:25
    },

    navButton: {
        marginTop: 15,
    },

    navButtonText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#ffffff",
        fontFamily: "Lato-Regular",
    },

    forgotButtonText : {
        fontSize:windowWidth*0.032,
        fontWeight: "500",
        color: "white",
        fontFamily: "Lato-Regular",
    }
});