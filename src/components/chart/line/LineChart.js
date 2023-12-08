import { View, Text, StyleSheet } from "react-native";
import { chartConfig } from "../ChartConfig";
import { LineChart } from "react-native-chart-kit";
import { getStatistic } from "../../../apis/statistic/getStatistic";
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        flexDirection:"column",
        overflow:"hidden",
        width:450,
    }
})

export const BreakChart = () => {
  let serverData = getStatistic();
    const data = {
        labels: [`1월`, `2월`, `3월`, `4월`, `5월`, `6월`, `7월`, `8월`, `9월`, `10월`, `11월`, `12월`],
        datasets: [
          {
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            color: (opacity = 1) => `rgba(30, 30, 30, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],  
        // legend: ["월 별 읽은 책 수"] // optional
      };
    return(
        <View style={styles.container}>
          {
            !serverData ? (
              <LineChart
              data={data}
              width={450}
              height={220}
              chartConfig={chartConfig}
              fromZero
              />
            ) : (
              <View style={{height:100}}>
                <Text style={{fontSize:30, lineHeight:100}}>
                  데이터가 아직 없습니다
                </Text>
              </View>
            )
          }
        </View>
    )   
}