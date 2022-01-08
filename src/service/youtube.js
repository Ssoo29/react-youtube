import mostPopular from "../mockData/mostPopular";
import searchList from "../mockData/videoList";

class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=${this.key}`,
        this.getRequestOptions
      );
      if (response.status === 403) {
        return mostPopular;
      } else if (response.status === 200) {
        const responseJson = response.json();
        return responseJson;
      } else {
        throw new Error("Unexpected Http Status Code");
      }
    } catch (error) {
      return console.error("error: ", error);
    }
  }

  async search(query) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
        this.getRequestOptions
      );
      if (response.status === 403) {
        return searchList.items.map((item) => {
          return { ...item, id: item.id.videoId };
        });
      } else if (response.status === 200) {
        const responseJson = response.json();
        return responseJson.items.map((item) => {
          return { ...item, id: item.id.videoId };
        });
      } else {
        throw new Error("Unexpected Http Status Code");
      }
    } catch (error) {
      return console.log("error", error);
    }
  }
}

export default Youtube;
