{
// 函数类型
// 需求: 设置函数的参数类型 + 返回值类型
// 具体: 要求传入 number 类型的参数, 加完后返回 number 类型的值
// 函数之间的互动, 只有传入参数和返回值, 所以为了让代码更少出错, 需要对两个地方进行类型约束
// ts 要求必须给参数定义类型, 返回值会自动推断

// 函数声明
// function 函数名(参数1: 参数1类型, 参数2: 参数2类型): 返回值类型 {函数体}
 function add( a:number, b:number ):number {
  return a + b
 }
}

// 函数表达式
const fn = function(a:number, b: number): number {
  return a + b
}

// 箭头函数
const sub = (a:number, b: number): number => {
  return a + b
}

// 函数的类型别名
type fnType = (a: number, b: number) => number

// 注意: 类型别名通常只能给箭头函数 / 函数表达式使用, 不会给函数声明使用

const fun: fnType = function(a, b) {
  return a + b
}

// 箭头函数
const subH: fnType = (a, b) => {
  return a + b
}