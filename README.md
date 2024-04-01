# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
=======
# Linkly URL Shortener

Linkly is a simple and efficient URL shortener service designed to make sharing links easier. With Linkly, you can quickly shorten long URLs into concise, easy-to-share links.

## Features

- **Shorten URLs:** Convert long URLs into short, easy-to-remember links.
- **Custom Alias:** Customize your short links with personalized aliases.
- **Analytics Dashboard:** Track link performance and user engagement with our analytics dashboard.
- **User Authentication:** Securely manage your links with user authentication and authorization.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript (React.js)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Testing:** Jest, Mocha
- **Deployment:** Docker, AWS, Heroku

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/yourusername/linkly.git
