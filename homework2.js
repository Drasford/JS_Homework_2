let list = {
    value: 1,
    next: {
     value: 2,
     next:{
      value:3,
      next:{
        value:4,
        next:{
          value:5,
          next:null
            }
            }
        }
    }
}

let stefan = {
    age: 13,
    rodnini:{
        niza: ["rodnina1","rodnina2"]
    }
}


function printRecursion(list){
    if(list.next==null) {
     console.log(list.value);
        return;
    }
    console.log(list.value);
    printRecursion(list.next);
}

function reversePrintRecursion(list){
    if(list.next==null) {
     console.log(list.value);
        return;
    }
    printRecursion(list.next);
    console.log(list.value);
}

while(true){
    console.log(list.value);
    list = list.next;
    if(list.next == null){
        break;
    }
}
var niza = [];
while(true){
    debugger
    niza.push(list.value)
    if(list.next == null){
        niza.reverse();
        niza.forEach(element => {
            console.log(element)
        });
        break;
    }
        list = list.next; 
   
}
console.log(printRecursion(list));
console.log(reversePrintRecursion(list));