//Todo-object
const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
    }
    
function handleObject(obj,key, action){
   
    if(action === 'get'){
        const keysobj =Object.keys(obj);
        return keysobj
    }else if(action ==='add'){
           obj[key]=' '
           return obj
    } else if(action === 'delete'){
        delete obj[key];
        return obj
    }
}
console.log(handleObject(student, "age", "add"))