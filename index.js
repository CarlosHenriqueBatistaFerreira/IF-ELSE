console.log(`Trabalhando com condicionais.`);

console.log(`Destinos oferecidos`);

const listaDeDestinos = new Array(
  `Istambul`,
  `Catar`,
  `Bahrein`,
  `Monaco`,
  `Las Vegas`,
);

console.log(listaDeDestinos);

const idadeComprador = 18;
const menorAcompanhado = true;

if(idadeComprador >=18) {
  console.log(`Comprador maior de idade: destino selecionado foi ${listaDeDestinos[2]}`)
}

if (idadeComprador < 18 && menorAcompanhado == true) {
  console.log(`O menor encontra-se acompanhado, então ele pode realizar a viagem.`)
  console.log(`O destino escolhido foi:${listaDeDestinos[3]}`);
  
}else if (idadeComprador <18 && menorAcompanhado == false) {
  console.log("O comprador é menor e não está acompanhado");
 }
