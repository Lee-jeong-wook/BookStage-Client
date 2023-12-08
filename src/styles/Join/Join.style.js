import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");

export const JoinStyle = StyleSheet.create({
    Container: {
        width,
        height: height - 56,
        justifyContent: "center",
        alignItems: "center",
    },
    Logo: {
        width: 280,
        height: 250,
    },
    JoinBox: {
        width: width - 80,
        height: height - 140,
        backgroundColor: "#fff",
        borderRadius: 15,
        alignItems: "center",
        gap: 40,
        padding: 50
    },
    InputSection: {
        gap: 10,
        marginBottom: 20
    },
    Input: {
        width: width * 0.7,
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        paddingVertical: 7,
        fontSize: 16,
    },
    ButtonSection: {

    },
    Button: {
        width: width * 0.7,
        height: 55,
        backgroundColor: "#EC9C1D",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        elevation: 2
    },
    ButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    }
})