// quiz.js
export class Quiz {
    constructor(perguntas) {
        this.perguntas = perguntas;
        this.pontos = 0;
    }

    // Método para verificar a resposta
    verificarResposta(inputValue, respostaCorreta) {
        return inputValue.trim().toLowerCase() === respostaCorreta.toLowerCase();
    }

    // Método para processar a resposta e atualizar a pontuação
    processarResposta(input, respostaCorreta) {
        if (this.verificarResposta(input.value, respostaCorreta)) {
            this.pontos++;
            alert('Resposta correta!');
        } else {
            alert('Resposta incorreta. Tente novamente.');
        }
        this.atualizarPontuacao();
        input.value = ''; // Limpa o campo de entrada
    }

    // Método para atualizar a pontuação exibida
    atualizarPontuacao() {
        const pontuacaoElemento = document.getElementById('pontuacao');
        pontuacaoElemento.textContent = `Pontuação: ${this.pontos}`;
    }

    // Método para renderizar perguntas dinamicamente
    renderizarPerguntas() {
        const questoesElemento = document.getElementById('questoes');
        this.perguntas.forEach(({ pergunta, respostaCorreta }, index) => {
            // Cria elementos para cada pergunta
            const li = document.createElement('li');
            const b = document.createElement('b');
            b.textContent = pergunta;
            
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `resposta${index}`;

            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = 'Enviar';
            button.addEventListener('click', () => this.processarResposta(input, respostaCorreta));
            
            // Adiciona os elementos ao li
            li.appendChild(b);
            li.appendChild(input);
            li.appendChild(button);
            
            // Adiciona o li à lista de questões
            questoesElemento.appendChild(li);
        });
    }
}
