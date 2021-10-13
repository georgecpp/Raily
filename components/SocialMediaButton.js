import React from "react";
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";

export default function SocialMediaButton({
    buttonTitle,
    btnType,
    color,
    backgroundColors,
    ...rest
}) {
    return (
        <>
            <LinearGradient colors={backgroundColors} style={styles.linearGradient}
                start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}> 
                    <TouchableOpacity style={{flexDirection:"row"}} {...rest}>
                        <View style={styles.iconWrapper}>
                            <FontAwesome name={btnType} style={styles.icon} size={22} color={color}/>
                        </View>
                        <View style={styles.btnTextWrapper}>
                            <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
                        </View>
                    </TouchableOpacity>
            </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    // buttonContainer: {
    //     marginTop: 10,
    //     width: "40%",
    //     height: windowHeight / 15,
    //     paddingLeft: 15,
    //     paddingRight: 15,
    //     flexDirection: "row",
    //     borderRadius: 10,
    //     alignSelf:"center",
    //     marginHorizontal: 10,
    // },
    buttonContainer: {
        flex:1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },

    iconWrapper: {
        width: 30,
        justifyContent: "center",
        alignItems: "center",
    },

    icon: {
        fontWeight: "bold"
    },

    btnTextWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Lato-Regular",
        margin: 10,
        backgroundColor: "transparent"
    },

    linearGradient: {
        flex: 1,
        // width: "40%",
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        margin:10,
        // height: windowHeight / 15,
        // justifyContent:"center",
      },
});