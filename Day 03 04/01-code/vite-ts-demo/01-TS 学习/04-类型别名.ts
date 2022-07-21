{
// 类型别名
type ArrType = (number | string)[]
let arr1 : ArrType = [1, 2, 3, '123']
let arr2 : ArrType = [1, 'abc', 2, 3, '123']

// 灵活度很高, 可以任意搭配组合使用
type ItemType = number | string
let arr3: ItemType[] = [1, 2, 3, '123']
let numbers: ItemType= 1
let strings: ItemType= '2'

// 总结: 将一组数据存储到变量, 使用 type 来声明这个特殊的 变量
}