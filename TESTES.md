# 🧪 Guia de Testes - Design System Web

**Instruções para Testar e Validar o Projeto Antes da Importação no Figma**

---

## ✅ Checklist Pré-Importação

Use este guia para garantir que tudo está funcionando perfeitamente antes de importar no Figma.

---

## 🌐 Teste 1: Abrir Localmente

### **Passo 1: Localizar o Arquivo**
```
D:\Habilis - PD\CRM\Design System Omnichannel CRM - Web\index.html
```

### **Passo 2: Abrir no Navegador**
```
1. Clique direito em index.html
2. Abrir com → Google Chrome (ou seu navegador favorito)
   OU
   Arraste index.html para a janela do navegador
```

### **Passo 3: Verificar Carregamento**
```
✅ Página carrega em < 2 segundos
✅ Sem mensagens de erro no console (F12)
✅ Navbar fixa no topo
✅ Conteúdo bem organizado em seções
```

---

## 🎨 Teste 2: Tokens de Design

### **Cores**
- [ ] Paleta primária exibe 11 variações
- [ ] Paleta neutra exibe 11 tons
- [ ] Cores semânticas aparecem corretamente
- [ ] Cores de canais aparecem com nomes (WhatsApp, Email, etc)

**Ação:** Clique em uma cor para copiar o código hex
```
✅ Deve aparecer mensagem "✓ Copiado!"
```

### **Tipografia**
- [ ] Rubik aparece para interface
- [ ] Inter aparece para dados
- [ ] 4 pesos visíveis (400, 500, 600, 700)

### **Border Radius**
- [ ] 6 exemplos visuais aparecem
- [ ] Variam de 6px até círculo completo

### **Sombras**
- [ ] 4 níveis de sombra visíveis
- [ ] Gradient visual aparente

---

## ⚛️ Teste 3: Componentes Átomos

### **Channel Badge**
```
✅ 3 tamanhos: SM, MD, LG
✅ 5 canais: WhatsApp, Messenger, Email, Instagram, Telegram
✅ Cores corretas para cada canal
```

**Teste de Funcionalidade:**
- [ ] Hover efeito suave
- [ ] Badges responsivos em mobile

### **SLA Indicator**
```
✅ 3 status: Safe (verde), Warning (amarelo), Critical (vermelho)
✅ Cores corretas aparecem
✅ Label aparece quando especificado
```

### **Status Badge**
```
✅ 4 status: Aberto (azul), Pendente (amarelo), Resolvido (verde), Fechado (cinza)
✅ 2 tamanhos: SM, MD
✅ Texto branco contra fundo colorido
```

### **Priority Badge**
```
✅ 4 prioridades: Baixa, Média, Alta, Urgente
✅ Cores progressivas
```

### **Avatar**
```
✅ 3 tamanhos: SM (2rem), MD (2.5rem), LG (3rem)
✅ Iniciais dentro do avatar
✅ Fundo cinza consistente
```

### **Buttons**
```
✅ 4 tipos: Primary, Secondary, Outline, Ghost
✅ 3 tamanhos: Small, Normal, Large
✅ Hover effects suaves
✅ Click visual feedback
```

**Teste de Interatividade:**
- [ ] Botões clicáveis
- [ ] Cursor muda para pointer
- [ ] Efeito ripple aparece ao clicar

### **Form Inputs**
```
✅ Input text funciona
✅ Textarea funciona
✅ Select dropdown funciona
✅ Focus state muda cor/border
```

**Teste:**
- [ ] Digite no input
- [ ] Clique no textarea
- [ ] Abra o select

---

## 🧬 Teste 4: Componentes Moléculas

### **SLA Progress Bar**
```
✅ 3 exemplos com 35%, 75%, 95%
✅ Cores mudam: Verde (0-50%), Amarelo (51-80%), Vermelho (81-100%)
✅ Tempo restante aparece
```

**Teste de Animação:**
- [ ] Hover na barra muda cor suavemente

### **SLA Progress Circular**
```
✅ 3 círculos com porcentagens
✅ SVG renderiza corretamente
✅ Porcentagem no centro
```

### **Message Bubble**
```
✅ Mensagem recebida (esquerda, fundo neutro)
✅ Mensagem enviada (direita, fundo primário)
✅ Nota interna (amarela, tracejada)
✅ Avatar aparece
✅ Nome e timestamp aparecem
```

### **Avatar Stack**
```
✅ Avatares empilhados aparecem
✅ Counter "+N" aparece quando há mais
✅ Visual de sobreposição está correto
```

### **Metric Card**
```
✅ Título aparece
✅ Ícone aparece
✅ Valor grande aparece
✅ Tendência com seta e percentual aparece
```

---

## 🧬 Teste 5: Componentes Organismos

### **Ticket Data Grid**
```
✅ Tabela com 3 linhas de exemplo
✅ Cabeçalho com colunas
✅ Filtros de busca, status, canal
✅ Botão de filtro
✅ Paginação na base
```

**Testes de Interatividade:**
- [ ] Digite na busca - resultado filtra
- [ ] Selecione status - tabela filtra
- [ ] Selecione canal - tabela filtra
- [ ] Clique seta de ordenação - ícone muda
- [ ] Clique em próxima página - número muda

### **Empty States**
```
✅ 2 exemplos: Fila vazia, Sem resultados
✅ Ícone aparece
✅ Título aparece
✅ Descrição aparece
✅ Botão CTA aparece
```

### **Skeleton Loaders**
```
✅ Animação de carregamento funciona
✅ Efeito shimmer visível
✅ 2 tipos: Chat, Tabela
```

---

## 📱 Teste 6: Responsividade

### **Desktop (1366px+)**
```bash
# Abra DevTools: F12
# Desmarque "Device Toolbar" para ver desktop completo

✅ Largura máxima: 1400px
✅ Container centralizado
✅ Espaçamento geração
```

### **Tablet (768px - 1024px)**
```bash
# DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
# Escolha iPad

✅ Layout ajusta corretamente
✅ Elementos não saem da tela
✅ Texto legível
```

### **Mobile (< 768px)**
```bash
# DevTools → Toggle Device Toolbar
# Escolha iPhone 12

✅ Navegação funciona
✅ Colunas se reorganizam em 1 coluna
✅ Botões são clicáveis
✅ Texto não fica muito pequeno
```

### **Teste de Redimensionamento**
```
1. Abra DevTools
2. Toggle Device Toolbar
3. Redimensione a janela lentamente
4. Observe se layout se adapta suavemente

✅ Sem quebras de layout
✅ Sem scroll horizontal desnecessário
✅ Componentes se reorganizam
```

---

## ♿ Teste 7: Acessibilidade

### **Navegação por Teclado**
```
1. Feche DevTools
2. Pressione TAB repetidamente

✅ Focus move entre botões
✅ Focus is visível (outline/background)
✅ Ordem de foco é lógica
```

### **Cores e Contraste**
```bash
# DevTools → Lighthouse → Accessibility

✅ Score > 90
✅ Nenhum erro de contraste
✅ Nenhum erro de cor apenas
```

### **Screen Reader (Opcional)**
```
Windows: Narrator (Win + Ctrl + Enter)
Mac: VoiceOver (Cmd + F5)

✅ Botões têm texto acessível
✅ Labels associados a inputs
✅ Hierarquia de headings correta
```

---

## 🎯 Teste 8: Performance

### **Velocity (Tempo de Carregamento)**
```bash
# DevTools → Performance

1. Clique em graváva (círculo vermelho)
2. Clique no botão "Registrar" (gravação)
3. Faça scroll rápido
4. Clique "Parar" (pausa)

✅ FCP (First Contentful Paint) < 1s
✅ LCP (Largest Contentful Paint) < 2s
✅ 60 FPS durante scroll
```

### **Lighthouse Score**
```bash
# DevTools → Lighthouse
# Clique "Analyze page load"

✅ Performance: 90+
✅ Accessibility: 90+
✅ Best Practices: 90+
✅ SEO: 90+
```

### **File Size**
```bash
# DevTools → Network
# Recarregue a página (F5)

✅ index.html: < 100KB
✅ Total CSS: < 150KB
✅ Total JS: < 50KB
✅ Total tudo: < 300KB
```

---

## 🔍 Teste 9: Navegação e Links

### **Smooth Scroll**
```
1. Clique em "Tokens" na navbar
2. Clique em "Átomos"
3. Clique em "Moléculas"
4. Clique em "Organismos"

✅ Página scroll suavemente para seção
✅ URL não muda (anchor links)
```

### **Botões e Links**
```
✅ Cursor muda para pointer ao passar
✅ Clique tem feedback visual
✅ Nenhum erro ao clicar
```

---

## 🌍 Teste 10: Compatibilidade do Navegador

### **Google Chrome** (Recomendado para Figma)
```bash
# Abra o projeto em Chrome
✅ Tudo funciona perfeitamente
```

### **Firefox**
```bash
# Abra o projeto em Firefox
✅ Layout correto
✅ Cores corretas
✅ Sem diferenças visuais
```

### **Safari** (se em Mac)
```bash
# Abra o projeto em Safari
✅ Renderização correta
✅ CSS Variables funcionam
✅ Sem erros
```

### **Microsoft Edge**
```bash
# Abra o projeto em Edge
✅ Tudo funciona como esperado
```

---

## 🧹 Teste 11: Console (Verificação de Erros)

### **Abrir Console**
```
1. Pressione F12
2. Clique em "Console"
3. Recarregue a página (F5)

✅ Nenhuma mensagem de erro vermelha
✅ Nenhum warning amarelo importante
✅ Mensagens de boas-vindas do console (CSS art)
```

---

## 🎨 Teste 12: Aparência Visual

### **Consistência de Design**
```
✅ Cores são consistentes em todos componentes
✅ Espaçamento é proporcional
✅ Tipografia é legível
✅ Elementos têm sombras apropriadas
```

### **Alignment e Grid**
```
✅ Elementos estão alinhados
✅ Cards estão no grid
✅ Sem desalinhamentos óbvios
```

### **Typography**
```
✅ Rubik aparece em títulos/labels
✅ Inter aparece em números/dados
✅ Pesos variam conforme design
✅ Line height é confortável
```

---

## 🔧 Teste 13: Interatividade

### **Busca (Search)**
```
1. Vá para Ticket Data Grid
2. Digite na busca "Maria"

✅ Tabela filtra em tempo real
✅ Apenas filas com "Maria" aparecem
```

### **Filtros (Select)**
```
1. Selecione "Aberto" no Status
2. Selecione "WhatsApp" no Canal

✅ Tabela mostra apenas combinação correta
```

### **Paginação**
```
1. Clique na seta → (próxima página)

✅ Número muda
✅ Texto "Mostrando X-Y de Z" atualiza
✅ Seta ← fica desabilitada na primeira página
```

### **Buttons**
```
1. Clique em qualquer botão

✅ Efeito ripple aparece
✅ Hover state visível antes de clicar
✅ Sem erro ou reload de página
```

---

## 📊 Teste 14: CSS Variables

### **Verificar CSS Variables**
```bash
1. DevTools → Elements
2. Selecione qualquer elemento
3. Veja a seção "Computed"

✅ --primary-600 = #700AFF
✅ --neutral-50 = #f8fafc
✅ --shadow-md está carregado
✅ Outras variáveis existem
```

---

## 🖨️ Teste 15: Print (Opcional)

### **Imprimir Página**
```bash
1. Pressione Ctrl+P (ou Cmd+P no Mac)
2. Veja preview de impressão

✅ Layout é legível
✅ Cores aparecem (ou escala de cinza)
✅ Sem quebras de página no meio de elementos
```

---

## ✅ Resultado Final

Se TODOS os testes passaram:

```
✅ SUCESSO!

O Design System está:
- Funcionando corretamente
- Responsivo em todos tamanhos
- Acessível
- Performático
- Pronto para importar no Figma!
```

---

## 🚀 Próximo Passo: Importar no Figma

Se tudo passou, siga o guia: [IMPORTAR_NO_FIGMA.md](IMPORTAR_NO_FIGMA.md)

---

## 🐛 Troubleshooting

### **Problema: Página não carrega**
```
1. Verifique se index.html existe
2. Verifique o caminho da pasta
3. Tente abrir em outro navegador
4. Limpe cache (Ctrl+Shift+Delete)
```

### **Problema: Cores não aparecem**
```
1. DevTools → Network
2. Verifique se assets/css carregou
3. Verifique se não há erro 404
4. Limpe cache do navegador
```

### **Problema: Layout quebrado em mobile**
```
1. DevTools → Toggle Device Toolbar
2. Verifique media queries no showcase.css
3. Tente redimensionar manualmente
4. Verifique viewport meta tag
```

### **Problema: JavaScript não funciona**
```
1. Verifique console (F12)
2. Procure por erro de script
3. Verifique se assets/js/showcase.js carregou
4. Tente abrir em novo navegador
```

---

## 📝 Checklist Final

Antes de importar no Figma, TODOS os itens abaixo devem estar ✅:

- [ ] Página carrega sem erros
- [ ] Todas as seções aparecem
- [ ] Componentes renderizam corretamente
- [ ] Cores estão precisas
- [ ] Tipografia é legível
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Navegação por teclado funciona
- [ ] Console sem erros
- [ ] Performance > 90 em Lighthouse
- [ ] Acessibilidade > 90 em Lighthouse
- [ ] Botões têm feedback visual
- [ ] Filtros funcionam
- [ ] Sem layout quebrado

---

**Se tudo passou: Você está pronto para importar no Figma! 🎉**

**Versão:** 1.0.0  
**Última Atualização:** Dezembro 2024
