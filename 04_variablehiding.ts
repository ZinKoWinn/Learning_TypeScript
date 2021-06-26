class Message{
     public message:string = 'Global Variable';

     showMessage(message:string){
        console.log(message); 
    }

    something(){
        var message:string = 'Local Variable';
        console.log(this.message);
    }
    
     static doSomething() {
        var message:string = 'Local Variable';
        console.log(message);
    }

    
}

var sms = new Message();
sms.showMessage("Hello, TypeScript's Variable Hiding");
sms.something();
Message.doSomething();