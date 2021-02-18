var containerEle = document.body.querySelector(".container")
 
var num1=Number(prompt('whats is your bill?'));
 
var sum=(num1*12/100+num1)

sum=Math.floor(sum);

containerEle.innerHTML="Total Bill is "+ sum;