Sure! Here's the updated English version with a warning about using **ngrok** on iOS:

---

# ISchool

## 🚀 Technologies Used

* [React Native](https://reactnative.dev/) - 0.78.1
* [React Navigation](https://reactnavigation.org/) - Screen Navigation
* [Axios](https://axios-http.com/) - HTTP Requests
* [Styled Components](https://styled-components.com/) - App Styling
* [Express](https://expressjs.com/) - Backend for APIs
* [Jest](https://jestjs.io/) - Unit Testing
* [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/) - Code Standardization

## 🛠️ How to Run the Project

### 📌 Requirements:

* Node.js >= 18
* Yarn or npm
* Environment configured for React Native (Android Studio/Xcode)

### 🔧 Installation and Execution

1. Install the dependencies:

   ```sh
   yarn install
   ```

2. Copy the `.env.template` file and rename it to `.env`. Inside, set the API URL to point to where the backend server will run (default: port 3000, local IP), for example:

   ```sh
   API_URL=http://192.168.1.10:3000
   ```

   ⚠️ **Important for iOS:** iOS simulators do not support local network IPs directly. You must use a tunneling service like [ngrok](https://ngrok.com/) to expose your local backend:

   ```sh
   ngrok http 3000
   ```

   Then, use the generated `https://...` URL in your `.env` file:

   ```sh
   API_URL=https://your-ngrok-url.ngrok.io
   ```

3. Start the server:

   ```sh
   yarn server:start
   ```

4. Run the app on Android:

   ```sh
   yarn android
   ```

5. Run the app on iOS:

   ```sh
   yarn ios
   ```

## 🧪 Tests

To run the unit tests, execute:

```sh
yarn test
```

## 📜 Code Standardization

Before committing, the project automatically runs lint and tests via Husky:

```sh
yarn lint
```

## 🛠️ Available Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `yarn android`      | Runs the app on the Android emulator |
| `yarn ios`          | Runs the app on the iOS simulator    |
| `yarn start`        | Starts the Metro Bundler             |
| `yarn test`         | Runs the unit tests                  |
| `yarn lint`         | Checks for style errors in the code  |
| `yarn server:start` | Starts the backend server            |
