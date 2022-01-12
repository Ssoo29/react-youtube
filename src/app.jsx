import styles from "./app.module.css";
import { useState, useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import Loader from "./components/loader/loader";

function App({ youtube }) {
  const [loading, setLoading] = useState(null);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    setLoading(true);
    setSelectedVideo(null);
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
      })
      .then(() => {
        setLoading(false);
      });
  };

  const toMain = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    setLoading(true);
    youtube
      .mostPopular() //
      .then((videos) => {
        setVideos(videos.items);
      }).then(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} toMain={toMain} />
      {loading ? (
        <Loader></Loader>
      ) : (
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className={styles.list}>
            <VideoList
              videos={videos}
              onVideoClick={onVideoClick}
              display={selectedVideo ? "list" : "grid"}
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
