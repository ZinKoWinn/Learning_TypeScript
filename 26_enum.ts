/*
There are three types of Enums in TypeScript. 
These are:
1. Numeric Enum
2. String  Enum
3. Heterogeneous Enum
*/

//1. Numeric Enum
console.log('Numeric Enum');
enum Marks{
    MYANMARSAR = 65,
    ENGLISH = 70,
    MATHMETIC = 76,
    PHYSIC = 80,
    CHEMISTRY = 68,
    BIOLOGY = 85
}
console.log(Marks);
console.log();


//2. String Enum
console.log('String Enum');
enum CountryCode{
    MY = 'Myanmar',
    US = 'United State',
    UK = 'United Kingdom'
}

function getCountry(country:CountryCode) {
    console.log(country);
}
getCountry(CountryCode.MY)
console.log();

//3.Heterogeneous Enum
// The heterogeneous enums are enums, which contains both string and numeric values.
console.log('Heterogeneous Enum');

enum AppStatus {  
    ACTIVE = 'Yes',  
    INACTIVE = 1,  
    ONHOLD = 2,  
    ONSTOP = 'STOP'  
}  
console.log(AppStatus.ACTIVE);  
console.log(AppStatus.ONHOLD);  

