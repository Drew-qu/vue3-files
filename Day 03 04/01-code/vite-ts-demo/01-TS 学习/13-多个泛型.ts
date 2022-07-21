{
  // 多个泛型
  // 需求: 定会一个函数, 传入一个对象, 再传入一个字符串姓名, 返回属性值
  // 新语法: keyof O 意思就是 O的所有属性
  // function getProp<O, K extends keyof O>(obj: O, key: K) {
  //   return obj[key]
  // }

  // const p1 = {
  //   name: 'jjs',
  //   age: 12
  // }

  // const result1 = getProp(p1, 'age')
  // const result2 = getProp(p1, 'name')
}