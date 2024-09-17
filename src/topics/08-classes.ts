

// export class Person {
//     public name: string;
//     private address: string;

//     constructor(name:string, address:string){
//         this.name = name;
//         this.address = address;
//     }
    
// }

export class Person {

    constructor(public firstNamen:string, public lastName:string ,private address:string = "Sin dirección"){
    }
    
}

// export class Hero extends Person {
    
//     constructor(public alterEgo:string, public age: number, public realName:string){
//         super(realName, "New York");
//     }
// }

export class Hero{
    constructor(public alterEgo:string, public age: number, public realName:string, public person: Person){
    }
}

const person = new Person("Tony","Stark", "New York");

const ironman = new Hero("Ironman", 53, "Tony Stark", person);

console.log(ironman);
