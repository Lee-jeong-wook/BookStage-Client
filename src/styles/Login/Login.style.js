import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");

export const LoginStyle = StyleSheet.create({
    Container: {
        width,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50
    },
    Logo: {
        width: 250,
        height: 190,
        marginBottom: 30
    },
    Form: {
        alignItems: "center",
        gap: 20
    },
    InputSection: {
        gap: 10
    },
    Input: {
        width: width * 0.6,
        borderRadius: 50,
        backgroundColor: "#fff",
        elevation: 2,
        paddingVertical: 8,
        paddingHorizontal: 13,
        fontSize: 14
    },
    ButtonSection: {
        gap: 10
    },
    Button: {
        width: width * 0.6,
        height: 45,
        borderRadius: 50,
        backgroundColor: "#EC9C1D",
        justifyContent: "center",
        alignItems: "center",
        elevation: 2
    },
    ButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff"
    },
    DesignFirstLine: {
        width: width,
        height: height,
        backgroundColor:"#EFBB6E",
        position: "absolute",
        transform: [{rotate: "60deg"}],
        zIndex: -1,
        top: height * 0.35
    },
    DesignSecondLine: {
        width: width,
        height: height,
        backgroundColor:"#DB9834",
        position: "absolute",
        transform: [{rotate: "-60deg"}],
        zIndex: -1,
        top: height * 0.4
    }
})