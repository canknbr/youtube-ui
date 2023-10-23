import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const ShortVideoCard = ({ video, index }) => {
  return (
    <View className="flex h-64 w-40 relative mt-3 mr-4 justify-between">
      <Image
        source={video.image}
        className="absolute h-full w-full rounded-xl"
      />
      <View className="flex-row justify-end pt-3 pr-1">
        <Entypo name="dots-three-vertical" size={24} color="white" />
      </View>
      <View className="p-2">
        <Text className="text-white font-semibold shadow-lg text-sm">
          {video.title}
        </Text>
        <Text className="text-white font-extrabold shadow-md text-xs">
          {video.viewCount} Views
        </Text>
      </View>
    </View>
  );
};

export default ShortVideoCard;
