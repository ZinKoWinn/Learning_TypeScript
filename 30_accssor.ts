class Student {
    private _name:string = '';
   
    
    public get name() : string {
        return  this._name;
    }
    
    public set name(studentName : string) {
        this._name = studentName;
    }

    /**
     *
     */
    constructor() {
        
    }
    
    /**
     * greet
     */
    public greet() {
        console.log(`My name is ${this.name}.`);
        
    }
}

var stu = new Student();
stu.name = 'Zin Ko Winn';
stu.greet();