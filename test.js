const value1 = Number(prompt('Enter first value')) || 0;
const value2 = Number(prompt('Enter second value')) || 0;



if(value1>value2 ){
    alert("The larger number is " + value1);
}else if(value2>value1){

    alert("The larger number is " + value2);
}else{

    alert("The numbers are equal");
}

