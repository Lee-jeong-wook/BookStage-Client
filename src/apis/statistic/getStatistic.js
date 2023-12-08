import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import { useState, useEffect } from "react";
import { getData } from "../../util/AsyncStorage";

export const getStatistic = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const getJWT = async () => {
        try {
            const {data} = await getData('Token');
            const response = await axios.get('https://port-0-bookstage-server-342mg2blpvd1bii.sel4.cloudtype.app/user/summary?period=2023-12-04', {
              headers: {
                Authorization: `Bearer ${data}`
              }
            });
            setData(response.data);
        }   catch (error) {
            console.error("에러 발생:", error);
        }
      };
  
      getJWT();
    }, []);
    return data;
}