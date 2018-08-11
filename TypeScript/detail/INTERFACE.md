# 接口

##### *关键词 interface implements*

```TypeScript
    /* 用法1： 作为参数类型，限定传入的json对象的类型 */
    interface PersonInfoInfo { 
        food: string;
        language: string;  
    }

    /* 用法2： 同强类型的实现与继承 */
    interface Person {
        eat();
        say();
    }
    /* 强类型中接口没有完全实现，可以重新定义为抽象类*/
    abstract class English implements Person { 
        constructor(private info: PersonInfoInfo) { 
        
        }
        eat() { 
            console.log(`eating ${this.info.food} .`);
        }

        abstract say() 
    }

    class Chinese implements Person { 
        constructor(private info: PersonInfoInfo) { 
        
        }

        eat() { 
            console.log(`eating ${this.info.food} .`);
        }

        say() { 
            console.log(`saying ${this.info.language}`);
        }
    }

    let chinese1 = new Chinese({ food: 'rice', language: 'chinese' }) 
    chinese1.eat();
    chinese1.say();
```