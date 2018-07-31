# 新特性
* ### 参数类型
    ```TypeScript
        let myName: string = 'kevin chan'
        myName = 20
        let mySex = 1
        mySex = 'female' 

        /* ts内含类型推算机制，第一次赋值推算类型 */
        let myNickName: any = 'buggy'
        myNickName = 1111

        /* 也可以自定义类型 */
        class Person { 
            name: string
            sex: boolean
            age: number
        }
        let kevin = new Person()
        kevin.name = 'buggy'
        kevin.sex = true
        kevin.age = 20
    ```
* ### 可选参数 
    ```TypeScript
        let getPersonalInfo = (name: string, sex = true, age?: number) => {
                console.log(name)
                console.log(sex)
        }
        let info = getPersonalInfo('kevin')
    ```
* ### 无线参数 
    ```TypeScript
        /* 对rest and spread操作符的利用 */
        let getPersonalInfo = (...infos) => {
            infos.forEach((value) => { 
                console.log(value)
            })
        }
        let info =  [3,2,1]
        getPersonalInfo(5, 4, ...info, 0)
    ```