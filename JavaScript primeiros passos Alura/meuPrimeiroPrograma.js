console.log("Meu primeiro programa");
// JS eh case sensitive

const IDADE = 26;

var idade = 5;
idade= idade+2;

console.log("Idade: "+idade);

console.log("IDADE: "+IDADE);

console.log(`IDADE: ${IDADE}`) ;
console.log("Ricardo" / "2");


console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);




console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`);

console.log(listaDeDestinos);

listaDeDestinos.splice( 2,1);

console.log(listaDeDestinos);

let idadeComprador = 13;

if(idadeComprador>=18){
    console.log(`Maior de idade ${idadeComprador}`);
}else{
    console.log(`Menor de idade ${idadeComprador}`);

}

let contador = 0;
while(contador<3){
    console.log(listaDeDestinos[contador]);
    contador+=1;
}