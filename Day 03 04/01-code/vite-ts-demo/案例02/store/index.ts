import useChannelStore from './modules/channels'
import useNewsStore from './modules/news'

export default function() {
  return {
    channels: useChannelStore(),
    news: useNewsStore()
  }
}