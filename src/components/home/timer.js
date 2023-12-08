import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import TimerStyle from "../../styles/Home/Timer.style";
import useInterval from "../../hooks/useInterval";

const Timer = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState({
        hour: "00",
        min: "00",
        sec: "00",
    });
    const [isRunning, setIsRunning] = useState(false);

    useInterval(() => {
        setCount(count + 1);
        countToTime();
    }, 1000, isRunning);

    const pad = (val) => {
        return val > 9 ? val : "0" + val;
    }

    const countToTime = () => {
        setTime((prevState) => {
            return { ...prevState, sec: pad(count % 60) }
        })

        setTime((prevState) => {
            return { ...prevState, min: pad(parseInt(count / 60, 10)) }
        })

        setTime((prevState) => {
            return { ...prevState, hour: pad(parseInt(count / 3600, 10)) }
        })
    }

    return <View style={TimerStyle.container}>
        <Text style={TimerStyle.title}>나의 독서 시간이 궁금하다면?</Text>
        <Text style={TimerStyle.time}>{`${time.hour}:${time.min}:${time.sec}`}</Text>
        <View style={TimerStyle.buttonWrap}>
            <TouchableOpacity onPress={() => setIsRunning(!isRunning)} style={[TimerStyle.button, isRunning ? {backgroundColor:"red"} : {backgroundColor: "#EC9C1D"}]}><Text style={TimerStyle.buttonTitle}>{isRunning ? "STOP" : "START"}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setCount(0)} style={TimerStyle.button}><Text style={TimerStyle.buttonTitle}>Reset</Text></TouchableOpacity>
        </View>
    </View >
}

export default Timer;