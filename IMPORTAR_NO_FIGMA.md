# 🚀 Guia Rápido: Importar Design System no Figma

## ✅ Pré-requisitos

- [x] Figma aberto (figma.com)
- [x] Projeto Figma criado
- [x] Plugin **html.to.design** instalado
- [x] Arquivo `index.html` disponível

---

## 📋 Passo-a-Passo

### **Passo 1: Instalar o Plugin html.to.design**

```
1. Abra Figma
2. Menu (≡) no canto superior esquerdo
3. Selecione: "Plugins" → "Browse plugins"
4. Busque: "html.to.design"
5. Clique em "Install"
```

**Preview:** O plugin dirá "HTML to Figma - Convert web designs to Figma"

---

### **Passo 2: Preparar o Arquivo**

Escolha **UM** dos seguintes métodos:

#### **Método A: Via URL (Recomendado)**
1. Hospede o arquivo em um servidor web
   ```
   https://seu-dominio.com/index.html
   ```

#### **Método B: Via Arquivo Local**
1. Deixe a pasta aberta no seu computador
2. Copie o caminho completo do arquivo:
   ```
   C:\Users\SeuUsuario\Design System Omnichannel CRM - Web\index.html
   ```

#### **Método C: Via Cópia do HTML**
1. Abra `index.html` em um editor
2. Copie todo o código HTML
3. Cole diretamente no plugin

---

### **Passo 3: Abrir o Plugin**

```
1. Abra seu projeto Figma
2. Menu (≡) → "Plugins" → "html.to.design"
3. Espere a janela do plugin carregar
```

---

### **Passo 4: Importar o Design System**

**Se usando URL:**
```
1. Na janela do plugin, selecione: "From URL"
2. Cole a URL completa:
   https://seu-dominio.com/index.html
3. Clique em "IMPORT"
4. Aguarde (pode levar 30-60 segundos)
```

**Se usando arquivo local:**
```
1. Na janela do plugin, selecione: "From File"
2. Selecione o arquivo index.html
3. Clique em "IMPORT"
4. Aguarde
```

**Se usando HTML direto:**
```
1. Na janela do plugin, selecione: "From HTML"
2. Cole todo o conteúdo do HTML
3. Clique em "IMPORT"
4. Aguarde
```

---

### **Passo 5: Resultado da Importação**

Após 30-60 segundos, você verá:

✅ **Design System importado como:**
- Frames para cada seção (Tokens, Átomos, Moléculas, Organismos)
- Componentes Figma dos elementos
- Estilos e cores definidos
- Tipografia aplicada

---

## 🎨 O que Foi Importado

### **Estrutura Figma:**
```
Design System
├── 🎨 Tokens
│   ├── Paleta de Cores
│   ├── Tipografia
│   ├── Border Radius
│   └── Sombras
├── ⚛️ Átomos
│   ├── Channel Badges
│   ├── SLA Indicators
│   ├── Status Badges
│   ├── Avatars
│   └── Buttons
├── 🧬 Moléculas
│   ├── SLA Progress Bars
│   ├── Message Bubbles
│   ├── Avatar Stacks
│   └── Metric Cards
└── 🧬 Organismos
    ├── Ticket Data Grid
    ├── Chat Interface
    ├── Customer Sidebar
    ├── Empty States
    └── Skeleton Loaders
```

---

## 🔧 Próximos Passos no Figma

### **1. Criar Estilos**
```
Figma → Assets → Colors/Typography
- Os tokens já estão como cores nomeadas
- Você pode criar componentes com variantes
```

### **2. Criar Componentes**
```
1. Selecione um elemento importado
2. Clique em "Create Component" (Cmd/Ctrl + K)
3. Nomeie seguindo o padrão: "Atoms/Button/Primary"
```

### **3. Adicionar Variantes**
```
1. Selecione componente
2. Plugin → "Add variant"
3. Crie variações (size, state, etc)
```

### **4. Exportar Assets**
```
Selecione componente → Assets → Export
- PNG (para documentação)
- SVG (para web)
- PDF (para impressão)
```

---

## ⚙️ Solução de Problemas

### **❌ Plugin não encontra o arquivo**

**Solução:**
1. Verifique o caminho completo do arquivo
2. Certifique-se que não há espaços especiais no caminho
3. Tente hospedar em um servidor web

### **❌ Importação muito lenta**

**Solução:**
1. Reduza o tamanho da página (remova conteúdo desnecessário)
2. Use URL em vez de arquivo local
3. Tente em outro navegador

### **❌ Cores/Tipografia não importa corretamente**

**Solução:**
1. Verifique que `theme.css` é carregado em `<head>`
2. Confirme que as CSS Variables estão definidas
3. Tente recarregar o plugin

### **❌ Alguns componentes não aparecem**

**Solução:**
1. Verifique o console (F12) para erros
2. Confirme que o HTML é válido
3. Tente remover e reimportar

---

## 💡 Dicas Profissionais

### **Para Melhor Importação:**

1. **Use URL ao invés de arquivo local**
   - Mais rápido
   - Mais confiável
   - Facilita compartilhamento

2. **Organize o HTML corretamente**
   - CSS no `<head>`
   - Elementos bem nomeados (id/class)
   - Sem JavaScript complexo

3. **Após importação:**
   - Organize em frames
   - Crie estilos compartilhados
   - Documente componentes
   - Configure library para equipe

### **Para Melhor Performance:**

```html
<!-- Otimizações já aplicadas: -->
✅ CSS Variables para tokens
✅ Cores nomeadas
✅ Tipografia padronizada
✅ Componentes modularizados
✅ HTML semântico
✅ Sem imagens pesadas
```

---

## 📱 Responsividade no Figma

Após importação, você pode:

1. **Duplicar frames** para diferentes breakpoints
2. **Usar Auto Layout** para responsividade
3. **Criar prototypes** para interatividade
4. **Gerar specs** para desenvolvimento

---

## 🎓 Próximos Passos Recomendados

Após importar no Figma:

1. **Criar Variantes**
   - Button: primary, secondary, outline, ghost
   - Sizes: sm, md, lg
   - States: default, hover, active, disabled

2. **Documentar**
   - Adicionar notas de uso
   - Screenshot de cada componente
   - Padrões e boas práticas

3. **Compartilhar**
   - Convidar time para projeto
   - Ativar Library (para componentes reutilizáveis)
   - Gerar links compartilháveis

4. **Versionar**
   - Use branches do Figma
   - Documente mudanças
   - Mantenha histórico

---

## 🔗 Links Úteis

- **Figma:** https://figma.com
- **Plugin:** https://www.figma.com/community/plugin/1193855949081352926/html-to-design
- **Google Fonts:** https://fonts.google.com
- **CSS Variables:** https://developer.mozilla.org/en-US/docs/Web/CSS/--*

---

## ✅ Checklist Final

Antes de importar:
- [ ] Arquivo `index.html` pronto
- [ ] `assets/css/` com todos os arquivos CSS
- [ ] Figma aberto
- [ ] Plugin instalado
- [ ] Conexão com internet estável

Após importar:
- [ ] Design System apareceu no canvas
- [ ] Cores estão corretas
- [ ] Tipografia está aplicada
- [ ] Componentes são editáveis
- [ ] Preparado para biblioteca compartilhada

---

## 🎉 Pronto!

Seu Design System está agora no Figma! 

Você pode:
- ✅ Visualizar todos os componentes
- ✅ Editar cores e tipografia
- ✅ Criar variantes
- ✅ Compartilhar com o time
- ✅ Usar como base para novos designs
- ✅ Exportar assets
- ✅ Gerar especificações

---

**Dúvidas?** Consulte o README.md ou a documentação em DESIGN-SYSTEM.md

**Versão:** 1.0.0  
**Atualizado:** Dezembro 2024
