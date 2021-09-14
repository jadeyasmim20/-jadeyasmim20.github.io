// Questions will be asked
const Questions = [{
    id: 0,
    q: "O que é logística reversa?",
    a: [{ text: "É o ciclo que o produto percorre e, no fim, volta às indústrias para ser reutilizado", isCorrect: true },
        { text: "É o caminho em que os produtos são reciclados", isCorrect: false },
        { text: "É quando um produto não é reciclado", isCorrect: false },
        { text: "É o ciclo em que o produto é reciclado, porém é descartado", isCorrect: false }
    ]

},

{
    id: 1,
    q: "Qual é o objetivo de uma empresa comprovar sua relação com logística reversa?",
    a: [{ text: "Ter o selo de uma marca digital", isCorrect: false },
        { text: "Ter o selo de uma marca sustentável", isCorrect: true },
        { text: "Ter o selo de uma marca que respeita os mais velhos", isCorrect: false },
        { text: "Ter o selo de uma marca econômica", isCorrect: false }
    ]

},

{
    id: 2,
    q: "Qual dessas é um beneficio da logística reversa?",
    a: [{ text: "Reaproveitar o material reciclável em matéria prima de novas embalagens", isCorrect: true },
        { text: "Reaproveitar a água usada na fabricação de embalagens", isCorrect: false },
        { text: "Tornar a entrega de produtos mais rápida", isCorrect: false },
        { text: "Tornar mais rápida a fabricação de embalagens", isCorrect: false }
    ]

},

{
    id: 3,
    q: "Qual das seguintes alternativas não é uma função do GP na Logística Reversa:",
    a: [{ text: "Separar o lixo de forma correta", isCorrect: false },
        { text: "Reutilizar os resíduos e efetuar a correta higienização", isCorrect: true },
        { text: "Efetuar a coleta dos resíduos", isCorrect: false },
        { text: "Pensar numa forma de reutilizar o lixo", isCorrect: false }
    ]

},

// #Game - Cultura do lúpulo no Brasil patrocinado pelo grupo Petrópolis
{
    id: 4,
    q: "Qual das seguintes alternativas não é um processo de fabricação da cerveja:",
    a: [{ text: "Maltagem", isCorrect: false },
        { text: "Vaporização", isCorrect: true },
        { text: "Fermentação", isCorrect: false },
        { text: "Brassagem", isCorrect: false }
    ]

},

{
    id: 5,
    q: "Qual a primeira marca do Grupo Petrópolis:",
    a: [{ text: "TNT", isCorrect: false },
        { text: "Itaipava", isCorrect: true },
        { text: "Crystal", isCorrect: false },
        { text: "Cacildis", isCorrect: false }
    ]

},

{
    id: 6,
    q: "Qual desses não é um ingrediente da cerveja:",
    a: [{ text: "Frutas", isCorrect: false },
        { text: "Água gaseificada", isCorrect: true },
        { text: "Açúcares", isCorrect: false },
        { text: "Sementes", isCorrect: false }
    ]

},

{
    id: 7,
    q: "De quando são, aproximadamente, os registros mais antigos da cerveja:",
    a: [{ text: "2000 anos", isCorrect: false },
        { text: "4000 anos", isCorrect: false },
        { text: "5000 anos", isCorrect: false },
        { text: "6000 anos", isCorrect: true }
    ]

},

// #Game - Resíduos industriais e seu retorno para a cadeia da GP
{
    id: 8,
    q: "Qual desse não é um pilar do ASG?",
    a: [{ text: "Ambiental", isCorrect: false },
        { text: "Segurança", isCorrect: true },
        { text: "Governança", isCorrect: false },
        { text: "Social", isCorrect: false }
    ]

},

{
    id: 9,
    q: "O que a política nacional de resíduos sólidos estabelece para as empresas?",
    a: [{ text: "Uma politica de boas práticas na seleção de matéria prima", isCorrect: false },
        { text: "A responsabilidade do tratamento de aterros sanitários", isCorrect: false },
        { text: "Uma obrigação de retorno para empresa de um mínimo de resíduos de embalagens colocadas no mercado", isCorrect: true },
        { text: "Que não possam ter resíduos sólidos nas bebidas", isCorrect: false }
    ]

},

{
    id: 10,
    q: "Dentre as alternativas abaixo, assinale a falsa em relação a Pontos de Entrega Voluntária de lixo reciclável.",
    a: [{ text: "Aumentar o trabalho dos profissionais de limpeza pública", isCorrect: true },
        { text: "Gerar espaços onde a população pode descartar seus recicláveis", isCorrect: false },
        { text: "Ser uma alternativa independente e complementar ao sistema de coleta seletiva", isCorrect: false },
        { text: "São espaços privados, onde serão direcionados os resíduos para o ciclo de reciclagem", isCorrect: false }
    ]

},

{
    id: 11,
    q: "NÃO é um motivo de descarte correto de resíduos:",
    a: [{ text: "Sustentabilidade e boa preservação de recursos", isCorrect: false },
        { text: "Cumprimento da legislação ambiental", isCorrect: false },
        { text: "Envio de resíduos reutilizáveis para aterros sanitários", isCorrect: true },
        { text: "Possibilidade de economizar com matéria-prima e energia elétrica", isCorrect: false }
    ]

},

// #Game - Reciclagem básico (Separar lixo correntemente, limpeza, 3R)
{
    id: 12,
    q: "Quais desses materiais podem ser reciclados infinitamente?",
    a: [{ text: "Papel e Vidro", isCorrect: false },
        { text: "Plástico e Metal", isCorrect: false },
        { text: "Papel e Plástico", isCorrect: false },
        { text: "Vidro e Metal", isCorrect: true }
    ]

},

{
    id: 13,
    q: "Qual desses países é o líder mundial em reciclagem de latas de alumínio?",
    a: [{ text: "Alemanha", isCorrect: false },
        { text: "Japão", isCorrect: false },
        { text: "Brasil", isCorrect: true },
        { text: "Finlândia", isCorrect: false }
    ]

},

{
    id: 14,
    q: "Qual destas cores representa o descarte correto de resíduos de vidro:",
    a: [{ text: "Verde", isCorrect: true },
        { text: "Vermelho", isCorrect: false },
        { text: "Amarelo", isCorrect: false },
        { text: "Azul", isCorrect: false }
    ]

},

{
    id: 14,
    q: "Qual destas cores representa o descarte correto de resíduos de vidro:",
    a: [{ text: "Verde", isCorrect: true },
        { text: "Vermelho", isCorrect: false },
        { text: "Amarelo", isCorrect: false },
        { text: "Azul", isCorrect: false }
    ]

},

{
    id: 15,
    q: "Por quantos anos um copo plástico pode permanecer no ambiente antes de se decompor:",
    a: [{ text: "100 anos", isCorrect: false },
        { text: "300 anos", isCorrect: false },
        { text: "200 anos", isCorrect: false },
        { text: "400 anos", isCorrect: true }
    ]

},
]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Parabéns!! Você Acaba de ganhar 5 Pontos!!";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Não foi dessa vez...Parta pra próxima pergunta!";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 15) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})
