import axios from "axios";
import { rapidApiKey } from "../constants";
export const fetchVideos = async (params) => {
  const options = {
    method: "GET",
    url: "https://youtube-v3-alternative.p.rapidapi.com/trending?geo=TR&lang=en",

    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
