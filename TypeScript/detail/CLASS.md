# 类

##### *关键词 class new super extends public private protected abstract*

```TypeScript
  class Person {
    /* 访问修饰符 public private protected */
    name ;
    
    /* 构造函数 实例化的限制 */
    constructor(name: string) {
        this.name = name;
    }
    
    say() {
      console.log(`my name is ${this.name} .`)
    }
  }

  class Programmer extends Person {
    constructor(name: string, private language: string){
        super(name);
        this.language = language;
    }

    introduce() { 
      super.say();
      this.skill();
    }

    private skill() { 
      console.log(`I'm good at ${this.language} .`)
    }

  }

  let programmer = new Programmer('buggy', 'ts')

  programmer.introduce();
  programmer.say();

  let workers = new Array<Programmer>();
  workers[0] = programmer;
  /* error */
  workers[1] = new Person('sunny')
```