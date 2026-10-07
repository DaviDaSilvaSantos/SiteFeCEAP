# FeCEAP — Feira de Ciências

Aplicação web desenvolvida para a **FeCEAP (Feira de Ciências)**, permitindo apresentar os projetos dos alunos de forma digital e possibilitando o cadastro de novos trabalhos.

O sistema utiliza **Node.js, Express, Nunjucks e SQLite**, com uma interface web simples para exibição e gerenciamento dos projetos.

## 📋 Sobre o projeto

A proposta do projeto é transformar a tradicional feira de ciências em uma experiência digital, reunindo trabalhos das áreas de:

- 🔬 Ciências
- ⚙️ Engenharia
- 📊 Administração
- 🎨 Criatividade

A página inicial apresenta a feira e os projetos cadastrados. A página de projetos permite visualizar todos os trabalhos armazenados no banco de dados e o formulário permite adicionar novos projetos.

## ✨ Funcionalidades

- Página inicial da FeCEAP.
- Listagem de projetos cadastrados.
- Página dedicada para visualização dos projetos.
- Cadastro de novos projetos.
- Armazenamento dos dados em banco SQLite.
- Renderização dinâmica das páginas com Nunjucks.
- Servidor web baseado em Express.
- Interface com modal para cadastro de projetos.
- Links para acessar os projetos cadastrados.
- Layout responsivo baseado em HTML e CSS.
- Identidade visual própria da FeCEAP.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| **Node.js** | Ambiente de execução do servidor |
| **Express 5** | Servidor HTTP e definição das rotas |
| **Nunjucks** | Templates e renderização das páginas |
| **SQLite3** | Banco de dados dos projetos |
| **HTML5** | Estrutura das páginas |
| **CSS3** | Estilização e layout |
| **JavaScript** | Interações da interface |
| **Google Fonts / Kufam** | Tipografia da aplicação |
| **Montserrat** | Tipografia principal |
| **LT Hoop** | Tipografia dos títulos |

## 📁 Estrutura do projeto

```text
SiteFeCEAP-main/
├── bd.js
├── package.json
├── package-lock.json
├── server.js
├── siteAula.bd
├── projetos.txt
├── g5.png
├── mask.svg
│
├── public/
│   ├── FeCEAP-logoAlef2.svg
│   ├── logoBAZE.png
│   ├── scripts.js
│   └── css/
│       └── styles.css
│
└── views/
    ├── index.html
    ├── layout.html
    ├── modal.html
    └── projects.html
```

> A pasta `node_modules/` contém as dependências instaladas do projeto e normalmente não deve ser versionada no Git. Em um clone limpo do repositório, as dependências podem ser instaladas novamente com `npm install`.

## ⚙️ Requisitos

Antes de executar o projeto, tenha instalado:

- [Node.js](https://nodejs.org/)
- npm, normalmente incluído na instalação do Node.js.

Para verificar:

```bash
node --version
npm --version
```

## 🚀 Instalação

Clone o projeto:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd SiteFeCEAP-main
```

Instale as dependências:

```bash
npm install
```

## ▶️ Executando o projeto

Inicie o servidor com:

```bash
npm start
```

O projeto utiliza o script:

```json
"start": "node --watch server.js"
```

Após iniciar o servidor, acesse:

```text
http://localhost:3000
```

## 🌐 Rotas

### `/`

Página inicial da aplicação.

Exibe:

- Identidade visual da FeCEAP;
- apresentação da feira;
- projetos cadastrados;
- botão para adicionar um projeto;
- botão para visualizar todos os projetos.

### `/projetos`

Página com a listagem dos projetos cadastrados no banco de dados.

### `POST /`

Recebe os dados enviados pelo formulário de cadastro e salva um novo projeto no SQLite.

Os campos armazenados são:

- `imagem`
- `titulo`
- `categoria`
- `descricao`
- `url`

## 🗄️ Banco de dados

O projeto utiliza **SQLite3** por meio do arquivo:

```text
siteAula.bd
```

A estrutura principal é criada automaticamente em `bd.js`:

```sql
CREATE TABLE IF NOT EXISTS projetos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    imagem TEXT,
    titulo TEXT,
    categoria TEXT,
    descricao TEXT,
    url TEXT
);
```

### Modelo dos dados

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | INTEGER | Identificador único do projeto |
| `imagem` | TEXT | URL da imagem do projeto |
| `titulo` | TEXT | Nome do projeto |
| `categoria` | TEXT | Área do projeto |
| `descricao` | TEXT | Descrição do trabalho |
| `url` | TEXT | Link para o projeto |

## 🔄 Fluxo da aplicação

```text
Usuário
   │
   ▼
Interface Web
   │
   ├── Página inicial (/)
   │
   ├── Página de projetos (/projetos)
   │
   └── Formulário de novo projeto
              │
              ▼
          Express
              │
              ▼
           bd.js
              │
              ▼
          SQLite
        siteAula.bd
```

Os dados armazenados no SQLite são consultados pelo servidor e enviados aos templates Nunjucks para renderização das páginas.

## 🧩 Arquivos principais

### `server.js`

É o ponto de entrada da aplicação.

Responsável por:

- configurar o Express;
- configurar o Nunjucks;
- disponibilizar arquivos estáticos;
- definir as rotas;
- consultar o banco de dados;
- receber novos projetos;
- iniciar o servidor na porta `3000`.

### `bd.js`

Responsável pela conexão com o SQLite e pela criação da tabela `projetos`, caso ela ainda não exista.

### `views/layout.html`

Template base utilizado pelas demais páginas.

Define elementos comuns como:

- estrutura HTML;
- meta tags;
- fontes;
- CSS;
- JavaScript;
- área de conteúdo dos templates.

### `views/index.html`

Página inicial da aplicação.

### `views/projects.html`

Página de exibição dos projetos cadastrados.

### `views/modal.html`

Contém o formulário utilizado para cadastrar um novo projeto.

### `public/scripts.js`

Contém as interações JavaScript da interface, incluindo a abertura e o fechamento do modal de cadastro.

### `public/css/styles.css`

Arquivo principal de estilos da aplicação.

Define:

- tipografia;
- cores;
- layout;
- cartões de projetos;
- botões;
- modal;
- página de projetos;
- elementos responsivos da interface.

## ➕ Cadastrando um projeto

Na interface, utilize **Adicionar Projeto** ou **Novo Projeto**.

O formulário solicita:

```text
Título do Projeto
Categoria
Link da Imagem
Descrição do Projeto
Link do Projeto
```

Após o envio, o servidor insere os dados na tabela `projetos` e redireciona para:

```text
/projetos
```

## 🎨 Identidade visual

A interface utiliza uma identidade visual baseada em:

- fundo roxo;
- cartões claros;
- elementos arredondados;
- tipografia Montserrat;
- títulos com LT Hoop;
- detalhes em roxo e verde;
- logotipo da FeCEAP.

Os recursos visuais ficam principalmente dentro da pasta `public/`.

## 🔐 Segurança e produção

Este projeto foi estruturado principalmente para fins educacionais e de apresentação da FeCEAP.

Antes de utilizar a aplicação em produção, recomenda-se implementar:

- validação dos dados enviados pelos formulários;
- sanitização dos dados de entrada;
- tratamento mais completo de erros;
- proteção contra requisições maliciosas;
- validação dos links enviados;
- configuração de variáveis de ambiente;
- configuração adequada de CORS, quando necessário;
- HTTPS;
- autenticação e autorização para operações administrativas;
- backup do banco SQLite.

## 🧪 Testes

Atualmente, o `package.json` possui um script de teste padrão:

```bash
npm test
```

Esse comando ainda não executa uma suíte de testes automatizados.

Para uma evolução futura, podem ser adicionados testes para:

- rotas do Express;
- cadastro de projetos;
- consultas ao SQLite;
- renderização das páginas;
- validação dos dados.

## 🔮 Possíveis evoluções

Algumas melhorias que podem ser implementadas futuramente:

- painel administrativo;
- edição e exclusão de projetos;
- busca por projetos;
- filtros por categoria;
- upload de imagens;
- autenticação para administradores;
- paginação;
- banco de dados hospedado;
- API REST;
- sistema de favoritos;
- página individual para cada projeto;
- melhorias de acessibilidade;
- melhorias de responsividade;
- testes automatizados;
- deploy em serviço de hospedagem.

## 📜 Licença

O `package.json` atual declara a licença **ISC**.

Caso o projeto seja publicado oficialmente, recomenda-se revisar a licença e os direitos de uso dos recursos visuais, fontes, imagens e demais materiais utilizados.

## ❤️ FeCEAP

Projeto desenvolvido para apoiar a **Feira de Ciências da FeCEAP**, apresentando os trabalhos dos alunos de maneira digital.

**FeCEAP — Ciência, Engenharia, Administração e Criatividade.**
