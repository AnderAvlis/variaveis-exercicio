const nome = prompt("Qual o seu nome completo ?")
const idade = Number(prompt("Qual a sua idade"))

console.log(typeof nome) // primeira consulta console.log atribuindo ao valor de nome apenas as "" é reconhecido como string, ja o campo idade apresenta um erro de referencia por estar em branco.
console.log(typeof idade)//  na segunda consulta console.log nome foi apresentado como string corretamente,e os dados de idade entrou como string tambem, afim de de solucionar o retorno adicionei afuncao number antes do comando de captura de informacao, recebendo assim o retorno de numero.

console.log("Olá", nome, "você tem", idade, "anos.")




const pergunta1 = prompt("Você gosta de futebol? Responda com Sim ou Não.")
const pergunta2 = prompt("Você vai assistir aos jogos da copa do mundo 2022? Responda com Sim ou Não.")
const pergunta3 = prompt("Quem você acha que ira vencer a copa do mundo 2022? Responda com Sim ou Não.")

console.log(pergunta1, pergunta2, pergunta3)




const pergunta01 = "Você gosta de futebol? Responda com Sim ou Não."
const pergunta02 = "Você vai assistir aos jogos da copa do mundo 2022? Responda com Sim ou Não."
const pergunta03 = "Quem você acha que ira vencer a copa do mundo 2022? Responda com Sim ou Não."

const resposta01 = prompt(pergunta01)
const resposta02 = prompt(pergunta02)
const resposta03 = prompt(pergunta03)

console.log(pergunta01,resposta01)
console.log(pergunta02, resposta02)
console.log(pergunta03, resposta03)



