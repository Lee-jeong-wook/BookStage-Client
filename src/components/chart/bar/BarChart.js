import { View, Text, StyleSheet } from "react-native"
import { chartConfig } from "../ChartConfig";
import { BarChart } from "react-native-chart-kit";
import { getStatistic } from "../../../apis/statistic/getStatistic";
import { useState } from "react";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        overflow:"hidden"
    }
})

export const StickChart = () => {
  const serverData = getStatistic();
  console.log(serverData)
  const data = {
      labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      datasets: [
        {
          data: !serverData ? [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : serverData
        }
      ],
  };
  console.log(data);
  return(
      <View style={styles.container}>
        {
          !serverData ? (
            <BarChart
            data={data}
            width={450}
            height={200}
            chartConfig={chartConfig}
            showBarTops
            fromZero
          />
          ) : (
            <View>
              <Text>
                아직 데이터가 없습니다
              </Text>
            </View>
          )
        }
      </View>
  )
}