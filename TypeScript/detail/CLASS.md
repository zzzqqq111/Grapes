# 类
```TypeScript
  class Person {
    name ;
    constructor(name: string) {
        this.name = name;
    }
    
    say() {
      console.log(`my name is ${this.name}`)
    }
  }

  class Programmer extends Person {
    constructor(name: string, public language: string){
        super(name);
        this.language = language;
    }
  }
```