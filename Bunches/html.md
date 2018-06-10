* ## 18/05/17
```html
<input type="number" maxlength="6"> // maxlength 属性不起效果
<input type="number" oninput="if(value.length>6) value=value.slice(0,6)"> // good
<input type="tel" maxlength="6"> // good
<input type="password" onpaste="return false" oncopy="return false" oncut="return false" oncontextmenu="return false"> // good
```
