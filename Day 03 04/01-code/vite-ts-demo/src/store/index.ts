import useChannelsStore from "./modules/channels";
import useNewsStore from "./modules/news";

export default function() {
  return {
    channels: useChannelsStore(),
    news: useNewsStore()
  }
}