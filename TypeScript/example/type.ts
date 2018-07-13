/* ========================= */
// let a: number
// let b: number | string
// let c = <T> ( arg : T ) : T =>{
//     return arg
// }

/* ========================= */
let a: number 
let add = ( a : number, b: number ): number =>{
    return a + b
}
a = add(1, 2)
console.log(a)
a = add('1', 2)
console.log(a)
✘ 😏  ~/Grapes   master ●  tsc ./TypeScript/example/type.ts
TypeScript/example/type.ts:15:9 - error TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.