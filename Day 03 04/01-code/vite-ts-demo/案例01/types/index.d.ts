export type channelList = {
  id: number,
  name: string
}[]

export type channelsRes = {
  data: {
    channels: channelList
  },
  message: string
}

export type newLists = {
  art_id: string
  aut_id: string
  aut_name: string
  comm_count: number
  cover: {
    images?: string[]
  }
  type: number
  pubdate: string
  title: string
}[]

export type newRes = {
  data: {
    results: newLists
  }
}