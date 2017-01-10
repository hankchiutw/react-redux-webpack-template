# react-redux-webpack-template
Simple SPA(single page application) using [react-redux](https://github.com/reactjs/react-redux), [react-router](https://github.com/ReactTraining/react-router) and [webpack](http://webpack.github.io/docs/).

Source code [here](https://github.com/hankchiutw/react-redux-webpack-template).

### Folder structure
```sh
.
├── docs            # root path of dev server
│   ├── css/
│   ├── img/
│   ├── bundle.js   # built bundle file
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App
│   │   ├── Content/
│   │   ├── Header/
│   │   ├── Nav/
│   │   ├── appReducer.js
│   │   ├── Home.js
│   │   └── index.js
│   ├── Page1
│   │   └── index.js
│   ├── index.js    # entry point
│   ├── reducers.js
│   ├── routes.js
│   └── store.js
├── package.json
├── README.md
├── webpack.config.js
└── yarn.lock

```

### Features
- Pure front-end code
- Responsive(mobile devices ready)
- babel-loader, i.e. ES6 syntax ready.
- React JSX
- [showdown](https://github.com/showdownjs/showdown) markdown parser.
- Messaging system
- Uglified and minimized bundle.js
- yarn
- Ready for [redux devtools](https://github.com/gaearon/redux-devtools) and [react devtools](https://github.com/facebook/react-devtools).

### Pre-install

```sh
npm install -g webpack webpack-dev-server
```

Install [yarn](https://yarnpkg.com/en/docs/install).

### Development

```sh
yarn install
yarn start # local dev environment
```
Browse http://localhost:8080

### ToDo
- In-component style

### References
- [A Better File Structure For React/Redux Applications](http://marmelab.com/blog/2015/12/17/react-directory-structure.html)
