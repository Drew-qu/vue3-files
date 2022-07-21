{
   // 泛型 - 类型约束
  
  // function getId<T>(val: T) {

  //   // console.log(val.length); // 报错: T 是一个未知的类型, 所以无法得知它到底有没有 length
    
  //   return val
  // }

  // 指定更加明确的类型: T 类型的数组, val 确定就是一个数组, 所以可以使用 length
  // function getId<T>(val: T[]) {
  //   console.log(val.length);  // val 已经明确它是个数组了,所以可以使用 length

    
  //   return val
  // }

  // 类型收缩: 比较麻烦
  // function getId<T>( val: T) {
  //   if(typeof val === 'string') {
  //     console.log(val.length);
  //   }
    
  //   return val
  // } 

  // 定义接口
  interface ILength {
    length: number
  }

  // 添加约束
  function getId<T extends ILength>( val: T) {
    console.log(val.length);
    
    return val
  }
}