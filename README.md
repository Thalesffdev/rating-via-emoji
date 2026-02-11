# 🎭 Rating com Emojis

Uma aplicação React moderna que permite exibir avaliações de forma visual e interativa usando emojis expressivos. Este componente transforma notas numéricas em uma representação visual intuitiva e amigável.

---

## 📋 Sumário

- [🎯 Descrição](#-descrição)
- [🚀 Funcionalidades](#-funcionalidades)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📦 Instalação e Uso](#-instalação-e-uso)
- [💡 Como Funciona](#-como-funciona)
- [🎮 Exemplo de Uso](#-exemplo-de-uso)
- [📱 Responsividade](#-responsividade)
- [🔗 Links e CTAs](#-links-e-ctas)

---

## 🎯 Descrição

O projeto **Rating com Emojis** é um componente React reutilizável desenvolvido com Next.js 16, TypeScript e Tailwind CSS. Ele transforma notas numéricas (de 0 a 5) em uma avaliação visual composta por um número decimal e emojis expressivos que refletem o sentimento da avaliação.

Ideal para sistemas de avaliação de produtos, serviços, experiências de usuário ou qualquer contexto onde você deseje exibir classificações de forma criativa e engajante.

---

## 🚀 Funcionalidades

✨ **Componente Reutilizável** - Funciona em qualquer lugar da aplicação  
📊 **Escala Dinâmica** - Suporta notas de 0 a 5, com validação automática  
😊 **Emojis Expressivos** - Cada faixa de nota possui um emoji diferente  
⚡ **Performance Otimizada** - Renderização eficiente com React 19  
🎨 **Design Moderno** - Estilizado com Tailwind CSS  
📱 **Tipo Seguro** - Desenvolvido com TypeScript para maior confiabilidade  

---

## 📁 Estrutura do Projeto

```
rating-com-emojis/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globais
│   │   ├── layout.tsx            # Layout raiz da aplicação
│   │   └── page.tsx              # Página principal (demo)
│   ├── components/
│   │   └── Rating.tsx            # Componente de avaliação
│   └── data/
│       └── emojiList.ts          # Lista de emojis por nota
├── public/                       # Arquivos estáticos
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configuração TypeScript
├── tailwind.config.ts            # Configuração Tailwind
├── next.config.ts                # Configuração Next.js
└── README.md                      # Documentação
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **Next.js** | 16.1.6 | Framework React com SSR e otimizações |
| **React** | 19.2.3 | Biblioteca UI componente |
| **TypeScript** | ^5 | Linguagem tipada para JavaScript |
| **Tailwind CSS** | ^4 | Framework de CSS utilitário |
| **PostCSS** | - | Processador de CSS |
| **Babel** | React Compiler 1.0.0 | Compilação otimizada de componentes |

---

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn como gerenciador de pacotes

### Instalação

1. **Clone o repositório** (ou extraia os arquivos)
   ```bash
   git clone https://github.com/seu-usuario/rating-com-emojis.git
   cd rating-com-emojis
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   - Abra [http://localhost:3000](http://localhost:3000) no navegador

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Compilar para produção
npm start        # Inicia o servidor de produção
```

---

## 💡 Como Funciona

### Componente Rating

O componente `Rating` recebe uma propriedade `nota` (número entre 0 e 5) e exibe:

1. **Valor da Nota** - Número decimal formatado com 1 casa decimal
2. **Representação Visual** - Emojis repetidos baseado na nota inteira

#### Lógica de Emojis

| Nota | Emoji | Significado |
|------|-------|-------------|
| 0 - 0.9 | 😭 | Muito ruim |
| 1 - 1.9 | 😨 | Ruim |
| 2 - 2.9 | 😅 | Aceitável |
| 3 - 3.9 | 😃 | Bom |
| 4 - 5 | 😁 | Excelente |

#### Validação Automática

- Notas menores que 0 são convertidas para 0
- Notas maiores que 5 são convertidas para 5

---

## 🎮 Exemplo de Uso

### Importar o Componente

```tsx
import { Rating } from "@/components/Rating";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Rating nota={4.5} />
    </div>
  );
}
```

### Resultado Exibido

Para `nota={4.5}`:
```
4.5 😁😁😁😁
```

## 📱 Responsividade

O componente utiliza classes do Tailwind CSS para garantir uma boa aparência em todos os tamanhos de tela:

- **Desktop**: Exibição em tamanho grande (text-6xl)
- **Tablet**: Redimensiona automaticamente
- **Mobile**: Mantém legibilidade com espaçamento adequado

---

## 🔗 Links e CTAs

Gostou do projeto? Confira mais trabalhos e acompanhe o desenvolvimento:

### 🌐 Portfolio

Acesse meu portfólio para conhecer mais projetos e trabalhos:
👉 **[Visite meu Portfolio](https://thalesff.com)**

### 💼 GitHub

Explore o código-fonte, contribua ou deixe uma estrela:
👉 **[Visite meu GitHub](https://github.com/Thalesffdev)**

### 🤝 Conecte-se

Acompanhe meus projetos e novidades:
- 📧 Email: thalesffdev@gmail.com

---

## 📄 Licença

Este projeto está disponível sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.

---

## 🙏 Agradecimentos

- Next.js por fornecer um excelente framework
- Tailwind CSS pela alta produtividade no styling
- React 19 pelas novas features e performance

---

**Desenvolvido com ❤️ por Thales**
