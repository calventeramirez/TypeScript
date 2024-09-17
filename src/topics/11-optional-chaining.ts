

export interface Passenger{
    name:string;
    children?:string[];
}

const passanger1:Passenger = {
    name: "John Doe",
}

const passanger2:Passenger = {
    name: "Carry Harries",
    children: ["Jane Doe", "Alice Doe"]
}


const printChildren = (passenger:Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passanger1);
printChildren(passanger2);