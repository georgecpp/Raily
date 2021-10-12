import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { Platform } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialMediaButton from "../components/SocialMediaButton";
// Implement & Import AuthContext


export default function Login({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <>
        {/* handle Platform if Android or iOS */}
        {Platform.OS === 'android' ? (
            <SafeAreaView style={styles.containerSafeAreaAndroid}>
                <Image style={styles.LogoImage} source={require("../assets/images/Ruby_On_Rails_Logo.svg.png")}/>

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

                <FormButton 
                    buttonTitle="Sign In"
                    onPress={() => {}} // implement Login - AuthContext
                />

                <TouchableOpacity style={styles.forgot_button} onPress={() => {}}>
                    <Text style={styles.navButtonText}>Forgot Password?</Text>
                </TouchableOpacity>

                <View>
                    <Text style={[styles.navButtonText, {paddingStart:10}]}>...Or Login with:</Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between", alignSelf:"center"}}>
                        <SocialMediaButton 
                        buttonTitle="Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        backgroundColor="#dae2f1"
                        onPress={() => {}} // implement Facebook Login - AuthContext
                        />

                        <SocialMediaButton 
                        buttonTitle="Instagram"
                        btnType="instagram"
                        color="#E1306C"
                        backgroundColor="#f9d2df"
                        onPress={() => {}} // implement Instagram Login - AuthContext
                        />
                    </View>
                </View>
            </SafeAreaView>
            ) : null}
        </>
    );
}

const styles = StyleSheet.create({
    containerSafeAreaAndroid: {
        paddingTop: 25,
        backgroundColor:"#23272A", 
        alignItems:"center",
         justifyContent:"center",
        flex: 1
    },

    LogoImage: {
        marginBottom: 40,
        width: "100%",
        height: 180,
        resizeMode: 'center'
    },

    forgot_button: {
    marginVertical: 35,
    },

    navButton: {
        marginTop: 15,
    },

    navButtonText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#5865F2",
        fontFamily: "Lato-Regular",
    },

});