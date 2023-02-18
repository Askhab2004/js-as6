//1
arr_1 = [101,202,303,404,505];
arr_2 = [606,707,808,909];

let superArr = [...arr_1,...arr_2];
console.log(superArr);

//2
console.log(Math.min(...superArr));

//3
let obj = {
    width: 300,
    height: 500,
}
console.log(obj);

let obj2 = obj = {...obj};
obj2.area = function() {
    return this.width * this.height
};
console.log(obj2);
console.log(obj2.area());

//4
function number( ...item) {
    let summa = item.reduce((summa, item) => {
        return summa + item
    }, 0)
    console.log(sum)
}
number(10,200,65,35,5,256);

//5
for (let num = 0; num < 32; num++){
    console.log(`Число: ${num}`)
}
let num1 = 0;
while (num1 < 3) {
    console.log(`Число: ${num1}`)
    num1++;
}