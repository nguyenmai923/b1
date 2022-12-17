const obj={
    name: "Mai",
    age: 19,
    email: "mainguyen@gmail.com"
}
function run(obj){
    for(const key in obj){
        console.log(key+":"+obj[key]);
    }
}
run(obj);