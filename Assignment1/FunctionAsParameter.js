
let fun = function(){
    let a = 10;
    console.log(10);
}

let fun2 = function(fun){
    console.log(fun);
}

fun()
fun2(fun)