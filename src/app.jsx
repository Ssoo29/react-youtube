import "./app.css";
import { useState, useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import data from "./mockData/mostPopular";

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("elllie");

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyBAcsikNGwrKYDhQuyL-2juSbD5tBFS2DE",
      requestOptions
    )
      .then((response) => {
        if (response.status === 403) {
          console.error("API key exceeded: ", response);
          setVideos(data.items);
        } else if(response.status === 200){
          return response.json();
        } else {
          throw new Error("Unexpected Http Status Code");
        }
      })
      // .then((responseJson) => setVideos(responseJson.items))
      .catch((error) => console.error("error: ", error));
  }, [name, videos]);
  return <VideoList videos={videos}></VideoList>;
}

export default App;
