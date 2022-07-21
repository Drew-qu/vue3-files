{
  // 作用: 给对象约束属性和方法
  // 基础语法: 
  // interface 接口名 {
  //   属性名: 类型
  // }

  interface IPerson {
    name: string,
    age: number,
    sayHi(content: string): void
  }

  let Person: IPerson = {
    name: '元风气',
    age: 16,
    sayHi(content) {
      console.log('严凤起喜欢' + content);
      
    },
  }

  Person.sayHi('乔碧萝')

  // interface 和 type 的区别: interface 只能约束对象, 而 type 可以更灵活的使用
  // 能用 type 就用 type
}