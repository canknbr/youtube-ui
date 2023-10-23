import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { themeColors } from "../theme";
import { Feather } from "@expo/vector-icons";
import { categories, shortVideos, videos } from "../constants";
import ShortVideoCard from "../components/ShortVideoCard";
import VideoCard from "../components/VideoCard";
import { fetchVideos } from "../api/youtube";
const HomeScreen = () => {
  const [isActive, setActive] = useState("All");
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetchVideos();
    setData(data);
  };
  return (
    <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex-row items-center justify-between mx-4">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require("../../assets/icons/youtubeIcon.png")}
            className="h-7 w-10"
          />
          <Text className="text-white font-semiBold text-xl tracking-tighter">
            YouTube
          </Text>
        </View>
        <View className="flex-row items-center space-x-3">
          <Feather name="cast" size={24} color="white" />
          <Feather name="bell" size={24} color="white" />
          <Feather name="search" size={24} color="white" />
          <Image
            source={require("../../assets/images/can.jpeg")}
            className="h-6 w-6 rounded-full"
          />
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 mt-2">
        <View className="py-2 pb-5">
          <ScrollView
            className="px-4"
            horizontal
            showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => {
              let active = category === isActive;
              let activeClassName = active ? "text-black" : "text-white";
              return (
                <TouchableOpacity
                  onPress={() => setActive(category)}
                  key={index}
                  className="rounded-md p-1 px-3 mr-2"
                  style={{
                    backgroundColor: active
                      ? "rgb(255,255,255)"
                      : "rgba(255,255,255,.1)",
                  }}>
                  <Text className={activeClassName}>{category}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <VideoCard video={data[0]} />
        <View className="mt-2 py-5 border-t-zinc-700 border-b-zinc-700 border-y-4 ">
          <View className="mx-4 flex-row items-center space-x-2">
            <Image
              source={require("../../assets/icons/shortsIcon.png")}
              className="h-6 w-5"
            />
            <Text className="text-white text-lg font-medium -tracking-tighter">
              Shorts
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-4">
            {shortVideos.map((video, index) => (
              <ShortVideoCard video={video} key={index} index={index} />
            ))}
          </ScrollView>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((video, index) => (
            <VideoCard video={video} key={index} index={index} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
