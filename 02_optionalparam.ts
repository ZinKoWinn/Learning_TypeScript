function showInfo(info:{name:string; age:string; phone?:string}) {
    console.log('Name : ' + info.name);
    console.log('Age : ' + info.age);
    console.log('Phone : ' + info.phone);
}

showInfo({name:'Zin Ko Winn',age:'19'})
console.log();
showInfo({name:'Zin Ko Winn',age:'19',phone:'09123456789'})
