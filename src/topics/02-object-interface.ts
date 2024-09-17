
const skills: string[] =["Bash", "Counter", "Healing"];

interface Character{ // Para tipar un objeto
    name: string;
    hp: number;
    skills:string[];
    hometown?:string; //Con ? hago que sea opcional este campo
}

const pablo:Character = {
    name: "Pablo",
    hp: 100,
    skills:["Bash", "Counter"],
}

pablo.hometown = "Rivendell";

console.table(pablo);

export{};