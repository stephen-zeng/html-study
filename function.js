function calc(a,b) {
    var current=0;
    return {
        plus: function() {
            current=a+b;
            return a+b;
        },
        minus: function() {
            current=a-b;
            return a-b;
        },
        equal: function() {
            current=a*b;
            return a*b;
        },
        divide: function() {
            current=a/b;
            return a/b;
        },
        get_result: function(){
            return current;
        }
    }
}
var num1,num2;
num1=100;
num2=50;
var result=calc(num1,num2);
console.log(result.get_result());
result.plus();
console.log(result.get_result());
result.divide();
console.log(result.get_result());