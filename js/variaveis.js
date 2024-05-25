


var num = 1;
var txt = "Olá"
var logico_v = true
var logico_f = false
var lista_mesmo_tipo = ['Arroz', 'Feijão', 'Batata']
var lista_tipo_mesclado = ['Nota', 10, 'Nota', 5]
var objeto = {
    "Nome": "Francisco",
    "idade": 31,
    "altura": 1.78,
    "situacao":true,
    "linguage_fav": ['Java', 'JS', 'PHP']
}

var vazio = null;
var indefinido = undefined; //ou var indefinido;

//exibindo o conteúdo das variaveis

console.log(num, txt, logico_v, 
    logico_f,  lista_mesmo_tipo, lista_tipo_mesclado, objeto, vazio,
    indefinido
)

//re-atribuicao de valores
txt = 'Texto substituido'

//re-atribuicao troca no tipo de dado
logico_v = "Verdadeiro"

console.log(txt, logico_v)

//objeto por dentro de objeto

var aluno ={
    "nome": "João",
    "dt_nascimento": "25/05/2002",
    "endereco": 
    {
        "rua": "abc, 123",
        "cidade": "São Paulo",
        "uf": "SP"
    }
    //Sim tem um objeto dentro de um objeto
}

console.log(aluno)

//escopo variaveis

//variaveis locais e globais

//Exemplo de variavel Global
//Está ma Raiza do JS, não pertence a nenhum escop
var global = "Eu sou Global"
console.log(global)

//criando uma função
function minha_funcao(){
    //Esta variavel esta por dentro de um escopo
    var local = "Eu sou local";
    console.log(local)
}
//chamada da função - utilizada para executar a mesma na raiz
minha_funcao()

//Não é possível chamar uma variavel fora do escopo/funcao
//console.log(local, global)

//testando let, var e const
function teste_var(){
    var x = 10
    console.log(x)
    if (x){
        var x = 5;
        console.log(x)
    }
    console.log(x)
}
teste_var()

//let permite que a varivael não fique sobrepondo o valor da outra mesmo tendo o mesmo nome
function teste_let(){
    let x = 10
    console.log(x)
    if (x){
        let x = 5;
        console.log(x)
    }
    console.log(x)
}
teste_let()

//o valor da variável não muda e não pode criar uma variável const com valor vazio
function teste_const(){
    const x = 10
    console.log(x)
    if (x){
        const x = 5;
        console.log(x)
    }
    console.log(x)
}
teste_const()