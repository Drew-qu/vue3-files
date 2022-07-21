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

  // 接口继承
  // 如果两个接口之间有相同的属性或者方法时, 可以将公共的属性或是方法抽离出来
  // interface p2D { x: number, y: number}
  // interface p3D { x: number, y: number, z: number}

  // interface p2D { x: number, y: number}
  // interface p3D extends p2D {
  //   z: number
  // }


  // 使用 type 实现继承  使用 & 连接符
  type p2D = { x: number, y: number}
  type p3D = { z: number } & p2D

  // interface 和 type 的区别: interface 只能约束对象, 而 type 可以更灵活的使用
  // 能用 type 就用 type
}