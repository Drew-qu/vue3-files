export type channelsList = {
  id: number
  name: string
}[]

export type channelsRes = {
  data: {
    channels: channelsList
  }
  message: string
}

export type newsLists = {
  art_id: string
  aut_id: string
  aut_name: string
  comm_count: number
  cover: {
    images: string[]
  }
  type: number
  is_top: number
  pubdate: string
  title: string
}[]

export type newsRes = {
  data: {
    results: newsLists
  }
  message: string
}