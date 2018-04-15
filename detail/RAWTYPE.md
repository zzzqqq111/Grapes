# 数据类型
#### *相比较JavaScript,TypeScript增加了一下的类型*
## 基本类型
any、Null、Undefined、number、string、boolean、Symbol
### 在js中声名变量
```JavaScript
let a
```
### 在ts中声名变量
```TypeScript
let a: number
let b: number | string
let c = <T> ( arg : T ) : T =>{
    return arg
}
```