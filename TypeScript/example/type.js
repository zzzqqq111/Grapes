/* ========================= */
// let a: number
// let b: number | string
// let c = <T> ( arg : T ) : T =>{
//     return arg
// }
/* ========================= */
var a;
var add = function (a, b) {
    return a + b;
};
a = add(1, 2);
console.log(a);
a = add('1', 2);
console.log(a);
