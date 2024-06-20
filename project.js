//## Objetivo:

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador
//depois disso retorne o resultado para uma variável o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100 = Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoresultado}** está no nível de **{nivel}**"
let derrotas=9;
let vitorias=100;
let resultadoTotais=0;
function saldoresultado(derrotas,vitorias){
  resultadoTotais=vitorias-derrotas;
  return resultadoTotais;
}//saldoresultado=resultado-derrotas;
let resultado=saldoresultado(derrotas,vitorias);
function rankdosjogadores(resultado){
    if (resultado<=10){
       return "Ferro";
    }else if(resultado<=20&&resultado>=11){
       return "Bronze";
    }else if(resultado<=50&&resultado>=21){
       return "Prata";
    }else if(resultado<=80&&resultado>=51){
       return "Ouro";
    }else if(resultado<=90&&resultado>=81){
       return "Diamante";
    }else if(resultado<=100&&resultado>=91){
       return "Lendario";
    }else if(resultado>=101){
       return "Imortal";
    }
} //funçao devolve o rank
let rank="";
rank=rankdosjogadores(resultado);   
console.log("O Herói tem de saldo de "+resultado+" está no nível de "+ rank);