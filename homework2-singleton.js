class SingletonClass {
    constructor() {
        if (SingletonClass.instance) {
            return SingletonClass.instance;
        }
        this.name = "Stefan"
        SingletonClass.instance = this;
     
        return this;
    }

    setName(params) {
        this.name = params;
    }
    getName(){
        return this.name;
    }
}

let instance1 = new SingletonClass();
let instace2 = new SingletonClass();

instance1.setName("risto");
let a = instace2.getName();
console.log(a);

console.log(instace2 === instance1);