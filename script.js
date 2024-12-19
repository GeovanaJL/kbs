const kbs = [
  {
    name: "KB 27",
    description:
      "Clientes menores de idade precisam de documentação específica.",
    category: "Outros Assuntos",
  },
  {
    name: "KB 31",
    description: "Por que não consigo abrir uma conta?",
    category: "Abertura e Encerramento de Conta",
  },
  {
    name: "KB 32",
    description: "Por que não consigo depositar?",
    category: "Depósitos e Saques",
  },
  {
    name: "KB 34",
    description: "Problemas com a Transmissão ao-Vivo",
    category: "Problemas Técnicos e Operacionais",
  },
  {
    name: "KB 39",
    description: "Como encerrar minha conta?",
    category: "Abertura e Encerramento de Conta",
  },
  {
    name: "KB 40",
    description: "Solicitação de Oferta de Lealdade",
    category: "Outros Assuntos",
  },
  {
    name: "KB 41",
    description: "Como verifico minha conta?",
    category: "Outros Assuntos",
  },
  {
    name: "KB 42",
    description: "Onde está meu saque?",
    category: "Depósitos e Saques",
  },
  {
    name: "KB 44",
    description: "Quero alterar a moeda",
    category: "Outros Assuntos",
  },
  {
    name: "KB 45",
    description: "Celular Esportes",
    category: "Outros Assuntos",
  },
  {
    name: "KB 47",
    description: "Posso cancelar meu saque?",
    category: "Depósitos e Saques",
  },
  {
    name: "KB 49",
    description: "Cliente fora do Brasil",
    category: "Outros Assuntos",
  },
  {
    name: "KB 50",
    description: "Questões sobre Jogos",
    category: "Outros Assuntos",
  },
  {
    name: "KB 54",
    description: "Como faço um saque?",
    category: "Depósitos e Saques",
  },
  {
    name: "KB 55",
    description: "Contato de terceiros e contas compartilhadas",
    category: "Outros Assuntos",
  },
  {
    name: "KB 77",
    description: "Onde está meu depósito?",
    category: "Depósitos e Saques",
  },
  {
    name: "KB 78",
    description: "Resolução de Apostas",
    category: "Outros Assuntos",
  },
  {
    name: "KB 80",
    description: "Cliente não reconhece a atividade da conta",
    category: "Outros Assuntos",
  },
  {
    name: "KB 84",
    description: "Encerramento de Aposta",
    category: "Outros Assuntos",
  },
  {
    name: "KB 86",
    description: "Sites Úteis Para Resultados",
    category: "Outros Assuntos",
  },
  {
    name: "KB 87",
    description: "Ofertas de Esportes",
    category: "Outros Assuntos",
  },
  {
    name: "KB 90",
    description: "Segurança da Conta",
    category: "Outros Assuntos",
  },
  {
    name: "KB 121",
    description: "Cliente contesta a abertura de uma conta",
    category: "Outros Assuntos",
  },
  {
    name: "KB 125",
    description: "Questões sobre Jogo Responsável",
    category: "Outros Assuntos",
  },
  {
    name: "KB 126",
    description: "Cliente solicita detalhes da conta oi transcrição de contato",
    category: "Outros Assuntos",
  },
  {
    name: "KB 128",
    description: "Como lidar com reclamações do cliente",
    category: "Outros Assuntos",
  },
  {
    name: "KB 129",
    description: "Contato do cliente contendo informações sigilosas",
    category: "Outros Assuntos",
  },
  {
    name: "KB 130",
    description: "O que fazer após a morte de um cliente",
    category: "Outros Assuntos",
  },
  {
    name: "KB 131",
    description: "Como lidar com comportamento ofensivo do cliente",
    category: "Outros Assuntos",
  },
  {
    name: "KB 132",
    description: "Fraude - Outras Questões",
    category: "Outros Assuntos",
  },
  {
    name: "KB 133",
    description: "Emails contendo anexos",
    category: "Outros Assuntos",
  },
  {
    name: "KB 134",
    description: "Ofertas Deposit and Get e Bet and Get",
    category: "Outros Assuntos",
  },
  {
    name: "KB 135",
    description: "Como Adicionar Créditos de Apostas e Ajustes Manuais",
    category: "Outros Assuntos",
  },
  {
    name: "KB 138",
    description: "Limites de Depósito",
    category: "Depósitos e Saques",
  },
  {
    name: "KB 147",
    description: "Como faço um Depósito",
    category: "Depósitos e Saques",
  },
  {
    name: "KB 151",
    description: "Combate à Lavagem de Dinheiro e Financiamento do Terrorismo",
    category: "Outros Assuntos",
  },
  {
    name: "KB 152",
    description:
      "Atendimento ao Cliente brasileiro - Melhores praticas e Expectativas",
    category: "Outros Assuntos",
  },
  {
    name: "KB 153",
    description: "Advisor Home Page",
    category: "Outros Assuntos",
  },
  {
    name: "KB 154",
    description: "Agentes Página Inicial",
    category: "Outros Assuntos",
  },
  {
    name: "KB 156",
    description: "Cliente solicita alteração dos dados pessoais",
    category: "Outros Assuntos",
  },
  {
    name: "KB 157",
    description: "Esportes de Incentivo",
    category: "Outros Assuntos",
  },
  {
    name: "KB 161",
    description: "Feedback do cliente",
    category: "Outros Assuntos",
  },
  {
    name: "KB 165",
    description:
      "Atendimento ao Cliente Brasileiro - Principais modelos e respostas automáticas",
    category: "Outros Assuntos",
  },
  {
    name: "KB 167",
    description: "Acesso e Restrições",
    category: "Outros Assuntos",
  },
  {
    name: "KB 173",
    description: "Contact Tool Guia do Usuário",
    category: "Outros Assuntos",
  },
  {
    name: "KB 174",
    description: "Contas no Peru",
    category: "Outros Assuntos",
  },
  {
    name: "KB 177",
    description: "Solicitar Alteração no Conteúdo Predefinido",
    category: "Outros Assuntos",
  },
  {
    name: "KB 180",
    description: "Contas e Contatos de Jornalistas",
    category: "Outros Assuntos",
  },
];

let currentQuestion = 0;
let score = 0;
let phase = 1; // Controla a fase do jogo

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getOptions(correctOption) {
  const shuffledKbs = [...kbs];
  shuffleArray(shuffledKbs);
  let options = shuffledKbs
    .filter((option) => option.name !== correctOption.name)
    .slice(0, 4);
  options.push(correctOption);
  shuffleArray(options);
  return options;
}

function loadQuestion() {
  if (currentQuestion >= kbs.length) {
    showResults();
    return;
  }

  const currentKB = kbs[currentQuestion];
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const answerInput = document.getElementById("answer");
  const submitButton = document.getElementById("submit-btn");

  if (phase === 1) {
    const showKBInQuestion = Math.random() > 0.5;
    if (showKBInQuestion) {
      questionElement.innerHTML = `<span class="question-highlight">Qual é a descrição da ${currentKB.name}?</span>`;
      optionsElement.innerHTML = "";

      const options = getOptions(currentKB);
      options.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.textContent = option.description;
        optionElement.className = `option`;
        optionElement.onclick = () => selectOption(optionElement, option);
        optionsElement.appendChild(optionElement);
      });
    } else {
      questionElement.innerHTML = `<span class="question-highlight">Qual é a KB que aborda: "${currentKB.description}"?</span>`;
      optionsElement.innerHTML = "";

      const options = getOptions(currentKB);
      options.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.textContent = option.name;
        optionElement.className = `option`;
        optionElement.onclick = () => selectOption(optionElement, option);
        optionsElement.appendChild(optionElement);
      });
    }

    answerInput.style.display = "none";
    submitButton.style.display = "none";
  } else {
    // Fase 2: O usuário deve digitar a resposta
    questionElement.innerHTML = `<span class="question-highlight">Qual é a KB que explica sobre ${currentKB.description.toLowerCase()}?</span>`;
    optionsElement.innerHTML = "";

    answerInput.style.display = "block";
    submitButton.style.display = "block";
  }

  updateProgressBar();
}

function selectOption(element, option) {
  const correctOption = kbs[currentQuestion];
  if (option.name === correctOption.name) {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("wrong");
  }

  document.getElementById("score").textContent = `Pontuação: ${score}`;

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion >= kbs.length / 2) {
      phase = 2; // Muda para a fase 2 após a metade das perguntas
    }
    loadQuestion();
  }, 1000); // Aumenta o tempo para que a animação seja mais perceptível
}

function submitAnswer() {
  const answerInput = document.getElementById("answer");
  const correctOption = kbs[currentQuestion];
  const userAnswer = answerInput.value.trim().toUpperCase();

  const isCorrect =
    userAnswer === correctOption.name.toUpperCase() ||
    userAnswer === correctOption.name.split(" ")[1];

  if (isCorrect) {
    score++;
    alert("Correto!");
  } else {
    alert(`Incorreto! A resposta correta era ${correctOption.name}.`);
  }

  document.getElementById("score").textContent = `Pontuação: ${score}`;
  answerInput.value = "";

  currentQuestion++;
  loadQuestion();
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progress = ((currentQuestion + 1) / kbs.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function showResults() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  questionElement.textContent = `Você completou o quiz! Sua pontuação: ${score} de ${kbs.length}`;
  optionsElement.innerHTML = "";
  document.getElementById("restart-btn").style.display = "block";
  document.getElementById("end-btn").style.display = "block";
  document.getElementById("answer").style.display = "none";
  document.getElementById("submit-btn").style.display = "none";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  phase = 1; // Reinicia para a fase 1
  shuffleArray(kbs);
  loadQuestion();
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("end-btn").style.display = "none";
}

function endQuiz() {
  alert(
    "Parabéns pela dedicação nos estudos! Continue se dedicando e até logo!"
  );
  document.getElementById("question").textContent = "Obrigado por jogar!";
  document.getElementById("score").style.display = "none";
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("end-btn").style.display = "none";
}

window.onload = function () {
  shuffleArray(kbs);
  loadQuestion();
};
