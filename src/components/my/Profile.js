import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Default_profile from "../../../assets/default_profile.png";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { CurrentConnect } from "./CurrentConnect";
import { getData } from "../../util/AsyncStorage";

const styles = StyleSheet.create({
  container : {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  profile : {
    borderRadius:50,
    width:100,
    height:100,
    },
    nameContainer : {
      width:200,
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around"
    }
})

export const Profile = () => {
  const [name, setName] = useState("Guest");
  const [isEdit, setIsEdit] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getNameFromStorage = async () => {
      try {
        const storedName = await AsyncStorage.getItem("name");
        console.log(storedName);
        if (storedName) {
          setName(storedName);
        }
      } catch (error) {
        console.error("Error retrieving name from AsyncStorage:", error);
      }
    };

    const getEmail = async () => {
      const data = await getData("email");

      if (!!data) {
        console.log(data.data);
        setEmail(data.data);
      }
    }
    getEmail()
    getNameFromStorage();
  }, []);

  const submitHandler = async () => {
    try {
      await AsyncStorage.setItem("name", name);
      setIsEdit(false);
    } catch (error) {
      console.error("Error saving name to AsyncStorage:", error);
    }
  };

  const changeHandler = (value) => {
    setName(value);
  };

  return (
    <View
    style={styles.container}
    >
      <View
      style={styles.profile}
      >
        <Image 
        source={Default_profile} 
        style={styles.profile}
        />
      </View>
      {isEdit ? (
        <View style={styles.nameContainer}>
          <TextInput value={name} onChangeText={changeHandler} />
          <Button onPress={submitHandler} title="전송" />
        </View>
      ) : (
        <View style={styles.nameContainer}>
          <Text
          style={{fontSize: 20}}
          >{name}</Text>
          <TouchableOpacity onPress={() => setIsEdit(true)}>
            <View style={{ width: 30, height: 30 }}>
              <FontAwesomeIcon icon={faPenToSquare} size={30} />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <View>
        <Text>
          Email : {email};
        </Text>
      </View>
      <View>
        <Text>
          최근 접속 기록
        </Text>
      </View>
      <CurrentConnect />
    </View>
  );
};
