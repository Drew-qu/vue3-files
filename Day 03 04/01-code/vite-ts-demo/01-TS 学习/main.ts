{
  // 泛型接口
  interface Student<T> {
    id: number,
    name: T,
    hobby: string[]
  }

  let s1: Student<string> = {
    id: 55,
    name: 'hdc',
    hobby: ['dd', 'ss', 'ww']
  }

  let s2: Student<number> = {
    id: 55,
    name: 563,
    hobby: ['dd', 'ss', 'ww']
  }
}

