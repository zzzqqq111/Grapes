## 开发小工具
* ### idea[激活](https://blog.csdn.net/khuangz/article/details/78897228)
1. #### 添加地址
    ```bash
    sudo vi /etc/hosts
    
    // add host
    0.0.0.0         account.jetbrains.com
    ```
2. #### 获取[Activation code](http://idea.lanyus.com/)
&emsp;
* ### idea炫酷皮肤
1. #### [color themes](http://color-themes.com/?view=index)
2. #### [material theme](https://plugins.jetbrains.com/plugin/8006-material-theme-ui)
&emsp;
* ### [iTerm炫酷combo](https://www.cnblogs.com/weixuqin/p/7029177.html)
&emsp;
* ### vscode配置
1. #### 实用插件：Atom On Dark Theme, Bracket Pair Colorizer, Intellij IDEA Keybindings, jshint, svcode-icons [...](https://blog.csdn.net/qq_38906523/article/details/77278403)
2. #### 个人配置
```js
{
    // 编辑字
    "editor.fontSize": 15,
    "editor.fontFamily": "Courier new, Meslo LG M for Powerline",
    // 飘逸？
    // "editor.fontFamily": "Operator Mono",
    // 终端字
    "terminal.integrated.fontSize": 13,
    "terminal.integrated.lineHeight": 1.3,
    // 皮肤
    "workbench.iconTheme": "vscode-icons",
    "workbench.colorTheme": "Atom One Dark",
    // jshint
    "jshint.options": {
        "esversion": 6,
        "globals": {
            "$": false,
            "window": false,
            "document": false
        },
        "curly": true,
        "eqeqeq": true,
        "noarg": true,
        "noempty": true,
        "quotmark": "single",
        "undef": true,
        "unused": true,
        "indent": true,
        "asi": true,
        "boss": true
    },   
}
```
&emsp;