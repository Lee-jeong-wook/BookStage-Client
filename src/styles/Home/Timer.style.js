import { Dimensions, StyleSheet } from "react-native";

const TimerStyle = StyleSheet.create({
    container: {
        alignSelf: 'center',
        borderColor: "black",
        borderWidth: 1,
        padding: 20,
        width: Dimensions.get("screen").width - 30,
        height: 200,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
    },

    title: {
        fontSize: 20
    },

    time: {
        alignSelf: "center",
        fontSize: 20
    },

    buttonWrap: {
        width: "auto",
        height: 80,
        flexDirection: "row",
        gap: 20,
        alignItems: 'center',
        marginTop: 30
    },
    button: {
        padding: 10,
        backgroundColor: "#EC9C1D",
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center"
    },

    buttonTitle: {
        color: "white"
    }
});

export default TimerStyle;