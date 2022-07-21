import useChannelsStore from './modules/Channel'
import useNewStore from './modules/newList'

export default function() {
  return {
    channels: useChannelsStore(),
    news: useNewStore()
  }
}