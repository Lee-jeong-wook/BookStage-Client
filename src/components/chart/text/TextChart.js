import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:750,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        paddingVertical:10
    },
    item:{
        width:150,
        height:150,
        borderRadius:10,
        backgroundColor:"orange",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    describe:{
        fontSize:16,
        color:"#555"
    },
    count:{
        fontSize:24
    }
})

export const TextChart = () => {
    const [value, setVaue] = useState([0, 0, 0, 0]);
    return(
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.describe}>
                    읽은 권 수(주)
                </Text>
                <Text style={styles.count}>
                    {value[0]}권
                </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.describe}>
                    읽은 권 수(월)
                </Text>
                <Text style={styles.count}>
                    {value[1]}권
                </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.describe}>
                    읽은 페이지 수(주)
                </Text>
                <Text style={styles.count}>
                    {value[2]}권
                </Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.describe}>
                    읽은 페이지 수(월)
                </Text>
                <Text style={styles.count}>
                    {value[3]}권
                </Text>
            </View>
        </View>
    )
}