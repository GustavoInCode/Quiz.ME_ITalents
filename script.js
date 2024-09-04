// script.js
import { Quiz } from '/quiz.js';

// Dados das perguntas
const perguntas = [
    { pergunta: '2+2:', respostaCorreta: '4' },
    { pergunta: 'Ao clicar em enviar você está:', respostaCorreta: 'enviando' },
    { pergunta: 'Se você disse enviando para pergunta anterior você está:', respostaCorreta: 'correto' },
    { pergunta: 'Qual é a capital da França?', respostaCorreta: 'paris' },
    { pergunta: 'Qual a capital do Brasil?', respostaCorreta: 'Brasilia' }
];

// Desestruturação para obter um exemplo de perguntas e resposta
const [primeiraPergunta, segundaPergunta, ...outrasPerguntas] = perguntas;
console.log(`Primeira Pergunta: ${primeiraPergunta.pergunta}`);
console.log(`Segunda Pergunta: ${segundaPergunta.pergunta}`);

// Cria uma instância da classe Quiz
const quiz = new Quiz(perguntas);

// Renderiza as perguntas
quiz.renderizarPerguntas();
