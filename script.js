/* Pit Stop SST — Milhão
   Aplicação local: HTML + CSS + JavaScript + localStorage.
   Observação: os dados ficam apenas neste navegador/dispositivo.
*/
"use strict";

const STORAGE_KEY = "pitStopMilhao_v1";
const TIMER_SECONDS = 20;
const AVATARS = ["👷","🦺","⛑️","🚧","🏗️","🧤"];
const QUESTIONS = [
  {
    "id": 1,
    "q": "Qual é a finalidade principal de um Equipamento de Proteção Individual (EPI)?",
    "category": "EPI",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Proteger o trabalhador contra riscos ocupacionais quando aplicável, em conjunto com outras medidas de prevenção.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Proteger o trabalhador contra riscos ocupacionais quando aplicável, em conjunto com outras medidas de prevenção."
  },
  {
    "id": 2,
    "q": "Antes de usar um capacete de segurança, o que deve ser verificado?",
    "category": "EPI",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Verifique casco, suspensão, ajuste e sinais de trincas, deformações ou danos.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Verifique casco, suspensão, ajuste e sinais de trincas, deformações ou danos."
  },
  {
    "id": 3,
    "q": "Qual é a conduta correta ao encontrar um EPI danificado?",
    "category": "EPI",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Não use equipamento comprometido; retire-o de uso e comunique a liderança para substituição.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Não use equipamento comprometido; retire-o de uso e comunique a liderança para substituição."
  },
  {
    "id": 4,
    "q": "Como deve ser feita a limpeza de um EPI reutilizável?",
    "category": "Higiene e EPI",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Siga as instruções do fabricante e o procedimento aplicável, usando somente métodos e produtos autorizados."
    ],
    "explanation": "Siga as instruções do fabricante e o procedimento aplicável, usando somente métodos e produtos autorizados."
  },
  {
    "id": 5,
    "q": "Por que não se deve aplicar qualquer solvente ou produto de limpeza em um EPI?",
    "category": "Higiene e EPI",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Produtos não autorizados podem degradar materiais e comprometer a proteção do equipamento.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Produtos não autorizados podem degradar materiais e comprometer a proteção do equipamento."
  },
  {
    "id": 6,
    "q": "Qual é a melhor forma de guardar um EPI após o uso?",
    "category": "Higiene e EPI",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Após a limpeza permitida e secagem adequada, guarde em local designado, limpo e protegido.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Após a limpeza permitida e secagem adequada, guarde em local designado, limpo e protegido."
  },
  {
    "id": 7,
    "q": "O que fazer se um EPI estiver contaminado por produto químico?",
    "category": "Produtos químicos",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Evite contato e dispersão, isole o item e siga o procedimento de descontaminação ou descarte indicado.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Evite contato e dispersão, isole o item e siga o procedimento de descontaminação ou descarte indicado."
  },
  {
    "id": 8,
    "q": "Por que não se deve compartilhar protetores auriculares de uso pessoal sem higienização e autorização?",
    "category": "Higiene ocupacional",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "O compartilhamento pode transferir contaminantes e causar problemas de higiene ou ajuste."
    ],
    "explanation": "O compartilhamento pode transferir contaminantes e causar problemas de higiene ou ajuste."
  },
  {
    "id": 9,
    "q": "Quando a regra da tarefa exige mangas do uniforme abaixadas, por que devem ser mantidas assim?",
    "category": "Uniforme",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "A vestimenta definida para a tarefa pode proteger contra riscos específicos; siga o procedimento aplicável.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "A vestimenta definida para a tarefa pode proteger contra riscos específicos; siga o procedimento aplicável."
  },
  {
    "id": 10,
    "q": "Qual risco roupas soltas podem trazer perto de partes móveis de máquinas?",
    "category": "Máquinas",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Podem ser agarradas por partes móveis e provocar arrastamento, esmagamento ou lesões graves.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Podem ser agarradas por partes móveis e provocar arrastamento, esmagamento ou lesões graves."
  },
  {
    "id": 11,
    "q": "Se o uniforme exigido estiver desconfortável ou inadequado, o que fazer?",
    "category": "Uniforme",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Pare antes de se expor ao risco e solicite avaliação e orientação da liderança ou SST.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Pare antes de se expor ao risco e solicite avaliação e orientação da liderança ou SST."
  },
  {
    "id": 12,
    "q": "Se o procedimento interno exigir guardar a botina na empresa, qual é a conduta correta?",
    "category": "Uniforme",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Siga a regra interna de armazenamento, mantendo a botina identificada e no local designado."
    ],
    "explanation": "Siga a regra interna de armazenamento, mantendo a botina identificada e no local designado."
  },
  {
    "id": 13,
    "q": "Como proceder com uma botina contaminada?",
    "category": "Higiene ocupacional",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Não a leve para outras áreas sem controle; sinalize e siga a orientação de descontaminação ou substituição.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Não a leve para outras áreas sem controle; sinalize e siga a orientação de descontaminação ou substituição."
  },
  {
    "id": 14,
    "q": "Qual atitude ajuda a evitar contaminação cruzada entre áreas e produtos?",
    "category": "Higiene ocupacional",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Higienize mãos e equipamentos e respeite a segregação e os fluxos definidos.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Higienize mãos e equipamentos e respeite a segregação e os fluxos definidos."
  },
  {
    "id": 15,
    "q": "O que fazer antes de manipular matérias-primas ou produtos sensíveis à higiene?",
    "category": "Higiene ocupacional",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Higienize as mãos conforme o procedimento e use os EPIs ou vestimentas exigidos.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Higienize as mãos conforme o procedimento e use os EPIs ou vestimentas exigidos."
  },
  {
    "id": 16,
    "q": "Qual é a finalidade de uma proteção fixa instalada em uma máquina?",
    "category": "Máquinas",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Impedir ou reduzir o acesso a zonas perigosas durante a operação normal."
    ],
    "explanation": "Impedir ou reduzir o acesso a zonas perigosas durante a operação normal."
  },
  {
    "id": 17,
    "q": "O que significa manter uma área de circulação livre?",
    "category": "Organização",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Manter passagens desobstruídas reduz tropeços e facilita a movimentação e a evacuação.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Manter passagens desobstruídas reduz tropeços e facilita a movimentação e a evacuação."
  },
  {
    "id": 18,
    "q": "Ao identificar um derramamento no piso, qual deve ser a primeira atitude?",
    "category": "Organização",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Sinalize e comunique; a limpeza deve ser feita de modo seguro e por pessoa orientada.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Sinalize e comunique; a limpeza deve ser feita de modo seguro e por pessoa orientada."
  },
  {
    "id": 19,
    "q": "Qual é a atitude correta ao ouvir um alarme de emergência?",
    "category": "Emergência",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Siga o plano de emergência, use a rota indicada e dirija-se ao ponto de encontro.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Siga o plano de emergência, use a rota indicada e dirija-se ao ponto de encontro."
  },
  {
    "id": 20,
    "q": "Por que as rotas de fuga devem permanecer desobstruídas?",
    "category": "Emergência",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Elas precisam permitir a saída rápida e segura em uma emergência."
    ],
    "explanation": "Elas precisam permitir a saída rápida e segura em uma emergência."
  },
  {
    "id": 21,
    "q": "O que é um quase acidente?",
    "category": "Incidentes",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "É um evento que poderia causar lesão, dano ou perda, mesmo que nada tenha acontecido desta vez.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "É um evento que poderia causar lesão, dano ou perda, mesmo que nada tenha acontecido desta vez."
  },
  {
    "id": 22,
    "q": "Por que comunicar um quase acidente?",
    "category": "Incidentes",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "A comunicação permite identificar causas e prevenir que um evento semelhante cause dano.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "A comunicação permite identificar causas e prevenir que um evento semelhante cause dano."
  },
  {
    "id": 23,
    "q": "Qual é o objetivo de uma inspeção de segurança de rotina?",
    "category": "Inspeções",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Identificar perigos e condições inseguras antes que provoquem incidentes.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Identificar perigos e condições inseguras antes que provoquem incidentes."
  },
  {
    "id": 24,
    "q": "O que fazer antes de operar um equipamento que você não conhece?",
    "category": "Procedimentos",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Não opere sem autorização, capacitação e compreensão do procedimento aplicável."
    ],
    "explanation": "Não opere sem autorização, capacitação e compreensão do procedimento aplicável."
  },
  {
    "id": 25,
    "q": "Qual é uma prática segura ao movimentar uma carga manualmente?",
    "category": "Ergonomia",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Avalie o peso e o percurso, mantenha a carga próxima e peça ajuda ou use auxílio mecânico quando necessário.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Avalie o peso e o percurso, mantenha a carga próxima e peça ajuda ou use auxílio mecânico quando necessário."
  },
  {
    "id": 26,
    "q": "Por que ajustar a estação de trabalho à pessoa é importante?",
    "category": "Ergonomia",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Reduz posturas forçadas, desconforto e risco de lesões musculoesqueléticas.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Reduz posturas forçadas, desconforto e risco de lesões musculoesqueléticas."
  },
  {
    "id": 27,
    "q": "Qual é a função básica de uma Ficha com Dados de Segurança (FDS)?",
    "category": "Produtos químicos",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Informar perigos, manuseio seguro, controles, primeiros socorros e resposta a emergências do produto.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Informar perigos, manuseio seguro, controles, primeiros socorros e resposta a emergências do produto."
  },
  {
    "id": 28,
    "q": "Como identificar um recipiente com produto químico desconhecido?",
    "category": "Produtos químicos",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Não use nem tente adivinhar; isole e solicite identificação por pessoa competente."
    ],
    "explanation": "Não use nem tente adivinhar; isole e solicite identificação por pessoa competente."
  },
  {
    "id": 29,
    "q": "O que significa um produto estar não conforme?",
    "category": "Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Significa que ele não atende a um ou mais requisitos especificados.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Significa que ele não atende a um ou mais requisitos especificados."
  },
  {
    "id": 30,
    "q": "O que fazer ao encontrar um material não conforme?",
    "category": "Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Identifique e segregue conforme o procedimento para evitar uso ou envio indevido.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Identifique e segregue conforme o procedimento para evitar uso ou envio indevido."
  },
  {
    "id": 31,
    "q": "Por que registrar corretamente os resultados de uma medição?",
    "category": "Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Registros confiáveis permitem verificar conformidade, rastrear resultados e tomar decisões adequadas.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Registros confiáveis permitem verificar conformidade, rastrear resultados e tomar decisões adequadas."
  },
  {
    "id": 32,
    "q": "O que fazer se uma medição ficar fora da especificação?",
    "category": "Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Segure o processo ou material conforme procedimento, comunique e solicite avaliação antes de liberar."
    ],
    "explanation": "Segure o processo ou material conforme procedimento, comunique e solicite avaliação antes de liberar."
  },
  {
    "id": 33,
    "q": "Para que serve a rastreabilidade de um lote?",
    "category": "Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Permite relacionar o lote a informações de origem, processo, inspeções e destino.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Permite relacionar o lote a informações de origem, processo, inspeções e destino."
  },
  {
    "id": 34,
    "q": "Como devem ser tratadas ferramentas e materiais espalhados no piso?",
    "category": "Organização",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Recolha-os com segurança e devolva-os ao local definido para eliminar obstáculos.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Recolha-os com segurança e devolva-os ao local definido para eliminar obstáculos."
  },
  {
    "id": 35,
    "q": "O que deve ser feito com um registro preenchido com informação incorreta?",
    "category": "Qualidade",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Corrija de forma rastreável, conforme procedimento, sem ocultar o dado original ou falsificar registros.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Corrija de forma rastreável, conforme procedimento, sem ocultar o dado original ou falsificar registros."
  },
  {
    "id": 36,
    "q": "Por que seguir o procedimento operacional aprovado?",
    "category": "Procedimentos",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Ele padroniza a execução e reúne controles definidos para segurança e qualidade."
    ],
    "explanation": "Ele padroniza a execução e reúne controles definidos para segurança e qualidade."
  },
  {
    "id": 37,
    "q": "Qual é uma prática correta para prevenir incêndios?",
    "category": "Incêndio",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 0,
    "options": [
      "Mantenha fontes de ignição controladas e materiais combustíveis armazenados conforme as regras aplicáveis.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Mantenha fontes de ignição controladas e materiais combustíveis armazenados conforme as regras aplicáveis."
  },
  {
    "id": 38,
    "q": "Quem pode remover uma proteção de máquina para manutenção?",
    "category": "Máquinas",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 1,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Somente pessoal autorizado, dentro de um procedimento seguro e com as energias controladas.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Somente pessoal autorizado, dentro de um procedimento seguro e com as energias controladas."
  },
  {
    "id": 39,
    "q": "Qual é a atitude adequada ao perceber um colega em condição de risco?",
    "category": "Comportamento seguro",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 2,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Interrompa a exposição se for seguro, alerte a pessoa e comunique a liderança conforme o procedimento.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Interrompa a exposição se for seguro, alerte a pessoa e comunique a liderança conforme o procedimento."
  },
  {
    "id": 40,
    "q": "Por que manter áreas e superfícies limpas é importante para a qualidade?",
    "category": "Qualidade e organização",
    "difficulty": "Fácil",
    "points": 10,
    "correct": 3,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "A limpeza reduz riscos de acidentes e a possibilidade de contaminação de materiais e produtos."
    ],
    "explanation": "A limpeza reduz riscos de acidentes e a possibilidade de contaminação de materiais e produtos."
  },
  {
    "id": 41,
    "q": "Qual é a sequência mais segura antes de iniciar a manutenção de uma máquina com energia perigosa?",
    "category": "Bloqueio de energias",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Identifique as fontes, desligue, isole, bloqueie e etiquete, dissipe energia armazenada e verifique energia zero conforme procedimento.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Identifique as fontes, desligue, isole, bloqueie e etiquete, dissipe energia armazenada e verifique energia zero conforme procedimento."
  },
  {
    "id": 42,
    "q": "Por que apertar apenas o botão de parada não substitui o bloqueio de energias?",
    "category": "Bloqueio de energias",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "A parada pode não isolar todas as fontes; a máquina pode religar ou liberar energia armazenada.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "A parada pode não isolar todas as fontes; a máquina pode religar ou liberar energia armazenada."
  },
  {
    "id": 43,
    "q": "Ao operar empilhadeira, qual regra de circulação deve prevalecer?",
    "category": "Movimentação de cargas",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Siga rotas e limites definidos, mantenha visibilidade e velocidade segura e respeite pedestres.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Siga rotas e limites definidos, mantenha visibilidade e velocidade segura e respeite pedestres."
  },
  {
    "id": 44,
    "q": "O que fazer quando uma carga bloqueia a visão do operador de empilhadeira?",
    "category": "Movimentação de cargas",
    "difficulty": "Média",
    "points": 20,
    "correct": 3,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Não avance sem controle visual; siga o procedimento, que pode exigir deslocamento em sentido seguro ou auxílio de orientador."
    ],
    "explanation": "Não avance sem controle visual; siga o procedimento, que pode exigir deslocamento em sentido seguro ou auxílio de orientador."
  },
  {
    "id": 45,
    "q": "Qual é a conduta correta ao encontrar uma cinta de elevação desfiada?",
    "category": "Movimentação de cargas",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Retire-a de uso, identifique e comunique; não improvise reparos nem estime sua capacidade.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Retire-a de uso, identifique e comunique; não improvise reparos nem estime sua capacidade."
  },
  {
    "id": 46,
    "q": "O que deve ser confirmado antes de usar uma escada portátil?",
    "category": "Trabalho em altura",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Inspecione integridade, estabilidade, apoio e adequação à tarefa; não use escada danificada.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Inspecione integridade, estabilidade, apoio e adequação à tarefa; não use escada danificada."
  },
  {
    "id": 47,
    "q": "Por que o trabalho em altura exige planejamento prévio?",
    "category": "Trabalho em altura",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "É necessário avaliar riscos, selecionar proteção contra quedas e prever acesso, resgate e condições ambientais.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "É necessário avaliar riscos, selecionar proteção contra quedas e prever acesso, resgate e condições ambientais."
  },
  {
    "id": 48,
    "q": "O que fazer ao identificar uma atmosfera potencialmente perigosa em espaço confinado?",
    "category": "Espaço confinado",
    "difficulty": "Média",
    "points": 20,
    "correct": 3,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Não entre; interrompa a atividade e acione o procedimento, incluindo avaliação atmosférica e autorização aplicável."
    ],
    "explanation": "Não entre; interrompa a atividade e acione o procedimento, incluindo avaliação atmosférica e autorização aplicável."
  },
  {
    "id": 49,
    "q": "Por que um vigia de espaço confinado não deve abandonar seu posto sem substituição adequada?",
    "category": "Espaço confinado",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "A vigilância e comunicação contínuas são essenciais para monitorar a equipe e acionar resposta a emergências.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "A vigilância e comunicação contínuas são essenciais para monitorar a equipe e acionar resposta a emergências."
  },
  {
    "id": 50,
    "q": "Como deve ser escolhida a luva para manipular um produto químico?",
    "category": "Produtos químicos",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Consulte a FDS e a compatibilidade indicada pelo fabricante, considerando concentração, tempo de contato e tarefa.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Consulte a FDS e a compatibilidade indicada pelo fabricante, considerando concentração, tempo de contato e tarefa."
  },
  {
    "id": 51,
    "q": "Qual informação é especialmente importante na FDS para planejar a resposta a um derramamento?",
    "category": "Produtos químicos",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Consulte medidas de controle de derramamento, EPI recomendado, incompatibilidades e descarte seguro.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Consulte medidas de controle de derramamento, EPI recomendado, incompatibilidades e descarte seguro."
  },
  {
    "id": 52,
    "q": "Por que não se deve misturar produtos de limpeza sem autorização técnica?",
    "category": "Produtos químicos",
    "difficulty": "Média",
    "points": 20,
    "correct": 3,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "A mistura pode gerar reações perigosas, vapores tóxicos ou perda de eficácia."
    ],
    "explanation": "A mistura pode gerar reações perigosas, vapores tóxicos ou perda de eficácia."
  },
  {
    "id": 53,
    "q": "Durante um princípio de incêndio, quando não se deve tentar combater o fogo?",
    "category": "Incêndio",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Não tente se não tiver treinamento, equipamento adequado ou rota segura; acione o alarme e evacue conforme plano.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Não tente se não tiver treinamento, equipamento adequado ou rota segura; acione o alarme e evacue conforme plano."
  },
  {
    "id": 54,
    "q": "Como agir se a rota de fuga habitual estiver bloqueada por fumaça?",
    "category": "Emergência",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Não atravesse a fumaça; siga a rota alternativa prevista e as orientações da equipe de emergência.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Não atravesse a fumaça; siga a rota alternativa prevista e as orientações da equipe de emergência."
  },
  {
    "id": 55,
    "q": "O que torna uma investigação de acidente útil para prevenção?",
    "category": "Investigação",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Identificar fatores contribuintes e causas sistêmicas, definindo ações para evitar recorrência, sem focar apenas em culpa.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Identificar fatores contribuintes e causas sistêmicas, definindo ações para evitar recorrência, sem focar apenas em culpa."
  },
  {
    "id": 56,
    "q": "Em uma auditoria comportamental, qual abordagem favorece aprendizado?",
    "category": "Auditoria comportamental",
    "difficulty": "Média",
    "points": 20,
    "correct": 3,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Observe a tarefa, dialogue respeitosamente e reforce práticas seguras, corrigindo riscos sem humilhar pessoas."
    ],
    "explanation": "Observe a tarefa, dialogue respeitosamente e reforce práticas seguras, corrigindo riscos sem humilhar pessoas."
  },
  {
    "id": 57,
    "q": "Qual é a diferença entre correção imediata e ação corretiva?",
    "category": "Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Correção resolve o problema detectado; ação corretiva atua sobre a causa para reduzir a chance de repetição.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Correção resolve o problema detectado; ação corretiva atua sobre a causa para reduzir a chance de repetição."
  },
  {
    "id": 58,
    "q": "Por que materiais não conformes devem ficar fisicamente ou sistemicamente segregados?",
    "category": "Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "A segregação evita uso, mistura ou expedição acidental antes da decisão autorizada.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "A segregação evita uso, mistura ou expedição acidental antes da decisão autorizada."
  },
  {
    "id": 59,
    "q": "Como preservar a rastreabilidade quando um lote é dividido em sublotes?",
    "category": "Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Mantenha os vínculos entre lote original, sublotes, registros e destinos segundo o sistema de rastreabilidade.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Mantenha os vínculos entre lote original, sublotes, registros e destinos segundo o sistema de rastreabilidade."
  },
  {
    "id": 60,
    "q": "Qual é o risco de usar um instrumento de medição fora do prazo de calibração definido?",
    "category": "Medição",
    "difficulty": "Média",
    "points": 20,
    "correct": 3,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "A confiabilidade do resultado pode ser desconhecida; identifique o instrumento e siga o procedimento para avaliação."
    ],
    "explanation": "A confiabilidade do resultado pode ser desconhecida; identifique o instrumento e siga o procedimento para avaliação."
  },
  {
    "id": 61,
    "q": "O que fazer se o instrumento de medição sofrer queda ou impacto?",
    "category": "Medição",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Retire-o de uso e solicite verificação antes de confiar em novas medições.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Retire-o de uso e solicite verificação antes de confiar em novas medições."
  },
  {
    "id": 62,
    "q": "Por que mudanças em parâmetros de processo precisam de aprovação e registro?",
    "category": "Controle de processo",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Mudanças não avaliadas podem afetar segurança, conformidade, rastreabilidade e estabilidade do processo.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Mudanças não avaliadas podem afetar segurança, conformidade, rastreabilidade e estabilidade do processo."
  },
  {
    "id": 63,
    "q": "Como reduzir contaminação cruzada entre áreas com requisitos de higiene diferentes?",
    "category": "Higiene ocupacional",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Separe fluxos, utensílios e vestimentas conforme o procedimento e higienize mãos e equipamentos nas transições.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Separe fluxos, utensílios e vestimentas conforme o procedimento e higienize mãos e equipamentos nas transições."
  },
  {
    "id": 64,
    "q": "Qual é a conduta ao perceber pó suspenso ou névoa não prevista na área de trabalho?",
    "category": "Higiene ocupacional",
    "difficulty": "Média",
    "points": 20,
    "correct": 3,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Afaste-se da exposição quando seguro, alerte a liderança e solicite avaliação dos controles de higiene ocupacional."
    ],
    "explanation": "Afaste-se da exposição quando seguro, alerte a liderança e solicite avaliação dos controles de higiene ocupacional."
  },
  {
    "id": 65,
    "q": "Por que não se deve usar um EPI que perdeu sua capacidade de proteção, mesmo que pareça utilizável?",
    "category": "EPI",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "A aparência pode não revelar a perda de desempenho; retire de uso e substitua conforme orientação técnica.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "A aparência pode não revelar a perda de desempenho; retire de uso e substitua conforme orientação técnica."
  },
  {
    "id": 66,
    "q": "Qual é a melhor forma de guardar respiradores reutilizáveis entre usos?",
    "category": "Higiene e EPI",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Após os cuidados autorizados, guarde protegidos de poeira, deformação, umidade e contaminantes, conforme fabricante.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Após os cuidados autorizados, guarde protegidos de poeira, deformação, umidade e contaminantes, conforme fabricante."
  },
  {
    "id": 67,
    "q": "Por que um EPI compartilhado pode exigir higienização e inspeção entre usuários?",
    "category": "Higiene e EPI",
    "difficulty": "Média",
    "points": 20,
    "correct": 2,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Isso reduz transferência de contaminantes e permite confirmar integridade e ajuste antes do próximo uso.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Isso reduz transferência de contaminantes e permite confirmar integridade e ajuste antes do próximo uso."
  },
  {
    "id": 68,
    "q": "O que fazer se uma proteção de máquina precisar ser aberta para desobstrução?",
    "category": "Máquinas",
    "difficulty": "Média",
    "points": 20,
    "correct": 3,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Interrompa e aplique o procedimento autorizado de isolamento e controle de energias antes de acessar a zona perigosa."
    ],
    "explanation": "Interrompa e aplique o procedimento autorizado de isolamento e controle de energias antes de acessar a zona perigosa."
  },
  {
    "id": 69,
    "q": "Como reagir se a meta de produção pressionar a equipe a ignorar um controle de segurança?",
    "category": "Cultura de segurança",
    "difficulty": "Média",
    "points": 20,
    "correct": 0,
    "options": [
      "Não ignore o controle; interrompa a atividade insegura e acione a liderança para resolver o conflito com segurança.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Não ignore o controle; interrompa a atividade insegura e acione a liderança para resolver o conflito com segurança."
  },
  {
    "id": 70,
    "q": "Qual evidência ajuda a demonstrar que uma ação corretiva foi eficaz?",
    "category": "Qualidade",
    "difficulty": "Média",
    "points": 20,
    "correct": 1,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Verifique resultados posteriores e indicadores definidos, registrando evidências de que a causa não voltou a ocorrer.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Verifique resultados posteriores e indicadores definidos, registrando evidências de que a causa não voltou a ocorrer."
  },
  {
    "id": 71,
    "q": "Após bloquear uma máquina, qual etapa confirma que o isolamento foi eficaz antes do serviço?",
    "category": "Bloqueio de energias",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 0,
    "options": [
      "Execute a verificação de energia zero pelo método previsto, após controlar energias armazenadas e respeitando o procedimento.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Execute a verificação de energia zero pelo método previsto, após controlar energias armazenadas e respeitando o procedimento."
  },
  {
    "id": 72,
    "q": "Por que a energia residual precisa ser controlada mesmo após o bloqueio elétrico?",
    "category": "Bloqueio de energias",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Energia pneumática, hidráulica, gravitacional, térmica ou mecânica pode continuar causando movimento ou liberação perigosa.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Energia pneumática, hidráulica, gravitacional, térmica ou mecânica pode continuar causando movimento ou liberação perigosa."
  },
  {
    "id": 73,
    "q": "Como deve ser planejada uma movimentação de carga suspensa em área compartilhada?",
    "category": "Movimentação de cargas",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 2,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Avalie peso, capacidade, acessórios, percurso, estabilidade e isolamento da área; mantenha pessoas fora da zona de risco.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Avalie peso, capacidade, acessórios, percurso, estabilidade e isolamento da área; mantenha pessoas fora da zona de risco."
  },
  {
    "id": 74,
    "q": "O que deve acontecer se a comunicação entre operador de equipamento de elevação e sinaleiro for perdida?",
    "category": "Movimentação de cargas",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "A movimentação deve ser interrompida de forma segura até restabelecer comunicação clara e confiável."
    ],
    "explanation": "A movimentação deve ser interrompida de forma segura até restabelecer comunicação clara e confiável."
  },
  {
    "id": 75,
    "q": "Em trabalho em altura, por que o plano de resgate deve ser definido antes do início?",
    "category": "Trabalho em altura",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 0,
    "options": [
      "Uma pessoa suspensa pode sofrer consequências graves; o resgate precisa ser rápido, planejado e executável com recursos adequados.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Uma pessoa suspensa pode sofrer consequências graves; o resgate precisa ser rápido, planejado e executável com recursos adequados."
  },
  {
    "id": 76,
    "q": "O que diferencia monitoramento atmosférico contínuo de uma medição feita apenas antes da entrada em espaço confinado?",
    "category": "Espaço confinado",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "As condições podem mudar durante a atividade; o monitoramento conforme avaliação e procedimento detecta alterações em tempo hábil.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "As condições podem mudar durante a atividade; o monitoramento conforme avaliação e procedimento detecta alterações em tempo hábil."
  },
  {
    "id": 77,
    "q": "Se um detector de gases indicar alarme durante trabalho em espaço confinado, qual deve ser a resposta?",
    "category": "Espaço confinado",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 2,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Interrompa a atividade e siga a evacuação e resposta de emergência previstas; não reentre sem liberação apropriada.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Interrompa a atividade e siga a evacuação e resposta de emergência previstas; não reentre sem liberação apropriada."
  },
  {
    "id": 78,
    "q": "Como decidir a proteção respiratória quando há contaminantes e concentração variável?",
    "category": "Higiene ocupacional",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "A seleção deve se basear em avaliação técnica da exposição, contaminante, concentração, fator de proteção, ajuste e condições de uso."
    ],
    "explanation": "A seleção deve se basear em avaliação técnica da exposição, contaminante, concentração, fator de proteção, ajuste e condições de uso."
  },
  {
    "id": 79,
    "q": "Por que a compatibilidade química da luva não pode ser definida apenas pela espessura?",
    "category": "Produtos químicos",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 0,
    "options": [
      "O material e o tempo de permeação variam por substância; consulte dados técnicos e recomendações específicas.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "O material e o tempo de permeação variam por substância; consulte dados técnicos e recomendações específicas."
  },
  {
    "id": 80,
    "q": "Como evitar que um derramamento químico seja espalhado durante a resposta inicial?",
    "category": "Produtos químicos",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Isole a área, evite contato e dispersão, acione pessoal treinado e use somente recursos previstos para o produto.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Isole a área, evite contato e dispersão, acione pessoal treinado e use somente recursos previstos para o produto."
  },
  {
    "id": 81,
    "q": "Por que a proteção contra incêndio deve considerar incompatibilidade e segregação de materiais?",
    "category": "Incêndio e químicos",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 2,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Materiais incompatíveis podem reagir, intensificar incêndios ou dificultar uma resposta segura.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Materiais incompatíveis podem reagir, intensificar incêndios ou dificultar uma resposta segura."
  },
  {
    "id": 82,
    "q": "Em uma investigação, por que perguntar repetidamente 'por quê?' não basta por si só?",
    "category": "Investigação",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "A técnica ajuda a explorar causas, mas exige evidências, análise sistêmica e validação para não gerar conclusões simplistas."
    ],
    "explanation": "A técnica ajuda a explorar causas, mas exige evidências, análise sistêmica e validação para não gerar conclusões simplistas."
  },
  {
    "id": 83,
    "q": "Como priorizar ações corretivas quando várias causas contribuem para um incidente grave?",
    "category": "Investigação",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 0,
    "options": [
      "Priorize a eliminação ou redução dos riscos mais críticos, considere hierarquia de controles, responsáveis, prazos e verificação de eficácia.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Priorize a eliminação ou redução dos riscos mais críticos, considere hierarquia de controles, responsáveis, prazos e verificação de eficácia."
  },
  {
    "id": 84,
    "q": "Qual é uma limitação de depender exclusivamente de treinamento para controlar um risco?",
    "category": "Gestão de riscos",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Treinamento não substitui controles de engenharia ou eliminação do perigo quando estes são viáveis e necessários.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Treinamento não substitui controles de engenharia ou eliminação do perigo quando estes são viáveis e necessários."
  },
  {
    "id": 85,
    "q": "Como conduzir uma auditoria quando o comportamento observado pode ter sido influenciado por uma condição inadequada do processo?",
    "category": "Auditoria comportamental",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 2,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Investigue também ferramentas, projeto, carga de trabalho, instruções e ambiente; evite atribuir o risco apenas à pessoa.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Investigue também ferramentas, projeto, carga de trabalho, instruções e ambiente; evite atribuir o risco apenas à pessoa."
  },
  {
    "id": 86,
    "q": "Uma amostra atende ao resultado médio, mas uma medição individual ultrapassa limite crítico. O que fazer?",
    "category": "Controle de qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Não descarte o resultado individual; contenha o material/processo conforme critérios e investigue com a área responsável."
    ],
    "explanation": "Não descarte o resultado individual; contenha o material/processo conforme critérios e investigue com a área responsável."
  },
  {
    "id": 87,
    "q": "Como avaliar o impacto de um instrumento encontrado fora da calibração após várias medições?",
    "category": "Medição",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 0,
    "options": [
      "Identifique o período e os resultados afetados, avalie risco e conformidade retrospectiva e documente a decisão técnica.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Identifique o período e os resultados afetados, avalie risco e conformidade retrospectiva e documente a decisão técnica."
  },
  {
    "id": 88,
    "q": "Por que corrigir um registro sem manter rastreabilidade da alteração compromete o sistema de qualidade?",
    "category": "Registros",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Sem histórico, não é possível saber o que foi alterado, por quem e por quê, prejudicando confiança e auditoria.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Sem histórico, não é possível saber o que foi alterado, por quem e por quê, prejudicando confiança e auditoria."
  },
  {
    "id": 89,
    "q": "Quando uma mudança de fornecedor exige reavaliação de riscos e qualidade?",
    "category": "Gestão de mudanças",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 2,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Quando puder alterar características, perigos, especificações, controles, rastreabilidade ou requisitos aplicáveis; siga o processo de mudança.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Quando puder alterar características, perigos, especificações, controles, rastreabilidade ou requisitos aplicáveis; siga o processo de mudança."
  },
  {
    "id": 90,
    "q": "Como evitar que uma ação corretiva seja encerrada apenas porque uma tarefa foi executada?",
    "category": "Ação corretiva",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Defina critérios de eficácia, verifique dados após a implementação e reabra a análise se o problema persistir."
    ],
    "explanation": "Defina critérios de eficácia, verifique dados após a implementação e reabra a análise se o problema persistir."
  },
  {
    "id": 91,
    "q": "Por que a limpeza de uma área pode ser um controle crítico de qualidade, além de organização?",
    "category": "Higiene e qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 0,
    "options": [
      "Resíduos podem contaminar produtos, alterar resultados e comprometer a integridade do processo.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Resíduos podem contaminar produtos, alterar resultados e comprometer a integridade do processo."
  },
  {
    "id": 92,
    "q": "Como deve ser tratada uma suspeita de contaminação de produto já parcialmente processado?",
    "category": "Qualidade e higiene",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Identifique e retenha o material potencialmente afetado, preserve rastreabilidade e solicite avaliação autorizada antes de liberar.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Identifique e retenha o material potencialmente afetado, preserve rastreabilidade e solicite avaliação autorizada antes de liberar."
  },
  {
    "id": 93,
    "q": "O que fazer quando um EPI reutilizável não pode ser higienizado pelo método previsto devido a uma contaminação incomum?",
    "category": "Higiene e EPI",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 2,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Isole o EPI e consulte fabricante ou responsável técnico para definir descontaminação validada ou descarte seguro.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Isole o EPI e consulte fabricante ou responsável técnico para definir descontaminação validada ou descarte seguro."
  },
  {
    "id": 94,
    "q": "Como avaliar a adequação de um uniforme em atividade com risco de aprisionamento e exposição a contaminantes?",
    "category": "Uniforme",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Considere simultaneamente o risco mecânico, a proteção requerida, o ajuste e o procedimento; solicite avaliação técnica se houver conflito."
    ],
    "explanation": "Considere simultaneamente o risco mecânico, a proteção requerida, o ajuste e o procedimento; solicite avaliação técnica se houver conflito."
  },
  {
    "id": 95,
    "q": "Por que armazenar a botina na empresa, quando exigido por procedimento interno, pode ajudar a controlar riscos?",
    "category": "Uniforme",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 0,
    "options": [
      "Pode reduzir transporte de contaminantes entre ambientes e manter o calçado no local apropriado; a regra depende do procedimento interno.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião."
    ],
    "explanation": "Pode reduzir transporte de contaminantes entre ambientes e manter o calçado no local apropriado; a regra depende do procedimento interno."
  },
  {
    "id": 96,
    "q": "Qual é a conduta correta se uma exigência de qualidade parecer entrar em conflito com uma medida de segurança?",
    "category": "Segurança e qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Não improvise nem elimine controles; interrompa se necessário e peça decisão à liderança e às áreas técnicas competentes.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Não improvise nem elimine controles; interrompa se necessário e peça decisão à liderança e às áreas técnicas competentes."
  },
  {
    "id": 97,
    "q": "Como demonstrar que a segregação de um produto não conforme foi efetiva?",
    "category": "Qualidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 2,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Confirme identificação, bloqueio físico ou sistêmico, controle de acesso e registros até a disposição autorizada.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Confirme identificação, bloqueio físico ou sistêmico, controle de acesso e registros até a disposição autorizada."
  },
  {
    "id": 98,
    "q": "Por que a rastreabilidade precisa continuar disponível após retrabalho ou reprocessamento?",
    "category": "Rastreabilidade",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 3,
    "options": [
      "Ignorar o procedimento e confiar apenas na experiência pessoal.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "É necessário manter o histórico do lote, operações realizadas, resultados e decisões para avaliar a conformidade final."
    ],
    "explanation": "É necessário manter o histórico do lote, operações realizadas, resultados e decisões para avaliar a conformidade final."
  },
  {
    "id": 99,
    "q": "Como decidir se um quase acidente requer investigação formal?",
    "category": "Incidentes",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 0,
    "options": [
      "Considere potencial de gravidade, recorrência, exposição e critérios internos; registre e escale conforme o procedimento.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente.",
      "Ignorar o procedimento e confiar apenas na experiência pessoal."
    ],
    "explanation": "Considere potencial de gravidade, recorrência, exposição e critérios internos; registre e escale conforme o procedimento."
  },
  {
    "id": 100,
    "q": "Se uma instrução de trabalho estiver desatualizada em relação à prática aprovada, como agir?",
    "category": "Procedimentos",
    "difficulty": "Difícil",
    "points": 30,
    "correct": 1,
    "options": [
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Não escolha informalmente qual versão seguir; interrompa a decisão se houver risco e solicite esclarecimento e controle documental.",
      "Improvisar uma solução e deixar o registro para outra ocasião.",
      "Prosseguir sem avaliar o risco, desde que a tarefa seja concluída rapidamente."
    ],
    "explanation": "Não escolha informalmente qual versão seguir; interrompa a decisão se houver risco e solicite esclarecimento e controle documental."
  }
];

const $ = (id) => document.getElementById(id);
const screens = ["homeScreen","registerScreen","gameScreen","questionScreen","rankingScreen"];
let state = loadState();
let currentPlayerId = null;
let currentQuestionHouse = null;
let timerInterval = null;
let timerDeadline = null;
let timeLeft = TIMER_SECONDS;
let answerLocked = false;
let toastTimeout = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {version:1, participants:[], activeId:null};
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.participants)) throw new Error("Dados inválidos");
    return {version:1, participants:parsed.participants, activeId:parsed.activeId || null};
  } catch (error) {
    console.warn("Não foi possível ler os dados salvos; iniciando um estado vazio.", error);
    return {version:1, participants:[], activeId:null};
  }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (error) { showToast("Não foi possível salvar. Verifique o espaço disponível no navegador."); console.error(error); }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function shuffle(array) {
  const a = array.slice();
  for (let i=a.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function makeParticipant(name, sector, avatar) {
  const sequence = shuffle(QUESTIONS.map(q => q.id));
  return {
    id: (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`),
    name:name.trim(), sector:sector.trim(), avatar,
    sequence, answers:{}, score:0, correctCount:0, answeredCount:0,
    status:"em andamento", elimination:null, createdAt:Date.now(), completedAt:null
  };
}
function getPlayer() { return state.participants.find(p => p.id === currentPlayerId) || null; }
function questionFor(player, house) {
  const qid = player.sequence[house-1];
  return QUESTIONS.find(q => q.id === qid);
}
function showScreen(id) {
  stopTimer();
  screens.forEach(s => $(s).classList.toggle("hidden", s !== id));
  window.scrollTo({top:0, behavior:"smooth"});
  if (id === "homeScreen") renderHome();
  if (id === "rankingScreen") renderRanking();
  if (id === "gameScreen") renderGame();
}
function showToast(message) {
  const toast=$("toast"); toast.textContent=message; toast.classList.remove("hidden");
  clearTimeout(toastTimeout); toastTimeout=setTimeout(()=>toast.classList.add("hidden"),2600);
}
function renderHome() {
  const top = sortedParticipants().slice(0,4);
  $("quickRankingList").innerHTML = top.length ? top.map((p,i)=>`
    <div class="quick-row"><span class="quick-score">#${i+1}</span><span class="avatar">${p.avatar}</span>
      <span class="q-name"><b>${escapeHTML(p.name)}</b><small>${escapeHTML(p.sector)} · ${escapeHTML(p.status)}</small></span>
      <strong class="quick-score">${p.score} pts</strong></div>`).join("") : '<p class="muted">Ainda não há participantes. Seja o primeiro!</p>';
}
function sortedParticipants() {
  const statusOrder = {"concluído":0,"eliminado":1,"em andamento":2};
  return state.participants.slice().sort((a,b) =>
    b.score-a.score || b.correctCount-a.correctCount ||
    a.createdAt-b.createdAt || a.name.localeCompare(b.name,"pt-BR") ||
    a.id.localeCompare(b.id));
}
function renderRanking() {
  const list=sortedParticipants();
  $("rankingCount").textContent=`${list.length} participante${list.length===1?"":"s"}`;
  $("rankingBody").innerHTML = list.length ? list.map((p,i)=>`
    <tr><td class="rank-number">#${i+1}</td>
    <td><div class="participant-cell"><span class="avatar">${p.avatar}</span><span>${escapeHTML(p.name)}</span></div></td>
    <td>${escapeHTML(p.sector)}</td><td class="score-cell">${p.score}</td>
    <td>${p.correctCount}</td><td>${p.answeredCount}/100</td>
    <td><span class="status ${p.status==="eliminado"?"status-eliminated":p.status==="concluído"?"status-completed":"status-active"}">${escapeHTML(p.status)}</span></td></tr>`).join("") : '<tr><td colspan="7" class="empty-cell">Ainda não há resultados.</td></tr>';
}
function renderGame() {
  const p=getPlayer(); if (!p) { showScreen("homeScreen"); return; }
  $("playerLine").textContent=`${p.avatar} ${p.name} · ${p.sector}`;
  $("scoreValue").textContent=p.score;
  $("correctValue").textContent=p.correctCount;
  $("answeredValue").textContent=`${p.answeredCount}/100`;
  const progress=Math.round(p.answeredCount);
  $("progressValue").textContent=`${progress}%`;
  $("progressBar").style.width=`${progress}%`;
  const eliminated=p.status==="eliminado";
  const completed=p.status==="concluído";
  $("eliminationBanner").classList.toggle("hidden",!eliminated);
  $("completionBanner").classList.toggle("hidden",!completed);
  if (eliminated) $("eliminationBanner").textContent=`Rodada encerrada — ${p.elimination?.reason==="tempo"?"tempo esgotado":"resposta incorreta"}. Você mantém ${p.score} pontos e não pode responder a outras casas nesta rodada.`;
  if (completed) $("completionBanner").textContent=`Parabéns! Você concluiu as 100 perguntas com ${p.score} pontos e ${p.correctCount} acertos.`;
  $("gameBoard").innerHTML=p.sequence.map((qid,index)=>{
    const house=index+1, result=p.answers[house];
    let cls="house";
    if(result) cls+=result.correct?" correct-house":" wrong-house";
    else if(eliminated || completed) cls+=" locked-house";
    else cls+=" available-house";
    if(currentQuestionHouse===house) cls+=" current-house";
    const disabled=!!result||eliminated||completed;
    return `<button class="${cls}" data-house="${house}" ${disabled?"disabled":""} aria-label="Casa ${house}${result?(result.correct?", respondida corretamente":", respondida incorretamente"):disabled?", bloqueada":", disponível"}">${house}</button>`;
  }).join("");
  $("gameBoard").querySelectorAll("[data-house]").forEach(btn=>btn.addEventListener("click",()=>openQuestion(Number(btn.dataset.house))));
}
function openQuestion(house) {
  const p=getPlayer(); if(!p || p.status!=="em andamento" || p.answers[house]) return;
  currentQuestionHouse=house; answerLocked=false;
  const q=questionFor(p,house);
  if(!q) { showToast("Não foi possível carregar esta pergunta."); return; }
  // A ordem das alternativas é embaralhada por tentativa e a identidade correta acompanha o texto.
  const options=shuffle(q.options.map((text,index)=>({text, correct:index===q.correct})));
  currentQuestionHouse=house;
  $("questionCount").textContent=`CASA ${String(house).padStart(2,"0")} / 100`;
  $("questionCategory").textContent=q.category;
  $("questionDifficulty").textContent=`${q.difficulty.toUpperCase()} • ${q.points} PONTOS`;
  $("questionDifficulty").className=`difficulty-tag ${q.difficulty==="Média"?"medium":q.difficulty==="Difícil"?"hard":""}`;
  $("questionText").textContent=q.q;
  $("questionPoints").innerHTML=`${q.points} <small>PTS</small>`;
  $("answerFeedback").className="answer-feedback hidden";
  $("answerFeedback").innerHTML="";
  $("continueButton").classList.add("hidden");
  $("answerOptions").innerHTML=options.map((o,i)=>`<button class="answer-option" data-option="${i}"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${escapeHTML(o.text)}</span></button>`).join("");
  $("answerOptions").querySelectorAll("[data-option]").forEach((btn,i)=>btn.addEventListener("click",()=>submitAnswer(options[i].correct,options[i],q)));
  $("timerToggle").checked=true;
  showScreen("questionScreen");
  startTimer();
}
function startTimer() {
  stopTimer(); timeLeft=TIMER_SECONDS; answerLocked=false;
  $("timerValue").textContent=timeLeft; $("timerRing").classList.remove("urgent");
  if (!$("timerToggle").checked) { $("timerNote").textContent="Cronômetro desativado para esta pergunta."; return; }
  timerDeadline=Date.now()+TIMER_SECONDS*1000;
  timerInterval=setInterval(()=>{
    if(answerLocked) return;
    timeLeft=Math.max(0,Math.ceil((timerDeadline-Date.now())/1000));
    $("timerValue").textContent=timeLeft;
    $("timerRing").classList.toggle("urgent",timeLeft<=4);
    if(timeLeft<=0) handleTimeout();
  },100);
}
function stopTimer() { if(timerInterval){clearInterval(timerInterval);timerInterval=null;} timerDeadline=null; }
function submitAnswer(isCorrect, selectedOption, q) {
  if(answerLocked) return;
  answerLocked=true; stopTimer();
  const p=getPlayer(); if(!p || p.status!=="em andamento") return;
  const house=currentQuestionHouse;
  const buttons=[...$("answerOptions").querySelectorAll("button")];
  buttons.forEach((btn,i)=>{
    btn.disabled=true;
    const label=btn.querySelector(".option-letter").textContent.charCodeAt(0)-65;
    // Recalcula pela alternativa visual (texto selecionado/correto), sem depender do índice original.
    const text=btn.querySelector("span:last-child").textContent;
    if(text===q.options[q.correct]) btn.classList.add("correct-answer");
    if(btn===buttons.find(b=>b.querySelector("span:last-child").textContent===selectedOption.text) && !isCorrect) btn.classList.add("wrong-answer");
  });
  p.answeredCount++;
  if(isCorrect) {
    p.score+=q.points; p.correctCount++;
    p.answers[house]={correct:true,points:q.points,questionId:q.id,reason:"acerto",at:Date.now()};
    showFeedback(true,`Resposta correta! +${q.points} pontos.`,q);
  } else {
    p.answers[house]={correct:false,points:0,questionId:q.id,reason:"erro",at:Date.now()};
    p.status="eliminado"; p.elimination={reason:"erro",house,at:Date.now()};
    showFeedback(false,"Resposta incorreta. Você foi eliminado desta rodada.",q);
  }
  if(p.answeredCount>=100 && p.status==="em andamento"){p.status="concluído";p.completedAt=Date.now();}
  saveState(); $("continueButton").classList.remove("hidden"); $("continueButton").textContent=p.status==="eliminado"?"Ver resultado no tabuleiro →":"Continuar →";
  $("timerNote").textContent=isCorrect?"Boa! Continue com atenção.":"Rodada encerrada.";
}
function handleTimeout() {
  if(answerLocked) return;
  answerLocked=true; stopTimer();
  const p=getPlayer(); if(!p || p.status!=="em andamento") return;
  const house=currentQuestionHouse, q=questionFor(p,house);
  p.answeredCount++; p.answers[house]={correct:false,points:0,questionId:q.id,reason:"tempo",at:Date.now()};
  p.status="eliminado"; p.elimination={reason:"tempo",house,at:Date.now()};
  $("answerOptions").querySelectorAll("button").forEach(btn=>{
    btn.disabled=true;
    const text=btn.querySelector("span:last-child").textContent;
    if(text===q.options[q.correct]) btn.classList.add("correct-answer");
  });
  showFeedback(false,"Tempo esgotado! Você foi eliminado desta rodada.",q);
  $("timerNote").textContent="Tempo esgotado.";
  $("continueButton").classList.remove("hidden"); $("continueButton").textContent="Ver resultado no tabuleiro →";
  saveState();
}
function showFeedback(success,title,q) {
  const box=$("answerFeedback");
  box.className=`answer-feedback ${success?"success":"failure"}`;
  box.innerHTML=`<strong>${escapeHTML(title)}</strong><span>Resposta correta: ${escapeHTML(q.options[q.correct])}</span><p>${escapeHTML(q.explanation)}</p>`;
}
function continueToBoard() {
  const p=getPlayer(); currentQuestionHouse=null;
  if(p && p.status==="em andamento" && p.answeredCount>=100){p.status="concluído";p.completedAt=Date.now();saveState();}
  showScreen("gameScreen");
}
function registerParticipant(event) {
  event.preventDefault();
  const name=$("participantName").value.trim(),sector=$("participantSector").value.trim();
  const avatar=document.querySelector('input[name="avatar"]:checked')?.value || AVATARS[0];
  if(!name||!sector){showToast("Preencha nome e setor.");return;}
  const existing=state.participants.find(p=>p.name.toLocaleLowerCase("pt-BR")===name.toLocaleLowerCase("pt-BR")&&p.sector.toLocaleLowerCase("pt-BR")===sector.toLocaleLowerCase("pt-BR")&&p.status==="em andamento");
  if(existing){
    currentPlayerId=existing.id; state.activeId=existing.id; saveState();
    showToast("Partida em andamento encontrada. Vamos continuar!");
  } else {
    const p=makeParticipant(name,sector,avatar);
    state.participants.push(p); currentPlayerId=p.id; state.activeId=p.id; saveState();
  }
  showScreen("gameScreen");
}
function goToRegister() {
  $("registerForm").reset();
  document.querySelectorAll(".avatar-choice").forEach(el=>el.classList.toggle("selected",el.querySelector("input").checked));
  showScreen("registerScreen");
}
function switchParticipant() { currentPlayerId=null; state.activeId=null; saveState(); goToRegister(); }
function resetRanking() {
  const ok=window.confirm("Tem certeza de que deseja zerar o ranking? Todos os participantes, pontuações e progressos salvos neste navegador serão apagados.");
  if(!ok) return;
  state={version:1,participants:[],activeId:null};currentPlayerId=null;currentQuestionHouse=null;saveState();showScreen("rankingScreen");showToast("Ranking zerado.");
}
function init() {
  $("startButton").addEventListener("click",goToRegister);
  $("heroRanking").addEventListener("click",()=>showScreen("rankingScreen"));
  $("navRanking").addEventListener("click",()=>showScreen("rankingScreen"));
  $("quickSeeAll").addEventListener("click",()=>showScreen("rankingScreen"));
  $("navHome").addEventListener("click",()=>showScreen("homeScreen"));
  $("brandHome").addEventListener("click",e=>{e.preventDefault();showScreen("homeScreen");});
  $("registerCancel").addEventListener("click",()=>showScreen("homeScreen"));
  $("registerForm").addEventListener("submit",registerParticipant);
  $("gameRanking").addEventListener("click",()=>showScreen("rankingScreen"));
  $("switchParticipant").addEventListener("click",switchParticipant);
  $("rankingBack").addEventListener("click",()=>getPlayer()?showScreen("gameScreen"):showScreen("homeScreen"));
  $("resetRanking").addEventListener("click",resetRanking);
  $("backToBoard").addEventListener("click",()=>{if(!answerLocked)showScreen("gameScreen");else continueToBoard();});
  $("continueButton").addEventListener("click",continueToBoard);
  $("timerToggle").addEventListener("change",()=>{
    if(answerLocked)return;
    if($("timerToggle").checked) startTimer();
    else {stopTimer();$("timerValue").textContent="—";$("timerRing").classList.remove("urgent");$("timerNote").textContent="Cronômetro desativado para esta pergunta.";}
  });
  $("avatarChoices").querySelectorAll("input[name=avatar]").forEach(input=>input.addEventListener("change",()=>{
    document.querySelectorAll(".avatar-choice").forEach(el=>el.classList.toggle("selected",el.querySelector("input").checked));
  }));
  // Validação de integridade do banco de questões.
  const counts=QUESTIONS.reduce((acc,q)=>(acc[q.difficulty]=(acc[q.difficulty]||0)+1,acc),{});
  if(QUESTIONS.length!==100||counts["Fácil"]!==40||counts["Média"]!==30||counts["Difícil"]!==30){
    console.error("Banco de perguntas fora da especificação", {total:QUESTIONS.length,counts});
    showToast("Aviso: banco de perguntas com contagem inesperada.");
  }
  renderHome();
}
document.addEventListener("DOMContentLoaded",init);
