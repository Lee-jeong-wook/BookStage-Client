import { ScrollView,View, Text, StyleSheet } from "react-native";
import { CircleChart } from "../components/chart/circle/CircleChart";
import { BreakChart } from "../components/chart/line/LineChart";
import { TextChart } from "../components/chart/text/TextChart";
import { StickChart } from "../components/chart/bar/BarChart";
import { getStatistic } from "../apis/statistic/getStatistic";

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        alignContent:"center",
        paddingHorizontal:10
    },
    item:{
        backgroundColor:"#f3cf98",
        borderRadius:15,
        marginVertical:10,
        flex:1,
        display:"flex",
        alignContent:"center",
        justifyContent:"center",
    }
})

const ChartScreen = () => {
    // 읽은 권수, 읽은 페이지, 주, 월 평균 (텍스트)
    // 월마다 읽은 책 그래프 (꺾은선)
    // const {data} = getStatistic();
    // console.log(data);
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.item}>
                    <ScrollView
                        horizontal={true}
                        showHorizontalScrollIndicator={false}
                    >
                        <TextChart />
                    </ScrollView>
                </View>
                <View style={styles.item}>
                    <ScrollView
                        horizontal={true}
                        showHorizontalScrollIndicator={false}
                    >
                        <BreakChart />
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

export default ChartScreen;