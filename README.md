# Boilerplate React com Vite, Docker e Bibliotecas Principais

Este boilerplate oferece uma base sólida para o desenvolvimento de aplicações React usando o Vite. Ele já vem configurado com TypeScript, ferramentas de teste, manipulação de formulários, gerenciamento de estado, roteamento e implantação com Docker.

## Recursos

- **Vite:** Ferramenta de construção frontend rápida para React.
- **TypeScript:** Uma superset estática do JavaScript.
- **React:** Uma biblioteca JavaScript para construir interfaces de usuário.
- **React Router:** Roteamento declarativo para React.js.
- **React Hook Form:** Formulários eficientes, flexíveis e extensíveis.
- **Zustand:** Uma biblioteca de gerenciamento de estado pequena, rápida e escalável.
- **Zod:** Declaração e validação de esquema em TypeScript.
- **Axios:** Cliente HTTP baseado em promessas para o navegador e Node.js.
- **@tanstack/react-query:** Biblioteca para busca e armazenamento em cache de dados.
- **@tanstack/react-query-devtools:** Ferramentas de desenvolvimento para React Query.
- **Cypress:** Framework de teste de ponta a ponta.
- **Jest:** Framework de teste JavaScript.
- **MSW (Mock Service Worker):** Interceptação e simulação de requisições HTTP.
- **Husky:** Ganchos Git para automação de tarefas de desenvolvimento.
- **Commitizen e Conventional Changelog:** Mensagens de commit convencionais.
- **ESLint:** Utilitário de linting para JavaScript e TypeScript.
- **Docker:** Contêineres para implantação sem problemas.

## Como Começar

1. Clone o repositório: `git clone https://github.com/seu-nome/seu-repo.git`
2. Instale o docker e extensão dev container no vscode
3. Rode o comando: `docker-compose -f docker-compose-dev.yml up -d`
4. Entre no container e rode: `npm i`
5. Inicialize o servidor: `npm run dev`

## Scripts

- `npm run start:dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run lint`: Faz a verificação de código com ESLint.
- `npm run preview`: Visualiza a versão de produção.
- `npm run typecheck`: Executa a verificação de tipos do TypeScript.
- `npm test`: Executa os testes Jest.
- `npm run test:watch`: Executa os testes Jest em modo observação.
- `npm run test:coverage`: Executa os testes Jest com cobertura.
- `npm run test:coverage:silent`: Executa os testes Jest com cobertura em modo silencioso.
- `npm run cypress:open`: Abre o Cypress para testes de ponta a ponta.
- `npm run cypress:run`: Executa os testes Cypress em modo headless.
- `npm run server:up`: Inicia o servidor Dockerizado.


## By Gabriel Soares Maciel
