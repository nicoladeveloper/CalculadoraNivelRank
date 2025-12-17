const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
    rl.question("Digite a quantidade de vitórias ou  0 pra sair: ", (valor) => {
        let valorVitorias = parseInt(valor);
    

        function condicaoVitoria(vitoria) {
            let nivel;
            if (vitoria >= 11 && vitoria <= 20) {
                nivel = "Bronze";
            }
            else if (vitoria >= 21 && vitoria <= 50) {
                nivel = "Prata";
            }
            else if (vitoria >= 51 && vitoria <= 80) {
                nivel = "Ouro";
            }
            else if(vitoria >=  81 && vitoria <= 90){
                nivel = "Diamante";
            }
            else if (vitoria >= 91 && vitoria <= 100) {
                nivel = "Lendario";
            }
            else if (vitoria > 100) {
                nivel = "Imortal";
            }
            console.log("Ele estar no nível " + nivel);
        }
        condicaoVitoria(valorVitorias)
        rl.close();

    });
