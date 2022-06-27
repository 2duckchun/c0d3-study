let a : number[] = [];
let b : string[] = ["2DC"]; // 타입스크립트가 알아서 추론하게도 가능
let c : boolean[] = [true]

type Age = number;
type Name = string;

type Player = {
    name : Name,
    age? : Age,
} // alias type

const player2DC : Player = {
    name : '2DC',
    age : 28
}

function playerMaker(name:string) : Player {
    return {
        name: name,
    }
}

const PJY = playerMaker("박지영")
console.log(PJY);
