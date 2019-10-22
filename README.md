# react-webpack-babel

Minimal application for creating react application with webpack and babel

## Tools & Version

### React

* react: 16.6.3
* react-dom: 16.6.3

### Webpack modules

* webpack: 4.26.0
* webpack-dev-server: 3.1.10
* html-webpack-plugin: 3.2.0

### Babel modules:

* @babel/core: 7.1.6
* @babel/preset-env: 7.1.6
* @babel/preset-react: 7.0.0
* babel-loader: 8.0.4

## Using this application for creating your own project

```
git clone https://github.com/sebastienveluz/minimal-react-webpack-babel.git <application_name>
cd minimal-react-webpack-babel
rm -rf .git
```

## Getting Started

Using file '.env' for storing project values, proceed as follow:

```
cat <<EOT >> .env
TESTENV=react
EOT
```

It is not advised to commit the '.env' file.

Before starting using this application, download all dependencies with yarn

```
yarn
```

Create the public website with this command:

```
yarn build
```

Start the development server 

```
yarn start
```
