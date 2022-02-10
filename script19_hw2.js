const text = 'c';
const obj1 = {
    a: 1,
    b: 55,
    c: 15,
    d: 112,
    d1: '112-1', 
};

function checkStringInObj(str, obj){
    if(str in obj){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkStringInObj(text, obj1));