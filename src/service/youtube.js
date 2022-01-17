import mostPopular from "../mockData/mostPopular";
import searchList from "../mockData/videoList";

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    try {
      const response = await this.youtube.get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25
        }
      })
      if (response.status === 403) return mostPopular;
      return response.data;
    } catch (error) {
      console.error("error: ", error);
    }
  }

  async search(query) {
    try {
      const response = await this.youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          q: query,
          type: 'video'
        }
      })
      if (response.status === 403) {
        const videoList = searchList.items.filter((item) => item.id.videoId);
        return videoList.map((item) => {
          return { ...item, id: item.id.videoId };
        });
      } 
      return response.data.items.map((item) => {
        return { ...item, id: item.id.videoId };
      });
    } catch (error) {
      console.log("error", error);
    }
  }
}

export default Youtube;
