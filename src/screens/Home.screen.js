import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import { HomeScreenStyle } from "../styles/Home/Home.style";
import { useEffect, useState } from "react";
import getRecommendBooksData from "../apis/books/getRecommendBooks";
import postSearchBooks from "../apis/books/postSearchBooks";
import { ScrollView } from "react-native-gesture-handler";
import Timer from "../components/home/timer";

const HomeScreen = ({ navigation }) => {
    const [searchInput, setSearchInput] = useState();
    const [recommendBooks, setRecommendBooks] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getRecommendBooks = async () => {
            const data = await getRecommendBooksData();
            setRecommendBooks(data[0].docs.doc);
        };
        const getLibrarianRecommendBooks = async () => {
            // const data = await getLibrarianBooksData();
        };

        getRecommendBooks();
        getLibrarianRecommendBooks();

        setIsLoading(false);
    }, []);

    const SearchSubmitHandler = async () => {
        const data = await postSearchBooks(searchInput);

        navigation.navigate("Search", { booksData: data });
    };

    return (
        <>
            {isLoading && <Text>Loading...</Text>}
            {!isLoading && (
                <ScrollView contentContainerStyle={HomeScreenStyle.container}>
                    <View>
                        <View style={HomeScreenStyle.TopBar}>
                            <Image 
                                source={require("../../assets/Logo2.png")} 
                                style={HomeScreenStyle.Logo}
                            />
                        </View>
                        <TextInput
                            style={HomeScreenStyle.searchInput}
                            value={searchInput}
                            onChangeText={setSearchInput}
                            placeholder="검색할 책을 입력해주세요"
                            onSubmitEditing={SearchSubmitHandler}
                        />
                        <View style={HomeScreenStyle.RecommendSection}>
                            <Text style={HomeScreenStyle.Title}>요즘 인기 있는 책이에요!</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    recommendBooks && recommendBooks.map((doc, idx) => {
                                        return <TouchableOpacity key={idx} onPress={() => navigation.navigate("View", { bookName: doc.bookname._cdata })}>
                                            <View style={HomeScreenStyle.RecommendWrap}>
                                                <Image source={{ uri: doc.bookImageURL._cdata }} style={HomeScreenStyle.recommendBookImage} />
                                                <Text numberOfLines={1}>{doc.bookname._cdata}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    })
                                }
                            </ScrollView>
                        </View>
                        <Timer />
                    </View>
                    <View style={HomeScreenStyle.DesignBox}>
                        <View style={HomeScreenStyle.DesignFirstLine}></View>
                        <View style={HomeScreenStyle.DesignSecondLine}></View>
                    </View>
                </ScrollView>
            )}
        </>
    );
};

export default HomeScreen;
