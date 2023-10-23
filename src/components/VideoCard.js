import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { formatViews } from "../utils";
const VideoCard = ({ video, index }) => {
  return (
    <View>
      <Image source={video.thumbnail} className="h-52 w-full" />
      <View className="flex items-end mr-2 mb-5 -mt-6">
        <View className="bg-black rounded px-1">
          <Text className="text-white font-semibold text-xs">
            {video.lengthText}
          </Text>
        </View>
      </View>
      <View className="flex-row justify-between items-center pb-5 space-x-3 mx-2">
        <Image
          source={video.channelThumbnail}
          className="h-9 w-9 rounded-full"
        />
        <View className="flex-1 space-y-1">
          <Text className="text-white font-semibold">{video.title}</Text>
          <Text className="text-zinc-400 text-xs">
            {video.channelTitle.length > 20
              ? video.channelTitle.slice(0, 20)
              : video.channelTitle}{" "}
            · {formatViews(video.viewCount)} views · {video.publishedText}
          </Text>
        </View>
        <View className="self-start">
          <Entypo name="dots-three-vertical" size={18} color="white" />
        </View>
      </View>
    </View>
  );
};

export default VideoCard;
