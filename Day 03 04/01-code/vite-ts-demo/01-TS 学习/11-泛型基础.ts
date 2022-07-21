{

  {
    // 泛型
    // function getId(val:any) {
    //   return val
    // }
    // 调用 getId 函数时来指定传入参数的类型
    // <T>  在声明泛型
    // val: T  使用泛型
    // 调用函数时传入泛型指定的具体类型
    function getId<T>(val: T) {
      return val
    }
  
    console.log(getId<number>(123));
    console.log(getId<string>('123'));
    console.log(getId<boolean>(false));
  
  } 


} 