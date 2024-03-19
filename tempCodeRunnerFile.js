const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do herói: ', (nomeHeroi) =>  {  
  rl.question('Digite a quantidade de XP do herói: ', (xpHeroi) =>{
    // Converter a entrada de XP para um número
    xpHeroi = parseInt(xpHeroi);

    // Classificar o nível do herói com base na XP
    let nivelHeroi;
    if (xpHeroi < 1000) {
      nivelHeroi = "Ferro";
    } else if (xpHeroi <= 2000) {
      nivelHeroi = "Bronze";
    } else if (xpHeroi <= 5000) {
      nivelHeroi = "Prata";
    } else if (xpHeroi <= 7000) {
      nivelHeroi = "Ouro";
    } else if (xpHeroi <= 8000) {
      nivelHeroi = "Platina";
    } else if (xpHeroi <= 9000) {
      nivelHeroi = "Ascendente";
    } else if (xpHeroi <= 10000) {
      nivelHeroi = "Imortal";
    } else {
      nivelHeroi = "Radiante";
    }

    // Exibir o resultado
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
    
    rl.close();
  });
});