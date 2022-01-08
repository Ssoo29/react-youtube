import styles from "./app.module.css";
import { useState, useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => {
        setVideos(videos.items);
      });
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
