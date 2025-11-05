import React from 'react';
import { QuestionTemplate, Category, Difficulty } from './types.ts';
import { IconBookOpen, IconEdit3, IconGraduationCap, IconTarget, IconType } from './components/IconComponents.tsx';

// FIX: Replaced JSX with React.createElement because .ts files do not support JSX syntax.
// This caused the compiler to misinterpret the code as a type assertion.
export const categoryIcons: { [key in Category]: React.ReactElement } = {
  "Grammatica": React.createElement(IconEdit3, { className: "w-5 h-5" }),
  "Vocabolario": React.createElement(IconBookOpen, { className: "w-5 h-5" }),
  "Sintassi": React.createElement(IconTarget, { className: "w-5 h-5" }),
  "Figure Retoriche": React.createElement(IconType, { className: "w-5 h-5" }),
  "Cultura e Modi di dire": React.createElement(IconGraduationCap, { className: "w-5 h-5" })
};

export const difficultyConfig: { [key in Difficulty]: { color: string; bgColor: string; borderColor: string } } = {
  "Facile": {
    color: "text-green-300",
    bgColor: "bg-green-900/50",
    borderColor: "border-green-500"
  },
  "Medio": {
    color: "text-blue-300",
    bgColor: "bg-blue-900/50",
    borderColor: "border-blue-500"
  },
  "Difficile": {
    color: "text-red-300",
    bgColor: "bg-red-900/50",
    borderColor: "border-red-500"
  },
};


export const questionTemplates: QuestionTemplate[] = [
  // Vocabolario
  { q: "Un sinonimo di 'laconico'?", c: 'conciso', w1: 'loquace', w2: 'eloquente', expl: "'Laconico' (dalla Laconia, Sparta) significa esprimersi con poche ma significative parole. 'Conciso' è il sinonimo perfetto.", category: "Vocabolario", difficulty: "Medio" },
  { q: "Un sinonimo di 'pernicioso'?", c: 'dannoso', w1: 'pregevole', w2: 'antico', expl: "'Pernicioso' deriva dal latino 'pernicies' (rovina) e significa che porta grave danno o rovina.", category: "Vocabolario", difficulty: "Difficile" },
  { q: "Un sinonimo di 'esimio'?", c: 'illustre', w1: 'esiguo', w2: 'incerto', expl: "'Esimio' è un aggettivo (dal latino 'eximius', eccellente) usato per indicare grande merito o fama; 'illustre' è il suo sinonimo.", category: "Vocabolario", difficulty: "Medio" },
  { q: "Cosa significa 'solerte'?", c: 'diligente', w1: 'pigro', w2: 'solare', expl: "'Solerte' descrive una persona che agisce con prontezza, zelo e diligenza.", category: "Vocabolario", difficulty: "Medio" },
  { q: "Cosa significa 'pleonastico'?", c: 'superfluo', w1: 'necessario', w2: 'complesso', expl: "Un termine o un discorso 'pleonastico' contiene parole non necessarie, ridondanti per l'espressione del concetto.", category: "Vocabolario", difficulty: "Difficile" },
  { q: "Un sinonimo di 'ineffabile'?", c: 'indicibile', w1: 'inevitabile', w2: 'chiaro', expl: "'Ineffabile' significa 'che non può essere espresso a parole', spesso per la sua intensità (es. una gioia ineffabile).", category: "Vocabolario", difficulty: "Medio" },
  { q: "Un sinonimo di 'lapalissiano'?", c: 'evidente', w1: 'complesso', w2: 'nascosto', expl: "Si dice 'lapalissiano' di un fatto talmente ovvio e scontato che sarebbe ridicolo enunciarlo. Deriva dal M. de La Palice.", category: "Vocabolario", difficulty: "Facile" },
  { q: "Cosa significa 'mendace'?", c: 'falso', w1: 'veritiero', w2: 'gentile', expl: "'Mendace' è un aggettivo letterario che significa 'non veritiero', 'bugiardo'.", category: "Vocabolario", difficulty: "Medio" },
  { q: "Cosa significa 'apodittico'?", c: 'inconfutabile', w1: 'opinabile', w2: 'antico', expl: "Un'affermazione 'apodittica' si presenta come assolutamente vera, certa e non soggetta a discussione.", category: "Vocabolario", difficulty: "Difficile" },
  
  // Grammatica
  { q: "Completa: 'Credevo che ___ ieri.'", c: 'fosse partito', w1: 'era partito', w2: 'partisse', expl: "Si usa il congiuntivo trapassato ('fosse partito') per esprimere anteriorità rispetto a un verbo al passato ('Credevo').", category: "Grammatica", difficulty: "Difficile" },
  { q: "Completa: 'Se ___ di più, avresti capito.'", c: 'avessi studiato', w1: 'studiavi', w2: 'avresti studiato', expl: "È un periodo ipotetico dell'irrealtà (3° tipo). L'ipotesi al passato richiede il congiuntivo trapassato ('avessi studiato').", category: "Grammatica", difficulty: "Medio" },
  { q: "Qual è la forma corretta? 'Non so se ___'", c: 'sia già arrivato', w1: 'è già arrivato', w2: 'arriverebbe', expl: "Verbi che esprimono dubbio o incertezza (come 'non so') richiedono il congiuntivo nella frase dipendente.", category: "Grammatica", difficulty: "Medio" },
  { q: "Qual è il plurale di 'dio' (standard)?", c: 'dei', w1: 'dii', w2: 'diei', expl: "Il plurale teologico e letterario 'dii' esiste, ma il plurale comune e standard per 'dio' (inteso come divinità) è 'dei'.", category: "Grammatica", difficulty: "Medio" },
  { q: "Il plurale 'bracci' indica...", c: 'i bracci di una gru', w1: 'le braccia umane', w2: 'entrambi', expl: "È un plurale sovrabbondante: 'i bracci' si usa per gli oggetti (di una gru, di un fiume); 'le braccia' per le parti del corpo umano.", category: "Grammatica", difficulty: "Difficile" },
  { q: "Forma corretta: '___ detto ieri.' (a lui)", c: 'Gliel\'ho', w1: 'Glie l\'ho', w2: 'Gli l\'ho', expl: "I pronomi combinati 'gli' (a lui) + 'lo' (esso) si fondono in 'glielo'. L'apostrofo è d'obbligo davanti ad 'h'.", category: "Grammatica", difficulty: "Medio" },
  { q: "Qual è la differenza tra 'andavo' e 'sono andato'?", c: 'Azione abituale vs. puntuale', w1: 'Non c\'è differenza', w2: 'Tempo presente vs. passato', expl: "L'imperfetto ('andavo') descrive un'azione abituale o continuata nel passato, mentre il passato prossimo ('sono andato') indica un'azione conclusa in un momento preciso.", category: "Grammatica", difficulty: "Facile" },
  { q: "Quale frase usa 'ne' correttamente?", c: 'Ne ho comprati due', w1: 'Ne sono andato a Roma', w2: 'Ne telefono a Maria', expl: "'Ne' partitivo sostituisce una quantità specificata di qualcosa. 'Ne ho comprati due' = 'Ho comprato due (di questi)'.", category: "Grammatica", difficulty: "Medio" },
  
  // Figure Retoriche
  { q: "Che figura retorica è 'un'oscura chiarezza'?", c: 'Ossimoro', w1: 'Metafora', w2: 'Iperbole', expl: "Un 'ossimoro' è l'accostamento, nella stessa frase, di due parole di senso opposto (oscuro/chiarezza) che creano un nuovo significato.", category: "Figure Retoriche", difficulty: "Medio" },
  { q: "Che figura retorica è 'bianca come la neve'?", c: 'Similitudine', w1: 'Metafora', w2: 'Anafora', expl: "È una 'similitudine' perché stabilisce un paragone esplicito tra due elementi ('bianca' e 'neve') usando l'avverbio 'come'.", category: "Figure Retoriche", difficulty: "Facile" },
  { q: "Che figura retorica è 'sei un fulmine'?", c: 'Metafora', w1: 'Similitudine', w2: 'Iperbole', expl: "È una 'metafora' perché è una similitudine abbreviata: sostituisce un termine con un altro (tu = fulmine) senza usare 'come'.", category: "Figure Retoriche", difficulty: "Facile" },
  { q: "Che figura retorica è 'È un secolo che aspetto'?", c: 'Iperbole', w1: 'Litote', w2: 'Metafora', expl: "L''iperbole' è un'esagerazione (in eccesso o in difetto) usata per dare un'impressione più forte. Aspettare 'un secolo' è un'esagerazione.", category: "Figure Retoriche", difficulty: "Facile" },
  { q: "Dire 'non è un campione' per dire 'è scarso' è una...", c: 'Litote', w1: 'Iperbole', w2: 'Sineddoche', expl: "La 'litote' è una figura retorica che consiste nell'affermare un concetto negando il suo contrario, spesso per attenuare il giudizio.", category: "Figure Retoriche", difficulty: "Difficile" },
  { q: "Che figura retorica è 'bere un bicchiere'?", c: 'Metonimia', w1: 'Metafora', w2: 'Ossimoro', expl: "La 'metonimia' sostituisce un termine con un altro che ha con il primo un rapporto logico (contenente per il contenuto, in questo caso).", category: "Figure Retoriche", difficulty: "Medio" },

  // Sintassi
  { q: "Che subordinata è: '...poiché era stanco'?", c: 'Causale', w1: 'Finale', w2: 'Temporale', expl: "La proposizione introdotta da 'poiché' (o 'perché', 'siccome') risponde alla domanda 'perché?' e indica la causa dell'azione nella reggente.", category: "Sintassi", difficulty: "Facile" },
  { q: "Che subordinata è: '...affinché potesse vincere'?", c: 'Finale', w1: 'Causale', w2: 'Consecutiva', expl: "La proposizione 'finale' (introdotta da 'affinché', 'perché') indica il fine o lo scopo dell'azione della reggente. Risponde a 'per quale fine?'.", category: "Sintassi", difficulty: "Medio" },
  { q: "Che subordinata è: '...a tal punto che svenne'?", c: 'Consecutiva', w1: 'Finale', w2: 'Causale', expl: "La proposizione 'consecutiva' indica la conseguenza di quanto espresso nella reggente (spesso anticipata da 'così', 'a tal punto che...').", category: "Sintassi", difficulty: "Medio" },
  { q: "Che subordinata è: '...di cui ti parlavo'?", c: 'Relativa', w1: 'Dichiarativa', w2: 'Causale', expl: "La proposizione 'relativa' (introdotta da un pronome relativo come 'che', 'cui', 'il quale') espande un nome presente nella reggente.", category: "Sintassi", difficulty: "Facile" },
  { q: "Nella frase 'Uscito di casa, pioveva', 'uscito di casa' è una...", c: 'Subordinata implicita', w1: 'Coordinata', w2: 'Principale', expl: "È una proposizione temporale implicita, poiché il verbo è al participio passato e non è introdotta da una congiunzione.", category: "Sintassi", difficulty: "Difficile" },
  
  // Cultura e Modi di dire
  { q: "Cosa significa il modo di dire 'in bocca al lupo'?", c: 'Buona fortuna', w1: 'Fai attenzione', w2: 'Sei nei guai', expl: "È un augurio di buona fortuna. La risposta tradizionale è 'Crepi il lupo!'.", category: "Cultura e Modi di dire", difficulty: "Facile" },
  { q: "Chi ha scritto 'I Promessi Sposi'?", c: 'Alessandro Manzoni', w1: 'Dante Alighieri', w2: 'Giacomo Leopardi', expl: "'I Promessi Sposi' è il romanzo più celebre di Alessandro Manzoni, considerato una pietra miliare della letteratura italiana.", category: "Cultura e Modi di dire", difficulty: "Facile" },
  { q: "Cosa significa 'prendere due piccioni con una fava'?", c: 'Ottenere due risultati con un\'azione', w1: 'Fare del male agli animali', w2: 'Essere molto fortunati', expl: "Significa raggiungere due obiettivi con un unico sforzo, in modo efficiente.", category: "Cultura e Modi di dire", difficulty: "Facile" },
  { q: "Quale città è famosa per il Palio?", c: 'Siena', w1: 'Firenze', w2: 'Verona', expl: "Il Palio di Siena è una celebre corsa di cavalli di origine medievale che si tiene due volte l'anno in Piazza del Campo.", category: "Cultura e Modi di dire", difficulty: "Medio" },
  { q: "Cosa significa il detto 'A caval donato non si guarda in bocca'?", c: 'Un regalo va accettato senza critiche', w1: 'Controlla sempre la qualità', w2: 'I cavalli sono un dono prezioso', expl: "Significa che i regali vanno apprezzati per il gesto, senza stare a giudicarne il valore o i difetti.", category: "Cultura e Modi di dire", difficulty: "Facile" },
  { q: "Chi è l'autore della Divina Commedia?", c: 'Dante Alighieri', w1: 'Francesco Petrarca', w2: 'Giovanni Boccaccio', expl: "La Divina Commedia, capolavoro della letteratura mondiale, fu scritta da Dante Alighieri all'inizio del XIV secolo.", category: "Cultura e Modi di dire", difficulty: "Facile" },
];