import "./app.css";
import { useState, useEffect } from "react";
import VideoList from "./components/video_list/video_list";

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
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, [name, videos]);
  return <VideoList videos={videos}></VideoList>;
}

export default App;
