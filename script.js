// ==================== FUNÇÕES DE MENU ====================

function openMenu() {
  document.getElementById("menu_aba").style.display = "block"; 
}

function closeMenu() {
  document.getElementById("menu_aba").style.display = "none";    
}

function temaLim() {
  document.documentElement.style.setProperty('--cor-click', '#38184C');
  document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
  document.documentElement.style.setProperty('--cor-text', 'black');
  document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
  document.documentElement.style.setProperty('--cor-back2', '#4f6a93');
  document.documentElement.style.setProperty('--md-sys-color-primary', '#38184C');
}

function temaInatel() {
  document.documentElement.style.setProperty('--cor-click', '#126ae2');
  document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
  document.documentElement.style.setProperty('--cor-text', 'black');
  document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
  document.documentElement.style.setProperty('--cor-back2', '#6a937a');
  document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
}

function temaDark() {
  const cores = {
    '--cor-click': '#CEF09D',
    '--cor-sombra': '#9b0a59',
    '--cor-text': 'white',
    '--cor-back1': '#38184C',
    '--cor-back2': '#4f6a93',
    '--md-sys-color-primary': '#CEF09D'
  };

  for (const [variavel, valor] of Object.entries(cores)) {
    document.documentElement.style.setProperty(variavel, valor);
  }
}

// ==================== NAVEGAÇÃO ENTRE PÁGINAS ====================

function irParaVagas() {
  // Oculta a página principal
  document.querySelector('main').style.display = 'none';
  // Mostra a página de vagas
  document.getElementById('pagina_vagas').classList.remove('pagina-oculta');
  document.getElementById('pagina_vagas').classList.add('pagina-visivel');
  
  // Garantir que os filtros estejam aplicados
  setTimeout(() => {
    const componenteVagas = document.getElementById('componente_vagas');
    if (componenteVagas) {
      componenteVagas.aplicarFiltros();
    }
  }, 100);
}

function voltarInicio() {
  // Oculta a página de vagas
  document.getElementById('pagina_vagas').classList.remove('pagina-visivel');
  document.getElementById('pagina_vagas').classList.add('pagina-oculta');
  // Mostra a página principal
  document.querySelector('main').style.display = 'block';
}

// ==================== DADOS DE VAGAS ====================

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor Frontend Júnior',
    empresa: 'Tech Solutions',
    tipo: 'Estágio',
    curso: 'Engenharia de Software',
    descricao: 'Oportunidade para trabalhar com React, Vue.js e desenvolvimento de interfaces modernas. Ambiente colaborativo e aprendizado contínuo.',
    descricaoCompleta: 'Estamos buscando um desenvolvedor frontend júnior para integrar nossa equipe de desenvolvimento. Você trabalhará com tecnologias modernas como React, Vue.js, TypeScript e ferramentas de design como Figma. O ambiente é colaborativo, com code reviews e pair programming. Oferecemos mentoria e oportunidades de crescimento.',
    requisitos: [
      'Conhecimento em HTML, CSS e JavaScript',
      'Familiaridade com frameworks modernos (React ou Vue)',
      'Conhecimento básico em Git',
      'Boa comunicação e trabalho em equipe',
      'Cursando Engenharia de Software ou áreas relacionadas'
    ],
    salario: 'R$ 1.200,00',
    localizacao: 'Remoto',
    cargaHoraria: '30h/semana',
    beneficios: 'Vale refeição, plano de saúde, auxílio home office'
  },
  {
    id: 2,
    titulo: 'Engenheiro de Software - Backend',
    empresa: 'Inatel Solutions',
    tipo: 'Emprego',
    curso: 'Engenharia de Computação',
    descricao: 'Desenvolvimento de APIs RESTful, microserviços e sistemas escaláveis. Trabalhe com Node.js, Python e arquitetura cloud.',
    descricaoCompleta: 'Vaga para engenheiro de software backend com foco em desenvolvimento de APIs robustas e escaláveis. Você trabalhará com Node.js, Python, bancos de dados relacionais e NoSQL, e arquitetura de microserviços. Experiência com Docker, Kubernetes e cloud (AWS/Azure) é desejável.',
    requisitos: [
      'Experiência com Node.js ou Python',
      'Conhecimento em bancos de dados (SQL e NoSQL)',
      'Experiência com APIs RESTful',
      'Conhecimento em Docker e containers',
      'Formação em Engenharia de Computação ou áreas relacionadas'
    ],
    salario: 'R$ 4.500,00',
    localizacao: 'Híbrido - Santa Rita do Sapucaí',
    cargaHoraria: '40h/semana',
    beneficios: 'Vale refeição, plano de saúde, auxílio transporte, bônus por resultados'
  },
  {
    id: 4,
    titulo: 'Desenvolvedor Full Stack',
    empresa: 'StartupTech',
    tipo: 'Emprego',
    curso: 'Engenharia de Software',
    descricao: 'Desenvolvimento full stack com React e Node.js. Ambiente startup, aprendizado rápido e impacto direto nos produtos.',
    descricaoCompleta: 'Vaga para desenvolvedor full stack em startup em crescimento. Você trabalhará com React no frontend, Node.js no backend, e terá a oportunidade de trabalhar em todas as camadas da aplicação. Ambiente dinâmico, com decisões técnicas participativas e aprendizado constante.',
    requisitos: [
      'Experiência com React e Node.js',
      'Conhecimento em bancos de dados',
      'Experiência com Git e metodologias ágeis',
      'Boa comunicação e proatividade',
      'Formação em Engenharia de Software ou áreas relacionadas'
    ],
    salario: 'R$ 3.500,00',
    localizacao: 'Remoto',
    cargaHoraria: '40h/semana',
    beneficios: 'Vale refeição, plano de saúde, equity, ambiente flexível'
  },
  {
    id: 5,
    titulo: 'Engenheiro de Telecomunicações',
    empresa: 'Telecom Brasil',
    tipo: 'Emprego',
    curso: 'Engenharia de Telecomunicações',
    descricao: 'Projetos de infraestrutura de telecomunicações, redes 5G e sistemas de comunicação. Trabalhe com tecnologias de ponta.',
    descricaoCompleta: 'Oportunidade para engenheiro de telecomunicações trabalhar em projetos de infraestrutura, redes 5G, sistemas de comunicação e otimização de redes. Você participará de projetos nacionais e internacionais, trabalhando com equipamentos de última geração.',
    requisitos: [
      'Formação em Engenharia de Telecomunicações',
      'Conhecimento em redes de telecomunicações',
      'Experiência com equipamentos de transmissão',
      'Conhecimento em protocolos de comunicação',
      'Disponibilidade para viagens'
    ],
    salario: 'R$ 6.000,00',
    localizacao: 'Presencial - Múltiplas localidades',
    cargaHoraria: '40h/semana',
    beneficios: 'Vale refeição, plano de saúde, auxílio transporte, auxílio viagem'
  },
  {
    id: 6,
    titulo: 'Estagiário em Eletrônica',
    empresa: 'Eletrônica Inatel',
    tipo: 'Estágio',
    curso: 'Engenharia Elétrica',
    descricao: 'Desenvolvimento de circuitos eletrônicos, testes e validação. Trabalhe em projetos reais com mentoria de engenheiros experientes.',
    descricaoCompleta: 'Estágio em eletrônica para trabalhar com desenvolvimento de circuitos, testes, validação e documentação técnica. Você terá a oportunidade de trabalhar em projetos reais, com mentoria de engenheiros experientes e acesso a laboratórios modernos.',
    requisitos: [
      'Conhecimento em circuitos elétricos',
      'Familiaridade com ferramentas de simulação',
      'Conhecimento básico em eletrônica analógica e digital',
      'Boa organização e atenção aos detalhes',
      'Cursando Engenharia Elétrica ou áreas relacionadas'
    ],
    salario: 'R$ 900,00',
    localizacao: 'Presencial - Inatel',
    cargaHoraria: '20h/semana',
    beneficios: 'Vale refeição, acesso a laboratórios, mentoria'
  },
  {
    id: 7,
    titulo: 'Desenvolvedor Mobile',
    empresa: 'App Solutions',
    tipo: 'Emprego',
    curso: 'Engenharia de Computação',
    descricao: 'Desenvolvimento de aplicativos mobile nativos e híbridos. Trabalhe com React Native, Flutter ou desenvolvimento nativo.',
    descricaoCompleta: 'Vaga para desenvolvedor mobile com experiência em desenvolvimento de aplicativos iOS e/ou Android. Você trabalhará com React Native, Flutter ou desenvolvimento nativo (Swift/Kotlin), participando de todo o ciclo de desenvolvimento de apps.',
    requisitos: [
      'Experiência com React Native, Flutter ou desenvolvimento nativo',
      'Conhecimento em APIs REST',
      'Experiência com Git e metodologias ágeis',
      'Portfólio com apps publicados',
      'Formação em Engenharia de Computação ou áreas relacionadas'
    ],
    salario: 'R$ 4.000,00',
    localizacao: 'Híbrido',
    cargaHoraria: '40h/semana',
    beneficios: 'Vale refeição, plano de saúde, auxílio home office, bônus'
  },
  {
    id: 8,
    titulo: 'Engenheiro Biomédico - Equipamentos Médicos',
    empresa: 'MedTech Solutions',
    tipo: 'Emprego',
    curso: 'Engenharia Biomédica',
    descricao: 'Desenvolvimento e manutenção de equipamentos médicos, sistemas de diagnóstico e tecnologias para saúde. Trabalhe na interface entre engenharia e medicina.',
    descricaoCompleta: 'Oportunidade para engenheiro biomédico trabalhar no desenvolvimento, manutenção e otimização de equipamentos médicos e sistemas de diagnóstico. Você trabalhará com tecnologias avançadas, normas regulatórias (ANVISA), e terá a oportunidade de impactar diretamente a área da saúde. Ambiente multidisciplinar com colaboração entre engenheiros, médicos e pesquisadores.',
    requisitos: [
      'Formação em Engenharia Biomédica',
      'Conhecimento em equipamentos médicos e sistemas de diagnóstico',
      'Familiaridade com normas regulatórias (ANVISA, ISO)',
      'Conhecimento em eletrônica, programação e fisiologia',
      'Boa comunicação e trabalho em equipe multidisciplinar'
    ],
    salario: 'R$ 5.800,00',
    localizacao: 'Presencial - Hospital Regional',
    cargaHoraria: '40h/semana',
    beneficios: 'Vale refeição, plano de saúde, auxílio transporte, bônus, ambiente de pesquisa'
  }
];

// ==================== SISTEMA DE CANDIDATURAS ====================

function getCandidaturas() {
  const candidaturas = localStorage.getItem('candidaturas_vagas');
  return candidaturas ? JSON.parse(candidaturas) : [];
}

function salvarCandidatura(vagaId) {
  const candidaturas = getCandidaturas();
  if (!candidaturas.includes(vagaId)) {
    candidaturas.push(vagaId);
    localStorage.setItem('candidaturas_vagas', JSON.stringify(candidaturas));
  }
}

function estaInscrito(vagaId) {
  const candidaturas = getCandidaturas();
  return candidaturas.includes(vagaId);
}

// ==================== COMPONENTE DE VAGAS ====================

class VagasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.vagasFiltradas = vagas;
    this.filtroTipo = 'todos';
    this.filtroCurso = 'todos';
  }

  connectedCallback() {
    this.render();
  }

  filtrarPorCurso(curso) {
    this.filtroCurso = curso;
    this.aplicarFiltros();
  }

  filtrarPorTipo(tipo) {
    this.filtroTipo = tipo;
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let vagasFiltradas = vagas;

    // Filtro por tipo
    if (this.filtroTipo !== 'todos') {
      vagasFiltradas = vagasFiltradas.filter(vaga => vaga.tipo === this.filtroTipo);
    }

    // Filtro por curso
    if (this.filtroCurso !== 'todos') {
      vagasFiltradas = vagasFiltradas.filter(vaga => vaga.curso === this.filtroCurso);
    }

    this.vagasFiltradas = vagasFiltradas;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <style>
        .vagas-container {
          margin: 0;
        }
        
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
        }

        .vaga-card {
          position: relative;
          background-color: white;
          padding: 15px;
          margin: 20px;
          margin-top: 10px;
          border-radius: 10px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s;
        }

        .vaga-card:hover {
          transform: translateY(-2px);
          box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
        }

        .vaga-card.inscrita {
          border: 2px solid #4CAF50;
          background: linear-gradient(to bottom, #f0f9f0 0%, white 10%);
        }

        .vaga-badges {
          display: flex;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
        }

        .vaga-inscrita-badge {
          background-color: #4CAF50;
          color: white;
          padding: 5px 12px;
          border-radius: 500px;
          font-family: "Arimo", sans-serif;
          font-size: 10px;
          font-weight: bold;
          white-space: nowrap;
        }


        .vaga-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
        }

        .vaga-titulo {
          font-family: "Arimo", sans-serif;
          font-weight: bold;
          font-size: 16px;
          color: var(--cor-text);
          flex: 1;
          margin-right: 10px;
        }

        .vaga-tipo {
          background-color: var(--cor-click);
          color: white;
          padding: 5px 12px;
          border-radius: 500px;
          font-family: "Arimo", sans-serif;
          font-size: 10px;
          white-space: nowrap;
        }

        .vaga-empresa {
          font-family: "Arimo", sans-serif;
          font-size: 13px;
          color: var(--cor-text);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .vaga-descricao {
          font-family: "Arimo", sans-serif;
          font-size: 11px;
          color: var(--cor-text);
          line-height: 1.5;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .vaga-info {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }

        .vaga-info-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: "Arimo", sans-serif;
          font-size: 11px;
          color: var(--cor-text);
        }

        .vaga-info-item .material-symbols-outlined {
          font-size: 16px;
        }

        .vaga-curso {
          background-color: var(--cor-back1);
          padding: 5px 10px;
          border-radius: 500px;
          font-family: "Arimo", sans-serif;
          font-size: 10px;
          color: var(--cor-text);
          margin-top: 8px;
          display: inline-block;
        }

        .sem-vagas {
          background-color: white;
          padding: 30px;
          margin: 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .sem-vagas .material-symbols-outlined {
          font-size: 48px;
          margin-bottom: 10px;
        }

        .sem-vagas p {
          font-family: "Arimo", sans-serif;
          font-size: 14px;
          color: var(--cor-text);
        }
        
        /* Responsividade no Shadow DOM */
        @media (max-width: 768px) {
          .vaga-card {
            margin: 15px 10px;
            padding: 12px;
          }
          
          .vaga-titulo {
            font-size: 14px;
          }
          
          .vaga-inscrita-badge {
            top: 8px;
            right: 8px;
            padding: 4px 10px;
            font-size: 9px;
          }
          
          .vaga-header {
            flex-direction: column;
            gap: 8px;
            align-items: flex-start;
          }
          
          .vaga-tipo {
            align-self: flex-start;
            font-size: 9px;
            padding: 4px 10px;
          }
          
          .vaga-info {
            flex-direction: column;
            gap: 8px;
          }
          
          .vaga-info-item {
            font-size: 10px;
          }
        }
        
        @media (max-width: 480px) {
          .vaga-card {
            margin: 10px 8px;
            padding: 10px;
          }
          
          .vaga-titulo {
            font-size: 13px;
            margin-right: 5px;
          }
          
          .vaga-inscrita-badge {
            position: relative;
            top: 0;
            right: 0;
            margin-bottom: 8px;
            display: inline-block;
          }
          
          .vaga-header {
            position: relative;
          }
        }
        
        @media (max-width: 360px) {
          .vaga-inscrita-badge {
            font-size: 8px;
            padding: 3px 8px;
          }
          
          .vaga-tipo {
            font-size: 8px;
            padding: 3px 8px;
          }
        }
      </style>
      <div class="vagas-container">
        ${this.vagasFiltradas.length === 0 ? `
          <div class="sem-vagas">
            <span class="material-symbols-outlined">work_off</span>
            <p>Nenhuma vaga encontrada para este curso.</p>
          </div>
        ` : this.vagasFiltradas.map(vaga => {
          const inscrito = estaInscrito(vaga.id);
          return `
          <div class="vaga-card ${inscrito ? 'inscrita' : ''}" data-vaga-id="${vaga.id}">
            <div class="vaga-header">
              <div class="vaga-titulo">${vaga.titulo}</div>
              <div class="vaga-badges">
                <div class="vaga-tipo">${vaga.tipo}</div>
                ${inscrito ? '<div class="vaga-inscrita-badge">✓ Inscrito</div>' : ''}
              </div>
            </div>
            <div class="vaga-empresa">
              🏢 ${vaga.empresa}
            </div>
            <div class="vaga-descricao">${vaga.descricao}</div>
            <div class="vaga-info">
              <div class="vaga-info-item">
                💰 ${vaga.salario}
              </div>
              <div class="vaga-info-item">
                📍 ${vaga.localizacao}
              </div>
              <div class="vaga-info-item">
                ⏰ ${vaga.cargaHoraria}
              </div>
            </div>
            <div class="vaga-curso">${vaga.curso}</div>
          </div>
        `;
        }).join('')}
      </div>
    `;

    // Adicionar event listeners aos cards
    this.shadowRoot.querySelectorAll('.vaga-card').forEach(card => {
      card.addEventListener('click', () => {
        const vagaId = parseInt(card.getAttribute('data-vaga-id'));
        abrirDetalhesVaga(vagaId);
      });
    });
  }
}

customElements.define('vagas-component', VagasComponent);

// ==================== FUNÇÕES DE FILTRO E MODAL ====================

function filtrarVagas() {
  const selectCurso = document.getElementById('select_curso');
  const cursoSelecionado = selectCurso.value;
  const componenteVagas = document.getElementById('componente_vagas');
  componenteVagas.filtrarPorCurso(cursoSelecionado);
}

function filtrarPorTipo(tipo) {
  // Atualizar botões ativos
  document.querySelectorAll('.filtro-tipo-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-tipo="${tipo}"]`).classList.add('active');
  
  // Aplicar filtro
  const componenteVagas = document.getElementById('componente_vagas');
  componenteVagas.filtrarPorTipo(tipo);
}

function abrirDetalhesVaga(vagaId) {
  const vaga = vagas.find(v => v.id === vagaId);
  if (!vaga) return;

  const inscrito = estaInscrito(vagaId);
  const modalBody = document.getElementById('modal_body');
  modalBody.innerHTML = `
    <div class="modal-titulo">${vaga.titulo}</div>
    <div class="modal-empresa">
      🏢 ${vaga.empresa}
    </div>
    <div style="margin-bottom: 15px;">
      <span class="vaga-tipo">${vaga.tipo}</span>
      <span class="vaga-curso" style="margin-left: 10px;">${vaga.curso}</span>
    </div>
    <div class="modal-descricao">
      <strong>Descrição:</strong><br>
      ${vaga.descricaoCompleta}
    </div>
    <div class="modal-requisitos">
      <h4>Requisitos:</h4>
      <ul>
        ${vaga.requisitos.map(req => `<li>${req}</li>`).join('')}
      </ul>
    </div>
    <div class="modal-info-grid">
      <div class="modal-info-item">
        💰 <strong>Salário:</strong> ${vaga.salario}
      </div>
      <div class="modal-info-item">
        📍 <strong>Localização:</strong> ${vaga.localizacao}
      </div>
      <div class="modal-info-item">
        ⏰ <strong>Carga Horária:</strong> ${vaga.cargaHoraria}
      </div>
      <div class="modal-info-item">
        🎁 <strong>Benefícios:</strong> ${vaga.beneficios}
      </div>
    </div>
    <div class="modal-botoes">
      <button class="btn-modal btn-primary ${inscrito ? 'btn-inscrito' : ''}" 
              onclick="${inscrito ? `confirmarCancelamento(${vaga.id})` : `candidatarVaga(${vaga.id})`}" 
              id="btn_candidatar_${vaga.id}">
        <span class="btn-text-normal">${inscrito ? '✓ Inscrito' : '📤 Candidatar-se'}</span>
        ${inscrito ? '<span class="btn-text-hover">✕ Cancelar</span>' : ''}
      </button>
      <button class="btn-modal btn-secondary" onclick="fecharModal()">✕ Fechar</button>
    </div>
  `;

  document.getElementById('modal_vaga').style.display = 'block';
}

function fecharModal() {
  document.getElementById('modal_vaga').style.display = 'none';
}

function candidatarVaga(vagaId) {
  if (estaInscrito(vagaId)) return;
  
  const vaga = vagas.find(v => v.id === vagaId);
  salvarCandidatura(vagaId);
  
  // Atualizar botão no modal
  const btnCandidatar = document.getElementById(`btn_candidatar_${vagaId}`);
  if (btnCandidatar) {
    btnCandidatar.classList.add('btn-inscrito');
    btnCandidatar.disabled = true;
    btnCandidatar.innerHTML = '✓ Inscrito';
  }
  
  // Mostrar notificação visual
  mostrarNotificacao();
  
  // Atualizar componente de vagas para mostrar marcação
  const componenteVagas = document.getElementById('componente_vagas');
  componenteVagas.aplicarFiltros();
  
  // Fechar modal após 1.5 segundos
  setTimeout(() => {
    fecharModal();
  }, 1500);
}

function mostrarNotificacao() {
  const notificacao = document.getElementById('notificacao_sucesso');
  notificacao.classList.add('show');
  
  setTimeout(() => {
    notificacao.classList.remove('show');
  }, 3000);
}

function confirmarCancelamento(vagaId) {
  const vaga = vagas.find(v => v.id === vagaId);
  
  // Criar modal de confirmação
  const confirmacao = document.createElement('div');
  confirmacao.className = 'modal-confirmacao';
  confirmacao.innerHTML = `
    <div class="confirmacao-content">
      <h3>Cancelar Inscrição</h3>
      <p>Você tem certeza que deseja cancelar sua inscrição na vaga:</p>
      <p style="font-weight: bold; margin: 10px 0;">${vaga.titulo}</p>
      <div class="confirmacao-botoes">
        <button class="btn-confirmar btn-sim" onclick="cancelarInscricao(${vagaId})">Sim</button>
        <button class="btn-confirmar btn-nao" onclick="fecharConfirmacao()">Não</button>
      </div>
    </div>
  `;
  document.body.appendChild(confirmacao);
  
  // Animar entrada
  setTimeout(() => confirmacao.classList.add('show'), 10);
}

function fecharConfirmacao() {
  const confirmacao = document.querySelector('.modal-confirmacao');
  if (confirmacao) {
    confirmacao.classList.remove('show');
    setTimeout(() => confirmacao.remove(), 300);
  }
}

function cancelarInscricao(vagaId) {
  // Remover do localStorage
  const candidaturas = getCandidaturas();
  const novasCandidaturas = candidaturas.filter(id => id !== vagaId);
  localStorage.setItem('candidaturas_vagas', JSON.stringify(novasCandidaturas));
  
  // Fechar confirmação
  fecharConfirmacao();
  
  // Fechar modal da vaga
  fecharModal();
  
  // Mostrar notificação de cancelamento
  mostrarNotificacaoCancelamento();
  
  // Atualizar lista de vagas
  const componenteVagas = document.getElementById('componente_vagas');
  componenteVagas.aplicarFiltros();
}

function mostrarNotificacaoCancelamento() {
  const notificacao = document.getElementById('notificacao_sucesso');
  const content = notificacao.querySelector('.notificacao-content');
  const textoTitulo = notificacao.querySelector('strong');
  const textoDesc = notificacao.querySelector('p');
  
  // Mudar para vermelho e texto de cancelamento
  content.style.backgroundColor = '#f44336';
  textoTitulo.textContent = 'Inscrição Cancelada!';
  textoDesc.textContent = 'Você pode se candidatar novamente quando quiser.';
  
  notificacao.classList.add('show');
  
  setTimeout(() => {
    notificacao.classList.remove('show');
    // Voltar ao normal
    setTimeout(() => {
      content.style.backgroundColor = '#4CAF50';
      textoTitulo.textContent = 'Candidatura enviada!';
      textoDesc.textContent = 'Sua candidatura foi registrada com sucesso.';
    }, 400);
  }, 3000);
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
  const modal = document.getElementById('modal_vaga');
  if (event.target == modal) {
    fecharModal();
  }
}

// ==================== CARROSSEL DE EVENTOS ====================

const eventos = [
  {
    id: 1,
    title: 'Semana do Software 2025',
    date: '12/05',
    time: '10:00',
    location: 'Salão de Eventos',
    type: 'tech',
    description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
    id: 2,
    title: 'Workshop de IoT',
    date: '12/01',
    time: '08:00',
    location: 'Laboratório CS&I',
    type: 'tech',
    description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
    id: 3,
    title: 'Festa dos Alunos 2025',
    date: '18/05',
    time: '19:00',
    location: 'Área Esportiva',
    type: 'cultural',
    description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
  },
  {
    id: 4,
    title: 'Feira de Oportunidades',
    date: '04/05',
    time: '10:00',
    location: 'Salão de Eventos',
    type: 'academic',
    description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
  }
];

const carousel = document.querySelector('.carousel');

function createCards() {
  eventos.forEach(event => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="info">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <p><span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}</p>
      </div>
    `;
    carousel.appendChild(card);
  });
}

let index = 0;

function nextCard() {
  index = (index + 1) % eventos.length;
  updateCarousel();
}

function prevCard() {
  index = (index - 1 + eventos.length) % eventos.length;
  updateCarousel();
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('nextBtn').addEventListener('click', nextCard);
document.getElementById('prevBtn').addEventListener('click', prevCard);

setInterval(nextCard, 5000);

let startX;
carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextCard();
  if (endX - startX > 50) prevCard();
});

createCards();

// ==================== COMPONENTE AULAS ====================

class AulasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.aulas = [
      {
        id: 1,
        disciplina: 'S05 - Interface Homem-máquina',
        data: 'ter',
        horario: '10:00',
        local: 'P1-S17',
        prova_alert: false,
        prova: '12/05',
        frequencia: '10/25',
        nota: '10'
      },
      {
        id: 2,
        disciplina: 'E01 - Circuitos Elétricos em Corrente Contínua',
        data: 'ter',
        horario: '10:00',
        local: 'P1-S17',
        prova_alert: true,
        prova: '12/05',
        frequencia: '10/25',
        nota: '5'
      },
      {
        id: 3,
        disciplina: 'M02 - Álgebra e Geometria Analítica',
        data: 'qua',
        horario: '10:00',
        local: 'P1-S17',
        prova_alert: true,
        prova: '12/05',
        frequencia: '10/25',
        nota: '7'
      }
    ];
    this.hoje = "ter";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const aulasDia = this.aulas.filter(a => a.data === this.hoje);
    this.shadowRoot.innerHTML = `
      <style>
      .comp-aula {
        position: relative;
        background-color: white;
        top: 0px;
        left: 0px;
        right: 0px;
        padding: 15px;
        margin: 20px;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      }

      .titulo_aula {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: bold;
        font-style: normal;
        font-size: 15px;
        color: var(--cor-text);
        padding-left: 5px;
        padding-right: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      p {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: normal;
        font-style: normal;
        font-size: 11px;
        color: var(--cor-text);
        line-height: 1.5;
        orphans: 3;
        padding-left: 5px;
        padding-right: 5px
      }

      .lables {
        display: flex;
      }

      .lable-prova {
        background-color: var(--prova);
        padding: 7px;
        padding-right: 15px;
        padding-left: 15px;
        margin-bottom: 10px;
        border-radius: 500px;
        text-align: center
      }

      .lable-frequencia {
        background-color: var(--frequencia);
        padding: 7px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: 10px;
        border-radius: 500px;
      }

      .lable-nota {
        background-color: var(--prova);
        padding: 7px;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: 10px;
        border-radius: 500px;
      }

      .p_lable {
        font-family: "Arimo", sans-serif;
        font-optical-sizing: auto;
        font-weight: normal;
        font-style: normal;
        font-size: 11px;
        color: white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      </style>
      <div>
        ${aulasDia.map(a => {
          let provaDisplay = a.prova_alert ? '' : 'display: none;';
          return `
            <div class="comp-aula">
              <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
              <div class="titulo_aula">${a.disciplina}</div>
              <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
              <div class="lables">
                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                <div class="lable-nota p_lable">CR: <b>${a.nota}</b></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}

customElements.define('aulas-component', AulasComponent);

