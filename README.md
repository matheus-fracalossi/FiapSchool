# FIAP School

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) - 0.78.1
- [React Navigation](https://reactnavigation.org/) - Navegação entre telas
- [Axios](https://axios-http.com/) - Requisições HTTP
- [Styled Components](https://styled-components.com/) - Estilização do app
- [Express](https://expressjs.com/) - Backend para APIs
- [Jest](https://jestjs.io/) - Testes unitários
- [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/) - Padronização do código

## 🛠️ Como Rodar o Projeto

### 📌 Requisitos:

- Node.js >= 18
- Yarn ou npm
- Ambiente configurado para React Native (Android Studio/Xcode)

### 🔧 Instalação e Execução


1. Instale as dependências:
   ```sh
   yarn install
   ```
2. Copie o arquivo .env.template e renomeie para `.env`, dentro dele, aponte a api para onde irá rodar o servidor (padrão, porta:3000, ip da rede local da máquina) por exemplo :
   ```sh
   API_URL=http://192.168.1.10:3000
   ```
2. Inicie o servidor:
   ```sh
   yarn server:start
   ```
3. Execute o app no Android:
   ```sh
   yarn android
   ```
4. Execute o app no iOS:
   ```sh
   yarn ios
   ```

## 🧪 Testes

Para rodar os testes unitários, execute:

```sh
yarn test
```

## 📜 Padronização de Código

Antes de commitar, o projeto roda lint e testes automaticamente via Husky.

```sh
yarn lint
```

## 🛠️ Scripts Disponíveis

| Comando             | Descrição                          |
| ------------------- | ---------------------------------- |
| `yarn android`      | Executa o app no emulador Android  |
| `yarn ios`          | Executa o app no simulador iOS     |
| `yarn start`        | Inicia o Metro Bundler             |
| `yarn test`         | Roda os testes unitários           |
| `yarn lint`         | Verifica erros de estilo no código |
| `yarn server:start` | Inicia o servidor backend          |
