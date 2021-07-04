/*
* Decorators
A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. 
Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.
ypeScript Decorators serves the purpose of adding both annotations and metadata to the existing code in a declarative way.

 * Types of Decorators
TypeScript uses the following types of Decorators:
1.Class Decorators
2.Method Decorators
3.Accessor Decorators
4.Property Decorators
5.Parameter Decorators

* Decorator Factories
If we want to customize how a decorator is applied to a declaration, we can write a decorator factory. 
A Decorator Factory is simply a function that returns the expression that will be called by the decorator at runtime.
*/

// 

interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    operation(): string {
        return 'ConcreteComponent';
    }

}

class Decorator implements Component {
    protected component: Component;
    /**
     *
     */
    constructor(component: Component) {
        this.component = component;

    }
    operation(): string {
        return this.component.operation();
    }

}


class ConcreteDecorator1 extends Decorator {
    public operation(): string {
        return `ConcreteDecorator1(${super.operation()})`;
    }
}

class ConcreteDecorator2 extends Decorator {
    public operation(): string {
        return `ConcreteDecorator2(${super.operation()})`;
    }
}

function clidentCode(component: Component) {
    console.log(`RESULT : ${component.operation()}`);

}

let concrete = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clidentCode(concrete);
console.log();


const decorator1 = new ConcreteDecorator1(concrete);
const decorator2 = new ConcreteDecorator1(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clidentCode(decorator2);
console.log();

// Method Decorator
console.log('Method Decorator');

const measure = (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const finish = performance.now();
        console.log(`Execution time: ${finish - start} milliseconds`);
        return result;
    };

    return descriptor;
};

class Application {
    @measure
    launch(): void {
        console.log('Launching .....');

    }
}

let app = new Application();
app.launch();
console.log();

// Decorator factory

/*
To configure your decorators to act differently in a certain scenario, 
we can use a concept called decorator factory.
Decorator factory is a function that returns a decorator. 
This enables you to customize the behavior of our decorators 
by passing some parameters in the factory.
*/
console.log('Decorator factory');

const changeValue = (value) => (target: Object, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, { value })
};

class DecoratorFactory {
    @changeValue(100)
    count: number = 19;

    showCount(): void {
        console.log(`Count : ${this.count}`);

    }
}
let dec = new DecoratorFactory();
dec.showCount();
console.log();

// Automatic error guard
console.log('Automatic error guard');

const minimunFuel = (fuel: number) => (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
        if (this.fuel > fuel) {
            originalMethod.apply(this, args);
        } else {
            console.log('Not enouth fuel to go yangon!');

        }
    };
    return descriptor;
};

class ExpressCar {

    fuel: number = 50;

    @minimunFuel(100)
    driveToYangon(): void {
        console.log('Driving to Yangon...');
    }
    
    @minimunFuel(25)
    driveToChauk(): void {
        console.log('Driving to Chauk...');

    }
}
let expCar = new ExpressCar();
console.log('driveToYangon();');
expCar.driveToYangon();
console.log();
console.log('driveToChauk()');

expCar.driveToChauk()
console.log();




