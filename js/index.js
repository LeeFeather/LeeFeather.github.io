// 获取dom元素
let buttonObjs = document.getElementsByTagName("button");
let resultObj = document.getElementById("result");
let acObj = document.getElementById("ac");
let getResultObj = document.getElementById("getResult");

// 给数字和运算符添加点击事件
for(const buttonObj of  buttonObjs){
  if(!['AC','='].includes(buttonObj.innerHTML)){
    buttonObj.addEventListener('click',() => {
      resultObj.innerHTML += buttonObj.innerHTML;
    });
  }
}


// 给等号添加运算事件
getResultObj.addEventListener('click',() => {
  resultObj.innerHTML = eval(resultObj.innerHTML);
});

// 给清空号添加事件
acObj.addEventListener('click',() => {
  resultObj.innerHTML = "";
});