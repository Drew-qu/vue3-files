{

type sd = {
  name: string,
  gender: string,
  res: number,
  hight: number,
  study: (content: string) => void,
  game: (content: string) => void
}

let student: sd = {
  name: '严凤起',
  gender: '女',
  res: 324,
  hight: 163,
  study: (content) => {
    console.log('学习' + content );
  },
  game: function(content) {
    console.log('打游戏' + content); 
  }
}
student.study('123')
student.game('456')

}