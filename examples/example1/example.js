function fib(x){
    if(x<2){
        return 1;
    }return fib(x-1) + fib(x-2);
}

//console.log(fib(5));

function processFib () {
    var x = document.getElementById("txtNumber");
    var result = document.getElementById("result");
    var i = 0;
    var fibX = '';
    while (i<=x.value){
        fibX = fibX + fib(i).toString() + ', ';
        i++;
    }
    result.value = fibX;
}

// fib4 + fib3
// fib3+fib2 + fib2+fib1
// fib2+fib1 + fib1+fib0 + fib1+fib0 + 1
// fib1 + fib0 + 1 + 1 + 1 + 1 + 1 + 1
// 8