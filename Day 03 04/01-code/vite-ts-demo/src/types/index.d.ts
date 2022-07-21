export type channelList = {
  id: number
  name: string
}[]

export type channelRes = {
  data: {
    channels: channelList
  },
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
  is_top: number
  pubdate: string
  title: string
}[]

export type newsRes = {
  data: {
    results: newsLists
  },
  message: string
}