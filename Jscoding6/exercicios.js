//exercicíos de While & do
//------------ Fáceis ------------
//------------ exercicio 1------------
let continuar;


do {
   
    let nome = prompt("Digite o nome do aluno:");
   
    let idade = prompt("Digite a idade do aluno:");
   
    alunos.push({ nome: nome, idade: idade });
   
   
    continuar = prompt("Deseja cadastrar outro aluno? (s/n)").toLowerCase();
} while (continuar === 's');


let i = 0;
console.log("Alunos cadastrados:");
while (i < alunos.length) {
    console.log(`Nome: ${alunos[i].nome}, Idade: ${alunos[i].idade}`);
    i++;
}


//------------ exercicio 2------------


let continuar;


do {
    let totalNotas = 0;
    let quantidadeNotas = 0;
    let nota;
   
    do {
        nota = parseFloat(prompt("Digite a nota da prova (ou um número negativo para finalizar):"));
       
       
        if (nota >= 0) {
            totalNotas += nota;
            quantidadeNotas++;
        }
    } while (nota >= 0);


   
    if (quantidadeNotas > 0) {
        let media = totalNotas / quantidadeNotas;
        console.log(`A média das notas é: ${media.toFixed(2)}`);
    } else {
        console.log("Nenhuma nota foi inserida.");
    }


    continuar = prompt("Deseja simular mais notas? (s/n)").toLowerCase();
} while (continuar === 's');


console.log("Programa encerrado.");


//------------ exercicio 3------------
const usuarioCorreto = "aluno";
const senhaCorreta = "senha123";


let loginBemSucedido = false;


do {
    let usuario = prompt("Digite seu nome de usuáro (ou 'sair' para encerrar):");
   
    if (usuario.toLowerCase() === "sair") {
        console.log("Saindo do sistema.");
        break;
    }


    let senha = prompt("Digite sua senha:");


    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        loginBemSucedido = true;
        console.log("Login bem-sucedido! Bem-vindo ao sistema.");
    } else {
        console.log("Usuário ou senha incorretos. Tente novamente.");
    }


} while (!loginBemSucedido);


if (!loginBemSucedido) {
    console.log("Você saiu do sistema.");
}
//------------ exercicio 4------------
let continuar;


do {
    
    let numero = parseFloat(prompt("Digite um número:"));
   

    let expoente = parseInt(prompt("Digite o expoente:"));

    let resultado = Math.pow(numero, expoente);


    console.log(`${numero} elevado a ${expoente} é igual a ${resultado}.`);


    continuar = prompt("Deseja calcular outra potência? (s/n)").toLowerCase();
} while (continuar === 's');


console.log("Programa encerrado.");

//------------ exercicio 5------------

function senhaForte(senha) {
    const minLength = 8; 
    const temLetra = /[a-zA-Z]/.test(senha); 
    const temNumero = /[0-9]/.test(senha); 

    return senha.length >= minLength && temLetra && temNumero; 
}

let senha;

while (true) {
    senha = prompt("Digite uma senha forte (mínimo de 8 caracteres, com letras e números):");

    if (senhaForte(senha)) {
        console.log("Senha válida! Acesso concedido.");
        break;
    } else {
        console.log("Senha inválida! A senha deve ter pelo menos 8 caracteres e conter letras e números. Tente novamente.");
    }
}
//------------ exercicio 6------------

function calcularMediaNotas() {
    let totalNotas = 0;
    let contadorNotas = 0;
    let nota;

    do {
        nota = prompt("Digite uma nota (ou 'sair' para encerrar):");

        if (nota.toLowerCase() === 'sair') {
            break;
        }

        nota = parseFloat(nota);

        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            totalNotas += nota;
            contadorNotas++;
        } else {
            alert("Por favor, insira uma nota válida entre 0 e 10.");
        }
    } while (true);

    if (contadorNotas > 0) {
        const media = totalNotas / contadorNotas;
        alert(`A média das notas é: ${media.toFixed(2)}`);
    } else {
        alert("Nenhuma nota foi registrada.");
    }
}

calcularMediaNotas();
//------------ exercicio 7------------
function jogoDeAdivinhacao() {
    
    const numeroCorreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;
    
    do {
        tentativa = parseInt(prompt("Adivinhe um número entre 1 e 10:"));

        if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
            alert("Por favor, insira um número válido entre 1 e 10.");
        } else if (tentativa < numeroCorreto) {
            alert("Muito baixo! Tente novamente.");
        } else if (tentativa > numeroCorreto) {
            alert("Muito atol! Tente novanente.");
        }
    } while (tentativa !== numeroCorreto);

    alert(`Parabéns! Você adivinhou o número correto: ${numeroCorreto}`);
}

jogoDeAdivinhacao();
//------------ exercicio 8------------
function validarNomeEIdade() {
    let nome;
    let idade;

    do {
        nome = prompt("Digite o nome do aluno:");
        if (nome === "") {
            alert("Por favor, insira um nome válido.");
        }
    } while (nome === "");

    do {
        idade = parseInt(prompt("Digite a idade do aluno:"));
        if (isNaN(idade) || idade < 16 || idade > 100) {
            alert("Por favor, insira uma idade válida entre 16 e 100.");
        }
    } while (isNaN(idade) || idade < 16 || idade > 100);

    alert(`Nome: ${nome}, Idade: ${idade}`);
}

validarNomeEIdade();
//------------ exercicio 9------------
let produtos = [];

function cadastrarProduto() {
    let nome;
    let quantidade;

    do {
        nome = prompt("Digite o nome do produto (ou 'sair' para parar):");
        if (nome.toLowerCase() === 'sair') {
            return;
        }
        if (nome === "") {
            alert("Por favor, insira um nome de produto válido.");
        }
    } while (nome === "");

    do {
        quantidade = parseInt(prompt("Digite a quantidade em estoque:"));
        if (isNaN(quantidade) || quantidade < 0) {
            alert("Por favor, insira uma quantidade válida.");
        }
    } while (isNaN(quantidade) || quantidade < 0);

    produtos.push({ nome, quantidade });

    alert(`Produtos cadastrados:\n${produtos.map(p => `${p.nome} - ${p.quantidade}`).join('\n')}`);
}

while (true) {
    cadastrarProduto();
}
//------------ exercicio 10------------