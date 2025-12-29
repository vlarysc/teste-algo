# 📚 Referência Rápida de Classes CSS

## Utilidade & Componentes

### ✅ Este arquivo lista TODAS as classes disponíveis para usar no Design System

---

## 🎨 Cores - Classes Utilitárias

### Background Colors
```css
.bg-white              /* #ffffff */
.bg-primary            /* var(--primary) */
.bg-neutral-50         /* var(--neutral-50) */
.bg-neutral-100        /* var(--neutral-100) */
.bg-neutral-200        /* var(--neutral-200) */
```

### Text Colors
```css
.text-primary          /* var(--primary) */
.text-neutral-500      /* var(--neutral-500) */
.text-neutral-600      /* var(--neutral-600) */
.text-neutral-700      /* var(--neutral-700) */
.text-neutral-900      /* var(--neutral-900) */
.text-white            /* #ffffff */
.text-success          /* var(--success-500) */
.text-error            /* var(--error-500) */
.text-warning          /* var(--warning-500) */
.text-info             /* var(--info-500) */
```

---

## 📐 Layout - Flexbox

### Display
```css
.flex                  /* display: flex */
.flex-col              /* flex-direction: column */
.flex-row              /* flex-direction: row */
.flex-wrap             /* flex-wrap: wrap */
```

### Alignment
```css
.items-start           /* align-items: flex-start */
.items-center          /* align-items: center */
.items-end             /* align-items: flex-end */
.items-stretch         /* align-items: stretch */

.justify-start         /* justify-content: flex-start */
.justify-center        /* justify-content: center */
.justify-end           /* justify-content: flex-end */
.justify-between       /* justify-content: space-between */
.justify-around        /* justify-content: space-around */
```

### Gap
```css
.gap-xs                /* gap: var(--spacing-xs) */
.gap-sm                /* gap: var(--spacing-sm) */
.gap-md                /* gap: var(--spacing-md) */
.gap-lg                /* gap: var(--spacing-lg) */
.gap-xl                /* gap: var(--spacing-xl) */
.gap-2xl               /* gap: var(--spacing-2xl) */
```

---

## 📏 Espaçamento

### Padding
```css
.p-xs                  /* padding: var(--spacing-xs) */
.p-sm                  /* padding: var(--spacing-sm) */
.p-md                  /* padding: var(--spacing-md) */
.p-lg                  /* padding: var(--spacing-lg) */
.p-xl                  /* padding: var(--spacing-xl) */
.p-2xl                 /* padding: var(--spacing-2xl) */
```

### Margin
```css
.m-xs                  /* margin: var(--spacing-xs) */
.m-sm                  /* margin: var(--spacing-sm) */
.m-md                  /* margin: var(--spacing-md) */
.m-lg                  /* margin: var(--spacing-lg) */
.m-xl                  /* margin: var(--spacing-xl) */
.m-2xl                 /* margin: var(--spacing-2xl) */
```

---

## 🔤 Tipografia

### Font Family
```css
.font-interface        /* font-family: var(--font-interface) */
.font-data             /* font-family: var(--font-data) */
```

### Font Weight
```css
.font-400              /* font-weight: 400 */
.font-500              /* font-weight: 500 */
.font-600              /* font-weight: 600 */
.font-700              /* font-weight: 700 */
```

### Font Size
```css
.text-xs               /* font-size: 0.75rem */
.text-sm               /* font-size: 0.875rem */
.text-base             /* font-size: 1rem */
.text-lg               /* font-size: 1.125rem */
.text-xl               /* font-size: 1.25rem */
.text-2xl              /* font-size: 1.5rem */
```

### Text Alignment
```css
.text-left             /* text-align: left */
.text-center           /* text-align: center */
.text-right            /* text-align: right */
```

### Text Utilities
```css
.truncate              /* Trunca com ellipsis */
.leading-relaxed       /* line-height: 1.75 */
.leading-tight         /* line-height: 1.25 */
```

---

## 🔲 Rounded Corners

```css
.rounded-sm            /* border-radius: var(--radius-sm) */
.rounded-md            /* border-radius: var(--radius-md) */
.rounded-lg            /* border-radius: var(--radius-lg) */
.rounded-xl            /* border-radius: var(--radius-xl) */
.rounded-2xl           /* border-radius: var(--radius-2xl) */
.rounded-full          /* border-radius: var(--radius-full) */
```

---

## 🚫 Bordas

```css
.border                /* border: 1px solid var(--border) */
.border-t              /* border-top: 1px solid var(--border) */
.border-b              /* border-bottom: 1px solid var(--border) */
.border-l              /* border-left: 1px solid var(--border) */
.border-r              /* border-right: 1px solid var(--border) */
```

---

## 🌫️ Sombras

```css
.shadow-sm             /* box-shadow: var(--shadow-sm) */
.shadow-md             /* box-shadow: var(--shadow-md) */
.shadow-lg             /* box-shadow: var(--shadow-lg) */
.shadow-xl             /* box-shadow: var(--shadow-xl) */
```

---

## ⏱️ Transições

```css
.transition            /* transition: all var(--transition-base) */
.transition-fast       /* transition: all var(--transition-fast) */
.transition-slow       /* transition: all var(--transition-slow) */
```

---

## 🔘 Botões

### Tipos
```css
.btn-primary           /* Botão primário (purple) */
.btn-secondary         /* Botão secundário (outlined) */
.btn-outline           /* Botão outline */
.btn-ghost             /* Botão transparente */
```

### Tamanhos
```css
.btn-small             /* Botão pequeno (0.75rem padding) */
/* Normal (padrão: 0.5rem 1rem) */
.btn-large             /* Botão grande (0.75rem 1.5rem) */
```

### Exemplo Completo
```html
<button class="btn-primary btn-large">Ação Principal</button>
<button class="btn-secondary btn-small">Ação Secundária</button>
<button class="btn-outline">Cancelar</button>
<button class="btn-ghost">Link Simples</button>
```

---

## ⚛️ Componentes - Átomos

### Channel Badge
```css
.channel-badge         /* Container principal */
.channel-badge.sm      /* Tamanho pequeno */
.channel-badge.md      /* Tamanho médio (padrão) */
.channel-badge.lg      /* Tamanho grande */

/* Canais */
.channel-badge.whatsapp
.channel-badge.messenger
.channel-badge.email
.channel-badge.instagram
.channel-badge.telegram
```

**Exemplo:**
```html
<div class="channel-badge md whatsapp">W</div>
<div class="channel-badge lg messenger">M</div>
```

### SLA Indicator
```css
.sla-indicator         /* Container */
.sla-indicator-dot     /* Círculo do indicador */
.sla-indicator-dot.sm  /* Tamanho pequeno */
.sla-indicator-dot.md  /* Tamanho médio */
.sla-indicator-dot.lg  /* Tamanho grande */

/* Status */
.sla-indicator-dot.safe
.sla-indicator-dot.warning
.sla-indicator-dot.critical

.sla-indicator-label   /* Texto do label */
```

### Status Badge
```css
.status-badge          /* Container */
.status-badge.sm       /* Tamanho pequeno */
/* Tamanho médio é padrão */

/* Status */
.status-badge.open
.status-badge.pending
.status-badge.resolved
.status-badge.closed
```

### Priority Badge
```css
.priority-badge        /* Container */
.priority-badge.low    /* Baixa (azul) */
.priority-badge.medium /* Média (amarelo) */
.priority-badge.high   /* Alta (vermelho) */
.priority-badge.urgent /* Urgente (vermelho escuro) */
```

### Avatar
```css
.avatar                /* Container */
.avatar.sm             /* 2rem */
.avatar.md             /* 2.5rem */
.avatar.lg             /* 3rem */
```

### Tags
```css
.tag                   /* Tag padrão */
.tag.removable         /* Tag com botão de remover */
```

---

## 🧬 Componentes - Moléculas

### SLA Progress Bar
```css
.sla-progress-bar              /* Container principal */
.sla-progress-bar-header       /* Header com label e tempo */
.sla-progress-bar-label        /* Label "SLA" */
.sla-progress-bar-time         /* Texto de tempo restante */
.sla-progress-bar-time.safe    /* Cor verde */
.sla-progress-bar-time.warning /* Cor amarela */
.sla-progress-bar-time.critical/* Cor vermelha */
.sla-progress-track            /* Track de fundo */
.sla-progress-fill             /* Barra de progresso */
.sla-progress-fill.safe        /* Cor verde */
.sla-progress-fill.warning     /* Cor amarela */
.sla-progress-fill.critical    /* Cor vermelha */
```

### SLA Progress Circular
```css
.sla-progress-circle           /* Container */
.sla-progress-circle-background/* SVG background */
.sla-progress-circle-fill      /* SVG fill */
.sla-progress-circle-fill.safe
.sla-progress-circle-fill.warning
.sla-progress-circle-fill.critical
.sla-progress-percentage       /* Texto % no centro */
```

### Message Bubble
```css
.message-bubble                /* Container */
.message-bubble.received       /* Mensagem recebida */
.message-bubble.sent           /* Mensagem enviada */
.message-bubble.internal       /* Nota interna */
.message-bubble-avatar         /* Avatar do remetente */
.message-bubble-content        /* Container do conteúdo */
.message-bubble-header         /* Nome + timestamp */
.message-bubble-sender         /* Nome do remetente */
.message-bubble-timestamp      /* Hora */
.message-bubble-body           /* Texto da mensagem */
.message-bubble-attachments    /* Container de anexos */
.message-bubble-attachment     /* Anexo individual */
.message-bubble-internal-label /* Label "Nota Interna" */
```

### Avatar Stack
```css
.avatar-stack              /* Container */
.avatar-stack-item         /* Item individual */
.avatar-stack-counter      /* Badge "+N" */
.avatar-stack-counter.sm
.avatar-stack-counter.md
```

### Metric Card
```css
.metric-card               /* Card container */
.metric-card-header        /* Header com title + icon */
.metric-card-title         /* Título do métrica */
.metric-card-icon          /* Ícone */
.metric-card-value         /* Valor grande */
.metric-card-trend         /* Container de tendência */
.metric-card-trend.up      /* Tendência para cima */
.metric-card-trend.down    /* Tendência para baixo */
.metric-card-chart         /* Container do gráfico */
.metric-card-sparkline     /* Gráfico sparkline */
.metric-card-bar           /* Barra do gráfico */
```

### Contact Card
```css
.contact-card              /* Card container */
.contact-card-header       /* Header */
.contact-avatar            /* Avatar com badge */
.contact-info              /* Informações de contato */
.contact-name              /* Nome */
.contact-message           /* Última mensagem */
.contact-meta              /* Meta (hora, status) */
.contact-time              /* Hora */
.contact-badge-unread      /* Badge de mensagens não lidas */
```

### Search Input
```css
.search-input-wrapper      /* Container */
.search-input-icon         /* Ícone de busca */
.search-input              /* Input field */
```

---

## 🧬 Componentes - Organismos

### Omnichannel Chat
```css
.omnichannel-chat              /* Container principal */
.omnichannel-chat-sidebar      /* Sidebar de contatos */
.omnichannel-chat-sidebar-header
.omnichannel-chat-sidebar-title
.omnichannel-chat-sidebar-list
.omnichannel-chat-area         /* Área de chat */
.omnichannel-chat-header       /* Header do chat */
.omnichannel-chat-header-content
.omnichannel-chat-header-left
.omnichannel-chat-header-info
.omnichannel-chat-contact-name
.omnichannel-chat-ticket-id
.omnichannel-chat-messages     /* Área de mensagens */
.omnichannel-chat-messages-inner
.omnichannel-chat-input-area   /* Área de input */
.omnichannel-chat-tabs         /* Tabs (público/interno) */
.omnichannel-chat-tab          /* Tab */
.omnichannel-chat-tab.active
.omnichannel-chat-input-group
.omnichannel-chat-textarea
.omnichannel-chat-actions      /* Ações (anexo, emoji, etc) */
.omnichannel-chat-action-btn
```

### Ticket Data Grid
```css
.ticket-grid                   /* Container principal */
.ticket-grid-header            /* Header com filtros */
.ticket-grid-filters           /* Container de filtros */
.ticket-grid-search            /* Container de busca */
.ticket-grid-meta              /* Meta (count) */
.ticket-grid-table             /* Tabela */
.ticket-grid-thead             /* Head da tabela */
.ticket-grid-sort-btn          /* Botão de ordenação */
.ticket-grid-sort-icon         /* Ícone de sort */
.ticket-grid-sort-icon.active
.ticket-grid-tbody             /* Body da tabela */
.ticket-grid-tbody tr          /* Row */
.ticket-grid-tbody td          /* Célula */
.ticket-grid-id                /* Coluna ID */
.ticket-grid-customer          /* Coluna cliente */
.ticket-grid-subject           /* Coluna assunto */
.ticket-grid-pagination        /* Container pagination */
.ticket-grid-pagination-info   /* Texto "mostrando X-Y de Z" */
.ticket-grid-pagination-controls
.ticket-grid-pagination-btn
```

### Customer Sidebar
```css
.customer-sidebar              /* Container principal */
.customer-sidebar.hidden       /* Escondido */
.customer-sidebar-header       /* Header */
.customer-sidebar-title
.customer-sidebar-close        /* Botão fechar */
.customer-sidebar-content      /* Conteúdo scrollável */
.customer-section              /* Seção */
.customer-section-title        /* Título da seção */
.customer-field                /* Campo */
.customer-field-label
.customer-field-value
.customer-tags                 /* Tags */
.customer-stats                /* Estatísticas */
.customer-stat                 /* Stat individual */
.customer-stat-value
.customer-stat-label
```

### Empty State
```css
.empty-state               /* Container */
.empty-state-icon          /* Ícone */
.empty-state-title         /* Título */
.empty-state-description   /* Descrição */
.empty-state-action        /* Botões de ação */
```

### Skeleton Loaders
```css
.skeleton                  /* Elemento skeleton */
.skeleton-text             /* Skeleton de texto */
.skeleton-text.short       /* Texto curto */
.skeleton-avatar           /* Skeleton de avatar */
.skeleton-card             /* Skeleton de card */
.skeleton-chat-message     /* Skeleton de mensagem */
.skeleton-table-row        /* Skeleton de linha de tabela */
.skeleton-table-col        /* Skeleton de coluna */
```

---

## 🎯 Utilitários Especiais

### Visibility
```css
.hidden                    /* display: none !important */
.visible                   /* display: block */
```

### Container
```css
.container                 /* Max-width 1400px, margens automáticas */
```

---

## 📱 Responsive Classes

**Em desenvolvimento:** classes responsivas com media queries

### Media Queries Base
```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

---

## 🌐 Scroll Area

```css
.scroll-area               /* Container com scroll customizado */
```

---

## 🎨 Combinações Comuns

### Exemplo 1: Card com Flex
```html
<div class="p-lg rounded-lg border shadow-md">
  <div class="flex gap-lg items-center">
    <div class="avatar md">CM</div>
    <div>
      <h3 class="text-lg font-600">Carlos Mendes</h3>
      <p class="text-sm text-neutral-600">carlos@example.com</p>
    </div>
  </div>
</div>
```

### Exemplo 2: Badge com Status
```html
<div class="flex gap-md items-center">
  <div class="channel-badge md whatsapp"></div>
  <span class="status-badge open">Aberto</span>
</div>
```

### Exemplo 3: Botão com Ícone
```html
<button class="btn-primary flex gap-md items-center">
  <span>✓</span>
  <span>Confirmar</span>
</button>
```

### Exemplo 4: Grid de Cards
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-lg);">
  <div class="metric-card">...</div>
  <div class="metric-card">...</div>
  <div class="metric-card">...</div>
</div>
```

---

## ✅ Checklist de Classes

Ao criar um novo componente, use:
- [ ] Classes de flexbox para layout
- [ ] Classes de espaçamento (padding/margin)
- [ ] Classes de rounded corners
- [ ] Classes de sombras
- [ ] Classes de tipografia
- [ ] Classes de cores
- [ ] Classes de transição
- [ ] Sem CSS inline (quando possível)

---

## 📖 Referência de Variáveis CSS

```css
/* Acessar qualquer token diretamente */
background-color: var(--primary-600);
color: var(--neutral-900);
padding: var(--spacing-lg);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);
font-family: var(--font-interface);
font-weight: 500;
```

---

## 🔗 Links Úteis

- Ver todos os tokens em `assets/css/theme.css`
- Ver componentes em `assets/css/atoms.css`, `molecules.css`, `organisms.css`
- Exemplos em `index.html`
- Documentação completa em `DESIGN-SYSTEM.md`

---

**Última Atualização:** Dezembro 2024  
**Versão:** 1.0.0
