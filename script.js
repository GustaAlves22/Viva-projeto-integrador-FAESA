/* =========================================================
   VIVA+ - JAVASCRIPT
   ========================================================= */


/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* =========================================================
   TEMA ESCURO
   ========================================================= */

const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("vivaTheme");

if (savedTheme === "dark") {

    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

    themeButton.textContent = "☀";

}


themeButton.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        document.documentElement.removeAttribute(
            "data-theme"
        );

        themeButton.textContent = "☾";

        localStorage.setItem(
            "vivaTheme",
            "light"
        );

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        themeButton.textContent = "☀";

        localStorage.setItem(
            "vivaTheme",
            "dark"
        );

    }

});
    

/* =========================================================
   CURIOSIDADES
   ========================================================= */


const curiosities = [
    {
        category: "body",
        title: "O cérebro continua trabalhando enquanto dormimos.",
        text: "Durante o sono, o cérebro participa da consolidação de memórias, do processamento de informações e da regulação de diversas funções do organismo."
    },
    {
        category: "food",
        title: "O intestino abriga trilhões de microrganismos.",
        text: "A microbiota intestinal é formada por diferentes microrganismos que interagem com o organismo e participam de processos como a digestão e o funcionamento do sistema imunológico."
    },
    {
        category: "body",
        title: "Os ossos são tecidos vivos.",
        text: "Os ossos não são estruturas estáticas: eles passam continuamente por processos de renovação e remodelação ao longo da vida."
    },
    {
        category: "body",
        title: "A pele ajuda a regular a temperatura corporal.",
        text: "A transpiração e as alterações no fluxo sanguíneo da pele ajudam o corpo a liberar calor e manter uma temperatura adequada."
    },
    {
        category: "heart",
        title: "O coração possui um sistema elétrico próprio.",
        text: "Impulsos elétricos coordenam as contrações do coração. O processo começa no nó sinoatrial, que funciona como um marcapasso natural."
    },
    {
        category: "heart",
        title: "O coração possui quatro câmaras.",
        text: "São dois átrios e dois ventrículos. Eles trabalham em conjunto para receber o sangue e bombeá-lo para os pulmões e para o restante do corpo."
    },
    {
        category: "heart",
        title: "As válvulas impedem o sangue de voltar.",
        text: "O coração tem quatro válvulas que abrem e fecham para ajudar a manter o sangue fluindo na direção correta durante cada batimento."
    },
    {
        category: "heart",
        title: "O coração também precisa receber sangue.",
        text: "O músculo cardíaco recebe oxigênio e nutrientes por meio das artérias coronárias. Quando o fluxo sanguíneo nessas artérias é comprometido, o próprio coração pode sofrer danos."
    },
    {
        category: "food",
        title: "A saliva começa o processo de digestão.",
        text: "A saliva umedece os alimentos e contém enzimas, como a amilase salivar, que inicia a quebra do amido."
    },
    {
        category: "science",
        title: "A luz influencia o relógio biológico.",
        text: "A exposição à luz, principalmente pela manhã, ajuda a sincronizar o ritmo circadiano, que participa da regulação do sono e da vigília."
    },
    {
        category: "body",
        title: "Os pulmões possuem milhões de pequenos alvéolos.",
        text: "Os alvéolos são pequenas estruturas onde ocorre a troca de oxigênio e gás carbônico entre o ar e o sangue."
    },
    {
        category: "body",
        title: "Os rins filtram o sangue continuamente.",
        text: "Os rins removem resíduos, regulam a quantidade de água e eletrólitos e ajudam a manter o equilíbrio químico do organismo."
    },
    {
        category: "science",
        title: "O olfato está ligado à memória.",
        text: "Os circuitos cerebrais envolvidos no processamento dos cheiros possuem conexões com regiões relacionadas às emoções e às memórias, o que ajuda a explicar por que certos aromas evocam lembranças."
    },
    {
        category: "science",
        title: "O corpo possui diferentes tipos de células de defesa.",
        text: "Células como os neutrófilos, os linfócitos e os macrófagos desempenham funções distintas na identificação e no combate a agentes infecciosos."
    },
    {
        category: "science",
        title: "A atividade física também beneficia o cérebro.",
        text: "A prática regular de exercícios está associada a benefícios para a saúde cerebral, o humor e algumas funções cognitivas."
    },
    {
        category: "food",
        title: "O paladar e o olfato trabalham juntos.",
        text: "Grande parte da percepção complexa dos sabores depende dos aromas que chegam ao sistema olfativo enquanto comemos."
    },
    {
        category: "body",
        title: "O sangue transporta muito mais do que oxigênio.",
        text: "Além de gases respiratórios, o sangue transporta nutrientes, hormônios, células de defesa e substâncias que precisam ser eliminadas."
    },
    {
        category: "science",
        title: "O sistema imunológico consegue desenvolver memória.",
        text: "Após certos contatos com agentes infecciosos ou vacinas, células de memória podem ajudar o organismo a responder de forma mais rápida a exposições futuras."
    }
];



let activeCuriosityCategory = "body";
let curiosityIndex = 0;

const curiosityTitle =
    document.getElementById("curiosityTitle");

const curiosityText =
    document.getElementById("curiosityText");

const newCuriosity =
    document.getElementById("newCuriosity");

const curiosityItems =
    document.querySelectorAll(".curiosity-item");


function showCuriosity(index) {

    const categoryCuriosities = curiosities.filter(
        curiosity => curiosity.category === activeCuriosityCategory
    );

    const curiosity = categoryCuriosities[index];

    if (!curiosity) {
        console.error(
            `Nenhuma curiosidade encontrada para a categoria "${activeCuriosityCategory}".`
        );
        return;
    }

    curiosityTitle.textContent =
        curiosity.title;

    curiosityText.textContent =
        curiosity.text;

}

curiosityItems.forEach(item => {

    item.addEventListener("click", () => {

        const category = item.dataset.curiosityCategory;
        const hasCuriosities = curiosities.some(
            curiosity => curiosity.category === category
        );

        if (!hasCuriosities) {
            console.error(
                `Categoria de curiosidade inválida: "${category}".`
            );
            return;
        }

        activeCuriosityCategory = category;
        curiosityIndex = 0;

        curiosityItems.forEach(curiosityItem => {
            curiosityItem.classList.toggle(
                "active",
                curiosityItem === item
            );
        });

        showCuriosity(curiosityIndex);

    });

});


newCuriosity.addEventListener("click", () => {

    const categoryCuriosities = curiosities.filter(
        curiosity => curiosity.category === activeCuriosityCategory
    );

    curiosityIndex++;

    if (curiosityIndex >= categoryCuriosities.length) {
        curiosityIndex = 0;
    }

    showCuriosity(curiosityIndex);

});

showCuriosity(curiosityIndex);


/* =========================================================
   CURIOSIDADES DO HERO
   ========================================================= */

const heroFacts = [

    "Pequenas mudanças de hábitos podem contribuir para uma rotina mais saudável.",

    "A saúde envolve aspectos físicos, mentais e sociais.",

    "A prevenção é uma importante ferramenta para a promoção da saúde.",

    "Buscar informações confiáveis ajuda na tomada de decisões mais conscientes.",

    "O sono possui papel importante na recuperação e no funcionamento do organismo."

];


let heroFactIndex = 0;

const heroFact =
    document.getElementById("heroFact");

const newHeroFact =
    document.getElementById("newHeroFact");


newHeroFact.addEventListener("click", () => {

    heroFactIndex++;

    if (heroFactIndex >= heroFacts.length) {
        heroFactIndex = 0;
    }

    heroFact.textContent =
        heroFacts[heroFactIndex];

});


/* =========================================================
   NOTÍCIAS
   ========================================================= */

const news = [

    {
        category: "SAÚDE PÚBLICA",
        title:
            "Investimento em saúde pode evitar mortes prematuras no Brasil",
        text:
            "Estudo estima que investimentos direcionados à saúde poderiam prevenir 739 mil mortes prematuras até 2050.",
        date: "Agência Brasil · 7 de outubro de 2026",
        image: "assets/noticia-01.png",
        url: "https://agenciabrasil.ebc.com.br/saude/noticia/2026-10/melhor-investimento-em-saude-pode-evitar-739-mil-mortes-no-brasil"
    },

    {
        category: "VACINAÇÃO",
        title:
            "Vacinação de gestantes reduz casos graves de bronquiolite em bebês",
        text:
            "Dados divulgados pelo Ministério da Saúde apontaram redução de 52,5% nos casos graves de síndrome respiratória em bebês menores de seis meses.",
        date: "Ministério da Saúde · 14 de julho de 2026",
        image: "assets/noticia-02.png",
        url: "https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/julho/vacinacao-de-gestantes-no-sus-reduz-pela-metade-os-casos-graves-de-bronquiolite-em-bebes-menores-de-6-meses"
    },

    {
        category: "PESQUISA",
        title:
            "Obesidade triplica no Brasil em três décadas",
        text:
            "Estudo publicado na revista The Lancet analisou o crescimento da obesidade entre adultos brasileiros de 1990 a 2023.",
        date: "Agência Brasil · 23 de setembro de 2026",
        image: "assets/noticia-03.png",
        url: "https://agenciabrasil.ebc.com.br/saude/noticia/2026-09/em-30-anos-obesidade-triplica-no-pais-e-atinge-14-da-populacao"
    },

    {
        category: "PESQUISA",
        title:
            "Pesquisa investiga como os brasileiros avaliam a própria saúde",
        text:
            "Levantamento aborda percepção de saúde, excesso de peso e prática de atividade física no país.",
        date: "Agência Brasil · 24 de setembro de 2026",
        image: "assets/noticia-04.png",
        url: "https://agenciabrasil.ebc.com.br/saude/noticia/2026-09/brasileiros-se-sentem-mais-saudaveis-do-que-sao-diz-pesquisa"
    },

    {
        category: "SUS",
        title:
            "SUS realiza mais de 7,5 milhões de cirurgias eletivas no primeiro semestre",
        text:
            "A matéria apresenta o total de procedimentos realizados e o crescimento em relação ao mesmo período do ano anterior.",
        date: "Agência Brasil · 15 de setembro de 2026",
        image: "assets/noticia-05.png",
        url: "https://agenciabrasil.ebc.com.br/saude/noticia/2026-09/cirurgias-eletivas-pelo-sus-passam-de-75-milhoes-no-primeiro-semestre"
    },

    {
        category: "TECNOLOGIA",
        title:
            "Inteligência artificial já é utilizada em estabelecimentos de saúde brasileiros",
        text:
            "Pesquisa sobre tecnologia no setor identificou o uso de IA em estabelecimentos de saúde e diferenças de adoção entre instituições públicas e privadas.",
        date: "Agência Brasil · 12 de maio de 2026",
        image: "assets/noticia-06.png",
        url: "https://agenciabrasil.ebc.com.br/saude/noticia/2026-05/uso-de-ia-na-saude-chega-18-dos-estabelecimentos-do-pais"
    },

    {
        category: "PESQUISA",
        title:
            "Brasil avança no desenvolvimento de vacina contra malária",
        text:
            "Uma candidata a vacina contra a malária vivax foi autorizada para testes em humanos. Isso não significa que ela já esteja disponível para uso geral.",
        date: "Ministério da Saúde · 10 de outubro de 2026",
        image: "assets/noticia-07.png",
        url: "https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/outubro/brasil-avanca-no-desenvolvimento-da-primeira-vacina-do-mundo-contra-malaria-vivax"
    },

    {
        category: "VACINAÇÃO",
        title:
            "Campanha nacional de multivacinação supera 8 milhões de doses",
        text:
            "A campanha promoveu a atualização da caderneta de vacinação de crianças e adolescentes. As vacinas do calendário continuam disponíveis no SUS.",
        date: "Ministério da Saúde · 1º de setembro de 2026",
        image: "assets/noticia-08.png",
        url: "https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/campanha-nacional-de-multivacinacao-encerra-nesta-terca-feira-1o-com-mais-de-8-milhoes-de-doses-aplicadas"
    },

    {
        category: "PESQUISA",
        title:
            "IBGE realiza Pesquisa Nacional de Saúde de 2026",
        text:
            "O levantamento coleta informações sobre hábitos, doenças crônicas e acesso aos serviços de saúde para auxiliar políticas públicas.",
        date: "Agência Brasil · 12 de julho de 2026",
        image: "assets/noticia-09.png",
        url: "https://agenciabrasil.ebc.com.br/saude/noticia/2026-07/ibge-inicia-coleta-da-pesquisa-nacional-de-saude-2026"
    },

    {
        category: "SAÚDE MENTAL",
        title:
            "Pesquisa relaciona preocupações financeiras à saúde mental",
        text:
            "Levantamento aborda os impactos das dificuldades financeiras no sono, no humor e no bem-estar emocional dos entrevistados.",
        date: "UOL VivaBem · 9 de setembro de 2026",
        image: "assets/noticia-10.png",
        url: "https://www.uol.com.br/vivabem/noticias/redacao/2026/09/09/89-dos-brasileiros-dizem-que-problemas-financeiros-afetam-a-saude-mental.ghtm"
    }

];


const newsGrid =
    document.getElementById("newsGrid");

const newsPageSize = 3;
let newsPage = 0;
const previousNews =
    document.getElementById("previousNews");
const newsPageStatus =
    document.getElementById("newsPageStatus");
const changeNews =
    document.getElementById("changeNews");


function renderNews() {

    newsGrid.innerHTML = "";

    const startIndex = newsPage * newsPageSize;
    const visibleNews = news.slice(
        startIndex,
        startIndex + newsPageSize
    );

    visibleNews.forEach(item => {

        const article =
            document.createElement("article");

        article.className = "news-card";

        article.innerHTML = `

            <div class="news-image">
                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy"
                >
            </div>

            <div class="news-body">

                <span class="news-category">
                    ${item.category}
                </span>

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.text}
                </p>

                <span class="news-date">
                    ${item.date}
                </span>

                <a
                    class="news-link"
                    href="${item.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ler matéria completa ↗
                </a>

            </div>

        `;

        newsGrid.appendChild(article);

    });

    const firstVisibleNews = startIndex + 1;
    const lastVisibleNews = Math.min(
        startIndex + visibleNews.length,
        news.length
    );

    newsPageStatus.textContent =
        `${firstVisibleNews}–${lastVisibleNews} de ${news.length} notícias`;

    previousNews.disabled = newsPage === 0;
    changeNews.disabled =
        startIndex + newsPageSize >= news.length;

}


renderNews();


/* =========================================================
   ATUALIZAR NOTÍCIAS
   ========================================================= */

previousNews.addEventListener("click", () => {

    if (newsPage > 0) {
        newsPage--;
        renderNews();
    }

});


changeNews.addEventListener("click", () => {

    if ((newsPage + 1) * newsPageSize < news.length) {
        newsPage++;
        renderNews();
    }


});


/* =========================================================
   CONTEÚDOS EDUCATIVOS
   ========================================================= */

const contentData = {

    mental: {

        category: "SAÚDE MENTAL",

        title:
            "Por que cuidar da saúde mental é importante?",

        text: `

            <p>
                A saúde mental faz parte da saúde como um todo.
                Ela está relacionada à maneira como uma pessoa
                lida com emoções, relacionamentos, situações
                cotidianas e desafios.
            </p>

            <p>
                Buscar informação, manter relações sociais,
                procurar ajuda quando necessário e desenvolver
                hábitos saudáveis são exemplos de cuidados que
                podem contribuir para o bem-estar.
            </p>

            <p>
                Quando houver sofrimento persistente ou uma
                situação que ultrapasse a capacidade de lidar
                sozinho, é importante buscar orientação de
                profissionais especializados.
            </p>

        `
    },


    food: {

        category: "ALIMENTAÇÃO",

        title:
            "A importância de uma alimentação variada",

        text: `

            <p>
                Uma alimentação variada permite que o organismo
                receba diferentes nutrientes necessários para
                suas funções.
            </p>

            <p>
                Frutas, verduras, legumes, cereais, proteínas
                e outras categorias de alimentos podem fazer
                parte de uma alimentação equilibrada.
            </p>

            <p>
                A alimentação deve considerar as necessidades
                individuais. Para orientações específicas,
                procure um profissional de saúde.
            </p>

        `
    },


    prevention: {

        category: "PREVENÇÃO",

        title:
            "Prevenção e cuidados com a saúde",

        text: `

            <p>
                A prevenção busca reduzir riscos e identificar
                possíveis problemas de saúde antes que eles
                evoluam.
            </p>

            <p>
                Vacinação, acompanhamento profissional,
                exames indicados e hábitos saudáveis podem
                fazer parte das estratégias de prevenção.
            </p>

            <p>
                As necessidades variam de pessoa para pessoa.
                Por isso, orientações médicas devem ser
                individualizadas.
            </p>

        `
    },


    sleep: {

        category: "QUALIDADE DE VIDA",

        title:
            "A importância do sono",

        text: `

            <p>
                O sono é um processo importante para o
                funcionamento do organismo.
            </p>

            <p>
                Durante o sono acontecem processos relacionados
                à memória, recuperação física, regulação
                emocional e funcionamento do sistema nervoso.
            </p>

            <p>
                Manter horários regulares e um ambiente adequado
                pode contribuir para uma boa rotina de sono.
            </p>

        `
    }

};


const contentModal =
    document.getElementById("contentModal");

const closeModal =
    document.getElementById("closeModal");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");


document.querySelectorAll(".read-button").forEach(button => {

    button.addEventListener("click", () => {

        const content =
            contentData[button.dataset.content];

        modalCategory.textContent =
            content.category;

        modalTitle.textContent =
            content.title;

        modalText.innerHTML =
            content.text;

        contentModal.classList.add("show");

    });

});


closeModal.addEventListener("click", () => {

    contentModal.classList.remove("show");

});


contentModal.addEventListener("click", event => {

    if (event.target === contentModal) {

        contentModal.classList.remove("show");

    }

});


/* =========================================================
   QUIZ
   ========================================================= */

const questions = [

    {
        question:
            "Qual destes órgãos é responsável por bombear o sangue pelo corpo?",

        answers: [
            "Pulmão",
            "Coração",
            "Estômago",
            "Fígado"
        ],

        correct: 1
    },

    {
        question:
            "Qual destes hábitos está relacionado à prevenção de doenças?",

        answers: [
            "Ignorar sintomas persistentes",
            "Evitar qualquer acompanhamento",
            "Manter vacinação e acompanhamento adequados",
            "Não buscar informações"
        ],

        correct: 2
    },

    {
        question:
            "Qual destes faz parte da saúde mental?",

        answers: [
            "Somente alimentação",
            "Somente exercícios",
            "Bem-estar emocional e psicológico",
            "Somente sono"
        ],

        correct: 2
    },

    {
        question:
            "Qual órgão é responsável principalmente pelas trocas gasosas da respiração?",

        answers: [
            "Pulmão",
            "Coração",
            "Rim",
            "Estômago"
        ],

        correct: 0
    },

    {
        question:
            "Qual é uma característica importante de uma alimentação saudável?",

        answers: [
            "Ser extremamente restritiva",
            "Excluir sempre um grupo alimentar",
            "Ser variada e equilibrada",
            "Comer apenas um tipo de alimento"
        ],

        correct: 2
    }

];


let currentQuestion = 0;
let score = 0;
let answered = false;


const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const nextQuestion =
    document.getElementById("nextQuestion");

const quizQuestionNumber =
    document.getElementById("quizQuestionNumber");

const quizScore =
    document.getElementById("quizScore");

const quizResult =
    document.getElementById("quizResult");

const finalScore =
    document.getElementById("finalScore");

const restartQuiz =
    document.getElementById("restartQuiz");


function loadQuestion() {

    const question =
        questions[currentQuestion];

    answered = false;

    questionElement.textContent =
        question.question;

    quizQuestionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    quizScore.textContent =
        `Pontuação: ${score}`;

    nextQuestion.disabled = true;

    answersElement.innerHTML = "";


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent = answer;

        button.addEventListener("click", () => {

            selectAnswer(button, index);

        });

        answersElement.appendChild(button);

    });

}


function selectAnswer(button, selectedIndex) {

    if (answered) {
        return;
    }

    answered = true;

    const question =
        questions[currentQuestion];

    const allAnswers =
        document.querySelectorAll(".answer");


    if (selectedIndex === question.correct) {

        button.classList.add("correct");

        score++;

    } else {

        button.classList.add("wrong");

        allAnswers[question.correct]
            .classList.add("correct");

    }


    quizScore.textContent =
        `Pontuação: ${score}`;

    nextQuestion.disabled = false;

}


nextQuestion.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        finishQuiz();

        return;
    }

    loadQuestion();

});


function finishQuiz() {

    questionElement.style.display = "none";

    answersElement.style.display = "none";

    nextQuestion.style.display = "none";

    quizResult.hidden = false;

    finalScore.textContent =
        `Você acertou ${score} de ${questions.length} perguntas.`;

}


restartQuiz.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    questionElement.style.display = "block";

    answersElement.style.display = "grid";

    nextQuestion.style.display = "inline-flex";

    quizResult.hidden = true;

    loadQuestion();

});


loadQuestion();


/* =========================================================
   MENU ATIVO DURANTE A NAVEGAÇÃO
   ========================================================= */

const sections =
    document.querySelectorAll("main section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});