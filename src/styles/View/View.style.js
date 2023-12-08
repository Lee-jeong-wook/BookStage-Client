import { StyleSheet, Dimensions } from "react-native";

const ViewScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },

    backIcon: {
        position: "absolute",
        top: 30,
        left: 10,
        zIndex: 1
    },

    wrap: {
        height: Dimensions.get("screen").height,
        // position: "relative",
    },

    bookImage: {
        alignSelf: "center",
        width: 320,
        height: 360,
        resizeMode: "contain",
        zIndex: 100,
        marginTop: 80
    },

    bookTitle: {
        fontSize: 24,
        width: 280,
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    },

    bookAuthor: {
        fontSize: 16,
        width: 240,
        textAlign: "center",
        color: "white"
    },
    scrollView: {
        paddingBottom: 100
    },

    bookDescription: {
        width: 300,
        padding: 10,
        color: "white",
        textAlign: "justify",
    },

    bar: {
        height: 8,
        width: 200,
        backgroundColor: "white",
        borderRadius: 30,
        alignSelf: "center",
    },

    textWrap: {
        marginTop: 30,
        paddingTop: 10,
        width: Dimensions.get("window").width,
        justifyContent: "space-around",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#DB9834",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        position: "relative",
        left: 0,
        bottom: 0,
        zIndex: 100
    },

    topBackgroundCircle: {
        position: "absolute",
        top: -150,
        width: Dimensions.get("screen").width,
        height: 300,
        backgroundColor: "orange",
        borderRadius: 150
    }
})

export default ViewScreenStyle;