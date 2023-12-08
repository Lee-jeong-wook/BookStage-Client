import { Dimensions, StyleSheet } from "react-native"

export const HomeScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"space-between"
    },
    TopBar: {
        height: 56,
        elevation:2,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    Logo: {
        width: 180,
        height: 40
    },
    searchInput: {
        borderWidth: 1,
        borderColor: "gray",
        width: Dimensions.get("screen").width - 100,
        height: 50,
        padding: 10,
        alignSelf: 'center',
        borderRadius: 10
    },

    RecommendSection: {
        marginVertical: 20,
    },

    recommendBookImage: {
        width: 100,
        height: 120
    },

    RecommendWrap: {
        width: 120,
        height: 140,
        direction: "column",
        alignItems: "center",
        margin: 10
    },

    Title: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 30
    },
    DesignBox: {
        position: "relative",
        zIndex: -1,
        overflow: "hidden",
        height: 200
    },
    DesignFirstLine: {
        position: "absolute",
        width: Dimensions.get("window").width * 0.6,
        height: Dimensions.get("window").height,
        backgroundColor: "#EFBB6E",
        transform: [{rotate: "80deg"}], 
        bottom: -Dimensions.get("window").height * 0.55,
        zIndex: -1
    },
    DesignSecondLine: {
        position: "absolute",
        width: Dimensions.get("window").width * 0.6,
        height: Dimensions.get("window").height,
        backgroundColor: "#DB9834",
        transform: [{rotate: "-70deg"}], 
        bottom: -Dimensions.get("window").height * 0.55,
        zIndex: -1
    }
})