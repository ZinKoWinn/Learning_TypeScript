//Different between static variable and instance variable
class Counter {
    static count:number = 1;
    count:number = 1;

    staticCountUp(){
       return Counter.count++;
    }

    instanceCountUp(){
        return this.count++;
    }
}

var c1 = new Counter();
console.log(`Static : ${c1.staticCountUp()}`);
console.log(`Instance : ${c1.instanceCountUp()}`);

var c2 = new Counter();
console.log(`Static : ${c2.staticCountUp()}`);
console.log(`Instance : ${c2.instanceCountUp()}`);

var c3 = new Counter();
console.log(`Static : ${c3.staticCountUp()}`);
console.log(`Instance : ${c3.instanceCountUp()}`);
