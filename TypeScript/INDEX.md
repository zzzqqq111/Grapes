# **TypeScript学习**
### 作者：Kevin Chan
###### *基础的学习点击[入门文档](https://ts.xcatliu.com/)、[入门视频](https://www.imooc.com/learn/763)。以下是学习后总结。* 
* ## TS的由来
    ### TypeScript时由微软推出的JavaScript的超集，它遵循ES6的规范，并添加了基于类的面向对象开发的特性。
* ## TS的优势
    * ### 支持ES6规范
        享受各种语法糖
    * ### 强大的ide支持
       ide能根据编码的上下文自动提示，可用的类、方法、变量，在修改名称时，ide能自动修改引用处的名称，提高重构效率。
    * ### 已融入各大框架
        * #### 白鹭引擎Egret
        * #### Angular2
        * #### ReactNative
* ## TS的编译器
    * ### [在线编译器](http://www.typescriptlang.org/play/index.html)
    * ### 本地编译器
* ## [新特性](./detail/NEWFEATURES.md)
    * ### 字符串新特性--同ES6模板
    * ### 参数类型
    * ### 可选参数
* ## 面向对象特性
    * ### [类](./detail/CLASS.md)
    * ### [接口](./detail/INTERFACE.md)
    * ### [类型定义文件](https://github.com/DefinitelyTyped/DefinitelyTyped)
* ## TS和JS的本质区别
    * ### [静态语言和动态语言](./detail/DYNAMICVSSTATIC.md)
* ## 第三方包的安装工具
    * ### TSD
    * ### Typings
* ## 与webpack结合
    *   ### ts-loader
* ## 无法申明块范围变量       
    * ### [解决方案](https://www.jianshu.com/p/78268bd9af0a)
## 总结：
   * #### *TypeScript默认的修饰符是public，默认的类型是any类型。在不增加类型和修饰符定义的情况下，基本和ES6一致。最后编译生成各版本的js运行，本质还是js*。
   * #### *学习过Java,了解ES6语法规范的同学,TypeScript上手的难度不大。相对没了解过强类型语言的,存在一定的学习成本。*