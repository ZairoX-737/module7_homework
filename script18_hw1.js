const obj1 = {
    a:1,
    b:55,
    c:15
};

function getObjKeys(obj){
    for(let key in obj){
        if(obj.hasOwnProperty){
            console.log(key + " " + obj[key]);
        }
    }
}
getObjKeys(obj1);