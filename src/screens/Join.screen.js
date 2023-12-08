import { ScrollView, View, TouchableOpacity, TextInput, Text, Image } from "react-native";
import { JoinStyle } from "../styles/Join/Join.style";
import { useState } from "react";
import postJoinHandler from "../apis/users/postJoin";

const JoinScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const SubmitJoinHandler = async () => {
        if (password !== confirmPassword) {
            return;
        }

        try {
            const data = await postJoinHandler(email, password);
        } catch (err) {
            console.log(err);
        } finally {
            navigation.navigate("Login");
        }
    }

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={JoinStyle.Container}
        >
            <View style={JoinStyle.JoinBox}>
                <Image
                    source={require("../../assets/Sign_In.png")}
                    style={JoinStyle.Logo}
                />
                <View style={JoinStyle.InputSection}>
                    <TextInput
                        style={JoinStyle.Input}
                        onChangeText={(value) => {
                            setEmail(value);
                        }}
                        value={email}
                        placeholder="이메일"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={JoinStyle.Input}
                        onChangeText={(value) => {
                            setPassword(value);
                        }}
                        value={password}
                        placeholder="비밀번호"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={JoinStyle.Input}
                        onChangeText={(value) => {
                            setConfirmPassword(value);
                        }}
                        value={confirmPassword}
                        placeholder="비밀번호 확인"
                        secureTextEntry={true}
                    />
                </View>
                <View style={JoinStyle.ButtonSection}>
                    <TouchableOpacity style={JoinStyle.Button} onPress={SubmitJoinHandler}>
                        <Text style={JoinStyle.ButtonText}>회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default JoinScreen;
