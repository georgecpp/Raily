import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function SocialMediaButton({
    buttonTitle,
    btnType,
    color,
    backgroundColor,
    ...rest
}) {
    let bgColor = backgroundColor;
    return (
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor:bgColor}]} {...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={btnType} style={styles.icon} size={22} color={color}/>
            </View>
            <View style={styles.btnTextWrapper}>
                <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: "40%",
        height: windowHeight / 15,
        padding: 10,
        flexDirection: "row",
        borderRadius: 10,
        alignSelf:"center",
        marginHorizontal: 10
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
    },
});