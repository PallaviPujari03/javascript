



const array = [10, 5, 'a', 'b', 'h', 11];
console.log('It is given array', array);
console.log('---------------sorting array----------------');
const array1 = array.sort();
console.log('It is sorting array', array1);
console.log('--------------sort only alphabet---------------');
var stringarray = [];
var numberarray = [];
array.forEach(element =>{
    if(typeof(element) =='string'){
        stringarray.push(element);
        
    }  
});
console.log(stringarray);
console.log('---------------sort only number----------------');
array.forEach(element =>{
    if(typeof(element) =='number'){
        numberarray.push(element);
        
    }  
});
console.log(numberarray);



