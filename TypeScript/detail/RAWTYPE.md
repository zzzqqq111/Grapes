# 数据类型
#### *相比较JavaScript,TypeScript增加了一下的类型*
* ### 基本类型
    Any、Void、Null、Undefined、Never、Number、String、Boolean、Array、Symbol、Enum、interface、class、Tuple

* ### 在js中声名变量
    ```JavaScript
        let a
    ```
* ### 在ts中声名变量
    ```TypeScript
        let a: number //数值类型
        let b: number | string //组合类型（数值或字符串）

        // 泛型方法
        let c = <T> ( arg : T ) : T =>{
            return arg
        }

        // 当然，也可以不声名变量类型，ts会默认加上any
        let d
    ```