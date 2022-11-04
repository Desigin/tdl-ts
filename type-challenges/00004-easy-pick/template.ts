/**
 * T T是一个联合类型 类似 string | number
 * K extends keyof T  K循环匹配K里的值
 *
 * K  [title,completed]
 * T [title,description,completed]
 *
 */
type MyPick<T, K extends keyof T> = {
    //P在K里查找对应的key
    [P in K] : T[P]
}

// js写法
// function myPick(todo, keys) {
//     const obj = {}
//     keys.forEach(key=>{
//         if(key in keys) {
//             obj[key] = todo[key]
//         }
//     })
//     return obj;
// }
//
// 1、返回一个对象
// 2、遍历forEach mapped
// 3、todo[key] 取值 indexed
// 4、看看key在不在todo里
//     1、keyof lookup  类型约束
