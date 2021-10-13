import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { Platform } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialMediaButton from "../components/SocialMediaButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Divider from "react-native-divider";
import { windowWidth, windowHeight } from "../utils/Dimensions";
import { loginValidation } from "../utils/Validation";
// import LinearGradient from "react-native-linear-gradient";
// Implement & Import AuthContext


export default function Login({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [keepLoggedIn, setKeepLoggedIn] = useState("false");

    return (
        <>
        {/* handle Platform if Android or iOS */}
        {Platform.OS === 'android' ? (
            <SafeAreaView style={styles.containerSafeAreaAndroid}>
                <Image style={styles.LogoImage} source={require("../assets/images/Ruby_On_Rails_Logo.svg.png")}/>
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
                    <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", margin:5}}>
                        <BouncyCheckbox 
                            iconStyle={{borderColor: "#5865F2", borderRadius: 0}}
                            fillColor="#5865F2"
                            onPress={(checkboxValue) => setKeepLoggedIn(checkboxValue)} // implement Keep Me Logged In. 
                        />
                        <Text style={{marginEnd:10, color:"white"}}>Keep me logged in</Text>                        
                        <TouchableOpacity style={{flex: 1, marginStart:windowWidth/15}} onPress={() => {}} // implement forgot password
                        >
                             <Text style={styles.forgotButtonText}>Forgot Password?</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <FormButton 
                    buttonTitle="Sign In"
                    onPress={() => {
                        // Validate data before login operation
                        const {error} = loginValidation({email,password});
                        if(error) {
                            console.log(error.details[0].message); // Will pop-up to user actually.
                            return;
                        }

                        // implement Login - AuthContext
                    }} 
                />                

                <View style={{flexDirection:"row", alignItems:"center", marginTop:75}}>
                    <View style={{flex: 1, height: 1, backgroundColor:"white", marginStart:15}} />
                    <Text style={[styles.navButtonText, {paddingHorizontal:15} ]}>or Login with</Text>
                    <View style={{flex: 1, height: 1, backgroundColor:"white", marginEnd:15}} />
                </View>

                <View>
                    {/* <Text style={[styles.navButtonText, {paddingStart:10}]}>...Or Login with:</Text> */}
                    <View style={{flexDirection:"row",justifyContent:"space-between", alignSelf:"center", marginTop:10}}>
                        <SocialMediaButton 
                        buttonTitle="Facebook"
                        btnType="facebook"
                        color="white"
                        backgroundColors={["#4c669f", "#3b5998", "#192f6a"]}
                        onPress={() => {}} // implement Facebook Login - AuthContext
                        />
                        <SocialMediaButton 
                        buttonTitle="Instagram"
                        btnType="instagram"
                        color="white"
                        backgroundColors={["#405DE6", "#5851D8", "#833AB4", "#C13584", "#E1306C", "#FD1D1D", "#F56040", "#F77737", "#FCAF45", "#FFDC80"]}
                        onPress={() => {}} // implement Instagram Login - AuthContext
                        />
                    </View>
                </View>

                <TouchableOpacity
                style={styles.signupNav}
                onPress={() => {}} // implement navigation to Register Screen
                > 
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.navButtonText}>
                            Don't have an account?
                        </Text>
                        <Text style={[styles.navButtonText, {color:"#5865F2", marginLeft:10}]}>
                        Sign Up
                        </Text>
                    </View>
                </TouchableOpacity>


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
        fontWeight: "500",
        color: "white",
        fontFamily: "Lato-Regular",
    }
});