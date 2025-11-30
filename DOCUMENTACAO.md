# Documentação do Projeto - Sistema de Vagas de Estágio e Emprego

## 1. User Story

**Como estudante, eu quero visualizar vagas de estágio e emprego filtradas pelo meu curso, para que eu possa encontrar oportunidades relevantes para minha carreira.**

### Critérios de Aceitação:
- O estudante deve poder acessar a área de vagas através do menu lateral
- Deve existir um filtro por curso disponível
- Deve existir um filtro por tipo de vaga (Estágio, Emprego, Ambos)
- As vagas devem ser exibidas de forma clara e organizada
- O estudante deve poder ver detalhes completos de cada vaga
- O estudante deve poder candidatar-se às vagas
- O sistema deve mostrar visualmente quais vagas o estudante já se candidatou
- O estudante deve poder cancelar sua candidatura
- Todas as interações devem ter feedback visual (notificações, animações)

---

## 2. Análise de Tarefa

### Meta: Visualizar e interagir com vagas de estágio/trabalho

### Fluxo Principal:

#### 1. ACESSAR A ÁREA DE VAGAS
- **1.1. ABRIR O APLICATIVO**: O usuário abre o aplicativo Inatel
- **1.2. ABRIR MENU LATERAL**: O usuário clica no ícone de menu (☰) no canto superior esquerdo
- **1.3. SELECIONAR "ESTÁGIO/EMPREGO"**: O usuário clica na opção "Estágio/Emprego" no menu
- **1.4. PÁGINA DE VAGAS ABRE**: O sistema exibe a página de vagas com filtros e listagem

#### 2. APLICAR FILTROS
- **2.1. FILTRAR POR TIPO DE VAGA**: O usuário seleciona entre "Ambos" (padrão), "Estágio" ou "Emprego"
- **2.2. FILTRAR POR CURSO**: O usuário seleciona seu curso no dropdown
- **2.3. VISUALIZAR RESULTADOS**: As vagas são filtradas automaticamente e exibidas na tela

#### 3. ANALISAR AS VAGAS FILTRADAS
- **3.1. PERCORRER A LISTA DE RESULTADOS**: O usuário visualiza os cards de vagas filtradas
- **3.2. LER TÍTULO E DESCRIÇÃO BREVE**: O usuário lê o título da vaga, empresa, tipo (estágio/emprego) e descrição resumida

#### 4. VER DETALHES DA VAGA
- **4.1. TOCAR NA VAGA DE INTERESSE**: O usuário clica em um card de vaga
- **4.2. LER DESCRIÇÃO COMPLETA E REQUISITOS**: O modal abre mostrando:
  - Descrição completa da vaga
  - Requisitos detalhados
  - Informações de salário, localização, carga horária
  - Benefícios oferecidos

#### 5. CANDIDATAR-SE À VAGA
- **5.1. CLICAR EM "CANDIDATAR-SE"**: O usuário clica no botão verde "📤 Candidatar-se"
- **5.2. NOTIFICAÇÃO VISUAL**: Sistema exibe notificação animada verde no canto superior direito
- **5.3. BOTÃO MUDA PARA "INSCRITO"**: O botão fica verde com texto "✓ Inscrito"
- **5.4. MODAL FECHA AUTOMATICAMENTE**: Após 1.5 segundos, o modal se fecha
- **5.5. BADGE APARECE NO CARD**: Na lista de vagas, aparece um badge verde "✓ Inscrito" ao lado do tipo da vaga
- **5.6. PERSISTÊNCIA**: A inscrição fica salva mesmo se o usuário fechar e abrir o app novamente

#### 6. CANCELAR CANDIDATURA
- **6.1. ABRIR VAGA INSCRITA**: O usuário clica em uma vaga onde já está inscrito
- **6.2. PASSAR MOUSE NO BOTÃO**: Ao passar o mouse no botão "✓ Inscrito", ele fica vermelho e mostra "✕ Cancelar"
- **6.3. CLICAR EM CANCELAR**: O usuário clica no botão vermelho
- **6.4. CONFIRMAÇÃO APARECE**: Sistema exibe modal de confirmação com a pergunta "Você tem certeza que deseja cancelar sua inscrição?"
- **6.5. ESCOLHER OPÇÃO**: 
  - **SIM**: Cancela a inscrição, remove badge, mostra notificação vermelha, botão volta para "Candidatar-se"
  - **NÃO**: Fecha a confirmação e mantém a inscrição

#### 7. VOLTAR À PÁGINA INICIAL
- **7.1. CLICAR EM "VOLTAR"**: O usuário clica no botão "← Voltar" no topo da página de vagas
- **7.2. RETORNAR AO DASHBOARD**: Sistema exibe a página inicial com mensagens, aulas e eventos

---

## 3. Diagrama de Classes (Fluxo de Informação)

```
┌─────────────────────────────────────────────────────────────┐
│                      APLICAÇÃO INATEL                        │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │      Sistema de Navegação             │
        │  - openMenu()                         │
        │  - closeMenu()                        │
        │  - irParaVagas()                      │
        │  - voltarInicio()                     │
        └───────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │      Filtros de Vagas                 │
        │  - filtrarPorTipo(tipo: string)      │
        │  - filtrarPorCurso(curso: string)    │
        │  - selectCurso (dropdown)            │
        │  - botões: Ambos, Estágio, Emprego   │
        └───────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │   Componente VagasComponent           │
        │  (Web Component)                       │
        │                                        │
        │  - vagasFiltradas: Array<Vaga>        │
        │  - filtroTipo: string                 │
        │  - filtroCurso: string                │
        │  - filtrarPorCurso(curso: string)     │
        │  - filtrarPorTipo(tipo: string)       │
        │  - aplicarFiltros()                   │
        │  - render()                           │
        └───────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │         Array de Vagas                │
        │                                        │
        │  Vaga {                                │
        │    id: number                         │
        │    titulo: string                     │
        │    empresa: string                    │
        │    tipo: 'Estágio' | 'Emprego'        │
        │    curso: string                      │
        │    descricao: string                  │
        │    descricaoCompleta: string          │
        │    requisitos: string[]               │
        │    salario: string                    │
        │    localizacao: string               │
        │    cargaHoraria: string              │
        │    beneficios: string                 │
        │  }                                    │
        └───────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │   Sistema de Candidaturas             │
        │  - getCandidaturas(): Array           │
        │  - salvarCandidatura(vagaId)         │
        │  - estaInscrito(vagaId): boolean     │
        │  - localStorage                       │
        └───────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │      Sistema de Modal                 │
        │  - abrirDetalhesVaga(vagaId)         │
        │  - fecharModal()                      │
        │  - candidatarVaga(vagaId)            │
        │  - confirmarCancelamento(vagaId)     │
        │  - cancelarInscricao(vagaId)         │
        └───────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │   Sistema de Notificações             │
        │  - mostrarNotificacao()              │
        │  - mostrarNotificacaoCancelamento()  │
        └───────────────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────┐
        │      Interface do Usuário             │
        │  - Cards de Vagas                     │
        │  - Modal de Detalhes                  │
        │  - Botões de Ação                     │
        └───────────────────────────────────────┘
```

### Descrição das Classes e Relacionamentos:

1. **Sistema de Navegação**: Gerencia menu lateral, navegação entre páginas (Dashboard ↔ Vagas)
2. **Filtros de Vagas**: Duplo filtro (tipo + curso) que trabalham em conjunto
3. **VagasComponent**: Web Component que gerencia renderização, filtragem e estado das vagas
4. **Array de Vagas**: Estrutura de dados com 6 vagas de exemplo
5. **Sistema de Candidaturas**: Gerencia inscrições com persistência no localStorage
6. **Sistema de Modal**: Exibe detalhes, gerencia candidaturas e cancelamentos
7. **Sistema de Notificações**: Feedback visual com animações para ações do usuário
8. **Interface do Usuário**: Cards, badges, botões e animações

### Fluxo de Dados:

**Fluxo de Candidatura:**
1. Usuário clica em vaga → `abrirDetalhesVaga(vagaId)` → Verifica se está inscrito
2. Clica em "Candidatar-se" → `candidatarVaga()` → Salva no localStorage
3. Sistema atualiza botão → Mostra notificação verde → Fecha modal → Atualiza badge no card

**Fluxo de Cancelamento:**
1. Usuário abre vaga inscrita → Passa mouse no botão verde → Fica vermelho "Cancelar"
2. Clica em cancelar → `confirmarCancelamento()` → Modal de confirmação aparece
3. Clica em "Sim" → `cancelarInscricao()` → Remove do localStorage
4. Atualiza cards → Mostra notificação vermelha → Remove badge

**Fluxo de Filtros:**
1. Usuário seleciona tipo → `filtrarPorTipo()` → Atualiza botão ativo
2. Usuário seleciona curso → `filtrarVagas()` → `VagasComponent.filtrarPorCurso()`
3. Componente aplica ambos filtros → `aplicarFiltros()` → Re-renderiza lista

---

## 4. Wireframes

### 4.1. Tela Inicial (Dashboard)

```
┌─────────────────────────────────────────────────────────┐
│ [☰]              INATEL              [👤]               │
├─────────────────────────────────────────────────────────┤
│  Olá Raphael!                                            │
│  🔔 Você possui um armário reservado...                  │
│  📧 Você possui uma pendência no financeiro...           │
├─────────────────────────────────────────────────────────┤
│  S05 - Interface Homem-máquina                           │
│  Local e Horário: P1-S17 - 10:00                        │
│  [FALTAS: 10/25]  [CR: 10]                              │
├─────────────────────────────────────────────────────────┤
│  [Carrossel de Eventos]                                  │
│  ← Semana do Software 2025 →                            │
└─────────────────────────────────────────────────────────┘
```

### 4.2. Menu Lateral

```
┌─────────────────────────────┐
│ Menu                      ✕ │
├─────────────────────────────┤
│ 💼 Estágio/Emprego          │
│ Tema Inatel                 │
│ Tema Limão                  │
│ Tema Dark                   │
└─────────────────────────────┘
```

### 4.3. Tela de Vagas - Com Filtros

```
┌─────────────────────────────────────────────────────────┐
│ [☰]              INATEL              [👤]               │
├─────────────────────────────────────────────────────────┤
│  [← Voltar]                                              │
├─────────────────────────────────────────────────────────┤
│  🔽 Filtros                                              │
│                                                           │
│  Tipo de Vaga:                                           │
│  [Ambos] [Estágio] [Emprego]  ← 3 botões lado a lado   │
│                                                           │
│  Curso:                                                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [Todos os Cursos                    ▼]         │   │
│  └─────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐   │
│  │ Dev Frontend Júnior   [Estágio] [✓ Inscrito]  │   │
│  │ 🏢 Tech Solutions                               │   │
│  │ Oportunidade para trabalhar com React...       │   │
│  │ 💰 R$ 1.200,00  📍 Remoto  ⏰ 30h/semana      │   │
│  │ [Engenharia de Software]                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                           │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Engenheiro de Software - Backend  [Emprego]    │   │
│  │ 🏢 Inatel Solutions                             │   │
│  │ Desenvolvimento de APIs RESTful...              │   │
│  │ 💰 R$ 4.500,00  📍 Híbrido  ⏰ 40h/semana     │   │
│  │ [Engenharia de Computação]                      │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### 4.4. Modal de Detalhes da Vaga (Não Inscrito)

```
┌─────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────┐   │
│  │                                          [×]     │   │
│  │  Desenvolvedor Frontend Júnior                   │   │
│  │  🏢 Tech Solutions                               │   │
│  │  [Estágio] [Engenharia de Software]             │   │
│  │                                                   │   │
│  │  Descrição:                                      │   │
│  │  Estamos buscando um desenvolvedor frontend...   │   │
│  │                                                   │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │ Requisitos:                             │   │   │
│  │  │ • Conhecimento em HTML, CSS e JS        │   │   │
│  │  │ • Familiaridade com React ou Vue        │   │   │
│  │  │ • Conhecimento básico em Git            │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  │                                                   │   │
│  │  💰 Salário: R$ 1.200,00  📍 Localização: Remoto │   │
│  │  ⏰ Carga: 30h/semana     🎁 Benefícios: Vale... │   │
│  │                                                   │   │
│  │  [📤 Candidatar-se]  [✕ Fechar]                  │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### 4.5. Modal de Detalhes da Vaga (Inscrito - Hover no Botão)

```
┌─────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────┐   │
│  │                                          [×]     │   │
│  │  Desenvolvedor Frontend Júnior                   │   │
│  │  🏢 Tech Solutions                               │   │
│  │  [Estágio] [Engenharia de Software]             │   │
│  │                                                   │   │
│  │  ... (conteúdo da vaga) ...                      │   │
│  │                                                   │   │
│  │  [✕ Cancelar] (VERMELHO)  [✕ Fechar]            │   │
│  │   ↑ Hover mostra "Cancelar" em vermelho          │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### 4.6. Modal de Confirmação de Cancelamento

```
┌─────────────────────────────────────────────────────────┐
│                 ┌─────────────────────┐                  │
│                 │ Cancelar Inscrição  │                  │
│                 │                     │                  │
│                 │ Você tem certeza    │                  │
│                 │ que deseja cancelar │                  │
│                 │ sua inscrição na    │                  │
│                 │ vaga:               │                  │
│                 │                     │                  │
│                 │ Desenvolvedor       │                  │
│                 │ Frontend Júnior     │                  │
│                 │                     │                  │
│                 │  [Sim]    [Não]     │                  │
│                 │ (vermelho) (cinza)  │                  │
│                 └─────────────────────┘                  │
└─────────────────────────────────────────────────────────┘
```

### 4.7. Notificação de Sucesso

```
                                    ┌────────────────────┐
                                    │ ✓  Candidatura     │
                                    │    enviada!        │
                                    │    Sua candidatura │
                                    │    foi registrada  │
                                    └────────────────────┘
                                         ↑ Verde, canto superior
```

### 4.8. Estado: Nenhuma Vaga Encontrada

```
┌─────────────────────────────────────────────────────────┐
│  Tipo de Vaga: [Ambos] [Estágio] [Emprego]             │
│  Curso: [Engenharia de Computação        ▼]            │
├─────────────────────────────────────────────────────────┤
│                                                           │
│              ┌─────────────────────┐                    │
│              │       🚫             │                    │
│              │  Nenhuma vaga        │                    │
│              │  encontrada para     │                    │
│              │  este curso.         │                    │
│              └─────────────────────┘                    │
└─────────────────────────────────────────────────────────┘
```

---

## 5. Especificações Técnicas

### 5.1. Tecnologias Utilizadas
- HTML5
- CSS3 (com variáveis CSS para temas)
- JavaScript (ES6+)
- Web Components API

### 5.2. Estrutura de Componentes
- **VagasComponent**: Web Component customizado para gerenciar a listagem de vagas
- **AulasComponent**: Web Component existente mantido para compatibilidade
- Sistema de navegação entre seções
- Sistema de modal para detalhes

### 5.3. Funcionalidades Implementadas
- ✅ **Menu lateral** com navegação e opção de fechar (X)
- ✅ **Filtro duplo**: por tipo de vaga (Ambos, Estágio, Emprego) e por curso
- ✅ **Listagem dinâmica** de vagas com badges visuais
- ✅ **Cards informativos** com empresa, salário, localização e carga horária
- ✅ **Modal de detalhes** completo e responsivo
- ✅ **Sistema de candidatura** com persistência em localStorage
- ✅ **Badges de inscrição** nos cards (verde "✓ Inscrito")
- ✅ **Cancelamento de candidatura** com confirmação
- ✅ **Notificações visuais animadas** (verde = sucesso, vermelho = cancelamento)
- ✅ **Feedback visual em tempo real** (botões mudam de estado)
- ✅ **Navegação fluida** entre Dashboard e Vagas
- ✅ **Responsividade completa** (desktop, tablet, mobile)
- ✅ **Animações e transições** suaves em todas interações
- ✅ **Suporte a múltiplos temas** (Inatel, Limão, Dark)
- ✅ **Sistema de temas** persistente

### 5.4. Dados de Exemplo
O sistema inclui 6 vagas de exemplo distribuídas entre:
- **Engenharia de Software** (2 vagas: 1 estágio + 1 emprego)
- **Engenharia de Computação** (2 vagas: ambos empregos)
- **Engenharia de Telecomunicações** (1 vaga: emprego)
- **Engenharia Elétrica** (1 vaga: estágio)
- **Engenharia Biomédica** (1 vaga: emprego)

**Tipos de vaga:**
- 2 Estágios (salários: R$ 900 - R$ 1.200)
- 4 Empregos (salários: R$ 3.500 - R$ 6.000)

---

## 6. Considerações de Design

### 6.1. Identidade Visual
- Mantém as cores e estilo do aplicativo Inatel base
- Utiliza a fonte Arimo em todo o sistema
- Cards com sombras e bordas arredondadas
- Emojis para ícones (💰📍⏰🎁🏢) para melhor compatibilidade
- Paleta de cores:
  - Azul Inatel (#126ae2) - Primária
  - Verde Sucesso (#4CAF50) - Inscrições
  - Vermelho (#f44336) - Cancelamentos
  - Cinza Claro (#edf2f4) - Backgrounds

### 6.2. Experiência do Usuário
- **Feedback visual em tempo real**: botões mudam de cor, notificações animadas
- **Animações suaves**: entrada/saída de modais, notificações com slide
- **Microinterações**: hover states, botão que muda de "Inscrito" para "Cancelar"
- **Confirmações**: modal de confirmação antes de cancelar inscrição
- **Persistência de dados**: candidaturas salvas no localStorage
- **Estados visuais claros**: 
  - Verde = Inscrito/Sucesso
  - Vermelho = Cancelar/Erro
  - Azul = Ativo/Primário
  - Cinza = Neutro/Desabilitado

### 6.3. Responsividade
- **Breakpoints**: 768px (tablet), 480px (mobile), 360px (mobile pequeno)
- **Layout adaptável**: elementos se reorganizam conforme o tamanho da tela
- **Grid responsivo**: modal com grid 2 colunas em desktop, 1 coluna em mobile
- **Botões adaptativos**: lado a lado em desktop, empilhados em mobile
- **Textos escaláveis**: fontes ajustadas para cada tamanho de tela
- **Touch-friendly**: todos elementos clicáveis têm tamanho mínimo adequado
- **Sem overflow**: garantia de que nenhum elemento sai da tela

---

## 7. Funcionalidades Avançadas Implementadas

### 7.1. Sistema de Persistência
- **localStorage**: Candidaturas salvas localmente no navegador
- **Persistência entre sessões**: Inscrições permanecem ao fechar e reabrir o app
- **Sincronização automática**: Badges e botões sempre refletem o estado atual

### 7.2. Sistema de Notificações
- **Notificação de sucesso** (verde): Aparece ao candidatar-se
- **Notificação de cancelamento** (vermelho): Aparece ao cancelar inscrição
- **Animação slide-in**: Entra da direita com efeito suave
- **Auto-dismiss**: Desaparece automaticamente após 3 segundos

### 7.3. Interações Inteligentes
- **Hover no botão inscrito**: Muda para vermelho e mostra "Cancelar"
- **Confirmação de cancelamento**: Evita cancelamentos acidentais
- **Auto-close**: Modal fecha sozinho após candidatura bem-sucedida
- **Badges visuais**: Identificação rápida de vagas inscritas

---

## 8. Melhorias Futuras

- Integração com API real de vagas (backend)
- Sistema de favoritos (salvar vagas para depois)
- Notificações push de novas vagas
- Histórico completo de candidaturas
- Busca por palavras-chave no título/descrição
- Filtros adicionais (salário mínimo, tipo de contrato)
- Perfil do usuário com curso pré-selecionado
- Compartilhamento de vagas via redes sociais
- Sistema de mensagens com empresas
- Upload de currículo

---

**Desenvolvido para o projeto de Interface Homem-Máquina - Inatel**

